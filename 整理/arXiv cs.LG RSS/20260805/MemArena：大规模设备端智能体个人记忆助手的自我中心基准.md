---
published: 2026-08-05
title: "MemArena：大规模设备端智能体个人记忆助手的自我中心基准"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/MemArena- An Ego-Centric Benchmark for On-Device Agentic Personal Memory Assistants at Scale.md"
source_note: "[[信息源/arXiv cs.LG RSS/MemArena- An Ego-Centric Benchmark for On-Device Agentic Personal Memory Assistants at Scale.]]"
source_sha256: 11f366a8bdc82a36bfbfc1b305cb49068f6326b6b70a32bae5d9b0ffb5daa876
original_url: "https://arxiv.org/abs/2608.02613"
processed: 2026-08-05
language: zh-CN
---

# MemArena：大规模设备端智能体个人记忆助手的自我中心基准

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Jiadong Zhang、Xiaosong Ma
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02613)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/MemArena- An Ego-Centric Benchmark for On-Device Agentic Personal Memory Assistants at Scale.|查看原始文件]]

## 摘要

- 边缘部署的个人记忆助手必须在设备上用开放权重模型处理私人人际对话；但现有记忆基准往往低估活动密集交互、自我中心视角与连贯多会话世界的组合。
- MemArena 用其 MASim 智能体模拟器构建的单世界对话基准填补这些空白：50 个智能体持续 15 天（1030 万对话文本 token，每智能体每天 24.1K 纯文本自我中心观察 token）。
- 结合交互历史，在六个召回、推理与可信度评估维度上协同生成 ground truth。
- 用 Vanilla context、BM25-RAG、Oracle 检索、Memobase 与 MemSearch 作为记忆后端评估五个开放权重读取器；三个突出结果：
- (1) 记忆后端选择对内容准确率更重要：在 Qwen3-0.6B 上，Memobase 到 MemSearch 的增益为 +32.5/+19.2 个百分点，超过 MemSearch 读取器扩展（+10.6/+6.8 个百分点）；
- (2) 权限感知访问普遍失败：Oracle 严重泄露，其他后端又过于保守而不披露；
- (3) 搜索延迟只在读取器非常小时咬合：在 Spark GB10 边缘节点上，记忆搜索增加适中且固定的 87/7/48 毫秒（BM25-RAG/Memobase/MemSearch），对大多数读取器—后端组合只构成 TTFT 的一小部分。
- 代码、MASim 模拟器与 MemArena-L 基准将在接收后发布。

## 正文

论文编号：arXiv:2608.02613v1（更新类型：cross）。以下为摘要全文翻译。

边缘部署的个人记忆助手必须在设备上使用开放权重模型处理私人人际对话。然而，现有的记忆基准常常低估活动密集交互、自我中心视角与连贯多会话世界的组合。MemArena 用一个由 MASim 智能体模拟器构建的单世界对话基准填补这些空白：50 个智能体持续 15 天（1030 万对话文本 token，每智能体每天 24.1K 纯文本自我中心观察 token）。结合交互历史，它在六个召回、推理与可信度评估维度上协同生成 ground truth。我们以 Vanilla context、BM25-RAG、Oracle 检索、Memobase 与 MemSearch 作为记忆后端，评估五个开放权重读取器。三个结果尤为突出：(1) 记忆后端选择对内容准确率更重要：在 Qwen3-0.6B 上，Memobase 到 MemSearch 的增益为 +32.5/+19.2 个百分点，超过 MemSearch 读取器扩展（+10.6/+6.8 个百分点）。(2) 权限感知访问普遍失败：Oracle 严重泄露，而其他后端过于保守而不披露。(3) 搜索延迟只在读取器非常小的时候咬合：在 Spark GB10 边缘节点上，记忆搜索增加适中且固定的 87/7/48 毫秒（BM25-RAG/Memobase/MemSearch），对大多数读取器—后端组合只构成 TTFT 的一小部分。代码、MASim 模拟器与 MemArena-L 基准将在接收后发布。

## 关键词

#记忆助手 #设备端 #智能体 #基准 #隐私
