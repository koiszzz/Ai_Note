---
title: "AgenticECO：面向三维集成电路工程变更订单的智能体框架"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/AgenticECO- An Agentic Framework for ECO on 3D Integrated Circuits.md"
source_note: "[[信息源/arXiv cs.AI RSS/AgenticECO- An Agentic Framework for ECO on 3D Integrated Circuits]]"
source_sha256: 5df2a684fed5245ea73eeeb256003c7815989419fdd76679b825d64eaf16704a
original_url: "https://arxiv.org/abs/2608.03738"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# AgenticECO：面向三维集成电路工程变更订单的智能体框架

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03738)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/AgenticECO- An Agentic Framework for ECO on 3D Integrated Circuits|查看原始文件]]

## 摘要

- 随着摩尔定律放缓，产业转向三维集成；在合并的 3D-IC 流程中，布线设计会暴露二维电路没有的键合级缺陷，而布线后的工程变更订单仍主要依赖人工和专家经验。
- 论文提出 AgenticECO，一种在开源 TaiWei 流程上运行、受证据门控的工具使用型智能体工作流，并配套 EcoRoute 最小扰动 ECO 布线层。
- 在九个匹配的自然缺陷案例中，AgenticECO 在相同预算下对全量重布线和标准修复都以 7 比 2 胜出，已修复案例平均扰动为 0.66%，且没有触碰时钟网络。
- 所有被接受的结果都通过布线、重新提取、最大/最小延迟、DRC 和结构等价性检查；代码、环境和逐回合审计产物作为补充材料发布。

## 正文

随着摩尔定律放缓，产业正在转向三维集成。然而，在合并的 3D-IC 流程中，已布线设计会暴露二维电路中没有的键合级缺陷，布线后的工程变更订单（ECO）仍然是依赖人工和专家经验的工作。更严重的是，标准的“编辑后完全重新布线”做法把修复与布线器产生的变化纠缠在一起，使签核结果无法归因于真正触发它的编辑。

本文提出 AgenticECO，一种面向 3D-IC ECO、受证据门控的工具使用型智能体工作流，运行于开源 TaiWei 流程之上；同时提出 EcoRoute，一层最小扰动 ECO 布线机制，驱动未修改的固定版本布线器，使修复结果能够归因于对应编辑。

在九个匹配的自然缺陷案例中，在相同预算下，AgenticECO 对全量重布线和标准修复都取得 7 比 2 的结果；已修复案例的平均扰动为 0.66%，且没有触碰时钟网络。在同一封闭契约下进行的跨骨干模型复跑中，系统修复了全部九个案例。

受控研究表明，在保持约束下，修复动作是必要的；感知占用情况的选择能够带来合法落点，但不直接保证修复成功；在收紧时钟约束时，最小扰动会改变接受与拒绝结果。三项预注册视觉研究将像素测量工具的边界定位到存在争议的落点，一项预注册盲诊断准确恢复了所有留出的注入缺陷，是唯一没有错误编辑的实验组。所有被接受的结果都通过布线、重新提取、最大/最小延迟、DRC 和结构等价性门控。代码、环境和逐回合审计产物已作为补充材料发布。

## 关键词

#三维集成电路 #工程变更订单 #芯片设计 #智能体工作流
