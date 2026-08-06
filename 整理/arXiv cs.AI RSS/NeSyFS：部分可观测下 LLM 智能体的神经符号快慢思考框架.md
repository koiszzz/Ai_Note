---
title: "NeSyFS：部分可观测下 LLM 智能体的神经符号快慢思考框架"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/NeSyFS- A Neuro-symbolic Fast-Slow Thinking Framework for LLM Agent under Partial Observability.md"
source_note: "[[信息源/arXiv cs.AI RSS/NeSyFS- A Neuro-symbolic Fast-Slow Thinking Framework for LLM Agent under Partial Observability]]"
source_sha256: 3ea439c34cef77388932b75cbc9b1001555fac0c8aa8d51235811e36c65a4caf
original_url: "https://arxiv.org/abs/2607.28942"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# NeSyFS：部分可观测下 LLM 智能体的神经符号快慢思考框架

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Duo Xu、Faramarz Fekri
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.28942)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/NeSyFS- A Neuro-symbolic Fast-Slow Thinking Framework for LLM Agent under Partial Observability|查看原始文件]]

## 摘要

- 提出神经符号快慢思考（NeSyFS）框架，以统一方式应对部分可观测带来的挑战：用知识图谱（KG）表示信念状态，为 NeSyFS 每个模块提供三元组上下文。
- 快思考模块执行反应式动作；慢思考通过遵循扭曲序列蒙特卡洛（TSMC）算法的高层结构进行新的不确定性感知规划；反思模块反思快思考动作以缓解任务目标错位，并在反应式动作反复失败时切换到慢思考模块。
- 部分可观测引入关键挑战：信念状态推断、任务目标错位与不确定性下的规划；先前方法通常把动作条件化于完整或总结的动作-观测历史，其冗余与无关信息会误导 LLM 智能体的决策。
- 在 ALFWorld、Webshop 与 ScienceWorld 三个代表性基准上的实验显示显著优于先前方法。

## 正文

论文编号：arXiv:2607.28942v2（更新类型：replace）。以下为摘要全文翻译。

近来大语言模型（LLM）日益被部署为自主智能体，应用于自我反思、检索增强生成与科学发现等场景。在这些设置中，智能体必须基于有限观测而非完整环境状态行动，导致部分可观测性。这带来几个关键挑战：信念状态推断、任务目标错位与不确定性下的规划。先前方法通常把动作条件化于完整或总结的动作-观测历史，其冗余与无关信息可能误导 LLM 智能体的决策。受人类认知启发，我们提出一个新颖的神经符号快慢思考（NeSyFS）框架，以统一方式应对部分可观测性引入的挑战。我们用知识图谱（KG）表示信念状态，为 NeSyFS 的每个模块提供三元组上下文。快思考模块执行反应式动作，而慢思考通过遵循扭曲序列蒙特卡洛（TSMC）算法的高层结构进行新的不确定性感知规划。为缓解任务目标错位，使用反思模块反思快思考动作，并在反应式动作反复失败时切换到慢思考模块。在三个代表性基准（ALFWorld、Webshop 与 ScienceWorld）上的实验显示，NeSyFS 相对先前方法具有显著优势。

## 关键词

#LLM智能体 #部分可观测 #神经符号 #快慢思考
