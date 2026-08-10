---
published: 2026-08-07
title: "LoDA：检测水平感知方法及对象级变化检测的多模态传感基准"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/LoDA- A Level of Detection Aware Method and a Multimodal Sensing Benchmark for Object Level Change D.md"
source_note: "[[信息源/arXiv cs.CV RSS/LoDA- A Level of Detection Aware Method and a Multimodal Sensing Benchmark for Object Level Change D]]"
source_sha256: ee19199aee70941321ebc081a53eeff768dc3ee14c26cd405ae0651591ac2c7d
original_url: "https://arxiv.org/abs/2608.05356"
processed: 2026-08-07
language: zh-CN
---

# LoDA：检测水平感知方法及对象级变化检测的多模态传感基准

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Haitian Wang, Xinyu Wang, Sheldon Fung, Xian Zhang, Zichen Geng
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05356)

## 摘要

- 高清 3D LiDAR 地图对自动驾驶与智慧城市服务重要，需要可靠检测多时相城市 LiDAR 中的对象级变化以保持数字地图与物理世界对齐。
- 现有方法（从栅格高度差分到深度图像与点云网络）常保持基于瓦片、阈值驱动，产生无显式检测限或一致对象级标签的逐点分数。
- 提出对象级 3D 变化检测流水线：整合检测限感知配准、带规则基语义与实例分割的几何驱动对象代理，以及高度、体积与表面法线方向的位移线索，分配带置信度的五类变化标签；经解耦配准、几何与语义，流水线将姿态不确定性传播到空间变化检测限，稳定跨 epoch 对应，抑制残差错位与密度变化引起的假变化。
- 呈现 LoDA：Subiaco 区的检测水平（LoD）感知基准，带 LiDAR、GNSS 与 IMU 支持构建的融合多时相车辆-LiDAR 地图、语义实例与对象级标注；基准上方法达 95.0% 准确率、90.8% 宏观 F1 与 83.0% 宏观 IoU，超最佳基线 8.7 IoU 点与 4.4 F1 点；官方逐点协议下 Urb3DCD-V2 上达 96.81% 平均准确率与 89.52% 平均变化 IoU，相对最强报告基线 mAcc 改进 1.36 点、mIoUch 改进 3.18 点。

## 正文

高清 3D LiDAR 地图对自动驾驶与智慧城市服务很重要，这需要可靠检测多时相城市 LiDAR 中的对象级变化，以保持数字地图与物理世界对齐。现有方法——从栅格高度差分到深度图像与点云网络——常常保持基于瓦片、阈值驱动，产生没有显式检测限或一致对象级标签的逐点分数。研究提出一个对象级 3D 变化检测流水线：整合检测限感知配准（detection-limit-aware registration）、带规则基语义与实例分割的几何驱动对象代理（geometry-driven object proxies），以及高度、体积与表面法线方向的位移线索，分配带置信度的五类变化标签。通过解耦配准、几何与语义，该流水线将姿态不确定性传播到空间变化的检测限，稳定跨 epoch 对应，并抑制由残差错位与密度变化引起的假变化。研究还呈现 LoDA，一个用于 Subiaco 区的检测水平（level-of-detection, LoD）感知基准：带 LiDAR、GNSS 与 IMU 支持构建的融合多时相车辆-LiDAR 地图、语义实例与对象级标注。在该基准上，方法实现 95.0% 准确率、90.8% 宏观 F1 与 83.0% 宏观 IoU，超过最佳基线 8.7 IoU 点与 4.4 F1 点。在官方逐点协议下评估的公开 Urb3DCD-V2 基准上，它达到 96.81% 平均准确率与 89.52% 平均变化 IoU，相对最强报告基线 mAcc 改进 1.36 点、mIoUch 改进 3.18 点。

## 关键词

变化检测、LiDAR、对象级、多时相、基准
