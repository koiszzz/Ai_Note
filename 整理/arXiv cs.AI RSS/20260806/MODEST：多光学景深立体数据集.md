---
published: 20260806
title: "MODEST：多光学景深立体数据集"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/MODEST- Multi-Optics Depth-of-Field Stereo Dataset.md"
source_note: "[[信息源/arXiv cs.AI RSS/MODEST- Multi-Optics Depth-of-Field Stereo Dataset]]"
source_sha256: c56ce10c4eb1219c254da8773a7874ef09994a0c7045a9f958e60fa391292919
original_url: "https://arxiv.org/abs/2511.20853"
processed: 2026-08-06
language: zh-CN

---

# MODEST：多光学景深立体数据集

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Nisarg K. Trivedi, Vinayaka A. Belludi, Li-Yun Wang
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2511.20853)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/MODEST- Multi-Optics Depth-of-Field Stereo Dataset|查看原始文件]]

## 摘要

- 可靠浅景深（DoF）渲染和散焦去模糊的最先进计算机视觉算法训练和评估仍受限于缺乏大规模、全画幅、高保真、真实图像数据集；浅 DoF 和散焦模糊的光学效果密切依赖焦距和光圈设定的相机光学配置。
- 本文呈现 MODEST——首个超高分辨率（5472x3648px、20MP）、多光学景深立体 DSLR 数据集，系统变化焦距和光圈覆盖一系列复杂真实场景，含 20,000 张图像、50 种不同光学配置、焦距 28-70mm、光圈 f/22-f/2.8、10 个场景多个立体视点。
- 每场景策划有挑战性视觉元素（反射表面、透明玻璃墙、细粒度细节、点光源和多尺度深度错觉），并提供内外参校准图像；评估几种最先进 DoF 和散焦去模糊方法，展示失败案例和局限。

## 正文

可靠浅景深（DoF）渲染和散焦去模糊的最先进计算机视觉算法训练和评估仍受限于缺乏大规模、全画幅、高保真、真实图像数据集。浅 DoF 和散焦模糊的光学效果密切依赖焦距和光圈设定的相机光学配置，需要这些参数系统变化时对模型的严格评估。此外，AR、VR、智能手机、工业机器人等现代应用部署立体或多相机系统。我们呈现 MODEST——首个超高分辨率（5472x3648px、20MP）、多光学景深立体 DSLR 数据集，为一系列复杂真实场景系统变化焦距和光圈，捕捉专业相机系统的光学真实感和复杂性。20,000 张图像跨 50 种不同光学配置，焦距 28-70mm，光圈 f/22-f/2.8，10 个场景多个立体视点；此超高分辨率、全范围光学覆盖支持浅 DoF 渲染和散焦去模糊中几何与光学效应的受控分析。每个场景策划有挑战性视觉元素：反射表面、透明玻璃墙、细粒度细节、点光源和多尺度深度错觉。此外，我们提供内外参校准图像以支持不断演进的校准方法。我们评估几种最先进 DoF 和散焦去模糊方法，并展示失败案例和局限。我们的全面调优分析展示 MODEST 如何评估最先进 DoF 模型对输入图像实际焦距配置的敏感性。本工作试图弥合合成、低分辨率训练数据与高分辨率真实相机光学推理泛化之间的真实感差距。

## 关键词

#景深 #立体数据集 #相机光学 #去模糊 #arXiv