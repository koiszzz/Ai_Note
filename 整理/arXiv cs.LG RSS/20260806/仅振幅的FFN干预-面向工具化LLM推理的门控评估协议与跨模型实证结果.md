---
published: 2026-08-06
title: 仅振幅的FFN干预：面向工具化LLM推理的门控评估协议与跨模型实证结果
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/Amplitude-Only FFN Intervention for Tool-Structured LLM Inference Method- Gated Evaluation Protocol,.md
source_note: "[[信息源/arXiv cs.LG RSS/Amplitude-Only FFN Intervention for Tool-Structured LLM Inference Method- Gated Evaluation Protocol,]]"
source_sha256: 00c0eb8644d5586c42b0d14e56faac6cb356935b35328a79129ca4dbb6862594
original_url: https://arxiv.org/abs/2607.11183
processed: 2026-08-07
language: zh-CN
---

# 仅振幅的FFN干预：面向工具化LLM推理的门控评估协议与跨模型实证结果

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.11183)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Amplitude-Only FFN Intervention for Tool-Structured LLM Inference Method- Gated Evaluation Protocol,|查看原始文件]]

## 摘要

- 提出振幅门控（AG）：保留预训练 FFN 权重方向、仅调制解码时激活幅度的推理时干预，用于在不重训练权重的条件下改善工具化 LLM 的结构化输出。
- 引入每样本修复-损害评估（PFHE）配对报告协议，补充原生任务指标；跨模型实验显示 Qwen3.5-9B 工具路由提升 +4.27 个百分点、两个 Hermes 函数调用端点提升约 +7.6 个百分点。
- 结论：结果支持按模型和任务进行选择并配合严格回退，而非通用的 AG 开关。

## 正文

大型语言模型越来越多地以工具使用智能体（tool-using agents）的方式运行，其中微小的格式、参数或函数调用错误都可能使原本合理的响应失效。我们研究推理时的前馈网络（FFN）干预，将其作为一种在不重新训练模型权重的情况下改善结构化输出的方法。

此前一个针对特定项目的方法——正交残差投影（Orthogonal Residual Projection, ORP）——暴露了敏感的 SwiGLU FFN 位点与非单调的能量效应，但其改变方向（direction-changing）的运算在一个关键诊断中造成的回归（regressions）多于修复（repairs）。因此我们提出振幅门控（Amplitude Gating, AG），它保留预训练 FFN 权重的方向，并在解码过程中调制激活幅度。AG 将候选生成、排序与前瞻性的接受/回退决策分离开来。

我们还引入了每样本修复-损害评估（Per-Sample Fix-Harm Evaluation, PFHE），这是一种配对报告协议，用修复（fixes）、损害（harms）、保留正确案例（preserved-correct cases）与保留错误案例（preserved-wrong cases）来补充原生任务指标。在唯一通过源对齐审计的跨位置联合（cross-position union）上，一个探索性的离线混合选择器将描述性异构评分器 Qwen3.5-9B 的工具路由微平均（micro-average）从 38.66% 提升到 42.92%（+4.27 个百分点）；两个 Hermes 函数调用端点分别提升了 +7.64 和 +7.62 个百分点。同一输出的 PFHE 格式视图在 2,556 个单元上记录了 48 次修复、26 次损害、294 个保留正确案例和 2,188 个保留错误案例，且原生与严格效应的配对自助（paired bootstrap）区间均为正。

协议分离的 Qwen3-8B 与 Qwen2.5-7B 分析保留了 oracle 上限（headroom），但没有正的训练选择固定工具路由。一个分组的五折 RF（随机森林）诊断提示排名信号微弱且为非线性，但它强制进行干预、缺乏基线回退与配对不确定性，并不能作为部署证据。这些结果支持按模型和任务进行选择并配合严格回退，而不是通用的 AG 开关。

## 关键词

#FFN干预 #工具使用LLM #推理时干预 #门控评估 #大语言模型
