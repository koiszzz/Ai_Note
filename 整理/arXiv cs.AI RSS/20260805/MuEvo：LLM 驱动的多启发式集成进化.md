---
published: 2026-08-05
title: "MuEvo：LLM 驱动的多启发式集成进化"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/MuEvo- LLM-Driven Evolution of Multi-Heuristic Ensemble.md"
source_note: "[[信息源/arXiv cs.AI RSS/MuEvo- LLM-Driven Evolution of Multi-Heuristic Ensemble]]"
source_sha256: 1bcf24a8af1099c97366b8f1c752d3b65fdfa516ade233c8acf39e92ceef62e8
original_url: "https://arxiv.org/abs/2608.03636"
processed: 2026-08-05
language: zh-CN
---

# MuEvo：LLM 驱动的多启发式集成进化

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Haoze Lv、Ning Lu、Shengcai Liu 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03636)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/MuEvo- LLM-Driven Evolution of Multi-Heuristic Ensemble|查看原始文件]]

## 摘要

- 提出 MuEvo，在集成级反馈下进化启发式集成的 LLM 驱动框架：把动态组件管理（用短预算探测与可逆生命周期在搜索中修订组件优先级）与 LLM 驱动的协同进化（通过多集成评估、跨组件信息共享、关系引导成对进化与自适应预算分配协调组件群体）结合。
- 基于 LLM 的自动启发式设计（LLM-AHD）在组合优化问题上显示出发现有效启发式的强大潜力，但现有方法主要优化单一启发式，而实际优化框架常依赖多个交互组件；直接扩展单启发式方法困难，因为早期组件选择可能忽视后期潜力，独立进化则忽略组件间依赖。
- 在四个组合优化领域的选择超启发式与组件化蚁群优化上评估：MuEvo 一致改进人工设计框架，并优于最先进 LLM-AHD 方法的代表性多组件扩展。

## 正文

论文编号：arXiv:2608.03636v1（更新类型：cross）。以下为摘要全文翻译。

基于大语言模型的自动启发式设计（LLM-AHD）在发现组合优化问题的有效启发式方面展现出强大潜力。然而，现有方法主要优化单一启发式，而实际优化框架往往依赖多个交互组件。直接扩展单启发式方法具有挑战性：早期组件选择可能忽视具有后期潜力的组件，而独立进化则忽略组件间的依赖。我们提出 MuEvo，一个在集成级反馈下进化启发式集成的 LLM 驱动框架。MuEvo 把动态组件管理（Dynamic Component Management，使用短预算探测与可逆生命周期在搜索过程中修订组件优先级）与 LLM 驱动的协同进化（LLM-Driven Co-Evolution，通过多集成评估、跨组件信息共享、关系引导成对进化与自适应预算分配协调组件群体）相结合。我们在四个组合优化领域的选择超启发式与组件化蚁群优化上评估 MuEvo。结果表明，MuEvo 一致改进人工设计的框架，并优于最先进 LLM-AHD 方法的代表性多组件扩展，证明其在对控制器中介的启发式池与功能分化的算法组件两方面都有效。

## 关键词

#自动启发式设计 #组合优化 #进化算法 #LLM
