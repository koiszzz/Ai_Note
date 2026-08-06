---
published: 2026-08-05
title: "UniNav：视觉导航的统一世界-动作扩散模型"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/UniNav- A Unified World-Action Diffusion Model for Visual Navigation.md"
source_note: "[[信息源/arXiv cs.AI RSS/UniNav- A Unified World-Action Diffusion Model for Visual Navigation]]"
source_sha256: 4d482b5702c8bb0c829e0a5076c843b8096cced27d8e6084141c2d70e3d7090c
original_url: "https://arxiv.org/abs/2608.03244"
processed: 2026-08-05
language: zh-CN
---

# UniNav：视觉导航的统一世界-动作扩散模型

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Changqing Zhou、Yueru Luo、Zeyu Jiang 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03244)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/UniNav- A Unified World-Action Diffusion Model for Visual Navigation|查看原始文件]]

## 摘要

- 提出 UniNav，统一世界-动作模型：通过单一扩散过程生成未来视觉观测与连续路径点轨迹——给定历史帧与目标图像，在单一 transformer 内联合去噪视觉与路径点 token，统一未来预测与动作生成；融入几何感知相机 token 改善空间接地。
- 同时在带轨迹标签的导航数据与仅视频数据上训练，使模型受益于无需路径点标注的多样视频；基于统一框架引入两个变体：UniNav-Full 联合预测可解释未来观测与其对应轨迹；UniNav-Fast 推理时移除未来图像 token 实现高效轨迹预测。
- 图像目标视觉导航是具身智能体的基本能力；现有导航策略高效预测路径点轨迹但缺乏视觉预见，而导航世界模型能预见未来观测但常需昂贵规划 rollout。
- 导航基准实验显示 UniNav 在所有数据集上相对最强基线的 ATE 更优；一步推理下 UniNav-Fast 延迟 0.1 秒且无显著准确率下降；代码将发布。

## 正文

论文编号：arXiv:2608.03244v1（更新类型：new）。以下为摘要全文翻译。

图像目标视觉导航是具身智能体的基本能力。现有导航策略高效预测路径点轨迹，但缺乏视觉预见；而导航世界模型可以预见未来观测，但往往需要昂贵的规划 rollout。我们提出 UniNav，一个统一的世界-动作模型：通过单一扩散过程生成未来视觉观测与连续路径点轨迹。给定历史帧与目标图像，UniNav 在单一 transformer 内联合去噪视觉与路径点 token，在共享框架中统一未来预测与动作生成。为改善空间接地，我们融入几何感知的相机 token。我们还在带轨迹标签的导航数据与仅视频数据上训练，使模型能够受益于无路径点标注的多样视频。基于这一统一框架，我们引入两个变体：UniNav-Full 联合预测可解释的未来观测与其对应轨迹；UniNav-Fast 在推理时移除未来图像 token，实现高效轨迹预测。导航基准上的实验表明，UniNav 在所有数据集上的 ATE 都优于最强基线。一步推理下，UniNav-Fast 实现 0.1 秒延迟而无显著准确率下降。代码将发布。

## 关键词

#视觉导航 #世界模型 #扩散模型 #具身智能
