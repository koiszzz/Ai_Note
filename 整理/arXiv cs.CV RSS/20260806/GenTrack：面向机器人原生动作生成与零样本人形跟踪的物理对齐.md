---
published: 2026-08-06
title: GenTrack：面向机器人原生动作生成与零样本人形跟踪的物理对齐
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/GenTrack- Physical Alignment for Robot-Native Motion Generation and Zero-Shot Humanoid Tracking.md
source_note: "[[信息源/arXiv cs.CV RSS/GenTrack- Physical Alignment for Robot-Native Motion Generation and Zero-Shot Humanoid Tracking]]"
source_sha256: fd2306fc6002e5455aa893080407674377be9eae3030f3edf1ee26b4c9cde450
original_url: https://arxiv.org/abs/2608.01410
processed: 2026-08-07
language: zh-CN
---

# GenTrack：面向机器人原生动作生成与零样本人形跟踪的物理对齐

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.01410)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/GenTrack- Physical Alignment for Robot-Native Motion Generation and Zero-Shot Humanoid Tracking|查看原始文件]]

## 摘要

- 提出 GenTrack：在线生成器—跟踪器框架，交替进行基于执行的分组相对生成器对齐与在新生成参考动作上的跟踪器训练，以锚定和排练约束漂移
- 在 Unitree G1 上以 ProtoMotions 与 SONIC 为骨干评估，覆盖 AMASS、LAFAN 公开基准及含 1,024 对提示—动作的野外分布外测试集
- 在线协同训练持续产出可执行性更强、语义对齐更好的生成器与零样本覆盖显著更广的跟踪器，缩小重定向参考与机器人原生动作间的可执行性差距，无需额外数据采集

## 正文

通用人形跟踪器可以执行多样化的参考动作，但其零样本覆盖依赖规模庞大且扩展成本高昂的具体体验语料库（embodied corpora）。文本到动作生成器提供可扩展的监督，但在人类动作数据或重定向数据上训练的模型继承了运动学合理性（kinematic plausibility）与机器人可执行性（robot executability）之间的差距。现有单向流水线要么固定生成的语料库，要么固定奖励跟踪器。我们提出 GenTrack，一个在线生成器—跟踪器框架，交替进行基于执行的分组相对生成器对齐（execution-grounded, group-relative generator alignment）与在新生成参考动作上的跟踪器训练；锚定（anchoring）和排练（rehearsal）约束漂移。在 Unitree G1 上，我们以 ProtoMotions 和 SONIC 为骨干评估 GenTrack，涵盖三个零样本跟踪划分，包括公开的 AMASS 与 LAFAN 基准，以及一个包含 1,024 对提示—动作对、野外采集的私有分布外（out-of-distribution）测试集。在线协同训练策略持续产出可执行性更强、语义对齐更好的动作生成器，以及零样本覆盖显著更广、跟踪精度更高的跟踪器，尤其是在分布外参考动作上。这些结果表明，联合在线后训练有效缩小了重定向参考动作与机器人原生动作之间的可执行性差距，在不额外收集数据、超越静态参考池局限的情况下推进零样本人形控制。

## 关键词

#人形机器人 #文本到动作生成 #零样本跟踪 #在线协同训练
