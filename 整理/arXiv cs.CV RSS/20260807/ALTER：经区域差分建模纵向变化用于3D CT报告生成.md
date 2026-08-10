---
published: 2026-08-07
title: "ALTER：经区域差分建模纵向变化用于 3D CT 报告生成"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/ALTER- Modeling Longitudinal Changes via Regional Differencing for 3D CT Report Generation.md"
source_note: "[[信息源/arXiv cs.CV RSS/ALTER- Modeling Longitudinal Changes via Regional Differencing for 3D CT Report Generation]]"
source_sha256: 81f5f04733f11637a6d2e601df9de1b8fd78ef32ee396cf229124771eedfefad
original_url: "https://arxiv.org/abs/2608.05615"
processed: 2026-08-07
language: zh-CN
---

# ALTER：经区域差分建模纵向变化用于 3D CT 报告生成

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Dongchen Li, Jitao Liang, Wei Li
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05615)

## 摘要

- 计算机断层扫描（CT）广泛用于临床诊断与纵向随访，但从三维（3D）CT 自动生成准确完整放射学报告仍具挑战。
- 现有方法通过建模解剖区域改进图像与文本的细粒度对应，但仍以当前检查为中心，患者特定个体区域内纵向变化建模不足；区间变化常分布于多个解剖区域，使整体纵向状态连贯评估复杂。
- 提出解剖定位时序证据表征（ALTER）：全局先验整合（GPI）纳入先前 CT 与报告为当前检查建立历史上下文；区域代理差分（RPD）使每个当前解剖区域从先验体积单一共享编码检索历史代理并推导局部区间证据；区间变化融合（ICF）进一步结合当前异常状态与区域分布差异，将联合表征转为变化感知软提示引导报告生成。
- ALTER 在 RadGenome-ChestCT 验证与 CTRG-Chest-548K 测试集多数评估指标取得 SOTA；代码与数据预处理细节公开。

## 正文

计算机断层扫描（CT）广泛用于临床诊断与纵向随访，然而从三维（3D）CT 自动生成准确且完整的放射学报告仍具挑战。现有方法通过建模解剖区域改进图像与文本之间的细粒度对应，但仍以当前检查为中心。因此，个体区域内患者特定的纵向变化仍未得到充分建模。同时，区间变化常分布于多个解剖区域，使对整体纵向状态的连贯评估复杂化。研究提出解剖定位时序证据表征（Anatomically Localized Temporal Evidence Representation, ALTER）解决这些局限。全局先验整合（Global Prior Integration, GPI）纳入先前的 CT 与报告，为当前检查建立历史上下文。区域代理差分（Regional Proxy Differencing, RPD）使每个当前解剖区域都能从先验体积的单一共享编码中检索历史代理，并推导局部化的区间证据。区间变化融合（Interval Change Fusion, ICF）进一步结合当前异常状态与区域分布差异，将其联合表征转化为变化感知的软提示，引导报告生成。ALTER 在 RadGenome-ChestCT 验证集与 CTRG-Chest-548K 测试集的大多数评估指标上取得最先进结果。代码与数据预处理细节见 https://github.com/peytonkarlie/ALTER/tree/main。

## 关键词

CT 报告生成、纵向变化、区域差分、医学影像、时序证据
