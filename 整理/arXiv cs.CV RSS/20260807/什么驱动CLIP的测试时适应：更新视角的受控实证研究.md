---
published: 2026-08-07
title: "什么驱动 CLIP 的测试时适应：更新视角的受控实证研究"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/What Drives Test-Time Adaptation for CLIP- A Controlled Empirical Study from an Update Perspective.md"
source_note: "[[信息源/arXiv cs.CV RSS/What Drives Test-Time Adaptation for CLIP- A Controlled Empirical Study from an Update Perspective]]"
source_sha256: 391785dbbed41af51e20c90b3498d94abb9c11c9c7adf74ebab7a1b04835c75b
original_url: "https://arxiv.org/abs/2606.14299"
processed: 2026-08-07
language: zh-CN
---

# 什么驱动 CLIP 的测试时适应：更新视角的受控实证研究

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Jiazhen Huang, Xiao Chen, Zhiming Liu, Yaru Sun, Jingyan Jiang, Zhi Wang
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2606.14299)

## 摘要

- CLIP 等视觉语言模型（VLM）已成为开放词汇识别的标准骨干，但其零样本预测仍易受部署中遇到的分布漂移影响；测试时适应（TTA）已作为轻量解决方案扩展到 CLIP，产生快速增长的 TTA4CLIP 方法。
- 实证进展已大幅超越对真正驱动适应、增益来源及哪些漂移下可靠的理解。
- 从追求 SOTA 准确率退一步，进行 TTA4CLIP 系统受控研究：先按测试时更新的内容将现有方法组织为三个统一范式；引入 TTABC 开源 TTA 基准（标准化评估协议、整合 20+ 代表性方法）。
- 受控实证分析聚焦三个关键领域：(1) 确定参数基方法驱动因素：适应增益主要由测试时证据与可靠代理驱动，而非重优化；(2) 探索重参数调优之外的证据利用：经跨样本或当前样本证据与轻量原型更新可实现竞争且高效的性能；(3) 展示 TTA 无银弹：没有单一适应范式普遍最优，偏好范式取决于漂移性质。

## 正文

CLIP 等视觉语言模型（VLM）已成为开放词汇识别的标准骨干，然而其零样本预测在部署中仍易受遇到的分布漂移影响。测试时适应（Test-Time Adaptation, TTA）最近作为轻量解决方案扩展到 CLIP，导致 TTA4CLIP 方法快速增长。然而，该领域的实证进展已大幅超越我们对真正驱动适应、增益从何而来、以及哪些漂移下保持可靠的理解。本文从追求最先进准确率退后一步，对 TTA4CLIP 进行系统受控研究。首先按测试时更新的内容将现有方法组织为三个统一范式。随后引入 TTABC，一个开源 TTA 基准：标准化评估协议并整合 20 多个代表性方法。受控实证分析聚焦三个关键领域。第一，确定参数基方法中的驱动因素，揭示适应增益主要由测试时证据与可靠代理驱动，而非重优化。第二，探索重参数调优之外的证据利用，显示通过跨样本或当前样本证据与轻量原型更新可实现竞争且高效性能。最后，展示 TTA 没有银弹：没有单一适应范式普遍最优，偏好范式取决于漂移性质。希望该基准与研究提供对当前 TTA4CLIP 格局更清晰的理解，并为进一步研究奠定基础。

## 关键词

测试时适应、CLIP、分布漂移、基准、原型更新
