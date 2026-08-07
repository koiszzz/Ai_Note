---
published: 2026-08-06
title: FocusMem：潜空间GUI记忆中的内容、读取与信任分解
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/FocusMem- Factorizing Content, Readout, and Trust in Latent GUI Memory.md
source_note: "[[信息源/arXiv cs.CV RSS/FocusMem- Factorizing Content, Readout, and Trust in Latent GUI Memory]]"
source_sha256: 3edd0b9ef4112d4fa1ba51b100c976c137bc7f44e53a08257049668abb097225
original_url: https://arxiv.org/abs/2608.04530
processed: 2026-08-07
language: zh-CN
---

# FocusMem：潜空间GUI记忆中的内容、读取与信任分解

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04530)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/FocusMem- Factorizing Content, Readout, and Trust in Latent GUI Memory|查看原始文件]]

## 摘要

- GUI 智能体必须记住先前任务的有用经验和当前交互中未完成的进度，潜空间记忆通过将多模态轨迹压缩为少量连续 token 提供紧凑方案，但现有方法通常将每条轨迹映射到一个固定记忆块并主要通过下一步动作监督训练，产生三个实际问题：压缩中可能丢失重要细节、同一记忆块必须服务不同决策阶段、检索到的不相关轨迹仍可能误导智能体。
- 提出 FocusMem，在一个紧凑潜记忆接口内分离这些职责：角色感知的内容基鼓励情节记忆保留可复用经验、工作记忆保留任务进度；状态条件化读取为同一存储证据生成决策特异的视图；轻量信任门可抑制与当前步骤看似无关的记忆块；所有组件在 GUI 策略冻结的情况下训练。
- 在五个 GUI 智能体基准上，FocusMem 始终优于完全匹配的动作专用固定记忆基线和先前的潜记忆适配方案。
- 进一步分析表明：语义与功能监督保留互补信息；状态条件化读取在周围轨迹上下文增长时更稳健；信任门减少了注入的不相关情节证据造成的危害。

## 正文

GUI 智能体必须记住先前任务中的有用经验，以及当前交互中未完成的进度。潜空间记忆通过将多模态轨迹压缩为少量连续 token，提供了一种紧凑的解决方案。然而，现有方法通常将每条轨迹映射到一个固定的记忆块，并主要通过下一步动作监督来训练。这产生了三个实际问题：重要细节可能在压缩过程中丢失；同一个记忆块必须服务于不同的决策阶段；检索到的无关轨迹仍可能误导智能体。我们提出 FocusMem，在一个紧凑的潜记忆接口内分离这些职责。角色感知的内容基（role-aware content basis）鼓励情节记忆保留可复用的经验，工作记忆保留任务进度。状态条件化读取（state-conditioned readout）为同一存储证据生成决策特异的视图，而一个轻量信任门（trust gate）可以抑制与当前步骤看似无关的记忆块。所有组件都在 GUI 策略保持冻结的情况下训练。在五个 GUI 智能体基准上，FocusMem 始终优于完全匹配的动作专用固定记忆基线以及先前的潜记忆适配方案。进一步的分析表明，语义与功能监督保留了互补的信息；状态条件化读取在周围轨迹上下文增长时更加稳健；信任门减少了注入的无关情节证据造成的危害。这些结果表明，有效的潜空间记忆不仅取决于压缩过去的交互，还取决于保留什么、暴露什么以及允许什么。

## 关键词

#GUI智能体 #潜空间记忆 #记忆接口 #信任门 #智能体
