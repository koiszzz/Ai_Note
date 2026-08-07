---
published: 2026-08-06
title: 防御性驾驶评测中共用轨迹回放的失效：NAVSIM评分基础审计
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/When Shared Rollouts Fail in Defensive Driving Evaluation- A NAVSIM Score Basis Audit.md
source_note: "[[信息源/arXiv cs.CV RSS/When Shared Rollouts Fail in Defensive Driving Evaluation- A NAVSIM Score Basis Audit]]"
source_sha256: 1f71d366d4157355f583b758ecf11f8f095e3caa205ddea8c46e1b9d2bdda745
original_url: https://arxiv.org/abs/2608.04896
processed: 2026-08-07
language: zh-CN
---

# 防御性驾驶评测中共用轨迹回放的失效：NAVSIM评分基础审计

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04896)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/When Shared Rollouts Fail in Defensive Driving Evaluation- A NAVSIM Score Basis Audit|查看原始文件]]

## 摘要

- 审计 NAVSIM v2.2 原始场景单阶段评分中参考条件宽恕机制的风险：共享不稳定轨迹回放变换时，参考失败会传播为广泛合规得分。
- 在受影响条件下，路线盲的 Ignore-All 探针与路线感知致盲探针在整个 12,146 令牌 navtest 划分中胜过人类回放和 PDM-Closed。
- 用同源依赖堆栈对照与精确输入诊断定位到共享速度重拟合中的依赖敏感数值行为；在 450 令牌对照池上仅替换求解器即消除轨迹发散。
- 贡献审计协议：要求评分基础和堆栈披露、致盲探针、覆盖报告与轨迹稳定性测试。

## 正文

防御性驾驶评分只有在能够区分观察周围参与者的策略与不观察的策略时才有用。重仿真基准可能使用参考条件宽恕机制，在该机制下，当记录的人类参考在合规通道上失败时，智能体会获得得分。当智能体和参考共享不稳定的轨迹回放变换时，这一规则会将共享的参考失败传播为广泛的合规得分。

我们在 NAVSIM v2.2 原始场景单阶段评分中审计这一风险。在受影响的文档化堆栈条件下（审计的数值后端），无视路线的 Ignore-All 探针和路线感知的致盲参与者探针在整个 12,146 令牌的 navtest 划分中胜过人类回放和 PDM-Closed。遵循公开规范的全新安装可在固定的 32 令牌诊断集上复现轨迹发散。同源依赖堆栈对照和精确输入诊断隔离了共享速度重拟合中对依赖敏感的数值行为。在 450 令牌对照池上，仅替换求解器即可消除轨迹发散并恢复致盲者最后排序，同时保持宽恕机制启用。因此，数值不稳定性是直接触发因素。参考条件宽恕机制将由此产生的共享参考失败传播为合规得分。我们贡献了一个审计协议，要求在使用此类评分进行防御性驾驶断言之前，披露评分基础和堆栈、致盲探针、覆盖报告以及进行轨迹稳定性测试。

## 关键词

#自动驾驶 #仿真评测 #防御性驾驶 #可复现性
