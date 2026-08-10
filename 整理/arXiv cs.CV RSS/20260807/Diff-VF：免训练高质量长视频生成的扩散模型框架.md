---
published: 2026-08-07
title: "Diff-VF：免训练高质量长视频生成的扩散模型框架"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/Diff-VF- Training-free High-quality Long Video Generation via Diffusion Model.md"
source_note: "[[信息源/arXiv cs.CV RSS/Diff-VF- Training-free High-quality Long Video Generation via Diffusion Model]]"
source_sha256: 85d353b92e905c9453d003710870a7e78ae9d1d2d7394747e587c67e9c8deb78
original_url: "https://arxiv.org/abs/2608.05976"
processed: 2026-08-07
language: zh-CN
---

# Diff-VF：免训练高质量长视频生成的扩散模型框架

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Haoning Yang, Xinyuan Chen, Yaohui Wang, Guo Lu
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05976)

## 摘要

- 扩散模型近期在视频生成取得巨大进展；多数现有视频扩散模型用短视频训练，外推到长视频时退化，难以在保留多样运动的同时维持长程时间连贯。
- 提出 Diff-VF：免训练、即插即用、模型无关框架，无需修改或微调基座模型即将现有短视频扩散骨干转为长视频生成器。
- Diff-VF 耦合三个互补策略：混合噪声初始化（HNI）约束全局语义、加权窗口采样（WWS）消除窗口间断、时间扩展采样（TES）以时间步变化融合建立长程依赖；扩展到经跳跃残差引导的长视频增强，用时步依赖引导平衡保真度与真实感。
- VBench-Long 评估显示 Diff-VF 比基座模型与近期免训练长视频生成基线（FreeNoise、FreeLong、RIFLEx）取得更有利的时间连贯与运动多样性平衡，同时保持竞争帧级质量；两个基座模型实验显示适用于不同时空建模策略的视频扩散模型；广泛消融验证各组件与超参数贡献。

## 正文

近期，扩散模型在视频生成方面取得巨大进展。然而，大多数现有视频扩散模型使用短视频训练，外推到长视频时退化，难以在保留多样运动的同时维持长程时间连贯性。为生成一致、高质量且动态的长视频，研究提出 Diff-VF，一个免训练、即插即用且模型无关的框架：无需修改或微调基座模型，即将现有短视频扩散骨干转换为长视频生成器。Diff-VF 耦合三个互补策略：混合噪声初始化（Hybrid Noise Initialization, HNI）约束全局语义；加权窗口采样（Weighted Window Sampling, WWS）消除窗口间断；时间扩展采样（Temporal Extended Sampling, TES）以时间步变化融合建立长程依赖。研究进一步经跳跃残差引导（Skip Residual Guidance）将 Diff-VF 扩展到长视频增强，通过时间步依赖引导平衡保真度与真实感。VBench-Long 评估结果显示，Diff-VF 相对基座模型与近期免训练长视频生成基线（包括 FreeNoise、FreeLong 与 RIFLEx），在时间连贯性与运动多样性之间取得更有利的平衡，同时保持竞争的逐帧质量。两个基座模型的实验证明了其对采用不同时空建模策略的视频扩散模型的适用性。广泛消融验证了每个组件与超参数的贡献。

## 关键词

长视频生成、扩散模型、免训练、时间连贯、运动多样性
