---
title: "CorePath：面向乳腺穿刺活检诊断与风险控制报告生成的乳腺专用病理基础模型"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/CorePath- A Breast-Specialized Pathology Foundation Model for Core Needle Biopsy Diagnosis and Risk-.md"
source_note: "[[信息源/arXiv cs.AI RSS/CorePath- A Breast-Specialized Pathology Foundation Model for Core Needle Biopsy Diagnosis and Risk-]]"
source_sha256: 5bf05286912367f0050b28b8eccd7ea240c24517f7bf44a19f33ae82bfb89e3c
original_url: "https://arxiv.org/abs/2608.03079"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# CorePath：面向乳腺穿刺活检诊断与风险控制报告生成的乳腺专用病理基础模型

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Ting Yin 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03079)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/CorePath- A Breast-Specialized Pathology Foundation Model for Core Needle Biopsy Diagnosis and Risk-|查看原始文件]]

## 摘要

- 开发 CorePath：从 PRISM 微调得到的乳腺专用多模态病理基础模型，使用两个中心的 7,901 对穿刺活检（CNB）全切片图像与诊断报告训练。
- 在六个 CNB 队列与两个公开乳腺病理基准上无需任务特定重训练，CorePath 在癌症检测、浸润评估与组织学亚型分型上持续优于 PRISM；五类 CNB 组织学亚型加权 AUC 达 0.9526–0.9735。
- 公开基准上 CorePath 取得最高加权 AUC：BCNB 浸润癌亚型 0.7780、BRACS 病灶分层 0.8178、BRACS 细粒度分类 0.8252；报告生成中非乳腺幻觉从 30.1% 降至 2.8%。
- CorePath-CRG 结合共形亚型置信门控与 Learn-Then-Test 风险控制，实现选择性报告发布、亚型级回退与延后处理，已发布输出中非乳腺幻觉为零。

## 正文

论文编号：arXiv:2608.03079v1（更新类型：cross）。以下为摘要全文翻译。

乳腺穿刺活检（CNB）是乳腺癌诊断的核心，但仍具挑战性：有限的组织取样、病灶异质性和细微的形态重叠可能模糊亚型区分。我们开发了 CorePath，一个乳腺专用的多模态病理基础模型，使用来自两个中心的 7,901 对 CNB 全切片图像与诊断报告，从 PRISM 微调而来。在六个 CNB 队列与两个公开乳腺病理基准上进行无任务特定重训练的评估，CorePath 在癌症检测、浸润评估和组织学亚型分型方面持续优于 PRISM。它在多个私有中心的五类 CNB 组织学亚型分型上取得 0.9526–0.9735 的加权受试者工作特征曲线下面积（AUC）。在公开基准上，CorePath 优于领先的病理基础模型：BCNB 浸润癌亚型分型加权 AUC 0.7780、BRACS 病灶分层 0.8178、BRACS 细粒度分类 0.8252。在报告生成中，CorePath 将整体非乳腺幻觉从 30.1% 降至 2.8%，展示出乳腺特定适配后的领域保真度提升。CorePath-CRG 进一步将共形亚型置信门控与 Learn-Then-Test 风险控制结合，实现选择性报告发布、亚型级回退与延后处理。CorePath-CRG 在已发布输出中实现零非乳腺幻觉，并在大多数中心由病理医生验证的 LLM 评估分数与定量报告生成指标上表现最强。这些结果表明，带统计风险控制的领域专用基础模型为准确的乳腺 CNB 诊断与可靠报告生成提供了有前景的途径。

## 关键词

#病理基础模型 #乳腺癌 #穿刺活检 #风险控制
