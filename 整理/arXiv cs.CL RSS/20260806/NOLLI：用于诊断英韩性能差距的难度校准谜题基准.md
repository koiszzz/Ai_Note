---
published: 2026-08-06
title: NOLLI：用于诊断英韩性能差距的难度校准谜题基准
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/NOLLI- A Difficulty-Calibrated Puzzle Benchmark for Diagnosing the English-Korean Performance Gap.md
source_note: "[[信息源/arXiv cs.CL RSS/NOLLI- A Difficulty-Calibrated Puzzle Benchmark for Diagnosing the English-Korean Performance Gap]]"
source_sha256: 7d5b9e8ddd510d9224b5f34465a216aed651ca76d13711ebf5b7dacfd1a431a1
original_url: https://arxiv.org/abs/2608.04397
processed: 2026-08-07
language: zh-CN
---

# NOLLI：用于诊断英韩性能差距的难度校准谜题基准

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04397)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/NOLLI- A Difficulty-Calibrated Puzzle Benchmark for Diagnosing the English-Korean Performance Gap|查看原始文件]]

## 摘要

- NOLLI 是程序化生成的英韩谜题基准，含 15 种谜题类型（25 个任务、7,500 个题目），每个实例可重新生成、具有唯一解并确定性计分
- 难度通过行为学方式校准，而非简单等同为规模更大
- 书写系统密集型任务暴露出明显差距：韩语密码落后英语最多 68.7 个百分点，而基于同一 jamo 的字母算式无系统性惩罚

## 正文

我们提出了 NOLLI，一个程序化生成的英韩谜题基准，旨在诊断韩语性能差距出现在何处。它包含 15 种谜题类型（25 个任务；7,500 个题目），每个实例均可按种子重新生成、经验证具有唯一解，并可确定性计分。我们并非简单地把"更难"等同于"更大"，而是以行为学方式校准难度，调整每个生成器，直到固定的参考模型落入目标准确率区间。

其三级设计结合了匹配的直接翻译、基于韩文字母（jamo，音节内字母）的书写系统改编，以及根植于韩国文化或正字法的纯韩语任务。我们评估了 15 个前沿、开源权重和韩国开发的模型；在高于 3% 总体准确率下限的 12 个模型中，匹配的英韩准确率在 ±10 个百分点（TOST）范围内统计等价，表明仅由呈现语言带来的成本很小。

书写系统密集型任务显示出更明显的差距：韩语密码（Korean Cipher）落后于英语最多达 68.7 个百分点，而基于同一 jamo 的 Cryptarithmetic（字母算式）则没有系统性惩罚，且 Jamo Composition 的准确率可预测韩语密码的准确率。这些对比是诊断性的而非因果性的，与多步音节内执行的困难一致。纯韩语任务将规则应用缺陷（其符号各不相同）与在所有 12 个模型中均为正的亲属称谓缺陷区分开来。

最后，在 15 种类型中的 7 种里，一个显著的规模度量无法随难度从 Easy 增长到 Hard，这使得结构规模成为经验难度的不可靠代理。

## 关键词

#NOLLI #多语言基准 #韩语 #谜题生成 #模型评估
