---
title: "LAEF：迈向即时诊断的导联无关心电图基础模型"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/LAEF- A Lead-Agnostic ECG Foundation Model Towards Point-of-Care Diagnostics.md"
source_note: "[[信息源/arXiv cs.LG RSS/LAEF- A Lead-Agnostic ECG Foundation Model Towards Point-of-Care Diagnostics.]]"
source_sha256: 75376e307396f011fcb5ac52b770c8008b45a58f8d1369094defb99598790b76
original_url: "https://arxiv.org/abs/2608.03690"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# LAEF：迈向即时诊断的导联无关心电图基础模型

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Edoardo Coppola、Stefano Fiorini、Pietro Liò、Mattia Savardi、Alberto Signoroni
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03690)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/LAEF- A Lead-Agnostic ECG Foundation Model Towards Point-of-Care Diagnostics.|查看原始文件]]

## 摘要

- 智能手表与手持式心电图记录仪等即时护理心脏设备通常只采集 1–2 个导联，但现有 ECG 基础模型在架构上被限制为固定 12 导联输入，在这些缩减配置下性能退化或失效。
- 引入 LAEF（Lead-Agnostic ECG Foundation，导联无关心电图基础模型），一个 7M 参数 ECG 基础模型，能原生处理任意导联子集，无需零填充或架构修改。
- LAEF 把 ECG 表示为可变大小的时空图，具有生理学启发的导联内与导联间连接，由图注意力网络处理，网络规模随活动导联数自然扩展。
- 在 9.2M 条 12 导联 ECG 上通过带随机导联采样的掩码节点建模预训练，LAEF 学到对导联配置鲁棒的表示；在 18 个下游数据集上，全导联可用时 LAEF 与规模大 12 倍以上的专用 12 导联基线相当。
- 在面向即时护理的诊断（1–2 导联）下：单个随机采样导联时在 18 个数据集中的 17 个上优于所有零填充替代方案，2 导联时在 18 个中的 14 个上优于，平均 AUROC 提升 +3.2 点。
- 表示分析把该优势归于架构上的导联无关性；跨 164 种心血管状况的导联重要性研究表明，群体级性能在单个标准输入导联上保持稳定，同时仍恢复既有临床的导联—状况关联。

## 正文

论文编号：arXiv:2608.03690v1（更新类型：new）。以下为摘要全文翻译。

智能手表和手持式 ECG 记录仪等即时护理心脏设备通常捕获 1–2 个导联，然而现有 ECG 基础模型在架构上受限于固定的 12 导联输入，在这些缩减配置下会退化或失效。我们引入 LAEF（Lead-Agnostic ECG Foundation，导联无关心电图基础模型），一个 7M 参数的 ECG 基础模型，可以原生处理任意导联子集，无需零填充或架构修改。LAEF 把 ECG 表示为可变大小的时空图，具有生理学启发的导联内与导联间连接，由图注意力网络处理，该网络规模随活动导联数自然扩展。LAEF 在 9.2M 条 12 导联 ECG 上通过带随机导联采样的掩码节点建模进行预训练，学到对导联配置鲁棒的表示。在 18 个下游数据集上，LAEF 在全导联可用时与规模大 12 倍的专用 12 导联基线相当。在直接面向即时护理的诊断（1–2 导联）下，它在单个随机采样导联下于 18 个数据集中的 17 个上优于所有零填充替代方案，在 2 导联下于 18 个中的 14 个上优于，平均 AUROC 提升 +3.2 点。表示分析把这一优势归于架构上的导联无关性，而一项跨 164 种心血管状况的导联重要性研究表明，群体级性能在单个标准输入导联下保持稳定，同时仍然恢复既有的临床导联—状况关联。

## 关键词

#心电图 #基础模型 #导联无关 #图注意力网络 #即时护理
