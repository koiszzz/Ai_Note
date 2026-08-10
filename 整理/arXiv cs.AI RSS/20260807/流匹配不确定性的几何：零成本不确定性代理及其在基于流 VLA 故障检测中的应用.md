---
published: 2026-08-07
title: "流匹配不确定性的几何：零成本不确定性代理及其在基于流 VLA 故障检测中的应用"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/The Geometry of Flow-Matching Uncertainty- A Cost-free Uncertainty Proxy and Its Application in Flow.md"
source_note: "[[信息源/arXiv cs.AI RSS/The Geometry of Flow-Matching Uncertainty- A Cost-free Uncertainty Proxy and Its Application in Flow]]"
source_sha256: b1e9f271b2cc6ab71fa50b5069e1a876681130067d07dfa9667ad2a7a96c345c
original_url: "https://arxiv.org/abs/2607.27933"
processed: 2026-08-07
language: zh-CN
---

# 流匹配不确定性的几何：零成本不确定性代理及其在基于流 VLA 故障检测中的应用

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Ziyang Rao, Yiren Zhao, Weiyu Guo, Ben Fei, Yandong Guo, Hui Xiong
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.27933)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/The Geometry of Flow-Matching Uncertainty- A Cost-free Uncertainty Proxy and Its Application in Flow-based VLA|查看原始文件]]

## 摘要

- 流匹配（FM）已成为现代具身模型的流行动作头范式；但作为条件生成模型，它不显式暴露固有不确定性，即使误解场景或遇到分布外（OOD）输入也产生错误动作块。
- 因此确定 FM 生成动作何时可信任对安全部署至关重要，但实时控制现有不确定性估计方法饱受额外训练预算、高计算开销与低泛化能力。
- 提供速度场中 FM 不确定性的几何解释：不确定性表现为对理想仿射各向同性收缩场的偏离——据此引入去噪加速度（accel）：高泛化、零成本不确定性代理，从单次前向测量去噪轨迹的弯曲，无需额外模型评估、训练或重采样。
- 理论与实证证明 accel 是 FM 不确定性的忠实代理，并测试其在线故障检测效用——结果显示 accel 能在终止前及早识别失败 rollout，在现实部署预算下匹配甚至优于昂贵的重采样与训练基线；代码与演示公开。

## 正文

流匹配（Flow matching，FM）已成为现代具身模型的流行动作头范式。然而，作为条件生成模型，它并不显式暴露其固有不确定性，即使在误解场景或遇到分布外（OOD）输入时也会产生错误的动作块。因此，确定 FM 生成的动作何时可信任对安全部署至关重要，而实时控制上现有的不确定性估计方法饱受额外训练预算、高计算开销与低泛化能力的困扰。本工作中，我们提供速度场中 FM 不确定性的一种几何解释，显示不确定性表现为对理想仿射各向同性收缩场（affine-isotropic contraction field）的偏离。基于该观察，我们引入去噪加速度（denoising acceleration，accel），一个高度可泛化、零成本的不确定性代理，从单次前向测量去噪轨迹的弯曲，无需额外模型评估、训练或重采样。我们在理论上与实证上证明 accel 是 FM 不确定性的忠实代理，并进一步测试其在在线故障检测中的效用。结果表明，accel 能在终止前及早识别失败的 rollout，在现实部署预算下匹配甚至优于昂贵的重采样与训练基线。代码与演示见 https://github.com/rrrrrrzy/fm-geometry。

## 关键词

#流匹配 #不确定性 #VLA #故障检测
