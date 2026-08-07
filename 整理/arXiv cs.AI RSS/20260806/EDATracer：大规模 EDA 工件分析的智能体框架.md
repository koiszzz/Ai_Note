---
published: 20260806
title: "EDATracer：大规模 EDA 工件分析的智能体框架"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/EDATracer- An Agentic Framework for Large-Scale EDA Artifact Analysis.md"
source_note: "[[信息源/arXiv cs.AI RSS/EDATracer- An Agentic Framework for Large-Scale EDA Artifact Analysis]]"
source_sha256: 2de86e3461778ece28ddd3555e03bad812829cebd6579ef65619d06c5e0492ff
original_url: "https://arxiv.org/abs/2608.04032"
processed: 2026-08-06
language: zh-CN

---

# EDATracer：大规模 EDA 工件分析的智能体框架

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Phat Tieu, Sayanti Jana, Matthew DeLorenzo, Jiawen Wu, Narendran Srinivasan, Srinivas Shakkottai, Jiang Hu, Jeyavijayan Rajendran
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04032)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/EDATracer- An Agentic Framework for Large-Scale EDA Artifact Analysis|查看原始文件]]

## 摘要

- 现代芯片设计依赖电子设计自动化（EDA）工具，生成包括源文件、脚本、日志、网表和报告在内的大型异构工件；分析这些工件对调试、优化和设计流程理解至关重要，但因相关证据常分布许多工件类型和设计阶段而困难。
- 本文呈现 EDATracer，一个用于证据接地 EDA 工件分析的智能体框架：将设计工件组织为知识图谱配语义向量索引，使 LLM 智能体跨源文件、日志、网表和报告检索证据。
- 策展 18.9 GB 的 2,787 个可综合开源芯片设计数据集，引入覆盖事实、统计和推理任务的 90 题基准；在所评估智能体中，EDATracer 实现最佳 pass@1 准确率，平均优于 Cursor 和 Claude Code 6.4 和 7.2 个百分点，同时使用少 2.0-3.2 倍的 token。

## 正文

现代芯片设计依赖电子设计自动化（EDA）工具，生成大型异构工件，包括源文件、脚本、日志、网表和报告。分析这些工件对调试、优化和设计流程理解至关重要，但仍困难，因为相关证据常分布许多工件类型和设计阶段。虽然 LLM 智能体对 EDA 辅助显示前景，现有方法缺乏大规模跨工件分析的公开基准，且常难以将推理锚定在工具生成证据中。我们呈现 EDATracer，一个用于证据接地 EDA 工件分析的智能体框架。EDATracer 将设计工件组织为知识图谱配语义向量索引，使 LLM 智能体跨源文件、日志、网表和报告检索证据。我们策展一个 18.9 GB 的 2,787 个可综合开源芯片设计数据集，并引入一个覆盖事实、统计和推理任务的 90 题基准。在所评估智能体中，EDATracer 实现最佳 pass@1 准确率，平均优于 Cursor 和 Claude Code 6.4 和 7.2 个百分点，同时使用少 2.0-3.2 倍的 token。

## 关键词

#EDA #芯片设计 #智能体 #知识图谱 #arXiv