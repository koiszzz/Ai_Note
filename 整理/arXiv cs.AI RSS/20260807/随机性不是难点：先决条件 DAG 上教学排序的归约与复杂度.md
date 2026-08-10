---
published: 2026-08-07
title: "随机性不是难点：先决条件 DAG 上教学排序的归约与复杂度"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Stochasticity Is Not the Hard Part- Reduction and Complexity in Instructional Sequencing over Prereq.md"
source_note: "[[信息源/arXiv cs.AI RSS/Stochasticity Is Not the Hard Part- Reduction and Complexity in Instructional Sequencing over Prereq]]"
source_sha256: eae1c70927488a7cc2359d549111651673c76e0172c79f92a0dcf00c3bbd6290
original_url: "https://arxiv.org/abs/2608.05455"
processed: 2026-08-07
language: zh-CN
---

# 随机性不是难点：先决条件 DAG 上教学排序的归约与复杂度

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Zonglin Han (Department of Computer Science, University of California, Davis), Yichen Chen (Department of Computer Science, University of California, Davis), Jiawen Jiang (International Digital Economy College, Minjiang University), Tongan Shi (School of Computer Science and Artificial Intelligence, Liaoning Normal University), Kristian A. Stevens (Department of Computer Science, University of California, Davis)
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05455)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Stochasticity Is Not the Hard Part- Reduction and Complexity in Instructional Sequencing over Prereq|查看原始文件]]

## 摘要

- 当学生必须学习由先决依赖连接的概念时，教学顺序何时重要、找到最优顺序代价如何？将教学排序作为随机最短路径问题研究：尝试概念以状态依赖概率成功，失败使学习者状态不变。
- 首先证明该随机性可精确消除：问题坍缩为先决序理想格上的确定性最短路径问题，保留最优值与动作；坍缩移除随机复杂度但不移除组合复杂度：最优排序仍 NP 难——经锦标赛反馈弧集归约——即使无先决边、单位成本、均匀二值非负迁移、成功概率至少 1/2。
- 难度不均匀：当可实现迁移偏好与先决条件保持联合无环时，残余联合图的任何拓扑序最优，固定先决宽度产生多项式时间精确动态规划；可计算诊断 mΔ 在优化前界定排序价值。
- 在入门 CS 课程 70,893 次交互上，诊断证明"双重容易"机制——优化价值小、搜索空间小——而构造迁移实例实现挑战机制，其中短视排序承受大遗憾，而带一致启发式的精确 A* 在该家族上仅扩展线性多状态。

## 正文

当学生必须学习由先决依赖连接的概念时，教学的顺序何时重要，找到最优顺序代价如何？我们将教学排序（instructional sequencing）作为一个随机最短路径问题研究，其中尝试一个概念以状态依赖概率成功，而失败使学习者状态不变。我们首先证明这种随机性可以精确消除：问题坍缩为先决序理想（prerequisite order ideals）格上的确定性最短路径问题，保留最优值与动作。坍缩移除随机复杂度但不移除组合复杂度：最优排序仍然是 NP 难的——通过锦标赛中的反馈弧集归约——即使没有先决边、单位成本、均匀二值非负迁移，且成功概率至少 1/2。难度并非均匀：当可实现的迁移偏好与先决条件保持联合无环时，残余联合图的任何拓扑序都是最优的，且固定的先决宽度产生多项式时间的精确动态规划。一个可计算的诊断 mΔ 在优化之前界定排序的价值。在一个入门 CS 课程的 70,893 次交互上，该诊断证明一个"双重容易"机制——优化价值小、可搜索空间小——而构造的迁移实例实现了挑战机制，其中短视排序承受大的遗憾，然而带一致启发式的精确 A* 在该家族上仅扩展线性数量的状态。

## 关键词

#教学排序 #先决条件图 #NP难 #最短路径
