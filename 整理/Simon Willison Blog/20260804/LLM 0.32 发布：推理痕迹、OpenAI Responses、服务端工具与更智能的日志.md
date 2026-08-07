---
published: 2026-08-04
title: LLM 0.32 发布：推理痕迹、OpenAI Responses、服务端工具与更智能的日志
source: Simon Willison Blog
original_file: 信息源/Simon Willison Blog/New release of LLM adds support for reasoning traces, OpenAI Responses, server-side tools, and smart.md
source_note: "[[信息源/Simon Willison Blog/New release of LLM adds support for reasoning traces, OpenAI Responses, server-side tools, and smart]]"
source_sha256: 2bf0c80c315b9c2a508fbe995e91ca852217a99be0683112ce1174c608aba1e4
original_url: https://simonwillison.net/2026/Aug/4/new-release-of-llm/#atom-everything
processed: 2026-08-07
language: zh-CN
---

# LLM 0.32 发布：推理痕迹、OpenAI Responses、服务端工具与更智能的日志

> [!info] 来源信息
> - 数据源：Simon Willison Blog
> - 发布时间：2026-08-04
> - 原文链接：[打开原文](https://simonwillison.net/2026/Aug/4/new-release-of-llm/#atom-everything)
> - Vault 原文件：[[信息源/Simon Willison Blog/New release of LLM adds support for reasoning traces, OpenAI Responses, server-side tools, and smart|查看原始文件]]

## 摘要

- LLM 0.32 是项目发布以来最重要的新版本：支持可见的推理痕迹、服务端提供商工具、重新设计的内容寻址 SQLite 日志、新模型，以及由 OpenAI Responses API 启用的新特性；llm-anthropic 插件也同步大幅更新。
- CLI 用户：对推理模型运行 LLM 现在会把推理痕迹显示到标准错误，可用 `-R/--hide-reasoning` 关闭；开箱支持 GPT-5.6 模型家族，`llm "prompt"` 的新默认模型是便宜但能干的 GPT-5.6 Luna。
- LLM 调用现在可使用各提供商的**服务端工具**：OpenAI 提供 CodeInterpreter 代码执行环境和 WebSearch 工具；llm-anthropic 插件提供 WebSearch、WebFetch、CodeExecution 与 AnthropicMCP 工具。
- 新增 `llm openai endpoint` 命令：一行命令即可对任意 OpenAI 兼容端点执行提示（不记录日志），例如配合 `uvx` 和 llm-tools-quickjs 插件调用本地 LM Studio 的 Gemma 4 12B。
- Python API：新增 `model.prompt(messages=[])` 参数（直接传入完整消息历史），并可用 `stream_events()` 流式消费类型化事件（reasoning/text/tool 等），取代原先的字符串迭代。
- 新的内容寻址消息存储（仿照 Git 设计）避免对每轮重复的 JSON 反复记录；`llm logs` 与 `llm logs --json` 已升级以兼容新格式。
- 工具链现在可以暂停等待人工审批、并从保存的消息历史恢复（Datasette Agent 需要的能力）；LLM 看起来越来越像"智能体框架"。

## 正文

我今天上午发布了 [LLM 0.32](https://llm.datasette.io/en/stable/changelog.html#v0-32)，这是自项目首次发布以来最重要的新版本。新版本包含：可见推理痕迹的支持、服务端提供商工具、重新设计的内容寻址 SQLite 日志、新模型，以及由 OpenAI Responses API 启用的新特性。我还发布了 [llm-anthropic 插件](https://github.com/simonw/llm-anthropic) 的新版本，它自身也有大量更新。

#### LLM CLI 用户的核心特性

现在对推理模型运行 LLM，会**把推理痕迹显示到标准错误**，因此你可以看到模型在"想"什么，而不会把这些信息混入你可能要管道传给其他工具的标准输出。加 `-R/--hide-reasoning` 可以关闭。

![在 macOS 终端中运行 llm "think about the best thing about pelicans"——灰色文字输出显示"Exploring pelican qualities"（探索鹈鹕的品质），一段之后，一段白色文字输出："The best thing about pelicans is their wonderfully oversized, practical design: that enormous bill and pouch look comical, but they make pelicans remarkably skilled fishers. Even better, many species cooperate—working together to herd fish before scooping them up. They're a great mix of goofy, graceful, and surprisingly clever."（鹈鹕最棒的地方在于它们那奇妙地超大的实用设计：那张巨大的嘴和喙囊看起来很滑稽，却让鹈鹕成为极其娴熟的捕鱼者。更棒的是，许多物种会合作——先把鱼群围拢再捞起。它们是呆萌、优雅与出人意料地聪明的绝妙结合。）](https://static.simonwillison.net/static/2026/best-pelicans.gif)

LLM 开箱即支持 **GPT-5.6 模型家族**，`llm "prompt"` 使用的新默认模型现在是便宜但能干的 **GPT-5.6 Luna**。

LLM 调用现在可以使用各提供商的**服务端工具**。OpenAI 提供了[代码执行环境](https://llm.datasette.io/en/stable/openai-models.html#code-interpreter)作为服务端工具；LLM 现在可以这样运行受益于它的提示：

```bash
llm --tool CodeInterpreter 'Show current python and SQLite versions'
```

OpenAI 还得到一个 [WebSearch](https://llm.datasette.io/en/stable/openai-models.html#web-search) 工具。

[llm-anthropic](https://github.com/simonw/llm-anthropic) 插件增加了 [WebSearch](https://github.com/simonw/llm-anthropic/blob/0.26/README.md#web-search)、[WebFetch](https://github.com/simonw/llm-anthropic/blob/0.26/README.md#web-fetch)、[CodeExecution](https://github.com/simonw/llm-anthropic/blob/0.26/README.md#code-execution) 与 [AnthropicMCP](https://github.com/simonw/llm-anthropic/blob/0.26/README.md#mcp-connector)，用法如下：

```bash
llm -m claude-sonnet-5 -T 'AnthropicMCP("https://datasette.simonwillison.net/-/mcp")' \
  'how many rows in the blog_blogmark table?'
```

这会让 Anthropic 在与他们 API 的单次请求/响应交互中，对我新的 [datasette-mcp](https://simonwillison.net/2026/Jul/31/stateless-mcp/#datasette-mcp) 插件执行 MCP 调用。

新的 **llm openai endpoint** 命令提供了一个工具，可以[对*任意* OpenAI 兼容端点执行提示](https://llm.datasette.io/en/stable/other-models.html#run-against-an-endpoint-without-configuring-it)，一行搞定。这些调用不会被记录，因此对于对任何讲 LLM API 世界通用语言的端点跑一次性提示来说，这是个方便的工具。

下面是我用它对我本地 [LM Studio](https://lmstudio.ai) 中的 Gemma 4 12B 运行提示的方式——通过 `uvx`（无需安装 LLM），并混入 [llm-tools-quickjs](https://github.com/simonw/llm-tools-quickjs) 工具插件一起使用：

```bash
uvx --with llm-tools-quickjs \
  llm openai endpoint http://localhost:1234/v1 -m google/gemma-4-12b \
  -T QuickJS 'Use QuickJS to multiply 3434 * 2434' --td
```

![输出显示：Tool call: QuickJS_execute_javascript({'javascript': '3434 * 2434'}) 8358356 The result of 3434 * 2434 is 8,358,356.（工具调用：QuickJS_execute_javascript... 8358356 3434 * 2434 的结果是 8,358,356。）](https://static.simonwillison.net/static/2026/openai-endpoint-gemma.webp)

#### Python API 的新特性

LLM 的 Python API 以前要求你创建一个对话，然后逐条发送消息。这是对 LLM 真实本质的一种抽象——真实情况是每次请求都携带此前所有消息的完整历史。这种抽象在更高级的用例中开始碍事，因此新版本引入了 `model.prompt(messages=[])` 参数，可以这样用：

```python
import llm
from llm import user, assistant, system

model = llm.get_model("gpt-5.6-luna")
response = model.prompt(messages=[
    system("You are a helpful pirate."),
    user("What is the capital of France?"),
    assistant("Paris, matey."),
    user("And Germany?"),
])
print(response.text())
```

LLM 之前从每次提示返回一个可迭代的字符串序列。当模型返回字符串响应时这很好用，但未能预判模型会演化出的怪异形态。如今许多模型会返回推理文本、输出字符串、工具调用甚至图像附件的混合体。使用 LLM 0.32，你可以[这样做](https://llm.datasette.io/en/stable/python-api.html#structured-messages-and-streaming-events)：

```python
for event in model.prompt("Explain cats").stream_events():
    if event.type == "reasoning":
        print(f"[thinking] {event.chunk}", end="", flush=True)
    elif event.type == "text":
        print(event.chunk, end="", flush=True)
    else:
        print(f"Other event: {event}")
```

把这些特性结合起来，我们*终于*可以为半标准的 OpenAI chat completions API 提供健壮实现——我已将其发布为 [llm-chat-completions-server](https://github.com/simonw/llm-chat-completions-server) 插件：

```bash
llm install llm-chat-completions-server
llm chat-completions-server --port 9000
# Server is now running on http://127.0.0.1:9000/v1
```

现在你可以通过该服务器、用新的 `llm openai endpoint` 命令对 LLM 运行提示！

```bash
llm openai endpoint http://127.0.0.1:9000/v1 'hello' -m gpt-5.4-mini
```

这类 API 更大的挑战在于日志。如果我们要支持"每次请求都追加消息序列"的模式，理想情况下应避免为每一轮都记录所有这些重复的 JSON。

解决方案是新的[内容寻址消息存储](https://llm.datasette.io/en/stable/logging.html#the-message-store)，其设计仿照 Git。你可以在[文档中](https://llm.datasette.io/en/stable/logging.html#sql-schema)看到它的新 schema，而 `llm logs` 与 `llm logs --json` 命令都已升级，能把这个格式转换回易于消费的形式。

#### 其他更新

这个版本里还有更多内容。[0.32 发布说明](https://llm.datasette.io/en/stable/changelog.html#v0-32)相当全面，而 [0.32rc2](https://llm.datasette.io/en/stable/changelog.html#rc2-2026-07-30)、[0.32rc](https://llm.datasette.io/en/stable/changelog.html#rc1-2026-07-30)、[0.32a3](https://llm.datasette.io/en/stable/changelog.html#a3-2026-06-09)、[0.32a2](https://llm.datasette.io/en/stable/changelog.html#a2-2026-05-12) 与 [0.32a0](https://llm.datasette.io/en/stable/changelog.html#a0-2026-04-28) 的说明可以填补任何空白。

现有 LLM 插件应该都能继续工作，但提供额外模型的插件需要升级到 0.32，才能完整参与新的流式事件系统。文档中有关于如何实现[结构化消息与流式事件](https://llm.datasette.io/en/stable/plugins/advanced-model-plugins.html#structured-messages-and-streaming-events)插件的指南。

我更新了我自己的一些插件：

- [llm-anthropic 0.26](https://github.com/simonw/llm-anthropic/releases/tag/0.26) 增加了对 Claude 5 模型家族的支持，以及 `WebSearch`、`WebFetch`、`CodeExecution` 与 `AnthropicMCP` 服务端工具。
- [llm-gemini](https://github.com/simonw/llm-gemini)、[llm-openrouter](https://github.com/simonw/llm-openrouter) 与 [llm-mistral](https://github.com/simonw/llm-mistral) 已接近完成，发布在即。

#### 我想 LLM 现在是个智能体框架了

这个版本中不少底层工具改动，都是由 [Datasette Agent](https://agent.datasette.io/) 的需求驱动的。我刚开始做 LLM 时，"智能体"这个词的定义还非常模糊，我拒绝使用它。在 [2025 年 9 月](https://simonwillison.net/2025/Sep/18/agents/)，我接受了这样的观点："**LLM 智能体循环运行工具以实现目标**"这一说法已经足够成熟，我可以不再回避这个词了。

工具链现在可以[暂停等待人工审批](https://llm.datasette.io/en/stable/python-api.html#python-api-tools-pause)，并[从保存的消息历史恢复](https://llm.datasette.io/en/stable/python-api.html#python-api-tools-resume)——这两者都是 Datasette Agent 需要的。

看看今天的 LLM，它在我眼中开始变得非常"智能体形态"。一个 CLI 工具能够在一行命令中混搭来自不同来源、不同模型的不同工具，这件事本身就很有魅力；而它还包括一个强大到足以构建 [Datasette Agent](https://agent.datasette.io/) 和 [llm-coding-agent](https://github.com/simonw/llm-coding-agent) 这类系统的 Python 库。

也许 LLM 的下一个版本会把"智能体"的概念烘焙进核心库。我仍在琢磨那会是什么样子。

标签：projects、releases、ai、openai、generative-ai、llms、llm、anthropic、llm-tool-use、llm-reasoning、model-context-protocol

## 关键词

#LLM #0.32发布 #推理痕迹 #服务端工具 #OpenAI-Responses #内容寻址日志 #智能体框架
