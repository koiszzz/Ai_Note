---
title: "SGD 预条件器的设计准则：局部条件化、噪声底与盆稳定性"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Design Criteria for SGD Preconditioners- Local Conditioning, Noise Floors, and Basin Stability.md"
source_note: "[[信息源/arXiv cs.LG RSS/Design Criteria for SGD Preconditioners- Local Conditioning, Noise Floors, and Basin Stability]]"
source_sha256: 054996c633eee189035ddcac9bcb5e302a033f9ba60493fef071145b02dc61ca
original_url: "https://arxiv.org/abs/2511.19716"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# SGD 预条件器的设计准则：局部条件化、噪声底与盆稳定性

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Mitchell Scott、Tianshi Xu、Ziyuan Tang 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2511.19716)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Design Criteria for SGD Preconditioners- Local Conditioning, Noise Floors, and Basin Stability|查看原始文件]]

## 摘要

- 在对称正定矩阵 M 诱导的几何中分析预条件 SGD：推导收敛率与随机噪声底都由 M 依赖量支配的界——率经 M 度量中的有效条件数，底经该条件数与预条件噪声水平的乘积；非凸目标下建立依赖预条件器的盆稳定性保证：M 范数测量光滑性与盆大小时，迭代保持在良行为局部区域的概率有显式下界。
- 随机梯度下降（SGD）常因各向异性曲率与梯度噪声在训练后期减速。
- 该视角对科学机器学习（SciML）尤其相关：随机更新下取得小训练损失与物理保真度、数值稳定性与约束满足密切相关。
- 框架适用于对角/自适应与曲率感知预条件器，给出简单设计原则：选择 M 改善局部条件化同时衰减噪声——二次诊断与三个 SciML 基准实验验证预测的率-底行为。

## 正文

论文编号：arXiv:2511.19716v3（更新类型：replace-cross）。以下为摘要全文翻译。

随机梯度下降（SGD）常常在训练后期因各向异性曲率与梯度噪声而减速。我们在一个对称正定矩阵 M 诱导的几何中分析预条件 SGD，并推导这样的界：收敛率与随机噪声底都由 M 依赖的量支配——率经 M 度量中的有效条件数，底经该条件数与预条件噪声水平的乘积。对非凸目标，我们建立一个依赖预条件器的盆稳定性保证：当光滑性与盆大小以 M 范数测量时，迭代保持在良行为局部区域的概率有一个显式下界。这一视角对科学机器学习（SciML）尤其相关：在随机更新下取得小训练损失与物理保真度、数值稳定性与约束满足密切相关。该框架适用于对角/自适应与曲率感知的预条件器，并产生一个简单的设计原则：选择 M 以改善局部条件化，同时衰减噪声。在一个二次诊断与三个 SciML 基准上的实验验证了预测的率-底行为。

## 关键词

#SGD #预条件器 #条件数 #噪声底
