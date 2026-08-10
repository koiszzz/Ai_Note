---
published: 2026-08-07
title: "RRC：通过基于排序的奖励构建释放 LLM 强化学习中的生成式奖励模型"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/RRC- Unlocking Generative Reward Models in LLM Reinforcement Learning via Ranking-Based Reward Const.md"
source_note: "[[信息源/arXiv cs.LG RSS/RRC- Unlocking Generative Reward Models in LLM Reinforcement Learning via Ranking-Based Reward Const]]"
source_sha256: 46c68ef217a5697fa582d4101abcbc47fa985a532c82169dd25b33f888d362c6
original_url: "https://arxiv.org/abs/2608.06310"
processed: 2026-08-07
language: zh-CN
---

# RRC：通过基于排序的奖励构建释放 LLM 强化学习中的生成式奖励模型

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Chenglong Wang, Ziming Zhu, Yifu Huo, Bei Li, Qiaozhi He, Yan Ding, Xiaoyang Hao, Yuxin Gao, Tianhua Zhou, Xiaojia Chang, Tongran Liu, Jingbo Zhu
> - **发布时间**：2026-08-07
> - **分类**：cs.LG
> - **原文**：[打开链接](https://arxiv.org/abs/2608.06310)

## 摘要

- 奖励建模近期进展显示从判别式奖励模型向生成式奖励模型的范式转变；但尽管响应排序能力强，生成式奖励模型未在强化学习（RL）中实现其潜力。
- 分析揭示该局限源于生成式奖励建模的比较本质与现有 RL 算法采用的标量评分范式之间的错配。
- 提出基于排序的奖励构建（RRC）：从相对偏好排序推导奖励，使生成式奖励模型能提供更有效的 RL 学习信号；引入两个互补策略：自竞争排序（利用采样响应间的比较）与锚定引导排序（用小参考响应集实现可扩展排序基奖励构建）。
- 开放式聊天与推理基准实验显示 RRC 大幅改进生成式奖励模型的 RL 训练，相对现有奖励构建方法取得一致增益。

## 正文

奖励建模的近期进展显示从判别式奖励模型到生成式奖励模型的范式转变。然而，尽管生成式奖励模型具有强大的响应排序能力，它们未能在强化学习（RL）中实现其潜力。研究分析揭示，该局限源于生成式奖励建模的比较本质与现有 RL 算法采用的标量评分范式之间的错配。为弥合该差距，研究提出基于排序的奖励构建（Ranking-based Reward Construction, RRC）：从相对偏好排序推导奖励，使生成式奖励模型能提供更有效的 RL 学习信号。RRC 引入两个互补策略：自竞争排序（self-competitive ranking），利用采样响应之间的比较；锚定引导排序（anchor-guided ranking），用一小集参考响应实现可扩展的排序基奖励构建。跨开放式聊天与推理基准的实验表明，RRC 大幅改进生成式奖励模型的 RL 训练，相对现有奖励构建方法取得一致增益。代码见 https://github.com/wangclnlp/RRC。

## 关键词

生成式奖励模型、强化学习、排序、奖励构建、RLHF
