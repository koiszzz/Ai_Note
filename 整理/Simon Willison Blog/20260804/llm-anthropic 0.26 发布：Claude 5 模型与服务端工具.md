---
published: 2026-08-04
title: llm-anthropic 0.26 发布：Claude 5 模型与服务端工具
source: Simon Willison Blog
original_file: 信息源/Simon Willison Blog/llm-anthropic 0.26.md
source_note: "[[信息源/Simon Willison Blog/llm-anthropic 0.26]]"
source_sha256: 346be93e1b2da40c6f12487f429939927ed9ced60d11db2ff0645e8ee63612c7
original_url: https://simonwillison.net/2026/Aug/4/llm-anthropic/#atom-everything
processed: 2026-08-07
language: zh-CN
---

# llm-anthropic 0.26 发布：Claude 5 模型与服务端工具

> [!info] 来源信息
> - 数据源：Simon Willison Blog
> - 发布时间：2026-08-04
> - 原文链接：[打开原文](https://simonwillison.net/2026/Aug/4/llm-anthropic/#atom-everything)
> - Vault 原文件：[[信息源/Simon Willison Blog/llm-anthropic 0.26|查看原始文件]]

## 摘要

- llm-anthropic 0.26 新增模型 `claude-fable-5`、`claude-sonnet-5`、`claude-opus-5`（Issue #75、#76）。
- 新增 `WebSearch`、`WebFetch`、`CodeExecution`、`AnthropicMCP` 服务端工具，可通过 LLM 的 `-T` 接口或 Python `tools=` 使用；旧的 `-o web_search*` 选项被 `-T WebSearch` 取代（Issue #79）。
- 升级到 llm>=0.32：推理、工具调用、工具结果与服务端工具结果以类型化事件流式输出；CLI 提示的推理默认显示到标准错误，除非传入 `--hide-reasoning/-R`。
- 扩展思考简化为 `thinking` 与 `thinking_effort`（low/medium/high/xhigh/max）；Claude 5 模型默认思考，`-o thinking 0` 可关闭 Sonnet 5 和 Opus 5 的思考，Fable 5 始终思考；移除了 `thinking_budget`、`thinking_display`、`thinking_adaptive` 选项（Issue #80）。

## 正文

**发布：[llm-anthropic 0.26](https://github.com/simonw/llm-anthropic/releases/tag/0.26)**

包含由 [LLM 0.32](https://simonwillison.net/2026/Aug/4/new-release-of-llm/) 启用的新特性：

> - 新增模型：`claude-fable-5`、`claude-sonnet-5` 与 `claude-opus-5`。[#75](https://github.com/simonw/llm-anthropic/issues/75)、[#76](https://github.com/simonw/llm-anthropic/issues/76)
> - 为 `WebSearch`、`WebFetch`、`CodeExecution` 与 `AnthropicMCP` 增加了服务端工具，可通过 LLM 的 `-T` 接口或 Python `tools=` 使用。之前的 `-o web_search*` 选项已移除，改用 `-T WebSearch`。[#79](https://github.com/simonw/llm-anthropic/issues/79)
> - 升级到 [llm>=0.32](https://llm.datasette.io/en/stable/changelog.html#v0-32)。推理、工具调用、工具结果和服务端工具结果现在以类型化事件流式输出。`llm` CLI 提示的推理现在默认显示到标准错误，除非传入 `--hide-reasoning/-R`。
> - 扩展思考简化为 `thinking` 与 `thinking_effort`（`low`、`medium`、`high`、`xhigh` 或 `max`）。Claude 5 模型默认思考；`-o thinking 0` 关闭 Sonnet 5 与 Opus 5 的思考，而 Fable 5 始终思考。`-R/--hide-reasoning` 现在会从响应和日志中省略推理内容。`thinking_budget`、`thinking_display` 与 `thinking_adaptive` 选项已被移除。[#80](https://github.com/simonw/llm-anthropic/issues/80)

标签：llm、anthropic、claude、model-context-protocol

## 关键词

#LLM #llm-anthropic #Claude-5 #服务端工具 #MCP #推理
