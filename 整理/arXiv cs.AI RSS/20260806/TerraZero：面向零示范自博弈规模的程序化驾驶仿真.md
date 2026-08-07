---
published: 2026-08-06
title: TerraZero：面向零示范自博弈规模的程序化驾驶仿真
source: arXiv cs.AI RSS
original_file: 信息源/arXiv cs.AI RSS/TerraZero- Procedural Driving Simulation for Zero-Demonstration Self-Play at Scale.md
source_note: "[[信息源/arXiv cs.AI RSS/TerraZero- Procedural Driving Simulation for Zero-Demonstration Self-Play at Scale]]"
source_sha256: df0e109758cf9bc03e95885bac0d10739901c646ca99c4f83dd8309f3c89c53a
original_url: https://arxiv.org/abs/2607.13028
processed: 2026-08-07
language: zh-CN
---

# TerraZero：面向零示范自博弈规模的程序化驾驶仿真

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.13028)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/TerraZero- Procedural Driving Simulation for Zero-Demonstration Self-Play at Scale|查看原始文件]]

## 摘要

- 提出 TerraZero，一套程序化驾驶仿真器与自博弈训练技术栈：CPU 上运行的 C 引擎通过零拷贝路径在 GPU 上进行策略推理，单块服务器级 GPU 每秒维持 130 万智能体步
- 保留单智能体系统缺失的保真度：异构智能体、多种动力学模型、完整交通规则执行
- 仅以日志数据作为真实世界地图几何来源，通过随机化道路使用者、信号控制器及智能体动力学生成近乎无限的场景
- 全部策略仅靠强化学习从零训练，零人工示范、无模仿、无日志轨迹、推理时无后备规划器；单个检查点同时登顶 val14 与交互式长尾 InterPlan 套件

## 正文

训练稳健的自动驾驶智能体需要满足三个条件的仿真器：速度快到足以支撑大规模强化学习；足够真实，能够将行为锚定在真实世界地图结构上；足够多样，能够覆盖日志数据中很少包含的安全关键长尾情况。我们提出了 TerraZero，一套达成这些目标的程序化驾驶仿真器与自博弈训练技术栈。

一个可配置的 C 引擎在 CPU 上运行仿真，并通过零拷贝路径在 GPU 上进行策略推理，在单块服务器级 GPU 上每秒维持 130 万个智能体步，远快于现有的物体级仿真器，同时保留了轻量级单智能体系统所缺失的保真度：异构智能体、多种动力学模型以及完整的交通规则执行。TerraZero 仅将日志数据用作真实世界地图几何的来源，为每张地图填充随机化的基于规则的道路使用者和信号控制器，并在每个回合中随机化智能体动力学、奖励与尺寸，因此一张地图即可产生实际上无界的场景集合。

报告中的每项策略都完全通过强化学习从零训练：零人工示范、无模仿、无日志轨迹，推理时也没有后备规划器，并且采用一种计算高效的、跨 GPU 扩展的自博弈配方。这些策略能够零样本地跨城市、跨数据集泛化，包括在没有显式监督的情况下涌现出靠左行驶的驾驶行为。作为自我（ego）策略，单个检查点据我们所知是首个同时登顶 val14 与交互式长尾 InterPlan 套件的完全学习式策略。在 Waymo Open Sim Agents 真实性评估上，同一配方优于其他无示范方法，并与最强的参考锚定自博弈方法相当。一个技术栈同时承担两种角色：面向汽车与卡车多种动力学的最先进无示范驾驶策略，以及联合控制车辆、行人与骑行者的仿真智能体。

## 关键词

#arXiv #自动驾驶 #强化学习 #仿真 #自博弈
