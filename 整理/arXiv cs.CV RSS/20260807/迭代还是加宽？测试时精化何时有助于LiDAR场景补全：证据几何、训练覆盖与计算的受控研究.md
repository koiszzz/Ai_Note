---
published: 2026-08-07
title: "迭代还是加宽？测试时精化何时有助于 LiDAR 场景补全：证据几何、训练覆盖与计算的受控研究"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/Iterate or Widen- When Test-Time Refinement Helps LiDAR Scene Completion- A Controlled Study of Evid.md"
source_note: "[[信息源/arXiv cs.CV RSS/Iterate or Widen- When Test-Time Refinement Helps LiDAR Scene Completion- A Controlled Study of Evid]]"
source_sha256: bf109ca6d3aa49216ae1336d1eed5cc984e799d77ffafc4dd1c4d96f5fe87725
original_url: "https://arxiv.org/abs/2608.06014"
processed: 2026-08-07
language: zh-CN
---

# 迭代还是加宽？测试时精化何时有助于 LiDAR 场景补全：证据几何、训练覆盖与计算的受控研究

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Shijie Hao, Weining Zhang
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.06014)

## 摘要

- 补全模型应花额外测试时计算迭代，还是将类似参数预算花在更宽的一次性预测器上？答案易被去噪课程、损坏增广、容量与非配对评估混淆。
- 在 LiDAR 语义场景补全中研究该问题：比较一次性预测器、参数匹配的更宽预测器与从同一冻结预测器初始化的权重共享多重网格精化器；协议分离连贯区域移除、独立细化、距离依赖衰减与加性杂波，同时保持精确场景条件配对。
- 五种训练种子与 815 帧 SemanticKITTI sequence-08：完整迭代系统在连贯角度移除下相对宽对照将 mIoU 提升 0.911 点，95% 移动块 bootstrap 区间 [0.804, 1.040] 清除预声明 0.5 点实际裕度；独立 75% 细化下迭代仅增加 0.300 点 [0.166, 0.436]，观测家族增广增加 5.975 点 [5.662, 6.140]；两者都不修复加性杂波。
- 迭代系统每帧成本 10.74 ms 与 0.75 GiB，宽对照 6.25 ms 与 0.23 GiB；确立几何条件化经验边界而非普适优势：连贯间隙可证明固定深度精化合理，广泛细化证据更有效经训练覆盖解决，虚假证据需要不同稳健性机制。

## 正文

补全模型应该花额外的测试时计算进行迭代，还是将类似的参数预算花在一个更宽的一次性预测器上？答案容易被去噪课程、损坏增广、容量与非配对评估混淆。研究在 LiDAR 语义场景补全中考察该问题：比较一个一次性预测器、一个参数匹配的更宽预测器，与一个从同一冻结预测器初始化的权重绑定多重网格（weight-tied multigrid）精化器。协议分离连贯区域移除、独立细化、距离依赖衰减与加性杂波，同时保持精确的场景条件配对。跨五种训练种子与 815 帧 SemanticKITTI sequence-08，完整迭代系统在连贯角度移除下相对宽对照将 mIoU 提升 0.911 点，95% 移动块 bootstrap 区间 [0.804, 1.040] 清除了预声明的 0.5 点实际裕度。在独立 75% 细化下，迭代仅增加 0.300 点 [0.166, 0.436]，而观测家族增广增加 5.975 点 [5.662, 6.140]。两种干预都不能修复加性杂波。迭代系统还每帧花费 10.74 ms 与 0.75 GiB，相对宽对照的 6.25 ms 与 0.23 GiB。这些结果确立一个几何条件化的经验边界而非普适优势：连贯间隙可以证明固定深度精化合理；广泛细化的证据更有效地通过训练覆盖解决；虚假证据需要不同的稳健性机制。

## 关键词

LiDAR、场景补全、测试时精化、语义分割、受控研究
