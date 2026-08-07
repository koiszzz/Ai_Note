---
published: 2026-08-06
title: LDARNet：基于可学习分词机制的 DNA 自适应表征网络用于基因组建模
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/LDARNet- DNA Adaptive Representation Network with Learnable Tokenization for Genomic Modeling.md
source_note: "[[信息源/arXiv cs.CL RSS/LDARNet- DNA Adaptive Representation Network with Learnable Tokenization for Genomic Modeling|查看原始文件]]"
source_sha256: 938e4ed362bff9bf0f17c0a9a42e595f4b1729dbc204518721021ad45d8c6413
original_url: https://arxiv.org/abs/2606.04552
processed: 2026-08-07
language: zh-CN
---

# LDARNet：基于可学习分词机制的 DNA 自适应表征网络用于基因组建模

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2606.04552)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/LDARNet- DNA Adaptive Representation Network with Learnable Tokenization for Genomic Modeling|查看原始文件]]

## 摘要

- 基因组基础模型日益采用大语言模型架构，却几乎普遍依赖固定分词方案（如 k-mer、BPE 或单核苷酸），这些方案强加任意序列边界，可能掩盖生物学相关结构。
- 提出 LDARNet，一个 110M 参数的层级基因组基础模型：将 H-Net 风格的动态分块从自回归生成适配到掩码语言建模，组合 BiMamba-2 状态空间层与局部注意力、双向路由和基于比值的正则化器，在无监督下诱导自适应 token 边界。
- 在 Nucleotide Transformer 与 Genomic Benchmarks 套件的 27 个任务上微调：LDARNet 在紧凑模型（<300M 参数）中获得 15/18 胜场，并在 10 个组蛋白修饰任务中的 9 个上取得最佳总体结果，胜过参数多至 20 倍的模型。
- 一个 FLOPs 匹配的受控实验将增益隔离到学习的路由机制：在相同算力下，学习边界在组蛋白任务上比固定网格边界最多高出 14 个百分点。
- 核苷酸分辨率分析进一步显示，学习到的边界无需监督即可对齐经典启动子基序和剪接位点，为基因组基础模型中的自适应分词提供了生物学解释。

## 正文

基因组基础模型日益采用大语言模型架构，却几乎普遍依赖固定的分词方案，例如 k-mer、BPE 或单核苷酸，这些方案强加了任意的序列边界，可能掩盖生物学相关的结构。我们提出 LDARNet，一个 110M 参数的层级基因组基础模型，它将 H-Net 风格的动态分块（dynamic chunking）从自回归生成适配到掩码语言建模，结合 BiMamba-2 状态空间层与局部注意力、双向路由（bidirectional routing）以及基于比值的正则化器，在无需监督的情况下诱导自适应的 token 边界。在 Nucleotide Transformer 与 Genomic Benchmarks 套件的 27 个任务上微调后，LDARNet 在紧凑模型（<300M 参数）中赢得 15/18 个比较，并在 10 个组蛋白修饰任务中的 9 个上取得最佳总体结果，胜过参数多至 20 倍的模型。一个 FLOPs 匹配的受控实验将增益隔离为学习路由机制的作用：在相同算力下，学习到的边界比固定网格边界在组蛋白任务上最高高出 14 个百分点。核苷酸分辨率分析进一步表明，学习到的边界在无监督的情况下与经典启动子基序和剪接位点对齐，为基因组基础模型中的自适应分词提供了生物学解释。

## 关键词

#基因组基础模型 #可学习分词 #状态空间模型 #DNA表征 #组蛋白修饰
