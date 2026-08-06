---
title: "ToolLIFT：把工具特定轨迹提升为函数级图实现可泛化工具规划"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/ToolLIFT- Lifting Tool-Specific Trajectories into Function-Level Graphs for Generalizable Tool Plann.md"
source_note: "[[信息源/arXiv cs.AI RSS/ToolLIFT- Lifting Tool-Specific Trajectories into Function-Level Graphs for Generalizable Tool Plann]]"
source_sha256: 56e13d8f4ec9ec4d37710b2cec73b986e5302e7f558f45a9c71bd15849cd1104
original_url: "https://arxiv.org/abs/2608.03468"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# ToolLIFT：把工具特定轨迹提升为函数级图实现可泛化工具规划

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Xiuhui You、Jiayi Luo、Zichao Shen 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03468)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/ToolLIFT- Lifting Tool-Specific Trajectories into Function-Level Graphs for Generalizable Tool Plann|查看原始文件]]

## 摘要

- 提出 ToolLIFT，把工具特定轨迹提升为函数级工作流图（FWG）用于可泛化工具规划的框架：轨迹提升机制在 FWG 中编码工作流结构并跨工具共享协作经验；基于 FWG 全局结构引入解耦的工作流规划与工具选择，把单个工具选择与整体工作流对齐；采用强化学习并提出源门控与技能特定奖励，维持跨工具调用的源可追溯信息流。
- 历史工具使用轨迹为 LLM 智能体规划与协调工具使用提供宝贵经验；现有方法直接从轨迹构建工具级图，但所得图仍绑定特定工具，难以跨工具集泛化；尽管涉及工具不同，类似任务往往共享共同函数级工作流结构，作为更具可迁移性的工具规划抽象。
- 两个分布内（ID）与三个分布外（OOD）基准的实验显示 ToolLIFT 一致优于最先进基线，展示对未见工具集的强泛化。

## 正文

论文编号：arXiv:2608.03468v1（更新类型：new）。以下为摘要全文翻译。

历史工具使用轨迹为大语言模型（LLM）智能体规划与协调工具使用提供宝贵经验。现有方法直接从这些轨迹构建工具级图，但所得图仍绑定特定工具，难以跨工具集泛化。为应对这一挑战，我们发现尽管涉及工具不同，类似任务往往共享共同的函数级工作流结构，它作为工具规划的更具可迁移性的抽象。基于这一洞察，我们提出 ToolLIFT，一个把工具特定轨迹提升为函数级工作流图（FWG）用于可泛化工具规划的框架。具体而言，我们首先提出轨迹提升机制：在 FWG 中编码工作流结构，并跨工具共享协作经验。然后，基于 FWG 的全局结构，我们引入解耦的工作流规划与工具选择，把单个工具选择与整体工作流对齐。最后，为确保可靠工具数据流，我们采用强化学习（RL），并提出源门控与技能特定奖励，以维持跨工具调用的源可追溯信息流。在两个分布内（ID）与三个分布外（OOD）基准上的实验表明，ToolLIFT 一致优于最先进的基线，展示了对未见工具集的强泛化。

## 关键词

#工具规划 #函数级图 #智能体 #泛化
