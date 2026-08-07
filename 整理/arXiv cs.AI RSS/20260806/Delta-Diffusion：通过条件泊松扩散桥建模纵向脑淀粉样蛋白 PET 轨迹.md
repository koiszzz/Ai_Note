---
published: 20260806
title: "Delta-Diffusion：通过条件泊松扩散桥建模纵向脑淀粉样蛋白 PET 轨迹"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Delta-Diffusion- Modeling Longitudinal Brain Amyloid-PET Trajectories via Conditional Poisson Diffus.md"
source_note: "[[信息源/arXiv cs.AI RSS/Delta-Diffusion- Modeling Longitudinal Brain Amyloid-PET Trajectories via Conditional Poisson Diffus]]"
source_sha256: 54d4704eb0713cf5a7022057716b6749941de6546b09985c6b3974fd5f19d26a
original_url: "https://arxiv.org/abs/2606.22216"
processed: 2026-08-06
language: zh-CN

---

# Delta-Diffusion：通过条件泊松扩散桥建模纵向脑淀粉样蛋白 PET 轨迹

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Yongheng Sun, Minhui Yu, Mengqi Wu, Maureen Kohi, Mingxia Liu
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2606.22216)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Delta-Diffusion- Modeling Longitudinal Brain Amyloid-PET Trajectories via Conditional Poisson Diffus|查看原始文件]]

## 摘要

- 纵向脑 PET 成像是量化 β-淀粉样蛋白时空积累的金标准，但其广泛临床效用受高运营成本和累积辐射风险约束；近期深度生成模型在纵向图像合成上显示前景，但常因身份漂移和持续偏向平凡复制基线信号强度而无法捕捉微妙病理进展。
- 本文提出 Delta-Diffusion，一个将纵向 PET 合成重新定义为条件泊松扩散桥（PDB）过程的进展感知框架：PDB 表述数学锚定受试者基线 PET，将生成任务转化为淀粉样蛋白轨迹的条件分布转移。
- 引入物理基础的泊松扰动于扩散 Transformer（DiT），用自适应尺度偏移调制精确校准与临床间隔和结构 MRI 上下文；感兴趣体积平衡目标强调稀疏高风险淀粉样蛋白积累区域；在两个 542 名受试者队列上验证，优于最先进方法。

## 正文

纵向脑 PET 成像是量化 β-淀粉样蛋白时空积累的金标准，然而其广泛临床效用受高运营成本和累积辐射风险约束。近期深度生成模型在纵向图像合成上显示前景；然而，它们常因身份漂移和持续偏向平凡复制基线信号强度而非建模时间转换而无法捕捉微妙病理进展。为此，我们提出 Delta-Diffusion，一个新颖的进展感知框架，将纵向 PET 合成重新定义为条件泊松扩散桥（PDB）过程。与从高斯噪声开始的标准扩散模型不同，我们的 PDB 表述数学锚定受试者的基线 PET，有效将生成任务转化为淀粉样蛋白轨迹的条件分布转移。为处理 PET 成像的异方差性，我们在扩散 Transformer（DiT）中引入物理基础的泊松扰动。该架构使用自适应尺度偏移调制，精确校准合成与已过临床间隔和结构 MRI 上下文。设计感兴趣体积平衡目标，强调稀疏、高风险的淀粉样蛋白积累区域。在两个 542 名受试者队列上验证，Delta-Diffusion 在捕捉淀粉样蛋白沉积的纵向变化方面优于最先进方法，为跟踪疾病进展提供稳健计算框架。

## 关键词

#医学影像 #淀粉样蛋白PET #扩散桥 #纵向建模 #arXiv