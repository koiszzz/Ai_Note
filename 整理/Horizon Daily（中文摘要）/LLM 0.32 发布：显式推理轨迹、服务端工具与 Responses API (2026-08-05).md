---
title: "LLM 0.32 发布：显式推理轨迹、服务端工具与 Responses API"
source: "Horizon Daily（中文摘要）"
source_category: "科技新闻"
original_file: "信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-05 (ZH).md"
source_note: "[[信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-05 (ZH)]]"
source_fragment: "LLM 0.32 发布：显式推理轨迹、服务端工具与 Responses API"
source_sha256: a95ca2b002031ca8b11b06a7711ba64db3ff679428fdd0f1ed0860fe3068c63d
original_url: "https://simonwillison.net/2026/Aug/4/new-release-of-llm/#atom-everything"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# LLM 0.32 发布：显式推理轨迹、服务端工具与 Responses API

> [!info] 来源信息
> - 数据源：Horizon Daily（中文摘要）
> - 所属分类：科技新闻
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://simonwillison.net/2026/Aug/4/new-release-of-llm/#atom-everything)
> - Vault 原文件：[[信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-05 (ZH)|查看原始日报]]

## 摘要

- LLM 0.32 已发布，是该项目自启动以来最重要的更新。新版本在调用推理模型时会将推理轨迹显示到标准错误输出，并可用 -R/–hide-reasoning 关闭；内置对 GPT-5.6 模型系列的支持，默认模型改为 GPT-5.6 Luna。它还支持各家提供的服务端工具（如 OpenAI 的 CodeInterpreter 和 WebSearch）、通过新的 llm openai endpoint 命令在未配置情况下调用任意 OpenAI 兼容端点（但这些调用不会被记录），……

## 正文

LLM 0.32 已发布，是该项目自启动以来最重要的更新。新版本在调用推理模型时会将推理轨迹显示到标准错误输出，并可用 -R/–hide-reasoning 关闭；内置对 GPT-5.6 模型系列的支持，默认模型改为 GPT-5.6 Luna。它还支持各家提供的服务端工具（如 OpenAI 的 CodeInterpreter 和 WebSearch）、通过新的 llm openai endpoint 命令在未配置情况下调用任意 OpenAI 兼容端点（但这些调用不会被记录），并支持 OpenAI Responses API。Python API 新增 model.prompt(messages=[]) 参数与 stream_events() 事件流，可分别处理 reasoning、text、tool 调用和图片附件；SQLite 日志也改成了内容可寻址存储。

rss · Simon Willison · 8月4日 23:58

「背景」 LLM 是 Simon Willison 开发的开源命令行工具和 Python 库，用于统一调用各种大语言模型。此前它的 Python API 要求先创建 conversation 再逐条发送消息，并把响应抽象为字符串迭代器；新版则转向更贴近真实模型请求的消息列表和事件流，并纳入 OpenAI 新的 Responses API。

「影响」 对使用 LLM CLI 和 Python API 的开发者而言，最大的实际变化是能够直接查看推理轨迹、在提示词中使用服务端工具，并通过一行命令调用任何 OpenAI 兼容端点；但通过 llm openai endpoint 发起的临时调用不会被记入日志，需要注意这一限制。

标签: #LLM, #OpenAI, #CLI, #reasoning-traces, #API

## 关键词

#LLM #OpenAI #CLI #reasoning-traces #API #科技新闻
