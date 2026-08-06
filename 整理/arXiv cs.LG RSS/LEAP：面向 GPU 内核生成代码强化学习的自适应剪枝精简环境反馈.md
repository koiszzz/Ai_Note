---
title: "LEAP：面向 GPU 内核生成代码强化学习的自适应剪枝精简环境反馈"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/LEAP- Lean Environment-Feedback via Adaptive Pruning for Code RL in GPU Kernel Generation.md"
source_note: "[[信息源/arXiv cs.LG RSS/LEAP- Lean Environment-Feedback via Adaptive Pruning for Code RL in GPU Kernel Generation.]]"
source_sha256: e9c51a01c768aa042d8982689cc44995a88e48a0020132db3e6a49acf5097ba0
original_url: "https://arxiv.org/abs/2608.01804"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# LEAP：面向 GPU 内核生成代码强化学习的自适应剪枝精简环境反馈

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Tankun Li、Zhi Chen、Yaohua Tang
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.01804)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/LEAP- Lean Environment-Feedback via Adaptive Pruning for Code RL in GPU Kernel Generation.|查看原始文件]]

## 摘要

- 通过强化学习（RL）对 LLM 进行后训练已显著推进代码生成能力；为绕开评论家网络沉重的内存占用，最先进的框架采用无评论家范式（如绑定基于规则验证沙箱的 GRPO）。
- 将这些框架应用于底层系统编程（如 CUDA 内核生成）面临严峻挑战：二元通过/失败奖励带来严重的信号稀疏性，而多轮环境反馈循环遭受高昂的编译延迟与跨轨迹奖励稀释。
- 提出 LEAP（Lean Environment-Feedback via Adaptive Pruning，自适应剪枝精简环境反馈），一个面向底层硬件加速器对齐的可扩展、计算高效的多轮 RL 框架。
- LEAP 具有难度条件剪枝（DCP），一种动态门控机制：自适应地从多轮扩展中切掉简单与过度灾难性的任务，把资源密集的编译与硬件探索专用于高价值、复杂任务；为免于手工超参工程，提出基于排名的奖励公式，从 GRPO rollout 组内的成对锦标赛结果导出无尺度相对优势，固有地惩罚简单提示上的 token 低效，同时在困难分布上最大化学习梯度。
- 实证评估表明：LEAP 取得更优的首轮熟练度与鲁棒的多轮调试韧性，且收敛快于未剪枝的多轮基线，为底层代码 RL 建立实用范式。

## 正文

论文编号：arXiv:2608.01804v2（更新类型：replace）。以下为摘要全文翻译。

通过强化学习（RL）对大型语言模型（LLM）进行后训练已显著推进代码生成能力。为绕开评论家网络沉重的内存占用，当前最先进的框架利用无评论家范式，如绑定基于规则的验证沙箱的 Group Relative Policy Optimization（GRPO）。然而，将这些框架应用于底层系统编程（例如 CUDA 内核生成）会带来严重挑战：二元的通过/失败奖励引入严重的信号稀疏性，而多轮环境反馈循环遭受高得惊人的编译延迟与跨轨迹的奖励稀释。在这项工作中，我们引入 LEAP（Lean Environment-Feedback via Adaptive Pruning，自适应剪枝精简环境反馈），一个面向底层硬件加速器对齐的可扩展、计算高效的多轮 RL 框架。LEAP 具有难度条件剪枝（Difficulty-Conditioned Pruning，DCP），一种动态门控机制，自适应地从多轮扩展中切掉简单与过度灾难性的任务，把资源密集的编译与硬件探索专用于高价值、复杂的任务。为在无需手工超参工程的情况下充分运作这些路径，我们提出基于排名的奖励（Rank-Based Reward）公式。通过从 GRPO rollout 组内的成对锦标赛结果导出无尺度相对优势，我们的方法固有地惩罚简单提示上的 token 低效，同时在困难分布上最大化学习梯度。实证评估表明，LEAP 取得更优的首轮熟练度与鲁棒的多轮调试韧性，同时收敛快于未剪枝的多轮基线，为底层代码 RL 建立了一个实用范式。

## 关键词

#代码强化学习 #GRPO #CUDA内核 #难度条件剪枝 #LLM后训练
