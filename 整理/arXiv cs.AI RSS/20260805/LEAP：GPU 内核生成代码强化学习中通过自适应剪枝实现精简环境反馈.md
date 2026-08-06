---
published: 2026-08-05
title: "LEAP：GPU 内核生成代码强化学习中通过自适应剪枝实现精简环境反馈"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/LEAP- Lean Environment-Feedback via Adaptive Pruning for Code RL in GPU Kernel Generation.md"
source_note: "[[信息源/arXiv cs.AI RSS/LEAP- Lean Environment-Feedback via Adaptive Pruning for Code RL in GPU Kernel Generation]]"
source_sha256: 5c628262f52db0ce8b0388221078fae06c9bd93d3aaf4971c309635106a2dbf0
original_url: "https://arxiv.org/abs/2608.01804"
processed: 2026-08-05
language: zh-CN
---

# LEAP：GPU 内核生成代码强化学习中通过自适应剪枝实现精简环境反馈

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Tankun Li、Zhi Chen、Yaohua Tang
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.01804)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/LEAP- Lean Environment-Feedback via Adaptive Pruning for Code RL in GPU Kernel Generation|查看原始文件]]

## 摘要

- 提出 LEAP（通过自适应剪枝实现精简环境反馈），为低层硬件加速器对齐优化的可扩展、计算高效多轮 RL 框架。
- 难度条件剪枝（DCP）：动态门控机制自适应地把简单与过度灾难性任务从多轮扩展中剪除，把资源密集的编译与硬件探索集中在高价值复杂任务上。
- 提出基于排名的奖励公式：从 GRPO rollout 组内的成对锦标赛结果推导无尺度的相对优势，天然惩罚简单提示上的 token 低效，同时最大化困难分布上的学习梯度。
- 实证：LEAP 取得更优的首轮熟练度与稳健的多轮调试韧性，收敛快于未剪枝多轮基线，为低层代码 RL 建立实用范式。

## 正文

论文编号：arXiv:2608.01804v2（更新类型：replace-cross）。以下为摘要全文翻译。

通过强化学习（RL）训练后的大语言模型（LLM）显著推进了代码生成能力。为绕过批评者网络的重内存占用，当前最先进框架采用与基于规则的验证沙箱绑定的无批评者范式（如组相对策略优化 GRPO）。然而，把这些框架应用于 CUDA 内核生成等低层系统编程带来严峻挑战：二元通过与失败奖励引入严重信号稀疏，而多轮环境反馈循环遭遇难以承受的编译延迟与跨轨迹的奖励稀释。在本工作中，我们引入 LEAP（Lean Environment-Feedback via Adaptive Pruning，通过自适应剪枝实现精简环境反馈），一个为低层硬件加速器对齐优化的可扩展、计算高效多轮 RL 框架。LEAP 具有难度条件剪枝（DCP），一种动态门控机制，自适应地把简单与过度灾难性任务从多轮扩展中剪除，把资源密集的编译与硬件探索集中在高价值的复杂任务上。为在没有人工超参数工程的情况下充分运作这些路径，我们提出基于排名的奖励公式：从 GRPO rollout 组内的成对锦标赛结果推导无尺度相对优势，天然惩罚简单提示上的 token 低效，同时最大化困难分布上的学习梯度。实证评估表明，LEAP 取得更优的首轮熟练度与稳健的多轮调试韧性，同时收敛快于未剪枝的多轮基线，为低层代码 RL 建立实用范式。

## 关键词

#GPU内核 #代码强化学习 #GRPO #自适应剪枝
