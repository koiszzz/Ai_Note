---
published: 2026-08-07
title: "RealityBridge：桥接可编辑 3D 高斯泼溅驾驶仿真与真实视频"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/RealityBridge- Bridging Editable 3D Gaussian Splatting Driving Simulations and Real-World Videos.md"
source_note: "[[信息源/arXiv cs.CV RSS/RealityBridge- Bridging Editable 3D Gaussian Splatting Driving Simulations and Real-World Videos]]"
source_sha256: c44b5d6e0144233e92703fb37840d650b2fc79b520a9b91377985ab1b0770316
original_url: "https://arxiv.org/abs/2606.16278"
processed: 2026-08-07
language: zh-CN
---

# RealityBridge：桥接可编辑 3D 高斯泼溅驾驶仿真与真实视频

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Zhenhua Wu, Yun Pang, Mingkun Chang, Yuwei Ning, Liangzhi Wang, Yi Xiao, Guanbin Li
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2606.16278)

## 摘要

- 长尾危险场景对安全导向自动驾驶必不可少，却难以规模化收集；可编辑 3D 高斯泼溅（3DGS）仿真经真实场景重建与可控编辑提供可扩展替代。
- 编辑的 3DGS 渲染视频常展现显著仿真到现实差距：渲染伪影、退化的前景资产、光照不匹配与时间闪烁；应对这些耦合缺陷需联合恢复局部外观、协调编辑内容并保持时间一致性，现有方法通常只处理部分需求。
- 提出 RealityBridge：视频恢复与协调框架，将编辑 3DGS 渲染转为逼真驾驶影像，同时保留仿真器定义的结构、编辑与动力学。
- RealityBridge 以互补模态信号条件化视频基础模型，轻量 GateNet 自适应控制其跨骨干块注入；开发任务导向策展流水线构建训练数据，设计四阶段监督训练策略后接奖励引导训练后处理；大量实验显示 RealityBridge 在恢复与协调上超越现有方法，同时保持强时间一致性。

## 正文

长尾危险场景对安全导向的自动驾驶必不可少，然而它们难以规模化收集。可编辑 3D 高斯泼溅（3DGS）仿真通过真实场景重建与可控编辑提供可扩展的替代方案。然而，编辑后的 3DGS 渲染视频常常展现显著的仿真到现实（Sim-to-Real）差距：表现为渲染伪影、退化的前景资产、光照不匹配与时间闪烁。应对这些耦合缺陷需要联合恢复局部外观、协调编辑内容并保持时间一致性，而现有方法通常只处理这些要求的一部分。为填补该差距，研究提出 RealityBridge，一个视频恢复与协调（harmonization）框架：将编辑后的 3DGS 渲染转换为逼真的驾驶影像，同时保留仿真器定义的结构、编辑与动力学。RealityBridge 以互补的模态信号条件化一个视频基础模型，一个轻量 GateNet 自适应控制它们跨骨干块的注入。研究进一步开发一个任务导向的策展流水线来构建训练数据，并设计一个四阶段监督训练策略，后接奖励引导的训练后处理。大量实验表明，RealityBridge 在恢复与协调方面超越现有方法，同时保持强时间一致性。

## 关键词

自动驾驶仿真、高斯泼溅、视频恢复、协调、仿真到现实
