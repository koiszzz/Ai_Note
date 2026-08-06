---
title: "MemArena：大规模端侧智能体个人记忆助手的自我中心基准"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/MemArena- An Ego-Centric Benchmark for On-Device Agentic Personal Memory Assistants at Scale.md"
source_note: "[[信息源/arXiv cs.AI RSS/MemArena- An Ego-Centric Benchmark for On-Device Agentic Personal Memory Assistants at Scale]]"
source_sha256: 3da533b5a685808b84c34ef88515d605e872e3a184471d6cdfdd0ee4583fca82
original_url: "https://arxiv.org/abs/2608.02613"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# MemArena：大规模端侧智能体个人记忆助手的自我中心基准

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Jiadong Zhang、Xiaosong Ma
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02613)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/MemArena- An Ego-Centric Benchmark for On-Device Agentic Personal Memory Assistants at Scale|查看原始文件]]

## 摘要

- MemArena 用其 MASim 智能体模拟器构建单一世界会话基准：50 个智能体 × 15 天（1,030 万对话文本 token，每天每智能体 2.41 万纯文本自我中心观测 token），并协同生成六个回忆、推理与可信度评估维度的真值。
- 评估五个开放权重读者 × 四种记忆后端（Vanilla 上下文、BM25-RAG、Oracle 检索、Memobase、MemSearch）。
- 三个突出结果：（1）记忆后端选择对内容准确率更重要（Qwen3-0.6B 上 Memobase 到 MemSearch 增益 +32.5/+19.2 pp，超过 MemSearch 读者缩放 +10.6/+6.8 pp）；（2）权限感知访问普遍失败（Oracle 严重泄露，其他后端过于胆怯）；（3）搜索延迟只在小读者上明显（Spark GB10 边缘节点上记忆搜索增加固定 87/7/48 毫秒）。
- 代码、MASim 模拟器与 MemArena-L 基准将在录用后发布。

## 正文

论文编号：arXiv:2608.02613v1（更新类型：cross）。以下为摘要全文翻译。

边缘部署的个人记忆助手必须用开放权重模型在设备上处理私密人际对话。然而，现有记忆基准往往低估活动密集交互、自我中心视角与连贯多会话世界的组合。MemArena 用一个由 MASim 智能体模拟器构建的单一世界会话基准填补这些空白：50 个智能体、15 天（1,030 万对话文本 token，每天每智能体 2.41 万纯文本自我中心观测 token）。结合交互历史，它在六个回忆、推理与可信度评估维度上协同生成真值。我们评估五个开放权重读者 × 四种记忆后端（Vanilla 上下文、BM25-RAG、Oracle 检索、Memobase 与 MemSearch）。三个结果突出：（1）记忆后端选择对内容准确率更重要：Qwen3-0.6B 上 Memobase 到 MemSearch 增益 +32.5/+19.2 pp，超过 MemSearch 读者缩放（+10.6/+6.8 pp）。（2）权限感知访问普遍失败：Oracle 严重泄露，其他后端又过于胆怯而不敢披露。（3）搜索延迟只在小读者上咬人：在 Spark GB10 边缘节点上，记忆搜索增加适度且固定的 87/7/48 毫秒（BM25-RAG/Memobase/MemSearch），对大多数读者-后端组合只占 TTFT 的一小部分。代码、MASim 模拟器与 MemArena-L 基准将在录用后发布。

## 关键词

#个人记忆 #边缘部署 #智能体基准 #自我中心
