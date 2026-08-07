---
published: 2026-08-06
title: TerraZero：面向零示范大规模自博弈的程序化驾驶仿真
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/TerraZero- Procedural Driving Simulation for Zero-Demonstration Self-Play at Scale.md
source_note: "[[信息源/arXiv cs.LG RSS/TerraZero- Procedural Driving Simulation for Zero-Demonstration Self-Play at Scale]]"
source_sha256: 272ea6ed96eac6d8552aaef4316d13e75732d083b168bd777a28648f8cfbc1e8
original_url: https://arxiv.org/abs/2607.13028
processed: 2026-08-07
language: zh-CN
---

# TerraZero：面向零示范大规模自博弈的程序化驾驶仿真

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.13028)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/TerraZero- Procedural Driving Simulation for Zero-Demonstration Self-Play at Scale|查看原始文件]]

## 摘要

- TerraZero 是可配置 C 引擎驱动的程序化驾驶模拟器：CPU 仿真 + GPU 策略推理零拷贝路径，单块服务器级 GPU 每秒 130 万智能体步长。
- 日志数据仅用于地图几何，随机规则化道路使用者与信号控制器使单张地图产生无界场景集；策略完全由强化学习从头训练，零示范、零模仿、无回退规划器。
- 单个检查点据称首次在 val14 与交互式长尾 InterPlan 套件登顶；一个栈同时服务自车策略与仿真智能体两种角色。

## 正文

训练稳健的自动驾驶智能体需要一个模拟器，它要足够快以支持大规模强化学习，足够逼真以将行为扎根于真实世界地图结构，并且足够多样以覆盖日志数据很少包含的安全关键长尾。我们提出 TerraZero，一种程序化驾驶模拟器和自博弈训练栈，可满足这些目标。一个可配置的 C 引擎在 CPU 上运行仿真，在 GPU 上通过零拷贝路径运行策略推理，在单块服务器级 GPU 上维持每秒 130 万个智能体步长，远快于现有的物体级模拟器，同时保持了更轻量的单智能体系统所忽略的保真度：异构智能体、多种动力学模型和完整的交通规则执行。TerraZero 仅将日志数据用作真实世界地图几何的来源，用随机的基于规则的交通参与者和信号控制器填充每张地图，并在每个回合随机化智能体动力学、奖励和尺寸，因此一张地图可产生实际上无界的场景集。每条报告的策略都完全通过强化学习从头训练，零人工示范、无模仿、无日志轨迹、推理时无回退规划器，采用一种跨 GPU 扩展的计算高效自博弈配方。这些策略跨城市和数据集进行零样本泛化，包括在没有显式监督的情况下涌现出靠左行驶驾驶。作为自车策略，单个检查点据我们所知是首个在 val14 和交互式长尾 InterPlan 套件上均登顶的完全学习策略。在 Waymo Open Sim Agents 真实度上，同一配方优于其他无示范方法，并与最强的参考锚定自博弈方法具有竞争力。一个栈同时服务两种角色：跨汽车和卡车动力学的领先无示范驾驶策略，以及联合控制车辆、行人和自行车骑手的仿真智能体。

## 关键词

#TerraZero #自动驾驶 #程序化仿真 #自博弈 #强化学习 #零示范
