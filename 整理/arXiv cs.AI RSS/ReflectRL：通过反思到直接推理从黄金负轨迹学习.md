---
title: "ReflectRL：通过反思到直接推理从黄金负轨迹学习"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/ReflectRL- Learning from Golden Negative Trajectories via Reflective-to-Direct Reasoning.md"
source_note: "[[信息源/arXiv cs.AI RSS/ReflectRL- Learning from Golden Negative Trajectories via Reflective-to-Direct Reasoning]]"
source_sha256: de7d509f2e65fa1ed1e1289c0b3c8c0f2c9d018bd175ce7a914c5be46079987f
original_url: "https://arxiv.org/abs/2608.03972"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# ReflectRL：通过反思到直接推理从黄金负轨迹学习

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Jinhe Bi、Chennan Zhou、Zengjie Jin 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03972)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/ReflectRL- Learning from Golden Negative Trajectories via Reflective-to-Direct Reasoning|查看原始文件]]

## 摘要

- 提出 ReflectRL，轻量即插即用框架：在线策略训练期间从黄金负轨迹学习——先用这些轨迹引出反思推理，再应用反思到直接策略过渡（Reflective-to-Direct Policy Transition）把习得推理行为迁移回直接推理。
- 在线策略训练已成为改善 LLM 推理能力的强大训练后范式，常由更强专家模型的黄金轨迹增强；但当专家在更难问题上失败时，现有轨迹引导方法失去主要监督来源，这些失败轨迹通常作为负样本被丢弃。
- 论证此类失败（称为黄金负轨迹）作为有缺陷轨迹供反思（而非作为演示模仿）时仍提供宝贵推理信号；识别反思优势：对困难问题，反思有缺陷轨迹比从头直接求解更容易、更有效。
- 9 个基准、4 个 LLM 骨干与 4 种在线策略训练方法上的实验显示 ReflectRL 以极低开销一致改善推理性能。

## 正文

论文编号：arXiv:2608.03972v1（更新类型：new）。以下为摘要全文翻译。

在线策略训练已成为改善大语言模型推理能力的强大训练后范式，并且通常由来自更强专家模型的黄金轨迹增强。然而，当专家在更难的问题上失败时，现有轨迹引导方法失去其主要监督来源，而这些失败轨迹通常作为负样本被丢弃。我们论证，此类失败——我们称之为黄金负轨迹（Golden Negative Trajectories）——当被当作有待反思的有缺陷轨迹（而非作为演示模仿）时，仍能提供宝贵的推理信号。我们识别一个反思优势（Reflection Advantage）：对困难问题，反思有缺陷的轨迹可能比从头直接解决问题更容易、更有效。受此启发，我们提出 ReflectRL，一个轻量即插即用框架，在线策略训练期间从黄金负轨迹学习。ReflectRL 首先用这些轨迹引出反思推理（Reflective Reasoning），然后应用反思到直接策略过渡（Reflective-to-Direct Policy Transition），把习得的推理行为迁移回直接推理（Direct Reasoning）。在 9 个基准、4 个 LLM 骨干与 4 种在线策略训练方法上的实验表明，ReflectRL 以极低的开销一致改善推理性能。

## 关键词

#在线策略训练 #反思推理 #负轨迹 #LLM推理
