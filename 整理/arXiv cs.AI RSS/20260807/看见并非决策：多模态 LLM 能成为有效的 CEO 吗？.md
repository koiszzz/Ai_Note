---
published: 2026-08-07
title: "看见并非决策：多模态 LLM 能成为有效的 CEO 吗？"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Seeing Is Not Deciding- Can Multimodal LLMs Act as Effective CEOs-.md"
source_note: "[[信息源/arXiv cs.AI RSS/Seeing Is Not Deciding- Can Multimodal LLMs Act as Effective CEOs-]]"
source_sha256: 8779b84329766e4d545cbde516ec4a0a57ac6e29ff117f9ed9dac90307508f1d
original_url: "https://arxiv.org/abs/2608.05864"
processed: 2026-08-07
language: zh-CN
---

# 看见并非决策：多模态 LLM 能成为有效的 CEO 吗？

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Yuyang Dai, Xueqing Peng, Yuxia Wang, Preslav Nakov, Zhuohan Xie
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05864)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Seeing Is Not Deciding- Can Multimodal LLMs Act as Effective CEOs-|查看原始文件]]

## 摘要

- 大语言模型日益用作自主决策智能体；但在高管商业决策中，现有基准限于纯文本设置，使模型能否感知视觉商业证据并有效整合以提升决策质量仍不清楚。
- 引入 C-SUITEBENCH：受控多模态基准，含 50 个场景下配对纯文本与多模态条件的五个决策任务；将九个前沿模型置于首席执行官角色评估决策能力。
- 多模态输入一致改进以证据为中心的推理，最大且最可靠增益出现在风险预测与面向董事会论证；但发现多模态整合悖论：添加视觉商业信息使九个模型全部在受限资源分配上退化，即使视觉接地本身改善。
- 消融实验揭示该失败源于信号拥挤：虽然每个视觉通道单独有帮助，其组合在解码期间破坏约束满足；发现表明视觉感知与约束行动是多模态智能体中可分离的瓶颈，不加区分视觉增强可损害高风险决策，激励未来高管 AI 系统的选择性接地策略。

## 正文

大语言模型日益用作自主决策智能体。然而，在高管商业决策中，现有基准限于纯文本设置。这使模型能否感知视觉商业证据并有效整合以改进决策质量仍不清楚。我们引入 C-SUITEBENCH，一个受控多模态基准，包含 50 个场景下配对纯文本与多模态条件的五个决策任务。我们将九个前沿模型置于首席执行官（CEO）角色，评估其决策能力。多模态输入一致改进以证据为中心的推理，最大且最可靠的增益出现在风险预测与面向董事会的论证中。然而，我们发现一个多模态整合悖论：添加视觉商业信息使全部九个模型的受限资源分配退化，即使视觉接地本身有所改善。消融实验揭示这一失败源于信号拥挤（signal crowding）：虽然每个视觉通道单独有帮助，它们的组合在解码期间破坏约束满足。这些发现表明，视觉感知与约束行动是多模态智能体中可分离的瓶颈，且不加区分的视觉增强可以损害高风险决策，为未来高管 AI 系统激励选择性接地策略。

## 关键词

#多模态LLM #高管决策 #视觉接地 #约束满足
