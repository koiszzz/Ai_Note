---
published: 2026-08-06
title: Delta-Diffusion：基于条件泊松扩散桥建模纵向脑淀粉样蛋白 PET 轨迹
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/Delta-Diffusion- Modeling Longitudinal Brain Amyloid-PET Trajectories via Conditional Poisson Diffus.md
source_note: "[[信息源/arXiv cs.CV RSS/Delta-Diffusion- Modeling Longitudinal Brain Amyloid-PET Trajectories via Conditional Poisson Diffus]]"
source_sha256: ab5177da88e7bdc91bc5bf83f9467f17589077b2dd2872c08117328ccacd962d
original_url: https://arxiv.org/abs/2606.22216
processed: 2026-08-07
language: zh-CN
---

# Delta-Diffusion：基于条件泊松扩散桥建模纵向脑淀粉样蛋白 PET 轨迹

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2606.22216)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/Delta-Diffusion- Modeling Longitudinal Brain Amyloid-PET Trajectories via Conditional Poisson Diffus|查看原始文件]]

## 摘要

- 提出 Delta-Diffusion：进度感知框架，将纵向 PET 合成重新定义为条件泊松扩散桥（PDB）过程，锚定被试基线 PET，将生成任务转化为淀粉样蛋白轨迹的条件分布转移
- 在 Diffusion Transformer（DiT）中引入物理基础的泊松扰动，利用自适应尺度-平移调制以精确校准合成与临床间隔和结构 MRI 上下文
- 设计体积感兴趣区平衡目标以强调淀粉样蛋白积累的稀疏高风险区域
- 在 542 名被试的两个队列上验证，捕捉纵向淀粉样蛋白沉积变化方面优于最先进方法

## 正文

虽然纵向脑 PET 成像是量化 β-淀粉样蛋白时空积累的金标准，但其广泛的临床用途受到高运营成本和累积辐射风险的限制。近期深度生成模型在纵向图像合成方面显示出潜力；然而，由于身份漂移以及对琐碎地复制基线信号强度而非建模时间转移的持续偏差，它们往往无法捕捉细微的病理进展。为此，我们提出 Delta-Diffusion，一种新颖的进度感知框架，将纵向 PET 合成重新定义为条件泊松扩散桥（Poisson Diffusion Bridge，PDB）过程。与从高斯噪声开始的标准扩散模型不同，我们的 PDB 公式在数学上锚定于被试的基线 PET，有效地将生成任务转化为淀粉样蛋白轨迹的条件分布转移。为处理 PET 成像的异方差特性，我们在扩散 Transformer（Diffusion Transformer，DiT）中引入了具有物理基础的泊松扰动。该架构使用自适应尺度-平移调制（adaptive scale-shift modulation），以精确校准合成与经过的临床间隔和结构 MRI 上下文。设计了体积感兴趣区平衡目标（volume-of-interest balanced objective），以强调淀粉样蛋白积累的稀疏高风险区域。在包含 542 名被试的两个队列上验证，Delta-Diffusion 在捕捉淀粉样蛋白沉积的纵向变化方面优于最先进方法，为追踪疾病进展提供了稳健的计算框架。

## 关键词

#扩散模型 #泊松扩散桥 #纵向成像 #淀粉样蛋白PET #疾病进展
