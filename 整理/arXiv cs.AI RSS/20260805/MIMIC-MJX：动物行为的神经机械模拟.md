---
published: 2026-08-05
title: "MIMIC-MJX：动物行为的神经机械模拟"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/MIMIC-MJX- Neuromechanical Emulation of Animal Behavior.md"
source_note: "[[信息源/arXiv cs.AI RSS/MIMIC-MJX- Neuromechanical Emulation of Animal Behavior]]"
source_sha256: 7067983f1f972655bff145726e19545d69e1bac1772ac726a278f5004820f9cc
original_url: "https://arxiv.org/abs/2511.20532"
processed: 2026-08-05
language: zh-CN
---

# MIMIC-MJX：动物行为的神经机械模拟

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Charles Y. Zhang 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2511.20532)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/MIMIC-MJX- Neuromechanical Emulation of Animal Behavior|查看原始文件]]

## 摘要

- 提出 MIMIC-MJX，一个从运动学学习生物力学接地的神经控制策略的框架：为运动控制的生成过程建模提供一个平台，训练神经控制器在物理仿真中驱动生物力学动物模型，以再现真实的运动学轨迹。
- 神经系统的主要输出是运动与行为；虽然近期进展使复杂行为中的姿态追踪普及化，运动学轨迹本身只能间接接触底层控制过程，因此需要学习能够生成这些轨迹的控制器。
- 演示实现准确、快速，可泛化到多样动物体模型，且可用适度的运动数据量训练。
- MIMIC-MJX 可用于建模运动控制策略并模拟行为实验，展示其作为神经科学整合建模框架的潜力。

## 正文

论文编号：arXiv:2511.20532v3（更新类型：replace-cross）。以下为摘要全文翻译。

神经系统的主要输出是运动与行为。虽然近期的进展使复杂行为期间的姿态追踪变得普及，运动学轨迹本身只能提供对底层控制过程的间接访问：它们记录了什么运动发生，却没有揭示神经系统如何产生这些运动。在此，我们提出 MIMIC-MJX，一个从运动学学习生物力学接地的神经控制策略的框架。MIMIC-MJX 提供一个建模运动控制生成过程的平台：通过训练神经控制器学习在物理仿真中驱动生物力学动物模型，以再现真实运动学轨迹。我们的方法使研究人员能够把观察到的运动学数据与产生它们的潜在控制机制联系起来。我们证明，我们的实现是准确、快速且可泛化到多样的动物体模型的，并且可以用适度的运动数据量进行训练。MIMIC-MJX 可用于建模运动控制策略与模拟行为实验，从而说明它作为一个神经科学整合建模框架的潜力：它把运动学测量、生物力学约束与神经控制学习统一到一个共同的框架中，为研究动物行为背后的控制原理提供了新的工具。

## 关键词

#运动控制 #神经科学 #物理仿真 #生物力学
