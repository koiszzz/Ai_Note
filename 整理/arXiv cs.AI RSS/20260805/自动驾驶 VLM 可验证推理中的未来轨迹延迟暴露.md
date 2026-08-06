---
published: 2026-08-05
title: "自动驾驶 VLM 可验证推理中的未来轨迹延迟暴露"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Deferred Exposure of Future Trajectories for Verifiable Reasoning in Autonomous Driving VLMs.md"
source_note: "[[信息源/arXiv cs.AI RSS/Deferred Exposure of Future Trajectories for Verifiable Reasoning in Autonomous Driving VLMs]]"
source_sha256: e66114133204547c0b4b208f077a0c16fadbdf2416d0a1cba14974775ef8084f
original_url: "https://arxiv.org/abs/2608.01755"
processed: 2026-08-05
language: zh-CN
---

# 自动驾驶 VLM 可验证推理中的未来轨迹延迟暴露

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Zixuan Huang 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.01755)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Deferred Exposure of Future Trajectories for Verifiable Reasoning in Autonomous Driving VLMs|查看原始文件]]

## 摘要

- 实证表明，自动驾驶 VLM 的思维链标注管道中向教师模型暴露日志化的真实未来轨迹会诱导“轨迹锚定偏差”：教师模型为已揭示的结果找理由而非从场景证据推断决策，产生因果保真度较低的 CoT 与显著更严重的幻觉。
- 移除真实轨迹可消除该捷径，但开放式轨迹生成把高层决策与精确几何合成、低层动力学纠缠在一起。
- 提出自动驾驶多选题（AD-MCQ）：把规划建模为对显式轨迹候选项的选择；进而提出 DEFT-RLVR（面向 RLVR 的未来轨迹延迟暴露），把未来轨迹从决策前锚点转化为决策后验证目标。
- 实验显示 DEFT-RLVR 改善 AD 推理，同时保持甚至增强通用视觉能力；AD-MCQ 以 VLM 推理并可控调节难度，为可验证 AD 推理研究提供灵活、可扩展、可扩展的基础。

## 正文

论文编号：arXiv:2608.01755v2（更新类型：replace）。以下为摘要全文翻译。

近期用于自动驾驶（AD）的视觉-语言-动作（VLA）模型越来越多地利用思维链（CoT）监督来增强其视觉-语言模型（VLM）组件的推理能力，然而现有标注管道通常会让教师模型暴露于记录中的真实（GT）未来轨迹。我们实证表明，这会诱导轨迹锚定偏差：教师模型为已揭示的结果找理由，而非从场景证据推断决策，从而产生因果保真度较低的 CoT，并在因果具挑战性的场景中产生显著更严重的幻觉。移除真实轨迹可以消除这一捷径，但开放式轨迹生成会把高层决策与精确的几何合成及低层动力学纠缠在一起。为在不需要开放式轨迹合成的情况下使轨迹级驾驶决策可验证，我们引入自动驾驶多选题（AD-MCQ），把规划建模为对显式轨迹候选项的选择。更进一步，我们提出 DEFT-RLVR（面向可验证强化学习的未来轨迹延迟暴露），把未来轨迹从决策前锚点转化为决策后验证目标。实验结果表明，DEFT-RLVR 改善了 AD 推理，同时保持甚至增强通用视觉能力。借助仅 VLM 的推理与通过候选项构造实现的可控难度，AD-MCQ 为未来可验证 AD 推理研究提供了灵活、可扩展且可拓展的基础。

## 关键词

#自动驾驶 #VLM #思维链 #可验证推理
