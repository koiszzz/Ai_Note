---
published: 2026-01-23
title: "展开 Codex 智能体循环"
source: "OpenAI News"
original_file: "信息源/OpenAI News/Unrolling the Codex agent loop.md"
source_note: "[[信息源/OpenAI News/Unrolling the Codex agent loop]]"
source_sha256: fd3123dec2f058b59d24100f9e968a7e6c31f8377aa4d4bbd2e74138e4c32998
original_url: "https://openai.com/index/unrolling-the-codex-agent-loop"
processed: 2026-08-06
language: zh-CN

---

# 展开 Codex 智能体循环

> [!info] 来源信息
> - 数据源：OpenAI News
> - 作者：原始来源未提供
> - 发布时间：2026-01-23
> - 原文链接：[打开原文](https://openai.com/index/unrolling-the-codex-agent-loop)
> - Vault 原文件：[[信息源/OpenAI News/Unrolling the Codex agent loop|查看原始文件]]

## 摘要

- Codex CLI 是 OpenAI 的跨平台本地软件智能体，其核心是"智能体循环"（agent loop）：用户输入 → 构造提示 → 模型推理 → 工具调用 → 输出回填 → 循环直到模型产出最终消息。
- 推理通过 Responses API 完成，端点可配置（ChatGPT 登录、API key、本地 ollama/LM Studio、Azure 等）；提示由 instructions、tools、input 三类元素构成，Codex 会注入沙箱权限说明、AGENTS.md/skills 指令与环境上下文。
- 关键设计：新提示是旧提示的精确前缀，以此命中提示缓存（prompt caching），把采样成本从二次降为线性；MCP 工具顺序变化、换模型、改沙箱配置等会造成缓存失效。
- 配置变更通过追加新消息而非修改旧消息反映；上下文窗口超限时自动调用 /responses/compact 端点压缩对话，用加密内容保留模型的潜在理解。
- 为支持无状态请求与 Zero Data Retention（ZDR），Codex 不使用 previous_response_id 参数。

## 正文

### 智能体循环

Codex CLI 是 OpenAI 的跨平台本地软件智能体，旨在安全、高效地在你的机器上产出高质量、可靠的软件变更。自 4 月首次发布 CLI 以来，我们在"如何构建世界级软件智能体"这件事上学到了大量经验。为了分享这些洞见，本文是这个系列的第一篇，后续我们将持续探讨 Codex 的工作原理以及那些来之不易的教训。（如果想了解 Codex CLI 更细粒度的实现，可以查看我们的开源仓库 https://github.com/openai/codex。我们的很多设计决策细节都记录在 GitHub issue 和 pull request 中。）

首先，我们聚焦于**智能体循环**（agent loop）——它是 Codex CLI 的核心逻辑，负责编排用户、模型以及模型为完成实际软件工作而调用的工具之间的交互。希望这篇文章能让你清楚地看到我们的智能体（或称 "harness"）在利用 LLM 时扮演的角色。

在深入之前，先说明一下术语：在 OpenAI，"Codex"指代一整套软件智能体产品，包括 Codex CLI、Codex Cloud 和 Codex VS Code 扩展。本文聚焦于 Codex harness——它为所有 Codex 体验提供核心的智能体循环与执行逻辑，并通过 Codex CLI 呈现。为方便起见，本文将混用"Codex"与"Codex CLI"两个词。

每个 AI 智能体的核心都是"智能体循环"。简化示意如下：首先，智能体接收用户输入，把它纳入为模型准备的文本指令集合（即提示 prompt）。下一步是查询模型：把指令发送给模型并要求其生成回复，这一过程称为**推理**（inference）。推理时，文本提示先被翻译成输入 token 序列——即索引到模型词表中的整数。这些 token 随后被用于对模型采样，产生新的输出 token 序列。

输出 token 被翻译回文本，成为模型的回复。由于 token 是增量产生的，这种翻译可以在模型运行过程中同步进行，这也是为什么许多 LLM 应用会显示流式输出。在实践中，推理通常被封装在一个基于文本的 API 后面，屏蔽掉 tokenization 的细节。

推理的结果有两种可能：(1) 模型对用户的原始输入给出最终回复，或 (2) 模型请求一个需要智能体执行的工具调用（例如"运行 ls 并报告输出"）。对于情况 (2)，智能体执行工具调用，并把其输出追加到原始提示之后。该输出用于生成新的输入并重新查询模型；智能体可以把这些新信息纳入考虑后再试一次。

这个过程不断重复，直到模型不再发出工具调用，而是为用户生成一条消息（在 OpenAI 模型中称为 assistant message）。多数情况下这条消息直接回答用户的原始请求，但也可能是向用户提出的追问。

由于智能体可以执行修改本地环境的工具调用，它的"输出"不限于 assistant message。在很多场景下，软件智能体的主要产出是你机器上被它编写或修改的代码。不过，每一轮总是以一条 assistant message 结束——比如"我已添加你要的 architecture.md"——它标志着智能体循环的终止状态。从智能体的角度看，工作已完成，控制权交还用户。

图中从用户输入到智能体回复的完整旅程称为一次对话的**一轮**（turn，在 Codex 中称为 thread）。虽然这一轮可能包含模型推理与工具调用之间的多次迭代。每当你向既有对话发送新消息时，对话历史（包括之前各轮的消息与工具调用）都会作为新一轮提示的一部分。

这意味着随着对话增长，用于采样模型的提示长度也会增长。这个长度很重要，因为每个模型都有**上下文窗口**（context window）——一次推理调用最多可使用的 token 数。注意该窗口同时包含输入和输出 token。可以想象，一个智能体可能在单轮内做出数百次工具调用，从而可能耗尽上下文窗口。因此，上下文窗口管理是智能体的众多职责之一。下面我们来看 Codex 是如何运行智能体循环的。

### 模型推理

Codex CLI 通过向 Responses API 发送 HTTP 请求来执行模型推理。我们来看看信息流经 Codex 的过程——Codex 正是借助 Responses API 驱动智能体循环。

Codex CLI 使用的 Responses API 端点是可配置的，因此它可以与任何实现了 Responses API 的端点配合使用：

- 使用 ChatGPT 登录时，端点设为 https://chatgpt.com/backend-api/codex/responses
- 使用 OpenAI 托管模型的 API key 认证时，端点为 https://api.openai.com/v1/responses
- 使用 `--oss` 配合 ollama 0.13.4+ 或 LM Studio 0.3.39+ 运行 Codex CLI 时，默认使用本地 http://localhost:11434/v1/responses
- Codex CLI 还可以使用 Azure 等云提供商托管的 Responses API

下面看看 Codex 如何为对话中的第一次推理调用构造提示。

### 构建初始提示

作为终端用户，你查询 Responses API 时并不是逐字指定用于采样模型的提示。相反，你通过查询指定各种输入类型，由 Responses API 服务端决定如何把这些信息组织成模型消费的提示。可以把提示想象成"一个条目列表"，本节将解释你的查询如何被转换成这个列表。

初始提示中每个条目都带有一个 role。role 表示相关内容的权重，按优先级从高到低依次为：system、developer、user、assistant。

Responses API 接受包含许多参数的 JSON 载荷。我们聚焦三个：

- `instructions`：插入模型上下文中的 system（或 developer）消息
- `tools`：模型生成回复时可能调用的工具列表
- `input`：发送给模型的文本、图像或文件输入列表

在 Codex 中，instructions 字段读取自 `~/.codex/config.toml` 中的 `model_instructions_file`（若指定），否则使用与模型关联的 `base_instructions`。模型专属指令存放在 Codex 仓库中并打包进 CLI（例如 `gpt-5.2-codex_prompt.md`）。

tools 字段是符合 Responses API 定义 schema 的工具定义列表。对 Codex 而言，这包括 Codex CLI 提供的工具、Responses API 提供并开放给 Codex 的工具，以及用户提供的工具（通常通过 MCP 服务器）：

```javascript
[
  // Codex 用于在本地派生新进程的默认 shell 工具
  {
    "type": "function",
    "name": "shell",
    "description": "Runs a shell command and returns its output...",
    "strict": false,
    "parameters": {
      "type": "object",
      "properties": {
        "command": { "type": "array", "description": "The command to execute", ...},
        "workdir": { "description": "The working directory...", ...},
        "timeout_ms": { "description": "The timeout for the command...", ...},
        ...
      },
      "required": ["command"]
    }
  },

  // Codex 内置的 plan 工具
  {
    "type": "function",
    "name": "update_plan",
    "description": "Updates the task plan...",
    "strict": false,
    "parameters": {
      "type": "object",
      "properties": { "plan": ..., "explanation": ...},
      "required": ["plan"]
    }
  },

  // Responses API 提供的网页搜索工具
  {
    "type": "web_search",
    "external_web_access": false
  },

  // 用户在 ~/.codex/config.toml 中配置的获取天气的 MCP 服务器
  {
    "type": "function",
    "name": "mcp__weather__get-forecast",
    "description": "Get weather alerts for a US state",
    "strict": false,
    "parameters": {
      "type": "object",
      "properties": { "latitude": {...}, "longitude": {...}},
      "required": ["latitude", "longitude"]
    }
  }
]
```

最后，JSON 载荷的 input 字段是一个条目列表。在追加用户消息之前，Codex 会先把以下条目插入 input：

1. 一条 role=developer 消息，描述仅适用于 Codex 提供的 shell 工具的沙箱。也就是说，MCP 服务器等提供的其他工具不受 Codex 沙箱约束，需要自行执行防护措施。该消息由模板构建，关键内容来自打包在 Codex CLI 中的 Markdown 片段（如 `workspace_write.md` 和 `on_request.md`）：

```text
<permissions instructions>
- description of the sandbox explaining file permissions and network access
- instructions for when to ask the user for permissions to run a shell command
- list of folders writable by Codex, if any
</permissions instructions>
```

2. （可选）一条 role=developer 消息，内容为用户 config.toml 中读取的 `developer_instructions` 值。
3. （可选）一条 role=user 消息，内容是"用户指令"，它并非来自单一文件，而是聚合自多个来源。总体原则是更具体的指令靠后：
   - `$CODEX_HOME` 中 `AGENTS.override.md` 与 `AGENTS.md` 的内容
   - 受默认 32 KiB 上限约束，从 cwd 的 Git/项目根目录逐层向上直到 cwd 本身，查找并加入 `AGENTS.override.md`、`AGENTS.md` 或 config.toml 中 `project_doc_fallback_filenames` 指定的任何文件的内容
   - 若配置了 skills：一段关于 skills 的简短前言、每个 skill 的元数据，以及如何使用 skills 的说明
4. 一条 role=user 消息，描述智能体当前运行的本地环境，指明当前工作目录与用户的 shell：

```text
<environment_context>
<cwd>/Users/mbolin/code/codex5</cwd>
<shell>zsh</shell>
</environment_context>
```

完成上述所有计算以初始化 input 后，Codex 追加用户消息开始对话。

前面的例子聚焦每条消息的内容，但注意 input 的每个元素都是一个 JSON 对象，包含 type、role 和 content 字段：

```json
{
  "type": "message",
  "role": "user",
  "content": [
    { "type": "input_text", "text": "Add an architecture diagram to the README.md" }
  ]
}
```

Codex 构建好要发送给 Responses API 的完整 JSON 载荷后，发出 HTTP POST 请求，Authorization 头取决于 `~/.codex/config.toml` 中配置的 Responses API 端点（若指定，还会添加额外 HTTP 头与查询参数）。

当 OpenAI Responses API 服务端收到请求时，它会按如下方式用 JSON 为模型派生提示（当然，自定义的 Responses API 实现可以做出不同选择）：提示中前三项的顺序由服务端而非客户端决定。不过这三项中只有 system 消息的内容也由服务端控制，tools 和 instructions 由客户端决定。它们之后是 JSON 载荷中的 input，共同组成完整提示。现在提示已就绪，可以采样模型了。

### 第一轮对话

向 Responses API 发送的这次 HTTP 请求启动了 Codex 对话的"第一轮"。服务端以 Server-Sent Events（SSE）流回复。每个事件的数据都是 type 以 "response" 开头的 JSON 载荷，例如（完整事件列表见我们的 API 文档）：

```text
data: {"type":"response.reasoning_summary_text.delta","delta":"ah ", ...}
data: {"type":"response.reasoning_summary_text.delta","delta":"ha!", ...}
data: {"type":"response.reasoning_summary_text.done", "item_id":...}
data: {"type":"response.output_item.added", "item":{...}}
data: {"type":"response.output_text.delta", "delta":"forty-", ...}
data: {"type":"response.output_text.delta", "delta":"two!", ...}
data: {"type":"response.completed","response":{...}}
```

Codex 消费事件流，并把它们重新发布为可被客户端使用的内部事件对象。`response.output_text.delta` 之类的事件用于支持 UI 中的流式输出，而 `response.output_item.added` 等事件则被转换成对象，追加到后续 Responses API 调用的 input 中。

假设对 Responses API 的第一次请求产生了两个 `response.output_item.done` 事件：一个 type=reasoning，一个 type=function_call。这些事件在下次携带工具调用结果再次查询模型时，必须体现在 JSON 的 input 字段中：

```javascript
[
  /* ... 原始 input 数组中的 5 个条目 ... */
  {
    "type": "reasoning",
    "summary": [
      "type": "summary_text",
      "text": "**Adding an architecture diagram for README.md**\n\nI need to..."
    ],
    "encrypted_content": "gAAAAABpaDWNMxMeLw..."
  },
  {
    "type": "function_call",
    "name": "shell",
    "arguments": "{\"command\":\"cat README.md\",\"workdir\":\"/Users/mbolin/code/codex5\"}",
    "call_id": "call_8675309..."
  },
  {
    "type": "function_call_output",
    "call_id": "call_8675309...",
    "output": "<p align=\"center\"><code>npm i -g @openai/codex</code>..."
  }
]
```

后续查询中用于采样模型的提示将如下所示。特别注意：**旧提示是新提示的精确前缀**。这是刻意为之，因为它使后续请求高效得多——可以利用提示缓存（下一节讲性能时会讨论）。

回顾第一张智能体循环图，推理与工具调用之间可能有许多次迭代。提示会持续增长，直到最终收到 assistant message，标志着本轮结束：

```text
data: {"type":"response.output_text.done","text": "I added a diagram to explain...", ...}
data: {"type":"response.completed","response":{...}}
```

在 Codex CLI 中，我们把 assistant message 呈现给用户并把焦点移回输入框，提示用户"轮到你了"。如果用户回复，上一轮的 assistant message 和用户的新消息都必须追加到输入中，以开启新一轮 Responses API 请求：

```javascript
[
  /* ... 上一次 Responses API 请求的所有条目 ... */
  {
    "type": "message",
    "role": "assistant",
    "content": [
      { "type": "output_text", "text": "I added a diagram to explain the client/server architecture." }
    ]
  },
  {
    "type": "message",
    "role": "user",
    "content": [
      { "type": "input_text", "text": "That's not bad, but the diagram is missing the bike shed." }
    ]
  }
]
```

同样，由于对话在延续，发送给 Responses API 的输入长度会不断增加。让我们看看这个不断增长的提示对性能意味着什么。

### 性能考量

你可能会问："就整个对话期间发送给 Responses API 的 JSON 量而言，智能体循环难道不是二次方的吗？" 你说得对。虽然 Responses API 确实支持可选的 `previous_response_id` 参数来缓解这个问题，但 Codex 今天并不使用它，主要是为了保持请求完全无状态并支持 Zero Data Retention（ZDR）配置。

避免 `previous_response_id` 简化了 Responses API 提供方的工作：确保每个请求都是无状态的。这也使支持选择 Zero Data Retention（ZDR）的客户变得简单，因为存储支持 `previous_response_id` 所需的数据会与 ZDR 冲突。注意 ZDR 客户不会牺牲从前几轮专有推理消息中获益的能力，因为相关的 `encrypted_content` 可以在服务端解密。（OpenAI 会持久化 ZDR 客户的解密密钥，但不会持久化他们的数据。）支持 ZDR 的 Codex 相关改动见 PR #642 和 #1641。

一般来说，模型采样的成本主导网络流量成本，因此采样是我们效率工作的首要目标。这就是提示缓存如此重要的原因——它让我们能复用上一次推理调用的计算结果。命中缓存时，采样是线性的而不是二次的。我们的提示缓存文档对此有更详细的说明：

> 缓存命中只可能发生在提示的前缀精确匹配时。要获得缓存收益，请把指令和示例等静态内容放在提示开头，把用户信息等易变内容放在末尾。这也适用于图像和工具，它们在多次请求之间必须保持一致。

基于此，我们考虑哪些操作会造成 Codex 的"缓存未命中"：

- 在对话中途改变开放给模型的工具
- 改变 Responses API 请求的目标模型（实际上会改变原始提示中的第三项，因为它包含模型专属指令）
- 改变沙箱配置、审批模式或当前工作目录

Codex 团队在给 Codex CLI 引入可能损害提示缓存的新功能时必须非常谨慎。例如，我们最初支持 MCP 工具时引入了一个 bug：未能以一致顺序枚举工具，导致缓存未命中。注意 MCP 工具尤其棘手，因为 MCP 服务器可以通过 `notifications/tools/list_changed` 通知动态改变它们提供的工具列表。在长对话中途响应这个通知可能引发代价高昂的缓存未命中。

只要可能，我们处理对话中途的配置变更的方式是**追加**一条新消息来反映变更，而不是修改较早的消息：

- 若沙箱配置或审批模式改变，我们插入一条 role=developer 的新消息，格式与最初的 `<permissions instructions>` 条目相同。
- 若当前工作目录改变，我们插入一条 role=user 的新消息，格式与最初的 `<environment_context>` 相同。

为了性能，我们竭尽全力确保缓存命中。还有另一个必须管理的关键资源：上下文窗口。

我们避免耗尽上下文窗口的总体策略是：一旦 token 数超过某个阈值就压缩对话。具体来说，我们把 input 替换为一个新的、更小的条目列表，它代表对话内容，让智能体带着对迄今发生之事的理解继续工作。压缩的早期实现要求用户手动调用 `/compact` 命令，它会用现有对话加上自定义的总结指令查询 Responses API。Codex 把结果中携带总结的 assistant message 作为后续对话轮次的新输入。

此后 Responses API 演进出支持专门的 `/responses/compact` 端点，可以更高效地执行压缩。它返回一个条目列表，可用来替换先前的 input 以继续对话，同时释放上下文窗口。该列表包含一个特殊的 type=compaction 条目，带有不透明的 `encrypted_content`，保留了模型对原始对话的潜在理解。如今，Codex 在超过 `auto_compact_limit` 时自动使用该端点压缩对话。

### 后续内容

我们介绍了 Codex 智能体循环，并走了一遍 Codex 在查询模型时如何构造和管理上下文。沿途我们强调了适用于任何在 Responses API 之上构建智能体循环者的实用考量与最佳实践。

智能体循环是 Codex 的基础，但这只是开始。在接下来的文章中，我们将深入 CLI 的架构，探讨工具使用如何实现，并近距离审视 Codex 的沙箱模型。（致谢：特别感谢构建 Codex CLI 的整个团队。）

## 关键词

#OpenAI #Codex #智能体循环 #Responses API