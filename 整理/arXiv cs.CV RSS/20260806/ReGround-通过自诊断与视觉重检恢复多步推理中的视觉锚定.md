---
published: 2026-08-06
title: ReGround：通过自诊断与视觉重检恢复多步推理中的视觉锚定
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/ReGround- Restoring Visual Grounding in Multi-Step Reasoning through Self-Diagnosis and Visual Re-Ex.md
source_note: "[[信息源/arXiv cs.CV RSS/ReGround- Restoring Visual Grounding in Multi-Step Reasoning through Self-Diagnosis and Visual Re-Ex]]"
source_sha256: ab5765efc1f8f0e73b772a963b3c1ae79d37adfd9124d2e19cd515655e061125
original_url: https://arxiv.org/abs/2608.04385
processed: 2026-08-07
language: zh-CN
---

# ReGround：通过自诊断与视觉重检恢复多步推理中的视觉锚定

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04385)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/ReGround- Restoring Visual Grounding in Multi-Step Reasoning through Self-Diagnosis and Visual Re-Ex|查看原始文件]]

## 摘要

- 发现视觉语言模型（VLM）在多步推理中常失去视觉锚定：推理链越长，后续推理步骤越依赖语言先验而非图像证据。
- 提出 ReGround 两阶段框架，教 VLM 自我诊断锚定失败并有选择地重检视觉证据，无需架构修改或外部工具；能力引导（capability bootstrapping）仅在数据构建时使用更强的同族变体提供诊断脚手架。
- 在两个 VLM 骨干的八个基准上取得一致增益，尤其是在视觉密集型多步推理任务上，推理开销相对工具增强基线仅适度增加。

## 正文

视觉语言模型（VLM）在多步推理中常常失去视觉锚定：随着推理链变长，后续推理步骤越来越依赖语言先验而非图像证据。我们识别出与此退化相关的一致基准级特征：来自四个基准的 2,510 个重检样本中，图像令牌上的注意力熵通常在 Round 1 期间下降，并在图像重新注入后回升。

然而，我们发现有效的视觉重检需要两个互补的要素：图像重新注入和有针对性的自我诊断。没有针对性的诊断，重检甚至可能损害性能，而准确的自我诊断则带来显著收益——在关键基准上产生数点的波动，表明在我们的设定中，诊断质量是重检究竟有益还是有害的关键因素。我们提出 ReGround，一个两阶段框架，教 VLM 自我诊断锚定失败并有选择地重检视觉证据，无需架构修改或外部工具。通过能力引导，同一模型家族中更强的变体仅在数据构建期间提供诊断脚手架，而策略模型在推理时学会自主诊断，并保留了大部分辅助增益。

在跨越两个 VLM 骨干的八个基准上的实验表明，模型取得了一致的增益，尤其是在视觉密集型多步推理任务上，同时相对工具增强基线仅产生适度的推理开销。项目页面：https://sespoir.github.io/reground-page/。代码：https://github.com/sespoir/ReGround。

## 关键词

#视觉语言模型 #视觉锚定 #多步推理 #自我诊断
