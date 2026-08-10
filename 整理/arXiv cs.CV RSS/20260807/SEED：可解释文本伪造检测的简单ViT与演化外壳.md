---
published: 2026-08-07
title: "SEED：可解释文本伪造检测的简单 ViT 与演化外壳"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/SEED- Simple ViT and Evolving Harness for Explainable Text Forgery Detection.md"
source_note: "[[信息源/arXiv cs.CV RSS/SEED- Simple ViT and Evolving Harness for Explainable Text Forgery Detection]]"
source_sha256: 27e8ab3c0a103a6d3bc12a710ea88715c1967f71b78838b6b9c301bf3a7a0aff
original_url: "https://arxiv.org/abs/2606.21138"
processed: 2026-08-07
language: zh-CN
---

# SEED：可解释文本伪造检测的简单 ViT 与演化外壳

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Kahim Wong, Kemou Li, Yiming Chen, Haiwei Wu, Jiantao Zhou
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2606.21138)

## 摘要

- AI 辅助图像编辑威胁金融、法律与身份记录的可信度；ACM MM 2026 的 GenText-Forensics 挑战赛要求结构化取证报告：整合多语言文本中心伪造图像的检测、像素级定位与自然语言解释。
- 呈现 SEED：三组件模块化系统；相似性引导流水线以多样合成伪造增广训练；单一 ViT（基于 DINOv3 与 LoRA 适配）以最少可训练参数联合执行检测与像素级定位，同时保留预训练先验。
- 演化外壳取检测器预测，经 MLLM 生成完整取证报告，通过提议者-评估者循环迭代改进报告质量。
- SEED 在 GenText-Forensics 挑战赛排名第 3；代码与数据公开。

## 正文

AI 辅助图像编辑威胁金融、法律与身份记录的可信度。ACM MM 2026 的 GenText-Forensics 挑战赛通过要求结构化取证报告应对这一点：整合多语言文本中心伪造图像的检测、像素级定位与自然语言解释。研究呈现 SEED，一个三组件模块化系统。第一，一个相似性引导流水线以多样的合成伪造增广训练。第二，一个单一 ViT（构建于 DINOv3 与 LoRA 适配之上）以最少的可训练参数联合执行检测与像素级定位，同时保留预训练先验。第三，一个演化外壳（evolving harness）获取检测器的预测，并通过一个 MLLM 生成完整的取证报告，经提议者-评估者循环迭代改进，优化报告质量。SEED 在 GenText-Forensics 挑战赛中排名第 3。代码与数据见 https://github.com/KahimWong/GenText-Forensics-3rd-Place。

## 关键词

文本伪造、取证、ViT、MLLM、检测
