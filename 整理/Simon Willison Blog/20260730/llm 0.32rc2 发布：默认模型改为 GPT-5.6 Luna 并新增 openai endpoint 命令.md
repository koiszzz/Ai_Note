---
published: 2026-07-30
title: llm 0.32rc2 发布：默认模型改为 GPT-5.6 Luna 并新增 openai endpoint 命令
source: Simon Willison Blog
original_file: 信息源/Simon Willison Blog/llm 0.32rc2.md
source_note: "[[信息源/Simon Willison Blog/llm 0.32rc2]]"
source_sha256: a4f6799bdf53b81cad68a5261e9538f9780fe6b1a19d373d362f026d884c350a
original_url: https://simonwillison.net/2026/Jul/30/llm-rc2/#atom-everything
processed: 2026-08-07
language: zh-CN
---

# llm 0.32rc2 发布：默认模型改为 GPT-5.6 Luna 并新增 openai endpoint 命令

> [!info] 来源信息
> - 数据源：Simon Willison Blog
> - 发布时间：2026-07-30
> - 原文链接：[打开原文](https://simonwillison.net/2026/Jul/30/llm-rc2/#atom-everything)
> - Vault 原文件：[[信息源/Simon Willison Blog/llm 0.32rc2|查看原始文件]]

## 摘要

- llm 0.32rc2 紧随 RC1 发布，修复了一个依赖问题，并新增两个新特性。
- 未设置默认模型的用户，默认模型从 GPT-4o mini 改为 GPT-5.6 Luna（0.20 美元/百万输入、1.20 美元/百万输出）；也可切换回 GPT-4o mini 或选择更便宜的 GPT-5 nano（0.05/0.40 美元）（Issue #1576）。
- 新增 `llm openai endpoint` 命令：无需预先配置模型即可对任意 OpenAI 兼容端点运行提示、聊天和模型列表；这些调用不会被记录（Issue #1565）。
- 该命令可用 `uvx` 一行运行，甚至无需安装 LLM，例如对本地 LM Studio 模型执行带工具的提示。

## 正文

**发布：[llm 0.32rc2](https://github.com/simonw/llm/releases/tag/0.32rc2)**

紧随 [RC1](https://simonwillison.net/2026/Jul/30/llm-rc1/) 发布，此版本修复了一个依赖问题，还新增了两个很酷的新特性：

> - 未设置自己默认模型的用户，默认模型现在改为 [GPT-5.6 Luna](https://developers.openai.com/api/docs/models/gpt-5.6-luna)。之前是 [GPT-4o mini](https://developers.openai.com/api/docs/models/gpt-4o-mini)。Luna 是更好也更新颖的模型，不过稍贵一些——每百万输入 token 0.20 美元、每百万输出 token 1.20 美元，而 4o mini 是 0.15/0.60 美元。你可以用 `llm models default gpt-4o-mini` 切换回 4o mini，或用 `llm models default gpt-5-nano` 切换到 [GPT-5 nano](https://developers.openai.com/api/docs/models/gpt-5-nano)，一个更便宜的默认模型（0.05/0.40 美元）。[#1576](https://github.com/simonw/llm/issues/1576)
> - 新增 [llm openai endpoint](https://llm.datasette.io/en/latest/other-models.html#openai-endpoint) 命令，无需预先配置模型即可对任意 OpenAI 兼容端点运行提示、聊天和模型列表。这些调用不会被记录。[#1565](https://github.com/simonw/llm/issues/1565)

`llm openai endpoint` 命令*真的*很酷。我一直因为没有现成的 CLI 工具可以针对任意 OpenAI Chat Completions 仿冒端点试跑提示而感到恼火，所以我决定把它加到 LLM 本身。

你甚至不需要安装 LLM 就能使用它。下面这个 `uvx` 单行命令，可以带工具对一个 [LM Studio](https://lmstudio.ai) 本地模型运行提示：

```bash
uvx --pre llm openai endpoint http://127.0.0.1:1234/v1 \
  -T llm_version -T llm_time --td \
  -m google/gemma-4-31b 'what is the current LLM version? And the time?'
```

[输出在这里](https://github.com/simonw/llm/pull/1568#issuecomment-5136163707)。

标签：llm、uv、lm-studio

## 关键词

#LLM #llm-0.32rc2 #GPT-5.6-Luna #OpenAI兼容端点 #LM-Studio #uvx
