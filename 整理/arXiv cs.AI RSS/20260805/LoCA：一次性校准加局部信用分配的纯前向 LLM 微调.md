---
published: 2026-08-05
title: "LoCA：一次性校准加局部信用分配的纯前向 LLM 微调"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/LoCA- Forward-Only LLM Tuning after One-Shot Calibration with Local Credit Assignment.md"
source_note: "[[信息源/arXiv cs.AI RSS/LoCA- Forward-Only LLM Tuning after One-Shot Calibration with Local Credit Assignment]]"
source_sha256: d96004a7f2aa0f114d2f14ba5730903a50629974acb1f3a6208e934bd323e9cd
original_url: "https://arxiv.org/abs/2608.03020"
processed: 2026-08-05
language: zh-CN
---

# LoCA：一次性校准加局部信用分配的纯前向 LLM 微调

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Linhan Xia、Rui Liu、Zhaofeng Zhang 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03020)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/LoCA- Forward-Only LLM Tuning after One-Shot Calibration with Local Credit Assignment|查看原始文件]]

## 摘要

- 提出局部信用分配（LoCA），面向小偏移适配的两阶段方法：一次探针反向传播在每个 Transformer 块拟合从最终预测误差到局部隐藏状态修正的低秩映射；随后复用这些映射从前向激活形成逐块回归目标，并用闭式岭解拟合低秩适配器，无需进一步骨干反向传播。
- 在 Qwen2.5（0.5B 到 14B）的五个判别基准上评估：25 个任务-规模比较中的 16 个，LoCA 的评估交叉熵低于对应 LoRA 运行；含校准在内的实测全运行 GPU 峰值比 LoRA 低 26–29%；校准后 CPU 稳态内存低 36–52%，每遍时间低 43–48%。
- 共享的尺度归一化候选集在所有测试的 Qwen2.5 规模与 SmolLM2-1.7B 上复用。
- LoCA 把全局信用分配摊销为一次校准，使后续在重复反向传播不切实际时实现纯前向微调；代码：https://github.com/Xia12121/LoCA

## 正文

论文编号：arXiv:2608.03020v1（更新类型：new）。以下为摘要全文翻译。

参数高效训练后微调减少了可训练参数数量，但仍需要通过冻结骨干进行重复端到端反向传播。因此每个适配步骤都需要支持反向的硬件，并必须存储或重算激活。我们询问，能否用一次性校准替代这条重复的反向链。我们引入局部信用分配（Local Credit Assignment，LoCA），一种面向小偏移适配的两阶段方法。一次探针反向传播在每个 Transformer 块拟合一个从最终预测误差到局部隐藏状态修正的低秩映射。LoCA 随后复用这些映射，从前向激活形成逐块回归目标，并用闭式岭解拟合低秩适配器。无需进一步的骨干反向传播。我们在 Qwen2.5 模型（0.5B 到 14B）的五个判别基准上评估 LoCA。在 25 个报告的任务-规模比较中，LoCA 在 16 个中取得低于对应 LoRA 运行的评估交叉熵。其含校准在内的实测全运行 GPU 峰值比 LoRA 低 26–29%。校准后，其 CPU 稳态内存低 36–52%，每遍时间低 43–48%。一个共享的尺度归一化候选集在全部测试的 Qwen2.5 规模与 SmolLM2-1.7B 上复用。因此，LoCA 把全局信用分配摊销为一次校准，并在重复反向传播不切实际时启用后续的纯前向微调。本文相关代码可在 https://github.com/Xia12121/LoCA 获取。

## 关键词

#参数高效微调 #前向算法 #LoRA #信用分配
