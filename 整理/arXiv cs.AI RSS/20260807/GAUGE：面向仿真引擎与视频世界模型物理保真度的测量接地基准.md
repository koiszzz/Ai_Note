---
published: 2026-08-07
title: "GAUGE：面向仿真引擎与视频世界模型物理保真度的测量接地基准"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/GAUGE- A Measurement-Grounded Benchmark for Physical Fidelity in Simulation Engines and Video World .md"
source_note: "[[信息源/arXiv cs.AI RSS/GAUGE- A Measurement-Grounded Benchmark for Physical Fidelity in Simulation Engines and Video World ]]"
source_sha256: 66e47f7fbd3980d8fbdfb80cd277f0d2e33b16df4cc6b7fb08f6b7e9ae525b84
original_url: "https://arxiv.org/abs/2608.05948"
processed: 2026-08-07
language: zh-CN
---

# GAUGE：面向仿真引擎与视频世界模型物理保真度的测量接地基准

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Shuai Wang, Yaxin Feng, Xuekun Jiang, Shihan Tian, Ningyu Yan, Xing Shen, Chaoyang Lyu, Hui Wang, Yunsong Zhou, Hanqing Wang, Jiangmiao Pang, Yang Xiang, Xing Gao, Chunhua Shen, Weinan Zhang
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05948)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/GAUGE- A Measurement-Grounded Benchmark for Physical Fidelity in Simulation Engines and Video World|查看原始文件]]

## 摘要

- 物理引擎促进具身智能的大规模训练与评估，生成式视频世界模型正成为未来状态与交互的隐式模拟器；但现有物理保真度评估常孤立进行，严重依赖感知相似性或人类判断，对违反哪些物理原理或参数提供有限洞见。
- 引入 GAUGE：联合评估数值模拟器与生成式视频世界模型如何复现或偏离真实物理的真实世界接地诊断基准——包含 22 个受控任务族，覆盖刚体、柔性线缆、织物与体积可变形物体；接地于真实世界轨迹并配对校准物理元数据、不确定性标注与任务特定可观测量，覆盖碰撞、摩擦、动量传递、振荡、自接触与变形等基本物理过程。
- 用广义轨迹误差在 14 个任务族上基准测试 Isaac Sim、Genesis 与 Newton，并在 5 个刚体任务上评估 6 个图像到视频模型，测试物理定律一致性与推断参数的时间稳定性。
- 结果揭示没有统一忠实的物理引擎，最大差异出现在冲量接触、快速织物运动与体积变形；视频世界模型可产生具有预期方程形式但恢复错误加速度、动量传递与振荡时序的轨迹；GAUGE 为具身智能开发更物理忠实的模拟器与世界模型奠定基础。

## 正文

物理引擎促进具身智能的大规模训练与评估，而生成式视频世界模型正作为未来状态与交互的隐式模拟器出现。然而，现有物理保真度评估常常孤立进行，严重依赖感知相似性或人类判断，对违反哪些物理原理或参数提供有限洞见。我们引入 GAUGE，一个真实世界接地的诊断基准，联合评估数值模拟器与生成式视频世界模型如何复现或偏离真实物理。它包含 22 个受控任务族，覆盖刚体、柔性线缆、织物与体积可变形物体。接地于真实世界轨迹并配对校准的物理元数据、不确定性标注与任务特定可观测量，这些任务覆盖包括碰撞、摩擦、动量传递、振荡、自接触与变形在内的基本物理过程，横跨多样材料与条件。我们在 14 个任务族上用广义轨迹误差基准测试 Isaac Sim、Genesis 与 Newton，并在 5 个刚体任务上评估 6 个图像到视频模型，测试物理定律一致性与推断参数的时间稳定性。我们的结果揭示没有统一忠实的物理引擎，最大差异出现在冲量接触、快速织物运动与体积变形。我们进一步发现，视频世界模型可以产生具有预期方程形式的轨迹，同时恢复错误的加速度、动量传递与振荡时序。GAUGE 为开发更物理忠实的模拟器与世界模型以支持具身智能奠定基础。

## 关键词

#物理引擎 #世界模型 #物理保真度 #基准测试
