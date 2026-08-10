---
published: 2026-08-07
title: "突发工作负载分布下的 LLM 推理：修改 WAIT 算法"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/LLM Inference Under Bursty Workload Distribution- Modifying the WAIT Algorithm.md"
source_note: "[[信息源/arXiv cs.LG RSS/LLM Inference Under Bursty Workload Distribution- Modifying the WAIT Algorithm]]"
source_sha256: a9957b8e64ce936df2db49bb4ee2036ab8f5f2f082ad14bed20fca3cc369da75
original_url: "https://arxiv.org/abs/2608.06135"
processed: 2026-08-07
language: zh-CN
---

# 突发工作负载分布下的 LLM 推理：修改 WAIT 算法

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Anjali Gangadhar Katageria, Shobha Rani, Raghu Nandan Sengupta
> - **发布时间**：2026-08-07
> - **分类**：cs.LG
> - **原文**：[打开链接](https://arxiv.org/abs/2608.06135)

## 摘要

- ChatGPT 与 Claude 等 LLM 广泛用于信息检索与问题求解；近期工作聚焦改进调度算法以提升吞吐量同时保持低延迟，但常假设泊松请求到达与恒定速率——不反映真实流量固有的突发与动态性质。
- 提出对最先进 WAIT 算法的轻量扩展：无需先验流量知识即适应时变到达率。
- 算法基于观测到达间隔在线估计请求强度。
- 用基于马尔可夫调制泊松过程（MMPP）的合成工作负载（含多样请求类型）进行仿真评估：所提方法在评估的低到达率漂移场景中取得比 Sarathi-Serve、ORCA 与 vLLM 更高的吞吐量，同时保持可比延迟。

## 正文

ChatGPT 与 Claude 等大语言模型（LLM）广泛用于信息检索与问题求解。近期工作聚焦改进调度算法以提升吞吐量、同时保持低延迟。然而，这些方法常假设恒定速率的泊松请求到达——该假设不反映真实流量固有的突发与动态性质。研究提出对最先进 WAIT 算法[1]的轻量扩展：无需先验流量知识即适应时变到达率。所提算法基于观测到达间隔对请求强度进行在线估计。研究使用基于马尔可夫调制泊松过程（MMPP）的合成工作负载（含多样请求类型）进行基于仿真的评估，证明所提方法在评估的低到达率漂移场景中取得比 Sarathi-Serve[2]、ORCA[3] 与 vLLM[4] 更高的吞吐量，同时保持可比延迟。

## 关键词

LLM 推理、调度、突发流量、WAIT 算法、吞吐量
