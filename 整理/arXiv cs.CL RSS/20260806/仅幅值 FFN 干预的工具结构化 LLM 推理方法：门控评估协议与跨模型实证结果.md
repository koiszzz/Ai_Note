---
published: 2026-08-06
title: 仅幅值 FFN 干预的工具结构化 LLM 推理方法：门控评估协议与跨模型实证结果
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/Amplitude-Only FFN Intervention for Tool-Structured LLM Inference Method- Gated Evaluation Protocol,.md
source_note: "[[信息源/arXiv cs.CL RSS/Amplitude-Only FFN Intervention for Tool-Structured LLM Inference Method- Gated Evaluation Protocol,]]"
source_sha256: e0de4da91ad9030f5d9acd0424b6f1616b4747fd73a68e4a415cdfc966bde374
original_url: https://arxiv.org/abs/2607.11183
processed: 2026-08-07
language: zh-CN
---

# 仅幅值 FFN 干预的工具结构化 LLM 推理方法：门控评估协议与跨模型实证结果

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.11183)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/Amplitude-Only FFN Intervention for Tool-Structured LLM Inference Method- Gated Evaluation Protocol,|查看原始文件]]

## 摘要

- 提出幅值门控（Amplitude Gating, AG），一种保留预训练 FFN 权重方向、仅调节解码激活幅值的推理时干预方法，用于改善结构化输出
- 引入逐样本修复-损害评估（PFHE）配对报告协议，用修复、损害、保留正确与保留错误案例补充原生任务指标
- 在通过源对齐审计的跨位置并集上，离线混合选择器将 Qwen3.5-9B 工具路由异质评分者宏平均从 38.66% 提升到 42.92%（+4.27 个百分点）
- 结果表明应进行模型与任务特定选择并配以严格回退，而非通用 AG 开关

## 正文

大型语言模型日益以工具使用代理的形式运行，其中格式、参数或函数调用方面的微小错误就可能使原本合理的响应失效。我们研究推理时的前馈网络（FFN）干预，作为在不重训练模型权重的情况下改善结构化输出的手段。此前一个项目特定的方法——正交残差投影（ORP）——暴露了对 SwiGLU FFN 位点的敏感性和非单调能量效应，但其改变方向的操作在关键诊断中造成的回归多于修复。因此我们提出幅值门控（AG），它在解码过程中保留预训练 FFN 的权重方向，仅调节激活幅值。AG 将候选生成、排序和前瞻性的接受/回退决策分离开来。

我们还引入了逐样本修复-损害评估（PFHE），一种配对报告协议，用修复、损害、保留正确案例和保留错误案例来补充原生任务指标。在唯一通过源对齐审计的跨位置并集上，一个探索性的离线混合选择器将异质评分者视角下 Qwen3.5-9B 工具路由的宏平均从 38.66% 提高到 42.92%（+4.27 个百分点）；两个 Hermes 函数调用端点分别提升 +7.64 和 +7.62 个百分点。同一输出的 PFHE 格式视图在 2,556 个单元上记录了 48 个修复、26 个损害、294 个保留正确案例和 2,188 个保留错误案例，原生与严格效应的配对 bootstrap 区间均为正。协议分离的 Qwen3-8B 和 Qwen2.5-7B 分析保留了 oracle 上限，但未产生正向的经训练选择的固定工具路由。一个分组的五折 RF 诊断表明存在微弱的非线性排序信号，但会强制干预，缺乏基线回退和配对不确定性，且不能作为部署证据。

这些结果支持应进行模型与任务特定的选择并配以严格回退，而不是一个通用的 AG 开关。

## 关键词

#LLM #FFN干预 #工具使用 #推理时干预 #arXiv
