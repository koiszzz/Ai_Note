---
title: "LLM-OSDA：多轮 LLM 对话中原生广告的最优停止动态拍卖"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/LLM-OSDA- An Optimal-Stopping Dynamic Auction for Native Advertising in Multi-Turn LLM Conversations.md"
source_note: "[[信息源/arXiv cs.LG RSS/LLM-OSDA- An Optimal-Stopping Dynamic Auction for Native Advertising in Multi-Turn LLM Conversations.]]"
source_sha256: 0867c22e9f32a0f2ea2f6303d2f6f28c45fa8c85015a5dd27b52a741286b21e2
original_url: "https://arxiv.org/abs/2608.00123"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# LLM-OSDA：多轮 LLM 对话中原生广告的最优停止动态拍卖

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Yan Fang、Jialin Chen、Chun Gan、Hang Yu、Mingjun Nie、Yeyu Zhang、Fengxiang He、Ching Law
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.00123)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/LLM-OSDA- An Optimal-Stopping Dynamic Auction for Native Advertising in Multi-Turn LLM Conversations.|查看原始文件]]

## 摘要

- LLM 原生广告把赞助内容直接嵌入模型生成的反应，把出售单位从固定槽位转变为演变对话中的一个时刻；现有 LLM 广告拍卖机制主要在一次响应内运作，确定赢家但不确定时机。
- 扩展并不平凡：每次会话只有一次原生插入机会，停止时间取决于出价，把时机与分配耦合，静态真实性论证不再适用。
- 提出 LLM 最优停止动态拍卖（LLM-OSDA），一个整合 Bellman 最优停止、赢家分配与包络定价的动态按点击付费拍卖。
- 与出价无关的 LLM 层估计上下文点击质量并无缝渲染中选广告，而出价只进入已承诺的拍卖机制；在精确 Bellman 预言机下，期望折扣点击分配对每个广告主的出价单调，相应的包络支付使真实出价在期望上弱占优。
- 实用部署中，学得的 StopNet 近似 Bellman 动作值：其决策只在停止边界附近与最优策略不同，并把由此产生的激励损失以近似误差界定。
- 模拟对话广告语料实验显示：LLM-OSDA 相对最强固定时机基线把净收入提升 11%，同时保持相当的用户留存；代码见 https://github.com/2025Fang2025/llm-osda。

## 正文

论文编号：arXiv:2608.00123v2（更新类型：replace-cross）。以下为摘要全文翻译。

LLM 原生广告把赞助内容直接嵌入模型生成的响应，把出售单位从固定槽位转变为演变对话中的一个时刻。现有 LLM 广告拍卖机制主要在单次响应内运作，确定赢家但不确定时机。这一扩展并不平凡：每次会话只有一次原生插入机会，停止时间取决于出价，把时机与分配耦合，因此静态真实性论证不再适用。我们提出 LLM 最优停止动态拍卖（LLM-OSDA），一个整合 Bellman 最优停止、赢家分配与包络定价的动态按点击付费拍卖。与出价无关的 LLM 层估计上下文点击质量并无缝渲染中选广告，而出价只进入已承诺的拍卖机制。在精确 Bellman 预言机下，期望折扣点击分配对每个广告主的出价单调，相应的包络支付使真实出价在期望上弱占优。对实际部署，一个学得的 StopNet 近似 Bellman 动作值。我们表明其决策只在停止边界附近与最优策略不同，并以近似误差界定由此产生的激励损失。在模拟对话广告语料上的实验表明，LLM-OSDA 相对最强固定时机基线把净收入提升 11%，同时保持相当的用户留存。代码见 https://github.com/2025Fang2025/llm-osda。

## 关键词

#LLM广告 #动态拍卖 #最优停止 #原生广告 #机制设计
