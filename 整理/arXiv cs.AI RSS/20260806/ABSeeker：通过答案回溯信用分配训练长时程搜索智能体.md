---
published: 20260806
title: "ABSeeker：通过答案回溯信用分配训练长时程搜索智能体"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/ABSeeker- Training Long-Horizon Search Agents via Answer-Backtracked Credit Assignment.md"
source_note: "[[信息源/arXiv cs.AI RSS/ABSeeker- Training Long-Horizon Search Agents via Answer-Backtracked Credit Assignment]]"
source_sha256: 40172f1b5424e37ce4d763e2fdbede4ce29f0e2e7916d4e065e5e1952addf8fd
original_url: "https://arxiv.org/abs/2608.05102"
processed: 2026-08-06
language: zh-CN

---

# ABSeeker：通过答案回溯信用分配训练长时程搜索智能体

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Yijun Lu, Rui Ye, Jiajun Wang, Yuwen Du, Tian Jin, Songhua Liu, Siheng Chen
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05102)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/ABSeeker- Training Long-Horizon Search Agents via Answer-Backtracked Credit Assignment|查看原始文件]]

## 摘要

- 长时程搜索智能体必须执行多个顺序动作（步骤）来搜索、检索、验证和整合证据以达成最终答案；现有训练方法通常统一对待轨迹中的所有步骤，无法区分有用动作与错误或冗余动作。
- 本文提出答案回溯信用分配（ABC），一个细粒度信用分配框架：将稀疏的轨迹级结果转换为密集的步骤级监督，奖励有用动作（即使在失败轨迹中）同时抑制错误或冗余动作。
- 基于 Qwen3.5-4B 仅用 8.5k 示例训练 ABSeeker，在 BrowseComp 上达 37.3%、BrowseComp-ZH 上 39.1%；配合上下文管理进一步提升到 55.3% 和 52.9%，显著优于同规模（4B）智能体，甚至匹配更大（约 30B）的性能。

## 正文

长时程搜索智能体必须执行多个顺序动作（步骤）来搜索、检索、验证和整合证据，以达成最终答案。然而，训练这些智能体的现有方法通常在监督微调（SFT）和强化学习（RL）期间统一对待轨迹内的所有步骤，无法区分有用动作与错误或冗余动作。在本文中，我们提出答案回溯信用分配（Answer-Backtracked Credit Assignment，ABC），一个细粒度的信用分配框架，用于训练长时程搜索智能体，通过将稀疏的轨迹级结果转换为密集的步骤级监督，奖励有用动作（即使在失败轨迹中）同时抑制错误或冗余动作。具体来说，给定一个可能模糊的查询及其对应的地面真值答案，ABC 首先执行答案回溯线索恢复（Answer-Backtracked Clue Recovery），从答案回溯恢复解决该问题所需的中间线索。然后应用线索锚定步骤评分（Clue-Anchored Step Scoring），对照这些线索评估每个搜索步骤，将稀疏的二元结果监督转换为密集的步骤级奖励。基于这些奖励，我们开发 ABC-SFT（重新加权每轮损失）和 ABC-GRPO（在 GRPO 中使用步骤级分数作为奖励）。在此框架基础上，我们仅用 8.5k 示例基于 Qwen3.5-4B 训练 ABSeeker。ABSeeker 在 BrowseComp 上达到 37.3%，在 BrowseComp-ZH 上达到 39.1%。配合上下文管理，分数进一步提升到 55.3% 和 52.9%，显著优于同规模（4B）智能体，甚至匹配更大（约 30B）的性能。这些结果证明了答案回溯的步骤级信用分配对训练长时程搜索智能体的有效性。

## 关键词

#搜索智能体 #信用分配 #长时程任务 #强化学习 #arXiv