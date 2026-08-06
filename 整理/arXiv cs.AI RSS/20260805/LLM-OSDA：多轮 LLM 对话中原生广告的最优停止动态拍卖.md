---
published: 2026-08-05
title: "LLM-OSDA：多轮 LLM 对话中原生广告的最优停止动态拍卖"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/LLM-OSDA- An Optimal-Stopping Dynamic Auction for Native Advertising in Multi-Turn LLM Conversations.md"
source_note: "[[信息源/arXiv cs.AI RSS/LLM-OSDA- An Optimal-Stopping Dynamic Auction for Native Advertising in Multi-Turn LLM Conversations]]"
source_sha256: a1c4fb7c17439d77037d2b84116695b77be765c6f1affca78cd9ac6541a735b3
original_url: "https://arxiv.org/abs/2608.00123"
processed: 2026-08-05
language: zh-CN
---

# LLM-OSDA：多轮 LLM 对话中原生广告的最优停止动态拍卖

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Yan Fang、Jialin Chen、Chun Gan 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.00123)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/LLM-OSDA- An Optimal-Stopping Dynamic Auction for Native Advertising in Multi-Turn LLM Conversations|查看原始文件]]

## 摘要

- 提出 LLM-OSDA，动态按点击付费拍卖：整合 Bellman 最优停止、胜者分配与包络定价；出价无关的 LLM 层估计上下文点击质量并无缝渲染获胜广告，出价只进入承诺的拍卖机制。
- 在精确 Bellman 预言机下，期望折扣点击分配对每个广告主的出价单调，相应包络支付使真实出价在期望上弱占优。
- 实际部署用学习型 StopNet 逼近 Bellman 动作值：其决策仅在停止边界附近与最优策略不同，并把由此产生的激励损失以其逼近误差为界。
- 在模拟对话广告语料上的实验显示：LLM-OSDA 相对最强固定时机基线净收入提高 11%，同时保持相当的用户留存；代码：https://github.com/2025Fang2025/llm-osda

## 正文

论文编号：arXiv:2608.00123v2（更新类型：replace-cross）。以下为摘要全文翻译。

LLM 原生广告把赞助内容直接嵌入模型生成的响应，把销售单位从固定广告位转移到演化对话中的一个时刻。现有 LLM 广告拍卖机制主要在一个响应内运作：决定胜者，但不决定时机。这种扩展并不平凡：每次会话只有一个原生插入机会，停止时间取决于出价，使时机与分配耦合，静态真实性论证不再适用。我们提出 LLM-OSDA（基于 LLM 的最优停止动态拍卖），一个整合 Bellman 最优停止、胜者分配与包络定价的动态按点击付费拍卖。一个出价无关的 LLM 层估计上下文点击质量并无缝渲染获胜广告，而出价只进入承诺的拍卖机制。在精确 Bellman 预言机下，期望折扣点击分配对每个广告主的出价单调，相应的包络支付使真实出价在期望上弱占优。为实际部署，学习型 StopNet 逼近 Bellman 动作值。我们表明，其决策仅在停止边界附近与最优策略不同，并以其逼近误差为界限制由此产生的激励损失。在模拟会话广告语料上的实验表明，LLM-OSDA 相对最强的固定时机基线把净收入提高 11%，同时保持相当的用户留存。代码在 https://github.com/2025Fang2025/llm-osda。

## 关键词

#LLM广告 #动态拍卖 #最优停止 #机制设计
