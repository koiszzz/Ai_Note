---
title: "LiveEvalBench：迈向网页生成的开放世界评估"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/LiveEvalBench- Toward Open-World Evaluation for Web Generation.md"
source_note: "[[信息源/arXiv cs.AI RSS/LiveEvalBench- Toward Open-World Evaluation for Web Generation]]"
source_sha256: 374c85e5921524652ee63e740164b369af04ec0121070cd70d4f556f00a8113d
original_url: "https://arxiv.org/abs/2608.03689"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# LiveEvalBench：迈向网页生成的开放世界评估

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Yiyao Wang 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03689)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/LiveEvalBench- Toward Open-World Evaluation for Web Generation|查看原始文件]]

## 摘要

- 提出 LiveEvalBench：把网页生成评估重构为智能体式、自适应、可扩展过程的自动化框架，实例化为协作评审工作流：构建工程师、代码工程师与 UI 测试员在前后端项目全生命周期（从部署与代码检查到浏览器交互）集体收集证据。
- 自适应协议把跨模型可比性的共享细则与按每个工件定制的实现接地标准耦合，以处理实现多样性；框架支持在不重新设计流水线的情况下增量集成新评估角色与评估维度。
- 在多样真实世界网页生成场景上的实验显示，LiveEvalBench 与人类专家判断紧密对齐，并为基础模型的网页生成能力提供细粒度洞察。
- 代码：https://github.com/wyysteelhead/LiveEvalBench

## 正文

论文编号：arXiv:2608.03689v1（更新类型：new）。以下为摘要全文翻译。

大语言模型日益能够综合可执行的前端项目，然而现有基准仍把网页生成当作静态评估问题。我们认为前端工件需要不同的范式：它们是交互式而非静态的，允许多样且同样有效的实现，并且演进速度快于刚性流水线所能适应。为弥补这些空白，我们提出 LiveEvalBench，一个把网页生成评估重构为智能体式、自适应、可扩展过程的自动化框架。LiveEvalBench 把评估实例化为协作评审工作流：构建工程师、代码工程师与 UI 测试员在前端项目的完整生命周期（从部署与代码检查到基于浏览器的交互）集体收集证据。为处理实现多样性，自适应协议把跨模型可比性的共享细则与按每个工件定制的实现接地标准耦合。该框架还支持在不重新设计流水线的情况下增量集成新的评估角色与评估维度。在多样真实世界网页生成场景上的实验表明，LiveEvalBench 与人类专家判断紧密对齐，并提供对前沿模型网页生成能力的细粒度洞察。代码可在 https://github.com/wyysteelhead/LiveEvalBench 获取。

## 关键词

#网页生成 #评估框架 #智能体 #前端
