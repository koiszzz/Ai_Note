---
published: 2026-08-06
title: 共享 rollout 在防御性驾驶评估中失效时：NAVSIM 评分基准审计
source: arXiv cs.AI RSS
original_file: 信息源/arXiv cs.AI RSS/When Shared Rollouts Fail in Defensive Driving Evaluation- A NAVSIM Score Basis Audit.md
source_note: "[[信息源/arXiv cs.AI RSS/When Shared Rollouts Fail in Defensive Driving Evaluation- A NAVSIM Score Basis Audit]]"
source_sha256: 39533fab309c04055db6eb6b8eaa92584c55837862e1052067d4ceb1436666db
original_url: https://arxiv.org/abs/2608.04896
processed: 2026-08-07
language: zh-CN
---

# 共享 rollout 在防御性驾驶评估中失效时：NAVSIM 评分基准审计

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04896)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/When Shared Rollouts Fail in Defensive Driving Evaluation- A NAVSIM Score Basis Audit|查看原始文件]]

## 摘要

- 参考条件化宽容下，智能体与参考共享不稳定的 rollout 变换时，共享参考失败会被传播为广泛的合规信用，使防御性驾驶分数失真
- NAVSIM v2.2 审计：受影响栈条件下，无视路线的 Ignore-All 探针与感知路线、无感知者的探针在完整 12,146-token navtest 划分上竟超过人类回放与 PDM-Closed；全新安装复现 rollout 发散，同源依赖栈对照与精确输入诊断将问题隔离到共享速度重拟合
- 450-token 对照池上仅替换求解器即消除发散并恢复正确排序（宽容保持启用）——数值不稳定是直接触发；提出含分数基础与栈披露、盲探针、覆盖报告、rollout 稳定性测试的审计协议

## 正文

防御性驾驶分数只有在能区分"观察周围智能体的策略"与"不观察的策略"时才有用。重仿真基准可能使用参考条件化宽容（reference-conditioned forgiveness）：当记录的人类参考在合规通道上失败时，智能体会获得信用。当智能体与参考共享一个不稳定的 rollout 变换时，该规则可能把共享的参考失败传播为广泛的合规信用。

我们在 NAVSIM v2.2 原始场景单阶段评分中审计了这一风险。在受影响的有文档记录的栈条件、被审计的数值后端下，无视路线的 Ignore-All 探针和感知路线的无感知者（actor-blind）探针，在完整的 12,146 个 token 的 navtest 划分上超过人类回放（human replay）与 PDM-Closed。按照公开规范的全新安装在一个固定 32-token 诊断集上复现了 rollout 发散。同源依赖栈对照与精确输入诊断将共享速度重拟合（velocity refit）中的依赖敏感的数值行为隔离出来。在 450-token 对照池上，仅替换求解器就消除了 rollout 发散并恢复盲点靠后的排序，同时保持宽容机制启用。因此，数值不稳定是直接触发因素。参考条件化宽容把由此产生的共享参考失败传播为合规信用。我们贡献了一个审计协议：在使用此类分数进行防御性驾驶断言之前，要求披露评分基础与栈、盲探针、覆盖报告以及 rollout 稳定性测试。

## 关键词

#防御性驾驶 #NAVSIM #基准审计 #重仿真
