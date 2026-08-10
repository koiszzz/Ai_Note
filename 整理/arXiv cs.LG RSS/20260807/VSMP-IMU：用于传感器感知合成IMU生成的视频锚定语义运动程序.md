---
published: 2026-08-07
title: "VSMP-IMU：用于传感器感知合成 IMU 生成的视频锚定语义运动程序"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/VSMP-IMU- Video-Grounded Semantic Motion Programs for Sensor-Aware Synthetic IMU Generation.md"
source_note: "[[信息源/arXiv cs.LG RSS/VSMP-IMU- Video-Grounded Semantic Motion Programs for Sensor-Aware Synthetic IMU Generation]]"
source_sha256: 4f4ccf4dd9ee0b4d15790332a1eaf4c8951078e08e1285105685f527b22224df
original_url: "https://arxiv.org/abs/2608.05782"
processed: 2026-08-07
language: zh-CN
---

# VSMP-IMU：用于传感器感知合成 IMU 生成的视频锚定语义运动程序

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Lala Shakti Swarup Ray, Vitor Fortes Rey, Mengxi Liu, Paul Lukowicz, Bo Zhou
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05782)

## 摘要

- 可穿戴人类活动识别（HAR）常受标注传感器数据稀缺限制，尤其低资源、类不平衡与主体泛化设定；合成 IMU 生成可减少该依赖并增强 HAR 机器学习模型性能，但现有方法面临未涵盖所有因素的权衡：视频驱动方法视觉锚定但对姿态估计误差敏感，文本驱动方法可控但常对活动实际执行方式锚定弱。
- 提出 VSMP-IMU：基于结构化语义运动程序（SMP）的视频锚定可控合成 IMU 生成框架，将活动定义语义与标签保持变化分离。
- 给定输入视频，VSMP-IMU 提取并增广 SMP、用其合成运动、将运动转为虚拟 IMU 信号，并将所得信号锚定到目标可穿戴域。
- 五个公开 IMU-HAR 数据集、留一主体评估下对照 SOTA 合成数据生成方法：VSMP-IMU 平均 Macro-F1 78.33%，较纯真实训练提升 9.77%、较最强先前合成基线提升 4.04%；减少训练样本的低资源设定中较纯真实训练提升 18.54%、平均超最强先前合成基线 6% 以上；长尾评估中尾类 Macro-F1 较纯真实训练提升 19.86%、较 SOTA 提升 4.76%。

## 正文

可穿戴人类活动识别（HAR）常受标注传感器数据稀缺限制，尤其在低资源、类不平衡与主体泛化设定中。合成 IMU 生成可以减少这种依赖并增强 HAR 机器学习模型性能，但现有方法面临一个未解决所有因素的权衡：视频驱动方法视觉锚定但对姿态估计误差敏感，而文本驱动方法可控但常对活动实际执行方式锚定弱。研究提出 VSMP-IMU，一个基于结构化语义运动程序（Semantic Motion Program, SMP）的视频锚定可控合成 IMU 生成框架，将活动定义语义与标签保持变化分离。给定输入视频，VSMP-IMU 提取并增广 SMP、用它合成运动、将运动转换为虚拟 IMU 信号，并将所得信号锚定到目标可穿戴域。研究在五个公开 IMU-HAR 数据集、留一主体评估下对照最先进合成数据生成方法评估 VSMP-IMU。VSMP-IMU 实现平均 Macro-F1 78.33%，较纯真实训练提升 9.77%、较最强先前合成基线提升 4.04%。在减少训练数据样本的低资源设定中，它较纯真实训练提升 18.54%，平均超过最强先前合成基线 6% 以上。在不平衡数据集的长尾评估下，它使尾类 Macro-F1 较纯真实训练提升 19.86%、较 SOTA 提升 4.76%。这些结果表明，结构化视频锚定语义为可控、可穿戴相关的合成传感器数据生成提供实用基础。

## 关键词

HAR、合成 IMU、语义运动程序、视频锚定、可穿戴
