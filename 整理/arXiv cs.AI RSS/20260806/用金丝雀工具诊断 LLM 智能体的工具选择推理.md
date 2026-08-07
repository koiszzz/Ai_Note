---
published: 20260806
title: "用金丝雀工具诊断 LLM 智能体的工具选择推理"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Diagnosing Tool-Selection Reasoning in LLM Agents with Canary Tools.md"
source_note: "[[信息源/arXiv cs.AI RSS/Diagnosing Tool-Selection Reasoning in LLM Agents with Canary Tools]]"
source_sha256: b82afa56d6d13c7efc34b55b7ed13ed4b5ed585ea5809499eafa5b6b790b5f43
original_url: "https://arxiv.org/abs/2608.04719"
processed: 2026-08-06
language: zh-CN

---

# 用金丝雀工具诊断 LLM 智能体的工具选择推理

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Atul Anand, Sourav Chattaraj
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04719)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Diagnosing Tool-Selection Reasoning in LLM Agents with Canary Tools|查看原始文件]]

## 摘要

- 智能体评估告诉我们模型选错工具，但很少告诉我们为什么；本文引入金丝雀工具：植入智能体模型上下文协议（MCP）工具集的诊断探针工具，每个设计为探测一个特定工具选择弱点。
- 六类型分类法（语义诱饵、参数陷阱、能力海市蜃楼、前提失明、时间诱饵和粒度陷阱）将单一「选错工具」结果转化为模型如何推理工具的多维画像；在 120 个任务上评估八个模型（六个托管和两个 8B 开放权重），跨三个能力层级。
- 三个发现：易感性随模型能力提升急剧下降（每任务金丝雀易感率跨模型约 36 倍）；能力层级单独不预测安全性；分类法能力分层——能力海市蜃楼最可靠捕获前沿模型，其他类型对强模型大多惰性但对小开放模型触发。

## 正文

智能体评估告诉我们模型选错工具，但很少告诉我们为什么。我们引入金丝雀工具（canary tools）：植入智能体模型上下文协议（MCP）工具集的诊断探针工具，每个设计为探测一个特定工具选择弱点。六类型分类法（语义诱饵、参数陷阱、能力海市蜃楼、前提失明、时间诱饵和粒度陷阱）将单一「选错工具」结果转化为模型如何推理工具的多维画像。我们在 120 个任务上评估八个模型——六个托管和两个 8B 开放权重——跨三个能力层级、三种金丝雀密度条件和三个种子（8,640 次运行），外加 2,880 次运行的微妙性消融。任务成功由提供商无关的评判者评分，并由第二个独立评判者佐证（Cohen's kappa = 0.75）。我们报告三个发现。第一，易感性随模型能力提升急剧下降：每任务金丝雀易感率（CSR）跨模型约 36 倍，Claude Opus 4.8 最低，Llama 3.1 8B 最高。第二，能力层级单独不预测安全性：最易感的托管模型是中层级，且在同一提供商内更便宜的模型可能是更安全的。第三，分类法能力分层：能力海市蜃楼最可靠捕获前沿模型，而其他类型对强模型大多惰性但在小开放模型上触发，因此它们按能力区分而非软弱。软化每个金丝雀的泄密短语使前沿 CSR 基本不变，证明探针测量推理而非短语识别。易感性还预测任务失败（Spearman rho = -0.34），而最稳健模型未因金丝雀压力显著退化。我们发布框架、金丝雀模式、任务和日志。

## 关键词

#工具选择 #LLM智能体 #诊断 #MCP #arXiv