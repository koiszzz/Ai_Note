---
published: 2026-08-05
title: "截图还是工具？在混合 GUI-MCP 计算机使用智能体中引出工具使用与管理多模态上下文"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Screenshots or Tools- Eliciting Tool Use and Managing Multimodal Context in Hybrid GUI-MCP Computer-.md"
source_note: "[[信息源/arXiv cs.AI RSS/Screenshots or Tools- Eliciting Tool Use and Managing Multimodal Context in Hybrid GUI-MCP Computer-]]"
source_sha256: 89c8cb62ed52cbf978c0ebd832874ada0e8c416d7602b0e4de5c36e7b2d0f6e2
original_url: "https://arxiv.org/abs/2608.03327"
processed: 2026-08-05
language: zh-CN
---

# 截图还是工具？在混合 GUI-MCP 计算机使用智能体中引出工具使用与管理多模态上下文

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Siqi Fan、Minghao Li、Xiaoqian Ma 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03327)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Screenshots or Tools- Eliciting Tool Use and Managing Multimodal Context in Hybrid GUI-MCP Computer-|查看原始文件]]

## 摘要

- 在 OSWorld-MCP 基准（309 个任务）的相同 GUI-MCP 框架下，相同 MCP 工具使推理模型提升 +4.0pp、使非推理模型退化 −5.9pp；差别在工具决策行为：非推理策略忽视、误命名或虚假终止工具；推理模型避免这些失败，但 309 个任务中只有 55 个调用工具（工具可达的 23.9%）——称为采用差距。
- 动作层面：密集工具奖励把电子表格采用率从 0.03 提升到 0.33 并带入贪心解码，但留出准确率未跟随——行为可引导，能力不可；瓶颈在工具调用语义。
- 上下文层面：成功的工具调用常使下一张截图多余——丢弃它并把图像历史减半，输入 token 减少约三分之一，准确率小幅损失；同一观测规则下重训消除该成本，压缩智能体以 53% 输入成本达 37.8%（未压缩运行点 33.0%），并把预注册退化子集上的丰富-精简差距缩小到零。
- 工具在模型选择并整合它们时才有帮助，当前混合智能体让许多此类选择闲置。

## 正文

论文编号：arXiv:2608.03327v1（更新类型：new）。以下为摘要全文翻译。

混合计算机使用智能体可以通过截图行动或调用文本工具。我们发现，拥有可用工具并不能决定效果走向。在 OSWorld-MCP 基准（309 个任务）上相同的 GUI-MCP 框架下，相同的 MCP 工具使推理模型提升 +4.0pp，却使非推理模型退化 −5.9pp（各 5 次运行，均超过 2 个标准误差）。区分两者的是工具决策行为。非推理策略在工具周围忽视、误命名或虚假终止。推理模型避免这些失败，但 309 个任务中只有 55 个调用工具，占工具可达任务的 23.9%。我们把这一不足称为采用差距（adoption gap）。问题的两个层面共享一个原因：模型已经有一条更便宜的路线，且从未被训练去走工具路线。多轮 RL 探针验证了这一原因。在动作层面，密集工具奖励把电子表格采用率从 0.03 提升到 0.33，并带入贪心解码，但留出准确率没有跟随。行为是可引导的；能力不可。瓶颈在于工具调用语义。在上下文层面，一次成功的工具调用往往使下一张截图变得多余。丢弃它并把图像历史减半，输入 token 减少约三分之一，准确率成本很小。在同一观测规则下重训消除了该成本。压缩后的智能体随后以 53% 的输入成本达到 37.8%（未压缩运行点为 33.0%），并把一个预注册退化子集上的丰富-精简差距缩小到零。工具在模型选择并整合它们时才有帮助，而当前的混合智能体让许多此类选择闲置未用。

## 关键词

#计算机使用智能体 #MCP工具 #多模态上下文 #工具采用
