---
published: 2026-08-07
title: "SCD4VPR：长期视觉位置识别数据库更新的多模态场景变化检测"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/SCD4VPR- Multi-modal Scene Change Detection for Long-term Visual Place Recognition Database Update.md"
source_note: "[[信息源/arXiv cs.CV RSS/SCD4VPR- Multi-modal Scene Change Detection for Long-term Visual Place Recognition Database Update]]"
source_sha256: 9308e360f2269060c2a15b99fd33593088ab53f34cb75976335ad3142d23a5e1
original_url: "https://arxiv.org/abs/2604.11402"
processed: 2026-08-07
language: zh-CN
---

# SCD4VPR：长期视觉位置识别数据库更新的多模态场景变化检测

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Diwei Sheng, Vijayraj Gohil, Satyam Gaba, Zihan Liu, Giles Hamilton-Fletcher, John-Ross Rizzo, Yongqing Liang, Chen Feng
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2604.11402)

## 摘要

- 移动机器人长期自主需要地图随环境随时间变化保持准确；视觉位置识别（VPR）——核心定位能力——随查询与数据库图像时间差距增长而急剧退化，尤其跨季节过渡。
- 场景变化检测（SCD）为数据库维护提供原则性机制，但现有方法依赖无法区分结构变化与视点诱导差异的二元单模态视觉特征——正确更新决策必需该区分。
- 提出 SCD4VPR：在统一视觉语言框架中联合推理什么变了并区分真实变化与视点诱导差异的场景变化检测；经跨模态注意力融合 VLM 生成语义描述与视觉特征，并用几何-语义匹配精化预测，产生分别识别对象变化、外观变化与视点诱导变化的多类变化掩码。
- 引入 NYC-CD：首个真实街道视图 SCD 基准，8122 图像对带像素级多类标注；四个 SCD 基准实验显示 SCD4VPR 一致改进三个架构不同骨干；受控 VPR 数据库维护实验（NYU-VPR，夏至冬末）确认数据库不变时检索性能大幅退化，SCD4VPR 引导更新恢复大部分损失（最大时间差距 +30.1 R@1），同时数据库远比朴素追加紧凑。

## 正文

移动机器人的长期自主性要求地图在环境随时间变化时保持准确。视觉位置识别（Visual Place Recognition, VPR）——一项核心定位能力——随着查询与数据库图像之间的时间差距增长而急剧退化，尤其在跨季节过渡时。场景变化检测（Scene Change Detection, SCD）为数据库维护提供原则性机制，但现有方法依赖二元的、单模态视觉特征，无法区分结构变化与视点诱导的差异——这是正确更新决策所必需的区别。研究提出 SCD4VPR，一个在统一视觉语言框架中联合推理什么发生了变化、并区分真实变化与视点诱导差异的场景变化检测。SCD4VPR 经跨模态注意力融合 VLM 生成的语义描述与视觉特征，并以几何-语义匹配精化预测，产生分别识别对象变化、外观变化与视点诱导变化的多类变化掩码。研究引入 NYC-CD，第一个真实世界的街道视图 SCD 基准：8,122 个图像对带像素级多类标注。四个 SCD 基准上的实验表明，SCD4VPR 一致改进三个架构不同的骨干。在一个覆盖夏季到冬末的受控 NYU-VPR VPR 数据库维护实验中，研究确认数据库保持不变时检索性能大幅退化，并显示 SCD4VPR 引导的更新恢复了大部分损失（最大时间差距 +30.1 R@1），同时保持数据库远比朴素追加紧凑。

## 关键词

场景变化检测、视觉位置识别、数据库维护、多模态、VLM
