---
published: 2026-08-05
title: "EulerLoRA：校准参数高效微调的秩驱动跳跃动力学"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/EulerLoRA- Rank-Driven Jump Dynamics for Calibrated Parameter-Efficient Fine-Tuning.md"
source_note: "[[信息源/arXiv cs.LG RSS/EulerLoRA- Rank-Driven Jump Dynamics for Calibrated Parameter-Efficient Fine-Tuning]]"
source_sha256: 2ea41c53ce318aed7aede9e8fab2f6999ea0fe2a9f7154f0a4a2fea90ace39ab
original_url: "https://arxiv.org/abs/2608.01142"
processed: 2026-08-05
language: zh-CN
---

# EulerLoRA：校准参数高效微调的秩驱动跳跃动力学

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Srinivas Anumasa、Dianbo Liu
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.01142)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/EulerLoRA- Rank-Driven Jump Dynamics for Calibrated Parameter-Efficient Fine-Tuning|查看原始文件]]

## 摘要

- 引入 EulerLoRA，LoRA 的随机扩展：沿共享低秩适配器的秩一组件采样结构化变化生成多个预测轨迹，同时在期望上保持确定性 LoRA 变换——支持预测不确定性估计。
- 低秩适配（LoRA）实现参数高效微调，但标准 LoRA 产生单一确定性模型，不直接支持预测不确定性估计。
- CIFAR-10、CIFAR-100 与 HAM10000 视觉 Transformer 评估，加 SVHN 分布外检测：EulerLoRA 相对强 LoRA 集成基线取得相当或改善性能。
- 两个秩-20 适配器约 300 万可训练适配器参数，对比秩-8、16 适配器 LoRA 集成的约 1,000 万（约少 69% 可训练参数）——少量共享适配器即可获得有用预测多样性。

## 正文

论文编号：arXiv:2608.01142v2（更新类型：replace）。以下为摘要全文翻译。

低秩适配（LoRA）实现参数高效的微调，但标准 LoRA 产生一个单一的确定性模型，并且不直接支持预测不确定性的估计。我们引入 EulerLoRA，一个 LoRA 的随机扩展：沿共享低秩适配器的秩一组件采样结构化变化，生成多个预测轨迹，同时在期望上保持确定性的 LoRA 变换。我们用视觉 Transformer 在 CIFAR-10、CIFAR-100 与 HAM10000 上评估 EulerLoRA，并在 SVHN 上进行分布外检测。跨这些基准，EulerLoRA 相对强 LoRA 集成基线取得相当或改善的性能。使用两个秩-20 适配器，EulerLoRA 需要约 300 万个可训练适配器参数，而秩-8、16 适配器的 LoRA 集成需要约 1,000 万，对应约 69% 更少的可训练参数。这些结果表明，少量共享适配器即可获得有用的预测多样性。

## 关键词

#LoRA #参数高效微调 #不确定性 #集成
