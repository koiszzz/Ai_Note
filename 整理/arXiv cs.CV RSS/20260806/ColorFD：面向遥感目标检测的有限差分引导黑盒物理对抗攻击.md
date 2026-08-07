---
published: 2026-08-06
title: ColorFD：面向遥感目标检测的有限差分引导黑盒物理对抗攻击
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/ColorFD- A Finite-Difference Guided Black-Box Physical Adversarial Attack for Remote Sensing Object .md
source_note: "[[信息源/arXiv cs.CV RSS/ColorFD- A Finite-Difference Guided Black-Box Physical Adversarial Attack for Remote Sensing Object ]]"
source_sha256: 7d3a39d5f5bf7647bbc4a21076c56ba99e5a7950ac1179410d2751f46e5ce126
original_url: https://arxiv.org/abs/2608.04559
processed: 2026-08-07
language: zh-CN
---

# ColorFD：面向遥感目标检测的有限差分引导黑盒物理对抗攻击

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04559)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/ColorFD- A Finite-Difference Guided Black-Box Physical Adversarial Attack for Remote Sensing Object |查看原始文件]]

## 摘要

- 提出 ColorFD：基于多个纯色补丁的黑盒物理攻击，补丁位置与颜色参数通过差分进化（DE）联合优化
- 逐目标适应度与选择机制评估每个目标的攻击状态，在进化过程中保留目标特定的改进；两种引导策略进一步约束补丁搜索空间
- 关键区域定位通过有限差分颜色探测识别敏感区域；共性特征提取提供类别级空间先验并避免重复定位
- 在 YOLOv3u、YOLOv5u 和 Faster R-CNN 上优于所测黑盒补丁方法，与强白盒基线竞争；物理实验证明纯色补丁可从数字域迁移到真实成像条件

## 正文

尽管基于深度神经网络的遥感目标检测器已经取得了强劲的性能，它们仍然容易受到对抗性扰动的影响。现有研究主要集中在数字或白盒设置上，而黑盒物理攻击仍未得到充分探索。这类攻击往往受限于有限的物理可行性以及高维搜索空间中低效的优化。为应对这些挑战，本文提出 ColorFD，一种基于多个纯色补丁的黑盒物理攻击。补丁位置和颜色参数使用差分进化（Differential Evolution，DE）联合优化。逐目标适应度与选择机制评估每个目标的攻击状态，并在进化过程中保留目标特定的改进。两种引导策略进一步约束补丁搜索空间：关键区域定位（Key-region localization）通过有限差分颜色探测识别敏感区域；共性特征提取（Common-feature extraction）提供类别级空间先验并避免重复定位。虽然评估是在飞机上进行的，但该公式本身并不限于这一类别。在 YOLOv3u、YOLOv5u 和 Faster R-CNN 上的实验表明，ColorFD 在所有被评估的检测器上都优于所测试的黑盒补丁方法，并与强白盒基线保持竞争力。物理世界实验进一步证明，优化后的纯色补丁可以从数字域迁移到真实成像条件。

## 关键词

#对抗攻击 #黑盒攻击 #物理攻击 #遥感目标检测 #差分进化
