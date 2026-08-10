---
published: 2026-08-07
title: "Volve 油田上的接地井况异常检测：构建标签、基线与双头模型"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Grounded Well-Condition Anomaly Detection on the Volve Field- Constructed Labels, a Baseline, and a .md"
source_note: "[[信息源/arXiv cs.AI RSS/Grounded Well-Condition Anomaly Detection on the Volve Field- Constructed Labels, a Baseline, and a ]]"
source_sha256: 4d0c0c42d45c0bd0629079f21dcf9e9579da6290ac191f0e9f5625a2004853dd
original_url: "https://arxiv.org/abs/2608.05685"
processed: 2026-08-07
language: zh-CN
---

# Volve 油田上的接地井况异常检测：构建标签、基线与双头模型

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Gospel Bassey, Vincent Fakiyesi
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05685)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Grounded Well-Condition Anomaly Detection on the Volve Field- Constructed Labels, a Baseline, and a Dual-Hea|查看原始文件]]

## 摘要

- 大多数机器状况监测的公开基准来自测试台，故障被故意诱导且每个事件已知；真实生产油田很少如此——它们给出无故障日志的传感器历史，正是异常检测方法必须自行发明标签、安静假设可能悄然渗入的情况。
- 使用 Equinor 发布的开放 Volve 油田数据，认真对待此类数据集通常跳过的两件事：①构建异常标签——不仅是在数字中的模式，还对照油田自身工程文档关于物理上可能出错的说明检查，并发布每个标签背后的推理；②测试这些构建标签是否可学习，使用无监督基线与标记事件发生时间与类型的小型双头模型（思想源自早期金属零件缺陷检测工作）。
- 结果是诚实的：未见标签的无监督检测器仍落在规则标记的相同区域，说明标签并非任意；紧凑监督模型在未见井上很好恢复事件存在性与类型，仅在时间上大致定位事件。
- 报告有效、无效与中间每一项假设；数据集、接地标签、逐标签溯源、基线分数、训练模型与代码在 CC-BY-NC-SA 4.0 下公开发布。

## 正文

大多数机器状况监测的公开基准来自测试台，故障被故意诱导且每个事件已知。真实生产油田很少提供这些。它们给你没有故障日志的传感器历史，这正是异常检测方法必须自行发明标签、安静假设可能悄然渗入的情况。我们使用 Equinor 发布的开放 Volve 油田数据，并认真对待此类数据集通常跳过的两件事。首先，我们构建异常标签——不仅是数字中的模式，还对照油田自身工程文档关于物理上可能出错的说明检查，并发布每个标签背后的推理。其次，我们测试这些构建标签是否可学习，同时使用无监督基线与一个小型双头模型（标记事件何时发生与何种类型），该想法源自我们在金属零件缺陷检测方面的早期工作。结果是诚实的。一个从未见过标签的无监督检测器仍落在我们规则标记的相同区域，告诉我们标签并非任意。一个紧凑的监督模型在它从未见过的井上很好地恢复事件存在性与类型，并且仅在时间上大致定位事件。我们报告有效的内容、无效的内容以及中间每项假设。数据集、接地标签、逐标签溯源、基线分数、训练模型与代码在 CC-BY-NC-SA 4.0 下公开发布。

## 关键词

#异常检测 #油田 #状况监测 #标签构建
