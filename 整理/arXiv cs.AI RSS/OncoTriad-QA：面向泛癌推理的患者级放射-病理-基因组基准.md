---
title: "OncoTriad-QA：面向泛癌推理的患者级放射-病理-基因组基准"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/OncoTriad-QA- A Patient-Level Radiology-Pathology-Genomics Benchmark for Pan-Cancer Reasoning.md"
source_note: "[[信息源/arXiv cs.AI RSS/OncoTriad-QA- A Patient-Level Radiology-Pathology-Genomics Benchmark for Pan-Cancer Reasoning]]"
source_sha256: e35465cd7caf98f50352bf7e5128d1c3f274ad82403013dededab4db67f41b99
original_url: "https://arxiv.org/abs/2608.02615"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# OncoTriad-QA：面向泛癌推理的患者级放射-病理-基因组基准

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Ahnaf Munir、Dannong Wang、Michael W. McDonald 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02615)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/OncoTriad-QA- A Patient-Level Radiology-Pathology-Genomics Benchmark for Pan-Cancer Reasoning|查看原始文件]]

## 摘要

- 引入 OncoTriad-QA，面向泛癌问答的患者级放射-病理-基因组基准：32 个癌症队列、9,281 个 TCGA 患者病例的 86.1k 个语义问题，对齐 CT/MRI 放射、全切片组织病理、体细胞突变、拷贝数改变、DNA 甲基化、bulk RNA-seq 与临床元数据。
- 病例特定标注通过来源接地的 LLM 辅助流水线构建，以策展标签、诊断报告、分子谱与模态派生证据为主要真值来源，并配自动化一致性检查与临床医生审查。
- 提出 OncoVLM 参考多模态模型：通过学习投影器把模态原生的放射、病理、DNA 甲基化与 RNA-seq 证据映射进 LLM 接口。
- 实验显示现有通用与医学 LLM 在全面泛癌 QA 上仍有限；在 OncoTriad-QA 上微调后，OncoVLM 以 MCQ 准确率与 BERTScore-F1 平均超过 MedGemma-4B 10.7 分，在仅放射、仅病理与全可用设置的多选与开放问题中一致增益。

## 正文

论文编号：arXiv:2608.02615v1（更新类型：cross）。以下为摘要全文翻译。

癌症诊断与表征需要整合来自放射学、病理学、基因组学与临床元数据的互补证据。然而，大多数医学大语言模型（LLM）与视觉-语言模型（VLM）基准聚焦孤立模态或狭窄图像-文本任务，使跨多个证据流的患者级肿瘤学评估基本未经测试。我们引入 OncoTriad-QA，面向泛癌问答的患者级放射-病理-基因组基准。OncoTriad-QA 包含 32 个癌症队列、9,281 个 TCGA 患者病例的 86.1k 个语义问题，对齐 CT/MRI 放射、全切片组织病理、体细胞突变、拷贝数改变、DNA 甲基化、bulk RNA-seq 与临床元数据。病例特定标注通过来源接地的 LLM 辅助流水线构建，以策展标签、诊断报告、分子谱与模态派生证据为主要真值来源，并配自动化一致性检查与临床医生审查。我们还引入 OncoVLM，一个参考多模态模型：通过学习投影器把模态原生的放射、病理、DNA 甲基化与 RNA-seq 证据映射进 LLM 接口。实验表明，现有通用与医学 LLM 在全面泛癌问答上仍然有限，尤其当问题需要整合影像发现、肿瘤形态与分子证据时。在 OncoTriad-QA 上微调后，OncoVLM 在 MCQ 准确率与 BERTScore-F1 上平均超过 MedGemma-4B 10.7 分，在仅放射、仅病理与全可用设置的多选与开放问题中取得一致增益。这些结果证明了该基准对训练与评估集成癌症问答模型的价值。

## 关键词

#癌症问答 #多模态 #基因组 #医学LLM
