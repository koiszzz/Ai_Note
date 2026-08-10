---
published: 2026-08-07
title: "DASH：用于自动化贝叶斯优化的解耦自适应代理-采集框架"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/DASH- Decoupled Adaptive Surrogate - Acquisition Harness for Automated Bayesian Optimization.md"
source_note: "[[信息源/arXiv cs.AI RSS/DASH- Decoupled Adaptive Surrogate - Acquisition Harness for Automated Bayesian Optimization]]"
source_sha256: 45ec187c64cbfa6efa0e48d4ba0276155c2c5419224ad5bdb92443448e10db1f
original_url: "https://arxiv.org/abs/2608.00641"
processed: 2026-08-07
language: zh-CN
---

# DASH：用于自动化贝叶斯优化的解耦自适应代理-采集框架

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Changquan Zhao, Yuxiang Sun, Ruihao Zhu, Cheng Hua, Yulian He
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.00641)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/DASH- Decoupled Adaptive Surrogate - Acquisition Harness for Automated Bayesian Optimization|查看原始文件]]

## 摘要

- 贝叶斯优化（BO）依赖代理模型与采集函数，但最合适的选择因任务与优化阶段而异；自动化贝叶斯优化（AutoBO）通过在线适配 BO 组件解决此变异性。
- 现有 AutoBO 方法要么只适配一个组件，使另一个失配成为瓶颈；要么在共享标准下联合选择代理-采集对，忽视其不同角色：代理选择依赖预测可靠性，而采集适配应响应策略环境。
- 提出 DASH：用于大语言模型（LLM）增强 AutoBO 的解耦自适应代理-采集框架——按预测可靠性、不确定性校准与排序一致性选择代理；两阶段采集控制器周期性地跨采集函数重新分配配额、相应构建 BO 候选清单，并委托 LLM 做最终选择；DASH 还包含集成框架（知识引导的热启动与结构化记忆），使优化接地于领域知识与累积反馈。
- 四个化学优化任务上，DASH 相对最优 AutoBO 基线在轨迹级加速因子提升 12.51%、端点增强因子提升 5.00%；跨 LLM 骨干结果依然强劲，消融验证所有组件的互补贡献；全表与行为污染检查未发现直接基准记忆或源单元泄漏解释这些增益的可检测证据。

## 正文

贝叶斯优化（Bayesian optimization，BO）依赖代理模型与采集函数，但最合适的选择因任务与优化阶段而异。自动化贝叶斯优化（AutoBO）通过在线适配 BO 组件解决这一变异性。然而，现有 AutoBO 方法要么只适配一个组件，使另一个失配并成为瓶颈；要么在共享标准下联合选择代理-采集对，忽视其不同角色：代理选择依赖预测可靠性，而采集适配应响应策略环境。本文中，我们提出 DASH，一个用于大语言模型（LLM）增强 AutoBO 的解耦自适应代理-采集框架（Decoupled Adaptive Surrogate–Acquisition Harness）。DASH 按预测可靠性、不确定性校准与排序一致性选择代理；其两阶段采集控制器周期性地跨采集函数重新分配配额，相应构建 BO 候选清单，并将最终选择委托给 LLM。DASH 还纳入一个集成框架，包括知识引导的热启动与结构化记忆，使优化接地于领域知识与累积反馈。在四个化学优化任务上，DASH 相对最优 AutoBO 基线在轨迹级加速因子（Acceleration Factor）上提升 12.51%，在端点增强因子（Enhancement Factor）上提升 5.00%。跨 LLM 骨干结果依然强劲，消融验证所有组件的互补贡献。全表与行为污染检查未发现可检测证据表明直接基准记忆或源单元泄漏解释了这些增益。

## 关键词

#贝叶斯优化 #AutoBO #LLM #解耦适配
