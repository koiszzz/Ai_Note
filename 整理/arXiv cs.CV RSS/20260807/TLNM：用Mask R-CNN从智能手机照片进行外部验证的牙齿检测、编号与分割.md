---
published: 2026-08-07
title: "TLNM：用 Mask R-CNN 从智能手机照片进行外部验证的牙齿检测、编号与分割"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/TLNM- Externally Validated Tooth Detection, Numbering and Segmentation from Smartphone Photographs U.md"
source_note: "[[信息源/arXiv cs.CV RSS/TLNM- Externally Validated Tooth Detection, Numbering and Segmentation from Smartphone Photographs U]]"
source_sha256: ca612363b11cd5879e67ba4d5a7d362be63428d8c5435ae248dc14d8755f81bb
original_url: "https://arxiv.org/abs/2608.06275"
processed: 2026-08-07
language: zh-CN
---

# TLNM：用 Mask R-CNN 从智能手机照片进行外部验证的牙齿检测、编号与分割

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Arash Nedaei, Henna Tiensuu, Elina Väyrynen, Saujanya Karki, Jaakko Suutala
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.06275)

## 摘要

- 口腔健康问题影响全球数十亿人，但专业牙科护理的成本与有限可及性阻碍预防性口腔保健；研究依赖临床级放射照片或口内相机图像，公众自我筛查不可用。
- 研究引入智能手机照片的牙齿定位与编号模型；开发定制 Mask 区域卷积神经网络（Mask R-CNN）流水线，在 1272 张标注智能手机图像上训练。
- 应对患者生成健康数据变异性：流水线纳入两个域知情机制：掩码灰世界白平衡算法缓解人工色偏，解剖约束检测层强制结构有效性并抑制误报。
- 评估四阶段：内部保留测试、独立外部测试、描述性消融与基于折的训练稳定性分析（用相同内部测试集）；内部测试集实例掩码 AP@50 0.818、类感知 PQ 0.780、操作 F1 0.884；十次运行实例掩码 AP@50 标准差 0.009；外部数据集 AP@50 0.901、PQ 0.832、F1 0.928（尽管人群、传感器与采集协议不同）；推理流水线作为开源容器化 API 提供；消费者级智能手机影像可支持自动化牙齿级解剖映射，为资源受限环境远程筛查与远程牙科提供可扩展、潜在低成本基础。

## 正文

口腔健康问题影响全球数十亿人，但专业牙科护理的成本与有限可及性阻碍预防性口腔保健。研究依赖临床级放射照片或口内相机图像，这些对公众自我筛查不可用。本研究引入一个用于智能手机照片的牙齿定位与编号模型。研究开发了一个定制的 Mask 区域卷积神经网络（Mask R-CNN）流水线，在 1,272 张标注的智能手机图像上训练。为应对患者生成健康数据（patient-generated health data）的变异性，流水线纳入两个域知情机制：一个掩码灰世界白平衡（masked gray-world white-balancing）算法以缓解人工色偏，以及一个解剖约束检测层以强制结构有效性并抑制误报。评估包含四个阶段：内部保留测试、独立外部测试、描述性消融研究，以及使用相同内部测试集的基于折的训练稳定性分析。在内部测试集上，模型实现实例掩码 AP@50 0.818、类感知 PQ 0.780 与操作 F1 0.884。训练稳定性显示有限的模型间变异：十次运行中实例掩码 AP@50 的标准差为 0.009。在外部数据集上，尽管人群、传感器与采集协议存在差异，模型实现实例掩码 AP@50 0.901、类感知 PQ 0.832 与操作 F1 0.928。推理流水线作为开源、容器化 API 提供。这些结果表明，消费级智能手机影像可以支持自动化的牙齿级解剖映射，为资源受限环境中的远程筛查与远程牙科提供可扩展、潜在低成本的基础。

## 关键词

牙齿检测、智能手机、Mask R-CNN、远程牙科、分割
