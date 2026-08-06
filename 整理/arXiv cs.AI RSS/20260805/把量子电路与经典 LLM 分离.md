---
published: 2026-08-05
title: "把量子电路与经典 LLM 分离"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Separating quantum circuits from classical LLMs.md"
source_note: "[[信息源/arXiv cs.AI RSS/Separating quantum circuits from classical LLMs]]"
source_sha256: faa9929d38a95c7f8f15762e22571ea2a5e36d588c6913c7d8bce992d5ef8a26
original_url: "https://arxiv.org/abs/2608.03962"
processed: 2026-08-05
language: zh-CN
---

# 把量子电路与经典 LLM 分离

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Srinivasan Arunachalam、Arkopal Dutt、Hari Krovi 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03962)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Separating quantum circuits from classical LLMs|查看原始文件]]

## 摘要

- 现代大语言模型（Transformer 与扩散语言模型）围绕两个典型算法任务构建：预测与生成；在两种机制中证明低深度量子计算与相应有界资源经典语言模型架构之间的无条件分离。
- 分布分离：给出一个可由 QNC⁰ 电路（恒定深度有界扇入门量子电路族）采样的分布，任何带浅调度与去噪的恒定轮扩散语言模型（DLM）都无法在恒定距离内采样它，即使允许亚线性思维链与输出 token 修订/重掩码事件——现代 DLM 依赖的特征。
- 功能分离：给出一个可在 ∧∘QNC⁰[log log n]（O(log log n) 深度 QNC⁰ 电路族后接单个经典 AND 门）中计算的函数，任何计算该函数的恒定深度纯解码器 Transformer 都必须很大：宽度须为 n^Ω(1)。
- 共同开启大语言模型时代量子优势的研究。

## 正文

论文编号：arXiv:2608.03962v1（更新类型：cross）。以下为摘要全文翻译。

现代大语言模型——Transformer 与扩散语言模型——围绕两个典型算法任务构建：预测与生成。我们证明在两种机制中，低深度量子计算与相应的有界资源经典语言模型架构之间存在无条件分离。具体而言，我们展示以下内容：1. 分布分离。我们给出一个可由 QNC⁰ 电路（即由有界扇入门组成的恒定深度量子电路族）采样的分布，任何带浅调度与去噪的恒定轮扩散语言模型（DLM）都无法在恒定距离内采样它，即使允许亚线性思维链与输出 token 修订/重掩码事件——现代 DLM 所依赖的正是这些特征。2. 功能分离。我们展示一个可在 ∧∘QNC⁰[log log n]（即 O(log log n) 深度的 QNC⁰ 电路族，其中 n 为输入长度，后接单个经典 AND 门）中计算的函数，任何计算该函数的恒定深度纯解码器 Transformer 都必须很大：其宽度必须为 n^Ω(1)。综合来看，我们的工作开启了大语言模型时代量子优势的研究。

## 关键词

#量子计算 #LLM #复杂性分离 #QNC0
