---
published: 2026-08-07
title: "Search2Skill：通过基于评分标准的强化学习超越知识边界的技能蒸馏"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Search2Skill- Skill Distillation Beyond Knowledge Boundaries Via Rubric-Based Reinforcement Learning.md"
source_note: "[[信息源/arXiv cs.AI RSS/Search2Skill- Skill Distillation Beyond Knowledge Boundaries Via Rubric-Based Reinforcement Learning]]"
source_sha256: edcee18d0074570a65e0365b0e572a6dd02626deffcee93e7d3fcb23478ec422
original_url: "https://arxiv.org/abs/2608.05245"
processed: 2026-08-07
language: zh-CN
---

# Search2Skill：通过基于评分标准的强化学习超越知识边界的技能蒸馏

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Muyang Ye, Tian Lan, Feihu Jiang, Yongshi Ye, Wuyunsiqin, Bin Zhu, Qianghuai Jia, Zhao Xu, Weihua Luo, Ye Wang, Jinyang Zhang, Longyue Wang, Lingfeng Bao
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05245)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Search2Skill- Skill Distillation Beyond Knowledge Boundaries Via Rubric-Based Reinforcement Learning|查看原始文件]]

## 摘要

- 可复用技能封装解决真实世界专业任务所需的过程知识，为基于 LLM 的智能体提供在专家领域自我进化的路径；现有自进化技能方法从模型参数知识或轨迹内部构建技能，因此受模型已知内容的边界限制。
- 专业技能底层的领域惯例与标准程序往往超出该边界，难以仅从智能体引出；提出 Search2Skill 框架：自动识别智能体能力差距、搜索外部来源解决，并将检索证据蒸馏为结构化、可复用技能。
- Search2Skill 由基于评分标准的强化学习方案优化，联合改进何时搜索、如何搜索与如何生成技能。
- 三个基准八个专家级领域实验表明，Search2Skill 在流式与留出评估协议下一致优于搜索增强与基于轨迹技能学习基线；进一步分析显示增益源于技能抽象而非原始检索证据，且习得技能跨模型规模迁移。

## 正文

可复用技能封装解决真实世界专业任务所需的过程知识，为基于 LLM 的智能体提供在专家领域自我进化的路径。现有自进化技能方法从模型的参数知识或轨迹内部构建技能，因此受模型已知内容的边界限制。然而，专业技能底层的领域惯例与标准程序往往位于该边界之外，难以仅从智能体引出。为解决该问题，我们提出一个新颖框架 Search2Skill，自动识别智能体的能力差距，搜索外部来源解决这些差距，并将检索证据蒸馏为结构化、可复用的技能。具体而言，Search2Skill 由一个基于评分标准（rubric-based）的强化学习方案优化，联合改进何时搜索、如何搜索与如何生成技能。在来自三个基准的八个专家级领域上的实验表明，Search2Skill 在流式与留出评估协议下一致优于搜索增强与基于轨迹的技能学习基线。进一步分析表明，增益来自技能抽象而非原始检索证据，且习得的技能跨模型规模迁移。

## 关键词

#技能蒸馏 #自我进化 #强化学习 #检索增强
