---
title: "DeepSeek V4 Flash 0731 发布：更快更便宜"
source: "Horizon Daily（中文摘要）"
source_category: "科技新闻"
original_file: "信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-08 (ZH).md"
source_note: "[[信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-08 (ZH)]]"
source_fragment: "DeepSeek V4 Flash 0731 发布：更快更便宜"
source_sha256: 6e8dde8f282ed0a4e0983273702ea4892d79ce10648a2ce7b0f51173b915314b
original_url: "https://arcprize.org/results/deepseek-v4-flash-0731"
published: 2026-08-08
processed: 2026-08-09
language: zh-CN
---

# DeepSeek V4 Flash 0731 发布：更快更便宜

> [!info] 来源信息
> - 数据源：Horizon Daily（中文摘要）
> - 所属分类：科技新闻
> - 发布时间：2026-08-08
> - 原文链接：[打开原文](https://arcprize.org/results/deepseek-v4-flash-0731)
> - Vault 原文件：[[信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-08 (ZH)|查看原始日报]]

## 摘要

- DeepSeek V4 Flash 0731 是 DeepSeek 于 7 月 31 日发布的新版模型，相比此前的 preview 版本，用户在质量上认为它“整整高了一个档次”，尤其擅长调试和解析上传的文档与数据。其本地部署速度突出：在 2 块 RTX Pro 6000 Blackwell 上，prefill 速度约为 8k tok/s，单流生成约 250 tok/s。成本也极低，有用户在 Oh My Pi 上同时运行 5-6 个会话（约 12 条流），每天花费难以超过 5 ……

## 正文

DeepSeek V4 Flash 0731 是 DeepSeek 于 7 月 31 日发布的新版模型，相比此前的 preview 版本，用户在质量上认为它“整整高了一个档次”，尤其擅长调试和解析上传的文档与数据。其本地部署速度突出：在 2 块 RTX Pro 6000 Blackwell 上，prefill 速度约为 8k tok/s，单流生成约 250 tok/s。成本也极低，有用户在 Oh My Pi 上同时运行 5-6 个会话（约 12 条流），每天花费难以超过 5 美元；OpenCode Go 临时提供双倍限额，10 美元实际可获得约 140 美元的 token。不过官方已预告“显著提价”，且一些用户反映新版本在 agent 场景中会出现无限循环、不执行工具调用而浪费 token 的问题。

hackernews · tosh · 8月7日 17:56 · [社区讨论](https://news.ycombinator.com/item?id=49214008)

「背景」 DeepSeek V4 Flash 0731 是 DeepSeek 于 2026 年 7 月 31 日发布的 Flash 效率型模型正式版，取代了此前的“预览”（preview）版本。官方称其激活参数量远小于 V4 Pro（Preview），但在多项基准测试中表现更优，并与最强的专有模型基本持平。该模型沿用 V4 Flash-DSpark 的结构，加入推测解码模块以提升推理速度，提供 100 万 token 的上下文长度，并支持本地部署和 API 使用。

「影响」 对依赖 DeepSeek V4 Flash 的低成本编码与代理工作流，当前版本提供了更强的推理质量与更高吞吐，但官方即将上调价格，用户应关注定价变化并评估本地部署或替代方案。

「社区讨论」 社区普遍认可其速度与性价比，LaurensBER 称它“几乎什么事都能用，且便宜到成本无关紧要”；但 nylonstrung 对比上一版 Flash 时报告了 agent 无限循环、不执行工具调用的问题，ak_t 则强调这是 07/31 版本而非几月前的 preview，并表示本地运行一周后感觉整体高了一个档次。

参考链接

- [deepseek -ai/ DeepSeek - V 4 - Flash - 0731 · Hugging Face](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)

- [Run DeepSeek - V 4 - Flash - 0731 API (Easy Deployment & Flat-Rate...)](https://featherless.ai/models/deepseek-ai/DeepSeek-V4-Flash-0731)

- [DeepSeek - V 4 - Flash - 0731 : 1M Context & GPQA 88.1 (2026) | HokAI](https://hokai.io/hub/models/deepseek-v4-flash-0731)

标签: #deepseek, #large-language-models, #benchmark, #ai-inference, #open-source-ai

## 关键词

#deepseek #large-language-models #benchmark #ai-inference #open-source-ai #科技新闻
