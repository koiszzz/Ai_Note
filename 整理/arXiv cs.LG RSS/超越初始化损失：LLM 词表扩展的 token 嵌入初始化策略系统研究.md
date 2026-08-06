---
title: "超越初始化损失：LLM 词表扩展的 token 嵌入初始化策略系统研究"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Beyond Initialization Loss- A Systematic Study of Token Embedding Initialization Strategies for LLM .md"
source_note: "[[信息源/arXiv cs.LG RSS/Beyond Initialization Loss- A Systematic Study of Token Embedding Initialization Strategies for LLM .]]"
source_sha256: 8f0b1a3eec90ae5266f53cd1f32841d7fcfad87abf49192a5bca7fc7768741dc
original_url: "https://arxiv.org/abs/2608.03494"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# 超越初始化损失：LLM 词表扩展的 token 嵌入初始化策略系统研究

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Raviraj Joshi、Utkarsh Vaidya、Sanjay Singh Chauhan 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03494)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Beyond Initialization Loss- A Systematic Study of Token Embedding Initialization Strategies for LLM .|查看原始文件]]

## 摘要

- 在 Nemotron-3-Nano-30B-A3B 的印地语词表扩展中呈现 20 多种初始化策略的系统研究：比较词表平均基线、外部与学习型初始化方法（含 FOCUS、top-k 语义检索与残差 MLP 映射）、子词组合、范数校准与输入-输出不对称。
- 词表扩展是使预训练大语言模型（LLM）适配新语言的高效方式，但新添加 token 嵌入的初始化可强烈影响持续预训练（CPT）效率。
- 发现子词组合方法优于词表平均与外部/学习型初始化；子词组合内不对称变体取得最低观测早期验证损失，并揭示输入与输出嵌入初始化的不同偏好。
- 最佳配置：输入嵌入矩阵用均匀子词平均加印地语特定范数校准初始化，输出语言建模头用字符长度加权子词平均；相对标准 Mean-all 基线，完整初始化流水线以超过 6 倍 CPT 步数减少达到相当验证损失，并仅 500 步即超过基线 3,500 步的 MILU-Hindi 准确率。
- 初始化损失与初始化每字节位数（Init BPB）不是下游收敛的可靠预测器，而轻量 CPT（少至 50 步）为选择最佳初始化策略提供高性价比可靠信号。

## 正文

论文编号：arXiv:2608.03494v1（更新类型：cross）。以下为摘要全文翻译。

词表扩展是使预训练大语言模型（LLM）适配新语言的高效方式，但新添加 token 嵌入的初始化可以强烈影响持续预训练（CPT）的效率。我们在 Nemotron-3-Nano-30B-A3B 的印地语词表扩展中呈现 20 多种初始化策略的系统研究。我们的比较涵盖词表平均基线；外部与学习型初始化方法，包括 FOCUS、top-k 语义检索与残差 MLP 映射；子词组合；范数校准；以及输入-输出不对称。我们发现子词组合方法优于词表平均与外部/学习型初始化方法。在子词组合内部，不对称变体取得观测到的最低早期验证损失，并揭示输入与输出嵌入初始化的不同偏好。最佳观测配置用均匀子词平均加印地语特定范数校准初始化输入嵌入矩阵，用字符长度加权子词平均初始化输出语言建模头。相对标准 Mean-all 基线，这一完整初始化流水线以超过 6 倍的 CPT 步数减少达到相当的验证损失，并仅 500 步即超过基线 3,500 步的 MILU-Hindi 准确率。最后，我们表明初始化损失与初始化每字节位数（Init BPB）不是下游收敛的可靠预测器，而轻量 CPT（少至 50 步）为选择最佳初始化策略提供高性价比且可靠的信号。

## 关键词

#词表扩展 #嵌入初始化 #持续预训练 #多语言LLM
