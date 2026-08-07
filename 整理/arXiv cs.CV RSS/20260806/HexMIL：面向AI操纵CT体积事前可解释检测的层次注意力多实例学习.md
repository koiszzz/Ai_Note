---
published: 2026-08-06
title: HexMIL：面向AI操纵CT体积事前可解释检测的层次注意力多实例学习
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/HexMIL- Hierarchical Attention MIL for Ante-Hoc Explainable Detection of AI-Manipulated CT Volumes.md
source_note: "[[信息源/arXiv cs.CV RSS/HexMIL- Hierarchical Attention MIL for Ante-Hoc Explainable Detection of AI-Manipulated CT Volumes]]"
source_sha256: 9a95a7a53c7ebac1866a7f456a696d87902f27d0aa3fec5df1ff96df9de3fa78
original_url: https://arxiv.org/abs/2608.05101
processed: 2026-08-07
language: zh-CN
---

# HexMIL：面向AI操纵CT体积事前可解释检测的层次注意力多实例学习

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05101)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/HexMIL- Hierarchical Attention MIL for Ante-Hoc Explainable Detection of AI-Manipulated CT Volumes|查看原始文件]]

## 摘要

- 提出 HexMIL（Hierarchical EXplainable Multiple Instance Learning）：无掩码的医学深度伪造检测器，仅使用二元体级监督，同时改善对未见生成架构的泛化并具备可解释性
- 将 CT 体积分解为补丁与切片两级层次，经独立门控注意力模块聚合，权重直接组合为全分辨率 3D 注意力体积，无需像素级标注即可定位被操纵子区域；注意力权重即驱动分类决策的前向计算，提供事前、结构忠实的空间归因
- 在 M3DSynth 与 CT-GAN 数据集上按严格跨生成器协议评估：域外分类以 +9.1 AUC、+9.4 F1 超越所有基线，定位取得最佳平均 IoU 与 Pointing Game 得分

## 正文

医学深度伪造（medical deepfakes）的出现，即由深度生成模型操纵的医学图像，对临床工作流程构成重大威胁。然而，现有检测器存在两个关键局限：操纵检测对未见生成架构的泛化能力差，以及缺乏可解释性。在此背景下，我们提出 HexMIL（Hierarchical EXplainable Multiple Instance Learning，层次可解释多实例学习），一个无掩码的医学深度伪造检测器，仅使用二元体级监督即可同时解决上述两个局限。HexMIL 将每个 CT 体积分解为补丁（patch）与切片（slice）的两级层次，通过独立的门控注意力（Gated Attention）模块聚合，其权重直接组合为全分辨率 3D 注意力体积，无需任何像素级标注即可定位被操纵的子区域。与 Grad-CAM 等事后（post-hoc）方法不同，HexMIL 的注意力权重正是驱动分类决策的前向计算本身，提供事前（ante-hoc）且结构忠实的空间归因。我们在 M3DSynth 和 CT-GAN 数据集上以严格的跨生成器泛化协议评估 HexMIL，即在单一生成架构上训练、在未见架构上测试。HexMIL 在域外分类中以 +9.1 AUC 和 +9.4 F1 超越所有基线，并在定位上取得最佳平均 IoU 和 Pointing Game 得分。项目页面：opontorno.github.io/hexmil

## 关键词

#医学深度伪造 #多实例学习 #可解释AI #CT影像
