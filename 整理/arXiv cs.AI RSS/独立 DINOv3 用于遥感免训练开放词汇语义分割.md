---
title: "独立 DINOv3 用于遥感免训练开放词汇语义分割"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Standalone DINOv3 for Training-Free Open-Vocabulary Semantic Segmentation in Remote Sensing.md"
source_note: "[[信息源/arXiv cs.AI RSS/Standalone DINOv3 for Training-Free Open-Vocabulary Semantic Segmentation in Remote Sensing]]"
source_sha256: 4cd37b34ebda7e8ad8bf956332c83c8a0215aa72c75b96640b798b690ddc68b3
original_url: "https://arxiv.org/abs/2608.03023"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# 独立 DINOv3 用于遥感免训练开放词汇语义分割

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Changhao Zhao、Haoxiang Li、Yuke Li 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03023)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Standalone DINOv3 for Training-Free Open-Vocabulary Semantic Segmentation in Remote Sensing|查看原始文件]]

## 摘要

- 提出 DinoSplat-OV，免训练框架：把 DINOv3 适配到遥感，无需微调或额外预训练——针对遥感影像的密集分布、多尺度性质与大尺寸设计两个核心模块：文本感知拉普拉斯传播模块结合文本语义亲和与局部视觉相似性去噪补丁级预测，改善区域一致性同时保持边界；高斯泼溅上采样模块通过 RGB 引导的各向异性聚合与测试时优化重建像素级特征；全局锚点滑动窗口策略支持大尺度影像。
- 遥感语义分割受昂贵像素级标注阻碍，推动免训练开放词汇方法；近期 DINOv3 发布带来 DINO.txt，使独立 DINO 骨干具备图像-文本对比学习，为开放词汇分割开辟可能。
- UDD5、DOTA 与 LoveDA 上的实验显示相对现有免训练方法竞争或更优性能，有效填补 DINO 系列模型在免训练开放词汇分割中的空白，为该方向进一步进展提供可行新路径。

## 正文

论文编号：arXiv:2608.03023v1（更新类型：cross）。以下为摘要全文翻译。

遥感语义分割受昂贵像素级标注阻碍，推动免训练的开放词汇方法。近期，DINOv3 的发布带来 DINO.txt，使独立的 DINO 骨干具备图像-文本对比学习，从而为开放词汇分割开辟可能性。我们提出 DinoSplat-OV，一个把 DINOv3 适配到遥感、无需微调或额外预训练的免训练框架。针对遥感影像的密集分布、多尺度性质与大尺寸，我们设计两个核心模块。其文本感知拉普拉斯传播（Text-aware Laplacian Propagation）模块通过结合文本语义亲和与局部视觉相似性去噪补丁级预测，在保持边界的同时改善区域一致性。其高斯泼溅上采样（Gaussian Splatting Upsampling）模块通过 RGB 引导的各向异性聚合与测试时优化重建像素级特征。一个全局锚点滑动窗口策略进一步支持大尺度影像。在 UDD5、DOTA 与 LoveDA 上的实验表明，相对现有免训练方法取得竞争或更优性能，有效填补 DINO 系列模型在免训练开放词汇分割中的空白，并为该方向的进一步进展提供一条可行新路径。

## 关键词

#遥感 #开放词汇分割 #DINOv3 #免训练
