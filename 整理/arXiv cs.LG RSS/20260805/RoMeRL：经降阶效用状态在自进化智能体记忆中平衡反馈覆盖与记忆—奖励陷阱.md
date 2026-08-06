---
published: 2026-08-05
title: "RoMeRL：经降阶效用状态在自进化智能体记忆中平衡反馈覆盖与记忆—奖励陷阱"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/RoMeRL- Balancing Feedback Coverage and the Memory-Reward Trap in Self-Evolving Agent Memory via Red.md"
source_note: "[[信息源/arXiv cs.LG RSS/RoMeRL- Balancing Feedback Coverage and the Memory-Reward Trap in Self-Evolving Agent Memory via Red.]]"
source_sha256: 4a39cf5bf95dee2f101b02ff4be0097f43cc4eca34d2d4cb3aa20b28246b5b20
original_url: "https://arxiv.org/abs/2608.02508"
processed: 2026-08-05
language: zh-CN
---

# RoMeRL：经降阶效用状态在自进化智能体记忆中平衡反馈覆盖与记忆—奖励陷阱

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Yi Yang、Zhennan Chen、Yihong Zhuang、Tiehan Fan、Yinan Chen、Jian Li、Jian Yang、Ying Tai
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02508)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/RoMeRL- Balancing Feedback Coverage and the Memory-Reward Trap in Self-Evolving Agent Memory via Red.|查看原始文件]]

## 摘要

- 自进化 LLM 智能体的基于学习的记忆系统面临两个紧密耦合的挑战：轨迹索引效用随交互历史增长，使有限反馈散布在不断扩张的状态空间上；且轨迹级奖励被联合分配给协同检索的记忆，无关经验可能收到误导效用更新并进入记忆—奖励陷阱。
- 引入降阶记忆强化学习（RoMeRL）：用按结果极性与记忆动力学分解的固定维度每任务记忆状态表示不断增长的轨迹索引效用空间。
- RoMeRL 通过一组内容随时间更新或替换的固定语义坐标纳入新经验，从而把反馈集中在有界效用支撑上。
- 理论上表明该降阶参数化增加每个效用坐标收到的平均反馈，并在一般坐标转移模型下刻画错误坐标的稳态占用。
- 实证上，在 ALFWorld 与 LifelongAgentBench 上：RoMeRL 改善任务性能，Cold-Q 比率降低 80.0%，反馈密度提升约 6.0 倍，维护记忆规模减少 84.4%，LLM 调用减少 21.1%。
- 结果表明降阶效用状态支持高效自进化智能体记忆，同时限制持续奖励污染；代码：https://github.com/YOUNG-fnxm/RoMeRL

## 正文

论文编号：arXiv:2608.02508v2（更新类型：replace）。以下为摘要全文翻译。

自进化 LLM 智能体的基于学习的记忆系统面临两个紧密耦合的挑战。首先，轨迹索引的效用随交互历史增长，把有限的反馈散布在不断扩张的状态空间上。其次，由于轨迹级奖励被联合分配给协同检索的记忆，无关的经验可能收到误导性的效用更新，从而进入记忆—奖励陷阱。为应对这些挑战，我们引入降阶记忆强化学习（Reduced-Order Memory Reinforcement Learning，RoMeRL），它用按结果极性与记忆动力学分解的固定维度每任务记忆状态表示不断增长的轨迹索引效用空间。RoMeRL 通过一组固定语义坐标纳入新经验，其内容随时间更新或替换，从而把反馈集中在有界的效用支撑上。理论上，我们表明这种降阶参数化增加了每个效用坐标收到的平均反馈，并在一个一般坐标转移模型下刻画了错误坐标的稳态占用。实证上，在 ALFWorld 与 LifelongAgentBench 上，RoMeRL 改善任务性能，把 Cold-Q 比率降低 80.0%，把反馈密度提升约 6.0 倍，把维护记忆规模减少 84.4%，并把 LLM 调用减少 21.1%。这些结果表明，降阶效用状态支持高效的自进化智能体记忆，同时限制持续的奖励污染。代码可在 https://github.com/YOUNG-fnxm/RoMeRL 获取。

## 关键词

#智能体记忆 #强化学习 #自进化 #LLM智能体 #奖励污染
