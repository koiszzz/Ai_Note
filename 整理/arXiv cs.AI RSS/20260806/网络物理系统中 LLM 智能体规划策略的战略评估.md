---
published: 20260806
title: "网络物理系统中 LLM 智能体规划策略的战略评估"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Strategic Evaluation of Planning Strategies for LLM Agents in Cyber-Physical Systems.md"
source_note: "[[信息源/arXiv cs.AI RSS/Strategic Evaluation of Planning Strategies for LLM Agents in Cyber-Physical Systems]]"
source_sha256: a873b6fbb1c22b97c99856bdd31e319d7a043d5a13bc271a652a5cc066a03bc4
original_url: "https://arxiv.org/abs/2608.04265"
processed: 2026-08-06
language: zh-CN

---

# 网络物理系统中 LLM 智能体规划策略的战略评估

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：J. de Curt\`o, I. de Zarz\`a
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04265)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Strategic Evaluation of Planning Strategies for LLM Agents in Cyber-Physical Systems|查看原始文件]]

## 摘要

- LLM 规划智能体评估大多问任务是否成功或是否遵循声明计划；战略网络物理系统中，更强的问题是自主参与者响应且物理约束结果后规划架构是否仍适当。
- 本文引入围绕规划诱导控制轨迹构建的受控、物理接地基准：执行架构对其他智能体和物理过程作用的排序规划操作和指令；在带 40 个异构产消者和独立模拟径向馈线的智能电网需求响应系统中实现预定义、顺序、层级和搜索执行器。
- LLM 限于类型化政策声明和短操作员消息，而调度构建、产消者动力学和功率流保持显式代码；协议用配对强制模式反事实、共同随机响应抽取和事件级截止可行性；三个性质：架构实质改变结果（强制搜索在全部五个基线种子为 oracle）；执行保真度需要比模式一致更多（目标替代将一致性保持 1.0 同时电压短缺增加 2.68 倍）；144 场景、576 回合库从四种架构中的三种有可行 oracle。

## 正文

LLM 规划智能体评估大多问任务是否成功或是否遵循声明计划。战略网络物理系统中，更强的问题是自主参与者响应且物理约束结果后，规划架构是否仍适当。我们引入一个受控、物理接地基准，围绕规划诱导控制轨迹（planning-induced control trajectories）构建：执行架构对其他智能体和物理过程作用的排序规划操作和指令。它在带 40 个异构产消者和独立模拟径向馈线的智能电网需求响应系统中实现预定义、顺序、层级和搜索执行器。LLM 限于类型化政策声明和短操作员消息，而调度构建、产消者动力学和功率流保持显式代码。协议使用配对强制模式反事实、共同随机响应抽取和事件级截止可行性。三个性质随之而来。架构实质改变结果：强制搜索在全部五个基线种子是 oracle。执行保真度需要比模式一致更多：目标替代将一致性保持 1.0，同时电压短缺增加 2.68 倍。144 场景、576 回合库有四种架构中三种的可行 oracle。预指定压力保留脊平均遗憾 90.7（95% 区间 [73.8, 108.6]），相对固定顺序无可检测价值；在质量预测前应用已知截止可行性将遗憾降至 29.0，相对固定顺序改进 61.1。全可行消融不击败固定搜索，将剩余挑战定位于可行内质量选择。五模型扩展分离压力条件、状态盲和不变声明者；延迟尾显示实时可行性应概率处理。

## 关键词

#LLM规划 #网络物理系统 #智能电网 #战略评估 #arXiv