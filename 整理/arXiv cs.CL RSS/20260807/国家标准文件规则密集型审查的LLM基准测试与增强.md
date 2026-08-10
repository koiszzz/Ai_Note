---
published: 2026-08-07
title: "国家标准文件规则密集型审查的 LLM 基准测试与增强"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/Benchmarking and Enhancing LLMs for Rule-Intensive Review of National Standard Documents.md"
source_note: "[[信息源/arXiv cs.CL RSS/Benchmarking and Enhancing LLMs for Rule-Intensive Review of National Standard Documents]]"
source_sha256: 0de56ecb64ef59b4cc193f42ba6bdbdfd06342dae29ce919d22caaccbf892738
original_url: "https://arxiv.org/abs/2608.06312"
processed: 2026-08-07
language: zh-CN
---

# 国家标准文件规则密集型审查的 LLM 基准测试与增强

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Tao Wang, Qihao Yang, Rongjiao Liang, Lianghong Lin, Haitao Wang, Xinyu Cao, Tianyong Hao
> - **发布时间**：2026-08-07
> - **分类**：cs.CL
> - **原文**：[打开链接](https://arxiv.org/abs/2608.06312)

## 摘要

- LLM 日益支持复杂专业任务，但规则密集型文档审查能力评估不足；国家标准文件（如中国 GB/T 标准）提供代表性测试台：冗长、高度结构化、受范围、术语、规范措辞与跨节一致性显式规则支配。
- 现有基准聚焦领域知识与问答，大体忽视专业文档内在质量审查；此类审查重度依赖人类专家，昂贵难扩展。
- 引入 GB/T-Bench：首个国家标准文件结构化审查基准；GB/T 审查分类学为层级模式，覆盖文档结构、范围对齐、规范模态、术语一致性与规范引用，25 种可诊断错误类型；可控反例生成机制结合确定性规则与受限 LLM 重写，将 488 份文档处理为 7306 个可追溯审查错误实例。
- 开发诊断导向评估协议：要求错误位置、审查维度与错误类型精确匹配加文档级覆盖度量；提出 GB/T-Reviewer 多智能体框架：将审查知识转为专门技能，协调全局检查、针对性诊断、规则扫描与结果验证；14 个主流 LLM 实验揭示显著人机差距：最强模型仅 0.3280 CMCS，专家 0.6640；GB/T-Reviewer 将最佳 CMCS 提至 0.5094，展示结构化技能协调对规则密集型文档审查价值。

## 正文

大语言模型（LLMs）日益支持复杂的专业任务，然而它们在规则密集型文档审查中的能力仍未得到充分评估。国家标准文件（如中国 GB/T 标准）提供了一个代表性测试台：它们冗长、高度结构化，并受范围、术语、规范措辞与跨节一致性的显式规则支配。现有基准聚焦领域知识与问答，大体忽视了专业文档的内在质量审查。此类审查严重依赖人类专家，使其昂贵且难以扩展。为弥合该差距，研究引入 GB/T-Bench，第一个用于国家标准文件结构化审查的基准。其 GB/T 审查分类学（Review Taxonomy）是一个层级模式，覆盖文档结构、范围对齐、规范模态、术语一致性与规范引用，包含 25 种可诊断错误类型。一个可控反例生成机制结合确定性规则与受限 LLM 重写，将 488 份文档处理为 7,306 个可追溯的审查错误实例用于评估。研究还开发一个诊断导向的评估协议：要求错误位置、审查维度与错误类型的精确匹配，加上文档级覆盖度量。研究进一步提出 GB/T-Reviewer，一个多智能体框架：将审查知识转化为专门技能，并协调全局检查、针对性诊断、规则扫描与结果验证。14 个主流 LLM 的实验揭示了实质性的机器-人类差距：最强模型仅达到 0.3280 的 CMCS，而专家为 0.6640。GB/T-Reviewer 将最佳 CMCS 提升到 0.5094，展示了结构化技能协调对规则密集型文档审查的价值。该工作为标准制定及其他高风险文档领域的可信 AI 铺平道路。

## 关键词

国家标准、文档审查、LLM、多智能体、基准
