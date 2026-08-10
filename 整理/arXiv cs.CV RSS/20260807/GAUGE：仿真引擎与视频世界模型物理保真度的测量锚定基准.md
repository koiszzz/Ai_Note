---
published: 2026-08-07
title: "GAUGE：仿真引擎与视频世界模型物理保真度的测量锚定基准"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/GAUGE- A Measurement-Grounded Benchmark for Physical Fidelity in Simulation Engines and Video World .md"
source_note: "[[信息源/arXiv cs.CV RSS/GAUGE- A Measurement-Grounded Benchmark for Physical Fidelity in Simulation Engines and Video World ]]"
source_sha256: c5f4986b8b542ed4b3fb3fd1067ae13a69608c188b3dfefef331c2dac5fed109
original_url: "https://arxiv.org/abs/2608.05948"
processed: 2026-08-07
language: zh-CN
---

# GAUGE：仿真引擎与视频世界模型物理保真度的测量锚定基准

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Shuai Wang, Yaxin Feng, Xuekun Jiang, Shihan Tian, Ningyu Yan, Xing Shen, Chaoyang Lyu, Hui Wang, Yunsong Zhou, Hanqing Wang, Jiangmiao Pang, Yang Xiang, Xing Gao, Chunhua Shen, Weinan Zhang
> - **发布时间**：2026-08-07
> - **分类**：cs.AI
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05948)

## 摘要

- 物理引擎促进具身智能的大规模训练与评估，生成式视频世界模型正作为未来状态与交互的隐式模拟器出现；现有物理保真度评估常孤立进行且重度依赖感知相似性或人类判断，对哪些物理原理或参数被违反提供有限洞见。
- 引入 GAUGE：真实世界锚定诊断基准，联合评估数值模拟器与生成式视频世界模型如何复现或偏离真实物理；含 22 个受控任务家族，覆盖刚体、柔性线缆、纺织物与体积可变形对象。
- 锚定于真实轨迹并配对校准物理元数据、不确定性标注与任务特定可观测量，覆盖碰撞、摩擦、动量传递、振荡、自接触与形变等基本物理过程（多样材料与条件）。
- 用广义轨迹误差在 14 个任务家族基准测试 Isaac Sim、Genesis 与 Newton，并在 5 个刚体任务上评估 6 个图像到视频模型（检验物理定律一致性与推断参数时间稳定性）；结果揭示无统一保真物理引擎，最大差异出现在脉冲接触、快速纺织物运动与体积形变；视频世界模型可产生方程形式正确的轨迹，却恢复错误的加速度、动量传递与振荡时机。

## 正文

物理引擎促进具身智能的大规模训练与评估，而生成式视频世界模型正作为未来状态与交互的隐式模拟器出现。然而，现有物理保真度评估往往孤立进行，并重度依赖感知相似性或人类判断，对哪些物理原理或参数被违反提供有限洞见。研究引入 GAUGE，一个真实世界锚定的诊断基准：联合评估数值模拟器与生成式视频世界模型如何复现或偏离真实物理。它包含 22 个受控任务家族，覆盖刚体、柔性线缆、纺织物与体积可变形对象。锚定于真实轨迹并配对校准的物理元数据、不确定性标注与任务特定可观测量，这些任务覆盖碰撞、摩擦、动量传递、振荡、自接触与形变等基本物理过程，横跨多样材料与条件。研究在 14 个任务家族上用广义轨迹误差基准测试 Isaac Sim、Genesis 与 Newton，并在 5 个刚体任务上评估 6 个图像到视频模型：测试物理定律一致性与推断参数的时间稳定性。结果揭示没有统一保真的物理引擎，最大差异出现在脉冲接触、快速纺织物运动与体积形变中。研究进一步发现，视频世界模型可以产生具有预期方程形式的轨迹，同时恢复错误的加速度、动量传递与振荡时机。GAUGE 为具身智能开发更物理忠实的模拟器与世界模型奠定基础。

## 关键词

物理引擎、世界模型、物理保真度、基准、具身智能
