---
published: 2026-08-07
title: "ProDVI：价值网络初始化的程序化动力学先验"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/ProDVI- Programmatic Dynamics Priors for Value Network Initialization.md"
source_note: "[[信息源/arXiv cs.LG RSS/ProDVI- Programmatic Dynamics Priors for Value Network Initialization]]"
source_sha256: 64abe01d3548bff30a96fe8b2810bf713c85482f6e1395b0d99be7196041ccc5
original_url: "https://arxiv.org/abs/2608.06015"
processed: 2026-08-07
language: zh-CN
---

# ProDVI：价值网络初始化的程序化动力学先验

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Xinwei Liu, Junyuan Liang, Jianting Zhang, Wuhui Chen
> - **发布时间**：2026-08-07
> - **分类**：cs.LG
> - **原文**：[打开链接](https://arxiv.org/abs/2608.06015)

## 摘要

- 深度强化学习（RL）以样本低效著称，原因之一是 RL 智能体通常从零初始化，被迫通过在线交互获取任务相关知识；现有方法通过预收集数据集、高保真模拟器或相关任务元学习获得信息初始化，但这些前提可能难以访问甚至不可用。
- 提出程序化动力学先验价值网络初始化（ProDVI）：利用 LLM 编码的常识与领域知识初始化 RL 智能体，无需依赖这些资源。
- ProDVI 提示代码生成语言模型产生可执行 Python 函数，编码环境动力学的粗略假设；用这些函数生成合成转移，基于转移构造辅助动力学预测目标预训练 actor-critic 框架中价值网络的状态-动作编码器；学习表征在在线 RL 开始前提供动力学感知归纳偏置。
- 生成的程序仅用于表征预训练，不需要忠实模拟目标环境；虽然可能不准确，其诱导初始化可经真实转移与奖励的在线学习修正；OpenAI Gym 与 DeepMind Control Suite 任务实验显示 ProDVI 有效提升无模型 RL 算法样本效率。

## 正文

深度强化学习（RL）以样本低效著称。促成因素之一是 RL 智能体通常从零初始化，被迫通过在线交互获取任务相关知识。现有方法通过预收集数据集、高保真模拟器或相关任务元学习获得信息性初始化，但这些前提可能难以访问甚至不可用。本文提出程序化动力学先验价值网络初始化（Programmatic Dynamics Priors for Value Network Initialization, ProDVI），一个利用 LLM 编码的常识与领域知识初始化 RL 智能体的框架，无需依赖这些资源。具体地，ProDVI 提示代码生成语言模型产生可执行 Python 函数，编码关于环境动力学的粗略假设；这些函数随后用于生成合成转移。基于这些转移，研究构造辅助动力学预测目标，预训练 actor-critic 框架中价值网络的状态-动作编码器。学习到的表征在在线 RL 开始前提供动力学感知的归纳偏置。重要的是，生成的程序仅用于表征预训练，无需忠实模拟目标环境。虽然生成的程序可能不准确，其诱导的初始化可通过真实转移与奖励的在线学习修正。OpenAI Gym 与 DeepMind Control Suite 任务上的实验表明，ProDVI 能有效提升无模型 RL 算法的样本效率。

## 关键词

强化学习、价值网络、LLM 程序生成、预训练、样本效率
