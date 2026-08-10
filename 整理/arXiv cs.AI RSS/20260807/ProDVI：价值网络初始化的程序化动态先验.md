---
published: 2026-08-07
title: "ProDVI：价值网络初始化的程序化动态先验"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/ProDVI- Programmatic Dynamics Priors for Value Network Initialization.md"
source_note: "[[信息源/arXiv cs.AI RSS/ProDVI- Programmatic Dynamics Priors for Value Network Initialization]]"
source_sha256: 2d6a247cecedd88522ff03967259308d7bfe97d7f350d3a6c1e2e85f7024e0f9
original_url: "https://arxiv.org/abs/2608.06015"
processed: 2026-08-07
language: zh-CN
---

# ProDVI：价值网络初始化的程序化动态先验

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Xinwei Liu, Junyuan Liang, Jianting Zhang, Wuhui Chen
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.06015)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/ProDVI- Programmatic Dynamics Priors for Value Network Initialization|查看原始文件]]

## 摘要

- 深度强化学习（RL）以样本效率低下著称；一个促成因素为 RL 智能体通常从零初始化，迫使其通过在线交互获取任务相关知识；现有方法通过预收集数据集、高保真模拟器或相关任务元学习获得信息性初始化，但这些前提可能难以获取甚至不可用。
- 提出程序化动态先验价值网络初始化（ProDVI）：利用大语言模型编码的常识与领域知识初始化 RL 智能体而不依赖这些资源的框架——提示代码生成语言模型产生编码环境动态粗略假设的可执行 Python 函数，用于生成合成迁移；基于这些迁移构建辅助动态预测目标，预训练 actor-critic 框架中价值网络的状态-动作编码器。
- 学习表示在在线 RL 开始前提供动态感知归纳偏差；生成程序仅用于表示预训练，不要求忠实模拟目标环境——即使生成程序不准确，其诱导初始化可通过真实迁移与奖励的在线学习校正。
- OpenAI Gym 与 DeepMind Control Suite 任务实验表明 ProDVI 有效提升无模型 RL 算法的样本效率。

## 正文

深度强化学习（RL）以样本效率低下著称。一个促成因素是 RL 智能体通常从零初始化，迫使他们通过在线交互获取任务相关知识。现有方法通过预收集数据集、高保真模拟器或相关任务上的元学习获得信息性初始化，但这些前提可能难以获取甚至不可用。本文中，我们提出程序化动态先验价值网络初始化（Programmatic Dynamics Priors for Value Network Initialization，ProDVI），一个利用大语言模型编码的常识与领域知识初始化 RL 智能体而不依赖这些资源的框架。具体而言，ProDVI 提示一个代码生成语言模型产生编码环境动态粗略假设的可执行 Python 函数。这些函数随后用于生成合成迁移。基于这些迁移，我们构建一个辅助动态预测目标，预训练 actor-critic 框架中价值网络的状态-动作编码器。学习到的表示在在线 RL 开始之前提供动态感知的归纳偏差。重要的是，生成的程序仅用于表示预训练，不要求忠实模拟目标环境。虽然生成的程序可能不准确，其诱导的初始化可以通过从真实迁移与奖励的在线学习校正。OpenAI Gym 与 DeepMind Control Suite 任务上的实验表明，ProDVI 可以有效提升无模型 RL 算法的样本效率。

## 关键词

#强化学习 #价值网络初始化 #LLM #动态先验
