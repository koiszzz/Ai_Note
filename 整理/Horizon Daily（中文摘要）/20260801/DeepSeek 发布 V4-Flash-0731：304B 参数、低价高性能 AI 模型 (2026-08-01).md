---
published: 2026-08-01
title: "DeepSeek 发布 V4-Flash-0731：304B 参数、低价高性能 AI 模型"
source: "Horizon Daily（中文摘要）"
source_category: "科技新闻"
original_file: "信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-01 (ZH).md"
source_note: "[[信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-01 (ZH)]]"
source_fragment: "DeepSeek 发布 V4-Flash-0731：304B 参数、低价高性能 AI 模型"
source_sha256: 2393bfb8413683a472d8dd29a4d57eae2c4368a79f7d1d4bd862891940f60de6
original_url: "https://simonwillison.net/2026/Jul/31/deepseek-v4-flash-0731/#atom-everything"
processed: 2026-08-05
language: zh-CN
---

# DeepSeek 发布 V4-Flash-0731：304B 参数、低价高性能 AI 模型

> [!info] 来源信息
> - 数据源：Horizon Daily（中文摘要）
> - 所属分类：科技新闻
> - 发布时间：2026-08-01
> - 原文链接：[打开原文](https://simonwillison.net/2026/Jul/31/deepseek-v4-flash-0731/#atom-everything)
> - Vault 原文件：[[信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-01 (ZH)|查看原始日报]]

## 摘要

- DeepSeek 发布了其 V4 系列新模型 DeepSeek-V4-Flash-0731，参数规模为 3040 亿，Hugging Face 上权重约 167GB，官方称其“智能体能力大幅增强”。该模型在 Artificial Analysis 的智能指数上超越了 428B 参数的 MiniMax M3，每百万输入 token 收费 0.14 美元、每百万输出 token 收费 0.27 美元，被认为是当前“单位智能性价比”最高的模型。Simon Willison 通过 O……

## 正文

DeepSeek 发布了其 V4 系列新模型 DeepSeek-V4-Flash-0731，参数规模为 3040 亿，Hugging Face 上权重约 167GB，官方称其“智能体能力大幅增强”。该模型在 Artificial Analysis 的智能指数上超越了 428B 参数的 MiniMax M3，每百万输入 token 收费 0.14 美元、每百万输出 token 收费 0.27 美元，被认为是当前“单位智能性价比”最高的模型。Simon Willison 通过 OpenRouter 实测发现，默认推理级别生成的“骑自行车鹈鹕”图像质量较差，但将 reasoning_effort 设为 high 后得到了明显更好的结果。

rss · Simon Willison · 7月31日 23:59

「背景」 DeepSeek-V4-Flash-0731 是 DeepSeek V4 系列的最新发布版本，属于稀疏混合专家（MoE）模型；OpenRouter 的资料显示其总参数量为 284B、激活参数约 13B，是一个面向编程、推理和智能体工作流的“重新训练后”修订版（来源：tool-1-2）。Hugging Face 模型页提供了该模型的直接加载方式，DeepInfra 的说明则称其在多项基准上优于 DeepSeek-V4-Pro (Preview)，尽管激活参数更少，并与最强的闭源模型大致相当（来源：tool-1-1, tool-1-3）。原报道把模型规模记为 304B 参数、Hugging Face 下载约 167GB，并引用 Artificial Analysis 的评测称其性价比突出。

「影响」 对于通过 OpenRouter 使用该模型的开发者，V4-Flash-0731 以约 0.028 美元/任务的成本提供了约 50 分的智能指数，使其在实际任务中成为性价比极具竞争力的选择，但默认推理级别下的输出质量可能不稳定，需要根据任务手动调高推理强度。

参考链接

- [deepseek -ai/ DeepSeek - V 4 - Flash - 0731 · Hugging Face](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)

- [DeepSeek V 4 Flash 0731 - API Pricing & Providers | OpenRouter](https://openrouter.ai/deepseek/deepseek-v4-flash-0731)

- [deepseek -ai/ DeepSeek - V 4 - Flash - 0731 - Demo - DeepInfra](https://deepinfra.com/deepseek-ai/DeepSeek-V4-Flash-0731)

标签: #AI models, #DeepSeek, #LLM, #Agentic AI, #Machine Learning

## 关键词

#AI-models #DeepSeek #LLM #Agentic-AI #Machine-Learning #科技新闻
