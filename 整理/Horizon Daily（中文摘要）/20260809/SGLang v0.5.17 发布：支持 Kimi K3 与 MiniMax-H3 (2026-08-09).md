---
title: "SGLang v0.5.17 发布：支持 Kimi K3 与 MiniMax-H3"
source: "Horizon Daily（中文摘要）"
source_category: "科技新闻"
original_file: "信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-09 (ZH).md"
source_note: "[[信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-09 (ZH)]]"
source_fragment: "SGLang v0.5.17 发布：支持 Kimi K3 与 MiniMax-H3"
source_sha256: 1f9fae47d0f1419b9e913e9b6f5e1db7f2c6e749b3bab3db85b7ff133a1f81a4
original_url: "https://github.com/sgl-project/sglang/releases/tag/v0.5.17"
published: 2026-08-09
processed: 2026-08-09
language: zh-CN
---

# SGLang v0.5.17 发布：支持 Kimi K3 与 MiniMax-H3

> [!info] 来源信息
> - 数据源：Horizon Daily（中文摘要）
> - 所属分类：科技新闻
> - 发布时间：2026-08-09
> - 原文链接：[打开原文](https://github.com/sgl-project/sglang/releases/tag/v0.5.17)
> - Vault 原文件：[[信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-09 (ZH)|查看原始日报]]

## 摘要

- SGLang v0.5.17 正式发布，包含来自 194 位贡献者的 582 个 PR。该版本为 Moonshot AI 的 Kimi K3 提供 day-0 生产级支持，该模型为 2.8T 参数多模态 LatentMoE（896 个专家、top-16、3584 维潜在空间路由），拥有 1M token 上下文、69 层 KDA 线性注意力层与 24 层 MLA 层交叉排列，以及 MoonViT3d 视觉塔，并以原生 MXFP4 checkpoint 提供。SGLang 通过……

## 正文

SGLang v0.5.17 正式发布，包含来自 194 位贡献者的 582 个 PR。该版本为 Moonshot AI 的 Kimi K3 提供 day-0 生产级支持，该模型为 2.8T 参数多模态 LatentMoE（896 个专家、top-16、3584 维潜在空间路由），拥有 1M token 上下文、69 层 KDA 线性注意力层与 24 层 MLA 层交叉排列，以及 MoonViT3d 视觉塔，并以原生 MXFP4 checkpoint 提供。SGLang 通过 DCP、DSpark 推测解码、chunked-prefill PP 与 TP decode、KDA-aware 前缀缓存、HiCache L2、量化权重上的 LoRA、推理/工具调用/OpenAI 兼容服务等特性支持该模型，并已在 NVIDIA GB300 和 AMD MI35x 上验证。此外，版本加入 MiniMax-H3 视频生成模型支持、Rust 前端初始支持、DCP 通信后端、DWDP MoE 预填充并行（在 4x B200 上较 DEP4 达 1.92 倍吞吐提升）等大量优化。

github · Fridge003 · 8月8日 00:19

「背景」 SGLang 是一个开源的大语言模型推理与服务框架，专注于高吞吐、低延迟的模型部署与多模型支持。v0.5.17 之前，对新发布的大模型一般需要数天到数周才能提供优化支持，而此次发布重点展示了框架对前沿模型的快速适配能力。

「影响」 使用 SGLang 的团队可以直接以 v0.5.17 在 GB300 和 MI35x 等硬件上部署 Kimi K3，而无需等待第三方适配，并在同一框架中通过 DWDP 等新策略提升 MoE 模型预填充吞吐。

标签: #SGLang, #Kimi K3, #LLM inference, #model serving, #open source

## 关键词

#SGLang #Kimi-K3 #LLM-inference #model-serving #open-source #科技新闻
