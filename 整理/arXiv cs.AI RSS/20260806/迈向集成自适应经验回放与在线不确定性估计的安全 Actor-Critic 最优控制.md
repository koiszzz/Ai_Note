---
published: 2026-08-06
title: 迈向集成自适应经验回放与在线不确定性估计的安全 Actor-Critic 最优控制
source: arXiv cs.AI RSS
original_file: 信息源/arXiv cs.AI RSS/Toward Integrating Adaptive Experience Replay and Online Uncertainty Estimation in Safe Actor-Critic.md
source_note: "[[信息源/arXiv cs.AI RSS/Toward Integrating Adaptive Experience Replay and Online Uncertainty Estimation in Safe Actor-Critic]]"
source_sha256: a1bdc6fb04011fd70968ac58286810954fa9acf36bc0610abc65b28cb7465c10
original_url: https://arxiv.org/abs/2608.04732
processed: 2026-08-07
language: zh-CN
---

# 迈向集成自适应经验回放与在线不确定性估计的安全 Actor-Critic 最优控制

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04732)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Toward Integrating Adaptive Experience Replay and Online Uncertainty Estimation in Safe Actor-Critic|查看原始文件]]

## 摘要

- 提出一种集成架构，将障碍滤波、不确定性估计与经验回放统一起来，而非作为相互独立的模块
- 不确定性估计用于更新控制障碍函数所依赖的障碍物几何，滤波干预与估计残差决定回放优先级，评论家从实际执行动作而非名义动作中学习
- 在带有被污染障碍测量的二维机器人导航任务上，以六个组件匹配的配置在相同训练预算、随机种子、传感器流、探索与扰动下进行对比
- 极端压力测试中，集成配置五个评估种子全部无接触到达目标，平均代价 $7.63\pm0.44$，障碍信念均方根误差 $3.52\pm0.55$ cm，消融实验同样零接触但仅四个种子到达目标

## 正文

安全 actor-critic 控制通常将障碍滤波、不确定性估计和经验回放视为相互独立的模块，尽管每一个都会改变用于学习和控制的数据。我们开发了一种集成架构：其中不确定性估计会更新控制障碍函数（CBF）所使用的障碍物几何，滤波干预和估计残差决定回放优先级，评论家（critic）则从实际执行的动作而非名义动作中学习。

我们将该架构实例化在一个带有被污染障碍测量的二维机器人导航任务上，并在共同的训练预算、随机种子、传感器流、探索和扰动条件下，对比六种组件匹配的配置。评估包括一次中等规模的训练后测试、一次包含十一个等级的感知噪声扫描，以及一次在乘数 $6.0$ 下的探索性极端压力测试。在极端测试中，集成配置在所有五个评估种子里均未发生接触并到达目标，其平均代价为 $7.63\pm0.44$，障碍信念的均方根误差为 $3.52\pm0.55$ cm。不确定性估计的消融配置同样没有接触，但在五个种子里只有四个到达目标，平均代价为 $8.96\pm2.08$，信念误差为 $11.08\pm1.23$ cm。

一个有限训练界的分析阐明了回放暴露程度，一个稳健的障碍条件则给出了所需的估计误差与可行性假设。结果表明，在该基准上耦合估计、安全滤波与回放是有益的；更广泛的安全性与收敛性结论仍需进一步研究。

## 关键词

#安全强化学习 #控制障碍函数 #不确定性估计 #经验回放
