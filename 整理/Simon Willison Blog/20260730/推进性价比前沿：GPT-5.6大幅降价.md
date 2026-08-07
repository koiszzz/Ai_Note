---
published: 2026-07-30
title: 推进性价比前沿：GPT-5.6大幅降价
source: Simon Willison Blog
original_file: 信息源/Simon Willison Blog/Advancing the price-performance frontier with GPT‑5.6.md
source_note: "[[信息源/Simon Willison Blog/Advancing the price-performance frontier with GPT‑5.6]]"
source_sha256: bac178ec70c3cef6a9b191e2aa09bbf0c231d25a6b337f34ce510eb01be4993c
original_url: https://simonwillison.net/2026/Jul/30/luna-price-drop/
processed: 2026-08-07
language: zh-CN
---

# 推进性价比前沿：GPT-5.6大幅降价

> [!info] 来源信息
> - 数据源：Simon Willison Blog
> - 发布时间：2026-07-30
> - 原文链接：[打开原文](https://simonwillison.net/2026/Jul/30/luna-price-drop/)
> - Vault 原文件：[[信息源/Simon Willison Blog/Advancing the price-performance frontier with GPT‑5.6|查看原始文件]]

## 摘要

- OpenAI 于当日宣布大幅降价：GPT-5.6 Terra 降价 20%，GPT-5.6 Luna 降价高达 80%。
- OpenAI 将这一成果归功于 GPT-5.6 Sol 对负载均衡乃至推理本身的优化，并称端到端服务成本因此降低 20%。
- Luna 的定价使其成为市场上最便宜的主流模型之一，作者已将 agent.datasette.io 演示站点从 Gemini 3.1 Flash-Lite 切换到 Luna。

## 正文

OpenAI 今天大幅降价：GPT-5.6 Terra 降价 20%，而 GPT-5.6 Luna 更是大幅降价 80%。

OpenAI 将这一成果归功于 5.6 Sol：在《[GPT‑5.6 如何融合前沿智能与前沿效率](https://openai.com/index/gpt-5-6-frontier-intelligence-efficiency/)》一文中，他们描述了如何利用 5.6 Sol 优化负载均衡，更令人印象深刻的是用它来优化推理本身：

> 我们还使用 GPT‑5.6 Sol 优化了模型的前向传播（forward pass）——即把输入转化为下一个 token 预测的计算过程。即使单个运算已经很快，过多的内存搬运、同步开销和低效的数据布局仍会让 GPU 闲置。为避免这种情况，GPT‑5.6 Sol 找出了可以预计算、避免或并行化的计算。借助 Codex，GPT‑5.6 Sol 自主改写并优化了我们的生产级内核（kernels）——即执行构成模型的各种数学运算的核心代码。这在部分程度上得益于我们训练了 GPT‑5.6，使其擅长使用 [Triton](https://triton-lang.org/main/index.html) 和 [Gluon](https://triton-lang.org/main/gluon/index.html) 编写与改进内核——这两种由 OpenAI 维护的开源 GPU 编程语言。这些努力，加上 GPT‑5.6 Sol 带来的更广泛的内核进展，将端到端的服务成本降低了 20%。

Luna 的这次降价彻底改变了低价位模型的格局。Luna 的输入价格仅为每百万 token 0.20 美元、输出价格每百万 token 1.20 美元，现在比 Google 的 Gemini 3.1 Flash-Lite（0.025 美元/1.50 美元）还要便宜。

Anthropic 目前最便宜的模型是 Claude Haiku 4.5，价格为 1 美元/5 美元——如今 Luna 的输入价格只有它的五分之一，而此前两者价格相同。

我的 [agent.datasette.io](https://agent.datasette.io/) 演示站点此前运行在 Gemini 3.1 Flash-Lite 上，我已经把它切换到了 Luna。

来源：[Hacker News](https://news.ycombinator.com/item?id=49112867)

## 关键词

#OpenAI #GPT-5.6 #LLM定价 #AI #性价比
