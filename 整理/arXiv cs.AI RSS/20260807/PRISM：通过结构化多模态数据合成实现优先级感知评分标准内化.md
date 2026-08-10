---
published: 2026-08-07
title: "PRISM：通过结构化多模态数据合成实现优先级感知评分标准内化"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/PRISM- Priority-aware Rubric Internalization via Structured Multimodal Data Synthesis.md"
source_note: "[[信息源/arXiv cs.AI RSS/PRISM- Priority-aware Rubric Internalization via Structured Multimodal Data Synthesis]]"
source_sha256: 43daffb08b64ac4bbb6f87d0172fa1c58114ad5173638b020b795f2e95db7159
original_url: "https://arxiv.org/abs/2608.05249"
processed: 2026-08-07
language: zh-CN
---

# PRISM：通过结构化多模态数据合成实现优先级感知评分标准内化

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Xiaomin He, Dongling Xiao, Jiahao Xie, Ruiqi Lu, Qianle Wang, Zhongbin Guo, Wanxuan Sun
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05249)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/PRISM- Priority-aware Rubric Internalization via Structured Multimodal Data Synthesis|查看原始文件]]

## 摘要

- 真实世界多模态指令常捆绑重要性不等的多个要求，但大多数多模态训练数据仍将指令遵循还原为回答一个自包含问题；论文通过评分标准理解（rubric comprehension）研究该差距，将模型不是作为对照评分标准测量的生成器，而是遵循评分标准的执行器：给定图像与带类型、优先级的评分标准，模型必须在产生总体判定前验证每条规则。
- 提出 PRISM：四阶段数据合成框架，产生人设-任务对、前缀引导规则集、质量过滤评分标准与结构化验证轨迹；引入 PRISM-Eval，其宽松与严格指标使用对固定标签的确定性匹配，因此无需推理时裁判模型。
- 仅用 10K 合成样本，PRISM 将 Qwen3-VL-4B 在 PRISM-Eval 上的严格准确率从 9.5% 提升到 30.1%，同时保持一般基准的平均性能，增益迁移到四个额外开源 MLLM（稠密与 MoE 架构）。
- 表明结构化评分标准监督是通往多规则、优先级感知多模态指令遵循的可扩展路径。

## 正文

真实世界的多模态指令常常捆绑重要性不等的多个要求，然而大多数多模态训练数据仍然将指令遵循还原为回答一个自包含问题。我们通过评分标准理解（rubric comprehension）研究这一差距，它将模型不是作为对照评分标准测量的生成器，而是作为遵循它们的执行器：给定一个图像与一个带类型、优先级的评分标准，模型必须在产生总体判定之前验证每条规则。为支持该设置，我们提出 PRISM，一个四阶段数据合成框架，产生人设-任务对、前缀引导规则集、质量过滤评分标准与结构化验证轨迹。我们进一步引入 PRISM-Eval，其宽松（Loose）与严格（Strict）指标使用对固定标签的确定性匹配，因此不需要推理时裁判模型。仅用 10K 合成样本，PRISM 将 Qwen3-VL-4B 在 PRISM-Eval 上的严格准确率从 9.5% 提升到 30.1%，同时保持一般基准的平均性能，且增益迁移到四个额外的开源 MLLM（稠密与 MoE 架构），表明结构化评分标准监督是通往多规则、优先级感知多模态指令遵循的可扩展路径。

## 关键词

#评分标准理解 #多模态指令遵循 #数据合成 #优先级感知
