---
published: 2026-08-06
title: muSync-GS：面向天气与几何道路危险的物理同步驾驶视频合成
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/muSync-GS- Physics-Synchronized Driving Video Synthesis for Weather and Geometric Road Hazards.md
source_note: "[[信息源/arXiv cs.CV RSS/muSync-GS- Physics-Synchronized Driving Video Synthesis for Weather and Geometric Road Hazards|查看原始文件]]"
source_sha256: e7d01ee64f907f3ede635340437541f0488ba5cbfac97f487e01550cae7928cb
original_url: https://arxiv.org/abs/2608.04412
processed: 2026-08-07
language: zh-CN
---

# muSync-GS：面向天气与几何道路危险的物理同步驾驶视频合成

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04412)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/muSync-GS- Physics-Synchronized Driving Video Synthesis for Weather and Geometric Road Hazards|查看原始文件]]

## 摘要

- 高质量驾驶数据对自动驾驶系统与生成式世界模型至关重要，但恶劣天气、低轮胎—路面摩擦下制动、不平整道路几何等罕见安全关键场景的大规模采集成本高且有风险
- 现有视频生成与 3D 高斯编辑方法可修改天气外观或道路几何，但通常不将编辑与轮胎—路面相互作用和车辆动力学耦合
- 提出 muSync-GS：物理同步的驾驶视频合成框架；降水衍生的路面状态联合控制路面外观与轮胎摩擦，共享的道路高程剖面同时驱动可见道路几何编辑与车轴激励
- 标定的车辆模型预测速度、滑移率、法向载荷与俯仰角，用于构建自车相机轨迹与同步物理标注；在 12 个留出 CarSim 用例上，速度 RMSE 0.0273 m/s、俯仰 0.0590 度、滑移率 0.0101、每轮法向载荷 26.61 N

## 正文

高质量驾驶数据对自动驾驶系统和生成式世界模型至关重要。然而，涉及恶劣天气、低轮胎—路面摩擦下制动以及不平整道路几何的罕见安全关键场景，在大规模条件下采集成本高昂且风险巨大。现有的视频生成和 3D 高斯编辑方法可以修改天气外观或道路几何，但通常不会将这些编辑与轮胎—路面相互作用和车辆动力学耦合。结果，即使修改后的道路状况本应改变制动、车轮滑移、载荷转移和自车相机运动，编辑后的视频仍可能保留原始轨迹。

我们提出 muSync-GS，一个面向恶劣天气与道路高程危险场景的物理同步驾驶视频合成框架。由降水衍生的路面状态联合控制路面外观与轮胎摩擦，而共享的道路高程剖面同时驱动可见的道路几何编辑与车轴激励。一个经过标定的车辆模型预测速度、滑移率、法向载荷和俯仰角，用于构建自车相机轨迹与同步的物理标注。

在覆盖降水量水平、制动输入与道路剖面参数的 12 个留出 CarSim 用例中，该模型在速度、俯仰、滑移率与每轮法向载荷上分别达到平均逐用例 RMSE 0.0273 m/s、0.0590 度、0.0101 与 26.61 N。结合重建场景实验，这些结果表明 muSync-GS 能在留出的控制条件下准确复现车辆响应，同时将其与可控场景编辑和自车相机运动同步。

## 关键词

#自动驾驶 #视频合成 #3D高斯泼溅 #车辆动力学 #世界模型
