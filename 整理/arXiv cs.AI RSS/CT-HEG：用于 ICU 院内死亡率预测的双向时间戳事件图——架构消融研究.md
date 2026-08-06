---
title: "CT-HEG：用于 ICU 院内死亡率预测的双向时间戳事件图——架构消融研究"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/CT-HEG- A Bidirectional, Timestamp-Attributed Event Graph for ICU In-Hospital Mortality Prediction -.md"
source_note: "[[信息源/arXiv cs.AI RSS/CT-HEG- A Bidirectional, Timestamp-Attributed Event Graph for ICU In-Hospital Mortality Prediction -]]"
source_sha256: f8a6cfe5291511f2acd92eae9d12c06e763e9a87bbfd4ca81686f9a8747bae43
original_url: "https://arxiv.org/abs/2608.02663"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# CT-HEG：用于 ICU 院内死亡率预测的双向时间戳事件图——架构消融研究

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Mohammad Nasir Uddin 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02663)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/CT-HEG- A Bidirectional, Timestamp-Attributed Event Graph for ICU In-Hospital Mortality Prediction -|查看原始文件]]

## 摘要

- 引入连续时间异构 EHR 图（CT-HEG）模式：把每次 ICU 住院编码为带类型与时间戳的图，含三种节点（visit、vital、lab_event）与二维边属性（t_hours/48、value_norm），无需插值。
- 实例化为 CHIRP-Net，四层异构 GATv2Conv 网络，在 MIMIC-IV v3.1（31,142 次住院、LOS≥48h、13.4% 死亡率）上以五种子和自助置信区间评估，对比逻辑回归、mTAND、Transformer 与 GRU-D。
- CHIRP-Net 取得 5 种子平均 AUROC 0.8449±0.0071（AUPRC 0.4958±0.0209），集成达 AUROC 0.8618；移除反向边使 AUROC 下降 0.1968±0.0073；时间注意力边特征贡献 0.0247±0.0093；将异构边类型折叠为单一关系（参数减少 7 倍）在所有种子上优于完整模型。
- 校准后 ECE 为 0.0307；代码开源：https://github.com/nasiruddinstudents-ctrl/chirp-net-mimic-iv

## 正文

论文编号：arXiv:2608.02663v1（更新类型：cross）。以下为摘要全文翻译。

准确的 ICU 死亡率预测需要对异构实体类型间不规则的临床观测进行建模。现有序列模型能处理不规则采样，但忽略带类型的关联结构；现有图模型假定固定间隔输入。我们引入连续时间异构 EHR 图（CT-HEG）模式，并评估哪些架构选择驱动预测性能。CT-HEG 把每次 ICU 住院编码为带类型、带时间戳的图，含三种节点类型（visit、vital、lab_event）与编码时间与数值的二维边属性（t_hours/48、value_norm），无需插值。我们把 CT-HEG 实例化为 CHIRP-Net，一个四层异构 GATv2Conv 网络，在 MIMIC-IV v3.1（31,142 次住院、LOS≥48h、13.4% 死亡率）上以五种子和自助置信区间评估，对比逻辑回归、mTAND、Transformer 和 GRU-D，并进行消融研究。CHIRP-Net 取得 5 种子平均 AUROC 0.8449±0.0071（AUPRC 0.4958±0.0209）；集成模型 AUROC 为 0.8618（95% CI：0.8485–0.8745）。移除反向边使观测节点与 visit 读出断开，AUROC 下降 0.1968±0.0073。时间注意力边特征贡献 0.0247±0.0093 AUROC。把异构边类型折叠为单一关系（参数减少 7 倍）在所有种子上优于完整模型。校准后 ECE 为 0.0307。时间与人口统计亚组分析已探索但此处未报告，留待后续工作。双向连通性是模型能够使用其输入的前提，CT-HEG 在验证集拟合温度缩放后校准合理。这些结果支持 CT-HEG 用于不规则 EHR 数据；但在任何稳健性声明之前，外部验证、预指定的时间评估与人口统计公平性审计仍是必要的。代码：https://github.com/nasiruddinstudents-ctrl/chirp-net-mimic-iv

## 关键词

#ICU死亡率预测 #时序图 #EHR #异构图神经网络
