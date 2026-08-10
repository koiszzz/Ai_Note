---
published: 2026-08-07
title: "Wan-Animate-2：推动角色动画的应用边界"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/Wan-Animate-2- Pushing the Application Boundaries of Character Animation.md"
source_note: "[[信息源/arXiv cs.CV RSS/Wan-Animate-2- Pushing the Application Boundaries of Character Animation]]"
source_sha256: 423d6ed32dad345e00a7a49c8108fc327c3de387ed27acdd9638bc4919623815
original_url: "https://arxiv.org/abs/2608.06009"
processed: 2026-08-07
language: zh-CN
---

# Wan-Animate-2：推动角色动画的应用边界

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Guangyuan Wang, Li Hu, Dechao Meng, Zhongyi Zhang, Peng Zhang, Mingyang Huang, Ruoshi Zhang, Ke Sun, Zhe Zhang, Xingjun Wang, Gang Cheng, Bang Zhang
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.06009)

## 摘要

- 角色图像动画仍是计算机视觉基础但具挑战的任务；现有方法可大致归为三类：基于显式运动表征的方法受提取误差与身份漂移困扰；基于隐式运动特征的方法经压缩丢失细粒度动力学；上下文学习方法避免中间表征但招致过高计算成本。
- 所有当前系统设计为离线合成，无法满足数字虚拟形象与直播主播等交互应用的实时要求。
- 呈现 Wan-Animate-2：端到端角色动画框架，在重新设计的扩散 transformer 中直接消费驱动视频；架构经完全消除中间运动提取器实现优越运动保真度与身份保留；引入文本驱动视点控制，将输出相机透视与驱动视频解耦——先前依赖显式运动表征的角色动画方法很少支持的能力。
- 超越生成质量，呈现 Wan-Animate-2-Lite：高效变体，经三阶段训练范式（带误差缓冲机制的教师强制预训练、分块反向传播自强制蒸馏）将推理延迟降至实时阈值；实现交互应用流式角色动画，开启先前不可行的新部署场景；定性评估与用户研究显示 Wan-Animate-2 跨多样角色与运动模式高保真动画结果；将公开 Wan-Animate-2-Base 模型权重。

## 正文

角色图像动画仍是计算机视觉中基础但具挑战性的任务。现有方法可以大致分为三种范式：基于显式运动表征的方法受提取误差与身份漂移困扰；基于隐式运动特征的方法通过压缩丢失细粒度动力学；上下文学习方法避免中间表征，但产生过高的计算成本。此外，所有当前系统都设计用于离线合成，无法满足数字虚拟形象与直播主播等交互应用的实时要求。为克服这些局限，研究呈现 Wan-Animate-2，一个端到端角色动画框架：在重新设计的扩散 transformer 中直接消费驱动视频。该架构通过完全消除中间运动提取器，实现优越的运动保真度与身份保留。研究进一步引入文本驱动的视点控制，将输出相机透视与驱动视频解耦——这是先前依赖显式运动表征的角色动画方法很少支持的能力。超越生成质量，研究呈现 Wan-Animate-2-Lite，一个高效变体：通过三阶段训练范式（带误差缓冲机制的教师强制预训练，以及带分块反向传播的自强制蒸馏），将推理延迟降低到实时阈值。这为交互应用实现流式角色动画，开启了先前不可行的新部署场景。定性评估与用户研究表明，Wan-Animate-2 跨多样角色与运动模式实现高保真动画结果。为促进进一步研究与社区发展，研究将公开 Wan-Animate-2-Base 模型权重。

## 关键词

角色动画、扩散 transformer、实时、身份保留、视点控制
