---
published: 2026-08-07
title: "下一张截图知道：移动 GUI 智能体的门控事后蒸馏"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/The Next Screenshot Knows- Gated Hindsight Distillation for Mobile GUI Agents.md"
source_note: "[[信息源/arXiv cs.CV RSS/The Next Screenshot Knows- Gated Hindsight Distillation for Mobile GUI Agents]]"
source_sha256: 33bdad4d4399bcfeeb9892c6efe32d17f42db9854f539af44a8394d9eda8b019
original_url: "https://arxiv.org/abs/2608.06065"
processed: 2026-08-07
language: zh-CN
---

# 下一张截图知道：移动 GUI 智能体的门控事后蒸馏

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Weiwei Li, Junzhuo Liu, Tong Chu, Hengfu Yu, Wen Li
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.06065)

## 摘要

- GUI 智能体通常从成功交互轨迹离线训练；标准训练将每条轨迹分解为前缀-动作对：智能体从当前屏幕与交互历史预测动作，后续观测被丢弃。
- 这移除动作为何正确的理由：证据往往只出现在后续屏幕上；例如启用 Soft Wrap，智能体应点击 Edit 或 View，但菜单打开前无任何线索；无此类证据，标准模仿几乎不给模型采样并学习正确推理的机会。
- 提出门控事后蒸馏（GHD）：训练期间用下一张截图作为特权信息；学生从可观测轨迹前缀预测，参数共享教师额外观察下一张截图并重评分学生的在策略响应；仅当学生失败且事后条件化教师恢复演示动作时应用蒸馏。
- GHD 在 AndroidWorld 与 AndroidLab 上相对 GRPO 改进两个视觉语言模型的任务成功；代码与检查点将发布。

## 正文

GUI 智能体通常从成功的交互轨迹离线训练。标准训练将每条轨迹分解为前缀-动作对：智能体从当前屏幕与交互历史预测一个动作，而后续观测被丢弃。这移除了动作为何正确的理由：证据往往只出现在后续屏幕上。例如，要启用 Soft Wrap，智能体应该点击 Edit 或 View，但菜单打开之前没有任何线索表明这一点。没有此类证据，标准模仿几乎不给模型采样并因此学习正确推理的机会。为解决该问题，研究提出门控事后蒸馏（Gated Hindsight Distillation, GHD），在训练期间使用下一张截图作为特权信息。一个学生从可观测的轨迹前缀预测，而一个参数共享的教师额外观察下一张截图，并重新评分学生的在策略（on-policy）响应。研究仅在学生失败且事后条件化的教师恢复演示动作时应用蒸馏。GHD 在 AndroidWorld 与 AndroidLab 上相对 GRPO 改进了两个视觉语言模型的任务成功率。代码与检查点将发布。

## 关键词

GUI 智能体、事后蒸馏、特权信息、Android、动作预测
