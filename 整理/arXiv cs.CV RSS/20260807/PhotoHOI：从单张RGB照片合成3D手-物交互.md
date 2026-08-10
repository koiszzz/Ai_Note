---
published: 2026-08-07
title: "PhotoHOI：从单张 RGB 照片合成 3D 手-物交互"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/PhotoHOI- Synthesizing 3D Hand-Object Interactions from a Single RGB Photograph.md"
source_note: "[[信息源/arXiv cs.CV RSS/PhotoHOI- Synthesizing 3D Hand-Object Interactions from a Single RGB Photograph]]"
source_sha256: 9d16bce3550f39f72ffbe4d6b0bf0e47c1677da61a2a8cf0210b4b677c828b09
original_url: "https://arxiv.org/abs/2608.01905"
processed: 2026-08-07
language: zh-CN
---

# PhotoHOI：从单张 RGB 照片合成 3D 手-物交互

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Zhenhao Zhang, Jiajun Zhang, Wei Min, Yebin Liu
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.01905)

## 摘要

- 手-物交互（HOI）是基本人类行为，在 AR/VR、数字人与具身交互有广泛应用；现有方法通常要求预定义对象几何、对象轨迹或任务特定条件，限制其与自然真实输入的使用。
- 研究更实际问题：从单张 RGB 照片与开放词汇语言指令合成 3D 手-物交互序列，引入 PhotoHOI。
- PhotoHOI 先用视觉语言模型将输入图像与指令解析为结构化任务规格（交互对象、目标区域与空间关系）；再恢复紧凑任务相关 3D 场景，基于恢复对象状态、支撑关系与周围场景几何规划平滑碰撞感知对象轨迹；为合成泛化到真实照片与未见对象的手部运动，从大规模可供性与 HOI 数据学习可迁移任务条件接触与接触条件抓取先验；抓取在学习潜空间精化，将优化约束到合理手姿态流形。
- GRAB 与 H2O 实验显示相对代表性基线改进接触质量并减少穿透；真实照片结果进一步显示更高任务成功与场景一致性，以及对未见对象与开放词汇指令的泛化。

## 正文

手-物交互（hand-object interaction, HOI）是一种基本的人类行为，在 AR/VR、数字人与具身交互中有广泛的应用。现有方法通常需要预定义的对象几何、对象轨迹或任务特定条件，限制它们与自然真实世界输入的使用。为解决该问题，研究考察一个更实际的问题：从单张 RGB 照片与开放词汇语言指令合成 3D 手-物交互序列，并引入 PhotoHOI。PhotoHOI 首先使用视觉语言模型将输入图像与指令解析为结构化任务规格，包括交互对象、目标区域与空间关系。然后恢复一个紧凑的任务相关 3D 场景，并基于恢复的对象状态、支撑关系与周围场景几何规划一条平滑、碰撞感知的对象轨迹。为合成能泛化到真实世界照片与未见对象的手部运动，研究从大规模可供性与 HOI 数据学习可迁移的任务条件接触（task-conditioned contact）与接触条件抓取（contact-conditioned grasp）先验。抓取进一步在一个学习潜空间中精化，将优化约束到一个合理的姿态流形。GRAB 与 H2O 上的实验表明，相对代表性基线改进了接触质量并减少了穿透。真实世界照片上的结果进一步展示了更高的任务成功率与场景一致性，以及对未见对象与开放词汇指令的泛化。

## 关键词

手-物交互、3D 合成、开放词汇、抓取、接触
