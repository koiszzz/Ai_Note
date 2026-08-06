---
published: 2026-08-05
title: "SRAP：用于不可察觉换脸防御的 SVD 精炼对抗扰动"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/SRAP- SVD-Refined Adversarial Perturbations for Imperceptible Face-Swap Defense.md"
source_note: "[[信息源/arXiv cs.LG RSS/SRAP- SVD-Refined Adversarial Perturbations for Imperceptible Face-Swap Defense.]]"
source_sha256: dae34da480feeec2ec966bdc7ebf481061d0395ddab25a3ea5a9087d6b7e930b
original_url: "https://arxiv.org/abs/2608.03395"
processed: 2026-08-05
language: zh-CN
---

# SRAP：用于不可察觉换脸防御的 SVD 精炼对抗扰动

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Sungwon Cho、Kwanghyun Ko、Myungjoo Kang
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03395)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/SRAP- SVD-Refined Adversarial Perturbations for Imperceptible Face-Swap Defense.|查看原始文件]]

## 摘要

- 深度伪造技术对面部隐私与身份安全构成日益增长的威胁，激励在误用前保护面部图像的主动防御。
- 投影梯度下降（PGD）生成的对抗扰动虽能破坏换脸模型使用的身份表示，但视觉质量被两个特征削弱：扰动广泛分布在图像上（包括身份不敏感区域），且包含视觉显著的高频成分。
- 通过身份敏感性估计与 PGD 扰动的奇异值分解（SVD）分析这些空间与谱低效：分析表明后部奇异成分含有不成比例的高频能量，而前部成分保留大部分扰动能量与防御效用。
- 提出 SRAP：在每优化步结合逐通道截断 SVD 精炼与身份重要性掩码；SVD 精炼抑制高秩、高频残差，掩码把扰动限制在强烈影响身份表示的位置。
- CelebA-HQ 与 VGGFace2-HQ 上的实验表明：SRAP 在所有报告指标上大幅改善受保护图像保真度，同时保持竞争性身份破坏性能，在换脸防御与视觉不可察觉性之间取得有利权衡。

## 正文

论文编号：arXiv:2608.03395v1（更新类型：cross）。以下为摘要全文翻译。

深度伪造技术对面部隐私与身份安全构成日益增长的威胁，激励在误用之前保护面部图像的主动防御。虽然投影梯度下降（PGD）生成的对抗扰动可以破坏换脸模型使用的身份表示，但其视觉质量被两个特征削弱：扰动广泛分布在图像上（包括身份不敏感区域），并且包含视觉显著的高频成分。我们通过身份敏感性估计与 PGD 扰动的奇异值分解（SVD）分析这些空间与谱低效。我们的分析表明，后部的奇异成分含有不成比例的高频能量，而前部成分保留大部分的扰动能量与防御效用。基于这些观察，我们提出 SRAP，它在每个优化步骤结合逐通道截断 SVD 精炼与身份重要性掩码。SVD 精炼抑制高秩、高频残差，而掩码把扰动限制在强烈影响身份表示的位置。在 CelebA-HQ 与 VGGFace2-HQ 上的实验表明，SRAP 在所有报告指标上大幅改善受保护图像的保真度，同时保持竞争性的身份破坏性能，在换脸防御与视觉不可察觉性之间取得有利的权衡。

## 关键词

#深度伪造 #换脸防御 #对抗扰动 #SVD #身份保护
