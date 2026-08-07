---
published: 2026-07-31
title: 无状态 MCP 重新点燃我的兴趣（并催生 mcp-explorer 与 datasette-mcp）
source: Simon Willison Blog
original_file: 信息源/Simon Willison Blog/Stateless MCP has recaptured my interest (and inspired mcp-explorer and datasette-mcp).md
source_note: "[[信息源/Simon Willison Blog/Stateless MCP has recaptured my interest (and inspired mcp-explorer and datasette-mcp)]]"
source_sha256: c2fc1f77e820a50ec6b37fdc87cad19a92f5dec44d6f647b43c6e061719c8354
original_url: https://simonwillison.net/2026/Jul/31/stateless-mcp/#atom-everything
processed: 2026-08-07
language: zh-CN
---

# 无状态 MCP 重新点燃我的兴趣（并催生 mcp-explorer 与 datasette-mcp）

> [!info] 来源信息
> - 数据源：Simon Willison Blog
> - 发布时间：2026-07-31
> - 原文链接：[打开原文](https://simonwillison.net/2026/Jul/31/stateless-mcp/#atom-everything)
> - Vault 原文件：[[信息源/Simon Willison Blog/Stateless MCP has recaptured my interest (and inspired mcp-explorer and datasette-mcp)|查看原始文件]]

## 摘要

- MCP 2.0（2026-07-28 版 Model Context Protocol 规范）发布，被称为"无状态 MCP 日"；这是 MCP 规范自发布以来最重要的一次变更，也重新点燃了作者对该协议的兴趣。
- 相比给智能体一个能访问互联网的 shell 环境（充满风险且依赖强模型），MCP 工具更容易审计和控制，笔记本电脑上的小模型也能较好驾驭；无状态规范还大大降低了客户端与服务器实现复杂度。
- 作者本周连建三个项目：mcp-explorer（无状态 Python CLI，用 `uvx mcp-explorer list/inspect/call` 交互式探测 MCP 服务器，由 Codex 协助编写）；datasette-mcp（Datasette 插件，为任何实例添加 `/-/mcp` 端点，提供 list_databases、get_database_schema、execute_sql 三个只读工具，已在博客镜像上接入 ChatGPT 与 Claude）；llm-mcp-client（LLM 工具的官方 MCP 插件 alpha 版，成熟后考虑并入 LLM 核心）。
- 旧的有状态"传统 MCP"需要两个 HTTP 请求（先初始化会话拿 Mcp-Session-Id 再调用工具），新无状态方式只需一个请求，且无需维护服务器端会话状态，更适合可扩展的 Web 应用。
- 作者认为 MCP 比任意命令执行更容易推演智能体能力与风险，计划在基于 LLM 构建敏感应用时更多依赖 MCP。

## 正文

周二是[无状态 MCP 日](https://x.com/ade_oshineye/status/2082129440943866149)——MCP 2.0 的推出，或者用更正式但不太好记的名称：2026-07-28 版 [Model Context Protocol 规范](https://blog.modelcontextprotocol.io/posts/2026-07-28/)。这是 MCP 规范自首次发布以来最重要的一次变更，也重新点燃了我个人对该协议的兴趣。

背景说明：MCP 即 Model Context Protocol（模型上下文协议），描述了一种向 LLM 驱动的智能体框架暴露新工具的标准方式。它由 Anthropic 于 [2024 年 11 月](https://www.anthropic.com/news/model-context-protocol)推出，在 2025 年的大部分时间里兴趣激增，随后在一定程度上被 [Skills](https://simonwillison.net/2025/Oct/16/claude-skills/)（Anthropic 的另一项发明）盖过——因为人们发现，一个能访问终端和 `curl` 的智能体 harness 可以更灵活地完成 MCP 能做到的大部分事情。我在 [2025 年年度回顾](https://simonwillison.net/2025/Dec/31/the-year-in-llms/#the-only-year-of-mcp)中写过这一点。

现在我又重新回到 MCP。给智能体一个能访问互联网的 shell 环境[充满风险](https://simonwillison.net/2026/Jul/22/openai-cyberattack/)，并且需要一个能够有效驾驭这种环境的强大模型。MCP 工具更容易审计和控制，而且足够简单，笔记本上运行的较小模型也能较好地驾驭它们。

新的无状态 MCP 规范还大大降低了实现客户端和服务器的复杂度。我这周就构建了三个！

#### 无状态 MCP 让什么变得更容易

有状态与无状态 MCP 差异的最佳演示，在这篇[介绍新规范 RC 的 5 月 21 日博文](https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/)中，它给出了一个清晰的"前后对比"示例。

旧的有状态 MCP（我打算称它为"传统 MCP"）需要两个 HTTP 请求——第一个用于初始化会话并获取 `Mcp-Session-Id`，第二个才真正调用工具：

```http
POST /mcp HTTP/1.1
Content-Type: application/json

{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "initialize",
  "params": {
    "protocolVersion": "2025-11-25",
    "capabilities": {
    },
    "clientInfo": {
      "name": "my-app",
      "version": "1.0"
    }
  }
}

POST /mcp HTTP/1.1
Mcp-Session-Id: 1868a90c-3a3f-4f5b
Content-Type: application/json

{
  "jsonrpc": "2.0",
  "id": 2,
  "method": "tools/call",
  "params": {
    "name": "search",
    "arguments": {
      "q": "otters"
    }
  }
}
```

新的无状态方式只需一个 HTTP 请求，看起来像这样：

```http
POST /mcp HTTP/1.1
MCP-Protocol-Version: 2026-07-28
Mcp-Method: tools/call
Mcp-Name: search
Content-Type: application/json

{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": {
    "name": "search",
    "arguments": {
      "q": "otters"
    },
    "_meta": {
      "io.modelcontextprotocol/clientInfo": {
        "name": "my-app",
        "version": "1.0"
      }
    }
  }
}
```

无论从客户端还是服务器端的实现角度，这都干净得多。它也更适合构建可扩展的 Web 应用，因为现在你不需要维护服务器端状态来跟踪那些会话 ID，也不用担心把同一个会话路由到同一台后端机器。

#### mcp-explorer

我找不到一个很好的交互式探测 MCP 服务器的 CLI 工具，于是让 Codex 帮我构建了自己的。

[mcp-explorer](https://github.com/simonw/mcp-explorer) 就是成果。它是一个无状态 Python CLI 工具，所以甚至不需要安装就能试用——它可以像这样与 [uvx](https://docs.astral.sh/uv/guides/tools/#running-tools) 配合使用：

```bash
uvx mcp-explorer list https://agentic-mermaid.dev/mcp
```

这会查询 Ade Oshineye 的 [agentic-mermaid.dev](https://agentic-mermaid.dev/) 演示 MCP。上面的命令返回以下工具列表：

`execute(code: string, timeoutMs?: integer)`：执行 Mermaid SDK 代码——在隔离沙箱中运行 JavaScript 并返回一个值。
`describe_sdk(family: string, detail?: string)`：描述 Mermaid SDK 操作——返回某个图表家族对应版本的变更操作。
`render_svg(source: string, options?: object)`：将 Mermaid 渲染为 SVG——把 Mermaid 源码字符串渲染为可主题化的 SVG，返回 `{ ok, svg }`。
`render_ascii(source: string, useAscii?: boolean, targetWidth?: integer, options?: object)`：将 Mermaid 渲染为文本——把 Mermaid 源码字符串渲染为文本，返回 `{ ok, text }`。
`render_png(source: string, scale?: number, background?: string, fitTo?: object, options?: object)`：将 Mermaid 渲染为 PNG——把 Mermaid 源码字符串栅格化为 PNG，返回 `{ ok, png_base64 }`。
……（其余工具略）

然后检查某个工具：

```bash
uvx mcp-explorer inspect render_svg
```

这会输出大量信息，包括输入和输出的 JSON schema。

要调用该工具并传入参数：

```bash
uvx mcp-explorer call \
https://agentic-mermaid.dev/mcp \
render_svg \
-a source 'graph TD; A-->B' \
-a options '{"padding":24}'
```

它返回：

```
{"ok":true,"svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=...
```

如果只想取原始 SVG，可以给该命令加上 `| jq .svg -r`。我得到了[这张图](https://gist.github.com/simonw/b07c62f0ce103be6932477659d5dd1ac)（一个 A 盒子叠在 B 盒子之上、中间有箭头从 A 指向 B 的 SVG）。

README 里还有[几个命令](https://github.com/simonw/mcp-explorer/blob/main/README.md)，但大体思路你已经明白了。我发现构建这样的 CLI 工具是熟悉规范的一种高效方式，即使大部分实际代码是智能体写的。

#### datasette-mcp

第二个项目是 [datasette-mcp](https://github.com/datasette/datasette-mcp)，一个为任何 Datasette 实例添加 `/-/mcp` 端点的 Datasette 插件。

这大概是我第四次尝试构建这个插件，但多亏了新的无状态 MCP 规范，我终于有了一个值得发布的版本。

它只提供三个工具：`list_databases()`、`get_database_schema(database_name)` 和 `execute_sql(database_name, sql)`。它们的作用正如你所预期——尽管 `execute_sql()` 目前是只读的。

把它们接入一个智能体，或 ChatGPT、Claude 这样的聊天工具，它们就能获得对你托管的 Datasette 实例运行 SQL 查询的能力。

目前我把它运行在我博客的 Datasette 镜像上，地址是 datasette.simonwillison.net/-/mcp。把它接入 ChatGPT 和 Claude 费了点周折，但最终搞定了。这里有一个[新的 TIL](https://til.simonwillison.net/llms/mcp-in-claude-and-chatgpt) 展示了具体做法。

这是一段[共享的 Claude 会话](https://claude.ai/share/de1ad9bf-f7c2-4fb9-a9a0-2a1ae39995db)，我问它：

> `list tables in simonwillison.net`

然后：

> `what has Simon said recently about MCP?`

它运行了 7 次独立的 SQL 查询才找到答案。

#### llm-mcp-client

我的 [LLM 工具](https://llm.datasette.io/)早该有一个官方的 MCP 集成了。新的 alpha 版 [llm-mcp-client](https://github.com/simonw/llm-mcp-client) 插件正是我的尝试：

```bash
llm install llm-mcp-client
llm -T 'MCP("https://datasette.simonwillison.net/-/mcp")' 'count the notes'
```

这是输出（包括推理轨迹，我使用的是 [LLM 0.32rc2](https://simonwillison.net/2026/Jul/30/llm-rc2/)）：

> ***考虑笔记数量***
>
> *我看到"count the notes"这个问题可能是在要求我统计博客笔记。也可能是指已发布的笔记或草稿，所以存在一些歧义。我需要弄清笔记的总数，很可能要同时查询已发布笔记和草稿的数量才能得到明确答案。让我们执行这个计数！*
>
> 共有 **151 条笔记**。

以及该提示词的 [llm logs 输出](https://gist.github.com/simonw/4e8f558766150658ce35eab4f0fc3e04)。

一旦它完全成熟，我正考虑把它直接并入 LLM 核心。我也很期待在 [Datasette Agent](https://agent.datasette.io/) 和 [llm-coding-agent](https://github.com/simonw/llm-coding-agent) 中试验 MCP。

#### MCP 是用智能体构建的更安全方式

MCP 发布几个月后，我写了《[Model Context Protocol 存在提示注入安全漏洞](https://simonwillison.net/2025/Apr/9/mcp-prompt-injection/)》，其中指出，让最终用户混搭工具的模式，把防止数据外泄攻击的责任推给了用户自己。我当时还没有发明[致命三重奏](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/)这个说法，但那绝对是我心中所想。

然后，具有任意 shell 和 `curl` 访问权限的通用智能体出现了，那要更难保持安全！

我对 MCP 逐渐欣赏的一点是，与开放网络环境中的任意命令执行相比（这是当今大多数通用智能体和编程智能体工具的默认方式），它更容易推演智能体的能力以及可能出什么差错。

我计划在基于 LLM 构建敏感应用时，更多地向 MCP 倾斜。

## 关键词

#MCP #ModelContextProtocol #Datasette #Mermaid #LLM #项目
