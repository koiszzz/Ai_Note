---
published: 2026-08-06
title: 抑制行之有效但局部性脆弱：VLA策略中任务向量消减的闭环目标与控制审计
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/Suppression Sticks, Locality Is Fragile- A Closed-Loop Target-and-Control Audit of Task-Vector Negat.md
source_note: "[[信息源/arXiv cs.LG RSS/Suppression Sticks, Locality Is Fragile- A Closed-Loop Target-and-Control Audit of Task-Vector Negat]]"
source_sha256: f07b2e04cdc6d0057c3c85d0aadd7cc6544f8eca965abfe2f55d6bfd962e3ad9
original_url: https://arxiv.org/abs/2608.04692
processed: 2026-08-07
language: zh-CN
---

# 抑制行之有效但局部性脆弱：VLA策略中任务向量消减的闭环目标与控制审计

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04692)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Suppression Sticks, Locality Is Fragile- A Closed-Loop Target-and-Control Audit of Task-Vector Negat|查看原始文件]]

## 摘要

- 对多任务 VLA 策略中逐技能任务向量减法进行闭环目标-控制审计：十个 LIBERO-Goal 技能呈现三种状态——分离、抵抗与全局崩溃。
- 可抑制目标保持在 0% 成功率，但基线归一化控制保留率仅 52%，且每次编辑都损害至少一个无关控制。
- 任务向量减法被刻画为快速但脆弱的干预，评估具身模型编辑的局部性必须采用闭环目标-控制评估。

## 正文

任务向量算术提供了一种封闭式修改模型的方式，但其行为局部性在闭环机器人控制中仍不清楚。我们对多任务视觉-语言-动作（VLA）策略中的逐技能任务向量减法进行了一项目标与控制审计。在所有十个 LIBERO-Goal 技能中，减法产生三种性质不同的状态：五个技能出现目标-控制分离，三个技能出现抵抗，两个技能出现全局崩溃。在留出初始状态上，五个可抑制目标保持在 0% 的成功率；然而，基线归一化后的平均控制保留率仅为 52%，并且每次目标抑制编辑都会对至少一个名义上无关的控制造成实质性损害。额外的 Goal 面板显示，在具有连续回归、离散 token 和流匹配动作头的所测策略中均出现分离，而我们在 Spatial 上未观察到干净的分离，在所测 Object 和 Long-horizon 面板上出现控制崩溃。平均任务向量余弦无法解释这种变化。一个匹配范数控制在两对 Goal 锚点周围识别出局部符号不对称，而多向量结果随锚点和尺度变化。保留感知的梯度基线提供了依赖数据的比较器，但需要移除时数据和优化；减法仅在编辑时是数据无关和梯度无关的，它假设了预计算的专家增量。最后，单技能重新学习探测与行为掩蔽（behavioral masking）一致，而非经认证的遗忘。这些结果将任务向量减法刻画为一种快速但脆弱的干预，并强调了在评估具身模型编辑的局部性时进行闭环目标-控制评估的必要性。

## 关键词

#任务向量 #VLA策略 #模型编辑 #闭环控制 #可解释性
