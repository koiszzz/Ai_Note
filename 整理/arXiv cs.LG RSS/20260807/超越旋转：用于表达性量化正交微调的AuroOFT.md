---
published: 2026-08-07
title: "超越旋转：用于表达性量化正交微调的 AuroOFT"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Beyond Rotations- AuroOFT for Expressive Quantized Orthogonal Fine-Tuning.md"
source_note: "[[信息源/arXiv cs.LG RSS/Beyond Rotations- AuroOFT for Expressive Quantized Orthogonal Fine-Tuning]]"
source_sha256: ca0893a2d8e3250c8bd1b3d2a21c2ce1b6aa053b98d516d77aa2a1aa7c75cb93
original_url: "https://arxiv.org/abs/2608.05253"
processed: 2026-08-07
language: zh-CN
---

# 超越旋转：用于表达性量化正交微调的 AuroOFT

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Yue Han, Dianlin Wang
> - **发布时间**：2026-08-07
> - **分类**：cs.LG
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05253)

## 摘要

- 量化正交微调（qoft）通过在冻结量化权重前学习结构化激活旋转实现低比特语言模型的参数高效适配，但其任务特定更新限于线性正交变换。
- 提出 AuroOFT：将 qoft 保持为稳定的量化兼容分支，同时为每个适配的线性层附加零起始门控低秩非线性残差。
- 激活被映射到 RMS 归一化紧凑潜空间，采用带符号相关门控的自适应非线性基；零初始化上投影使 AuroOFT 初始化时与 qoft 功能等同。
- 在 Qwen2.5 1.5B/3B 上 Macro-6 比匹配 qoft 提升 1.30–2.70%，超 QLoRA 6.52–10.62%，且相对 QLoRA 节省 32.3–44.7% 可训练参数。

## 正文

量化正交微调（qoft）通过在冻结量化权重之前学习结构化激活旋转，实现低比特语言模型的参数高效适配。然而，其任务特定更新仍受限于线性正交变换，缺乏输入相关的非线性校正能力。本文引入 AuroOFT：将 qoft 保持为稳定的量化兼容分支，同时为每个适配的线性层附加零起始门控低秩非线性残差。AuroOFT 将激活映射到 RMS 归一化的紧凑潜空间，并使用带符号相关或有界门控的自适应非线性基。零初始化的上投影使 AuroOFT 在初始化时与 qoft 功能等同，而正交性仍只是分支级稳定属性，而非组合非线性层的属性。在匹配数据、优化、解码与解析协议下，AuroOFT 在 Qwen2.5 1.5B/3B 设定上将 Macro-6 较匹配的 qoft 提升 1.30–2.70%，超 QLoRA 6.52–10.62%，并在代表性规模下相对 QLoRA 节省 32.3–44.7% 的可训练参数。小型考试式选择题数学集仅作为协议敏感性诊断。代码见匿名仓库：https://anonymous.4open.science/r/AuroOFT-F3FD。

## 关键词

量化微调、LoRA、正交微调、低比特模型、参数高效适配
