---
published: 2026-08-07
title: "RealityBridge：桥接可编辑 3DGS 驾驶仿真与真实世界视频"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/RealityBridge- Bridging Editable 3D Gaussian Splatting Driving Simulations and Real-World Videos.md"
source_note: "[[信息源/arXiv cs.AI RSS/RealityBridge- Bridging Editable 3D Gaussian Splatting Driving Simulations and Real-World Videos]]"
source_sha256: 170d8ef52ea22acee1f55da218dba7a921e1f8e866fc4de352e11c969d695c7d
original_url: "https://arxiv.org/abs/2606.16278"
processed: 2026-08-07
language: zh-CN
---

# RealityBridge：桥接可编辑 3DGS 驾驶仿真与真实世界视频

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Zhenhua Wu, Yun Pang, Mingkun Chang, Yuwei Ning, Liangzhi Wang, Yi Xiao, Guanbin Li
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2606.16278)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/RealityBridge- Bridging Editable 3D Gaussian Splatting Driving Simulations and Real-World Videos|查看原始文件]]

## 摘要

- 长尾危险场景对安全导向自动驾驶至关重要，但难以大规模收集；可编辑 3D 高斯泼溅（3DGS）仿真通过真实场景重建与可控编辑提供可扩展替代。
- 但编辑后的 3DGS 渲染视频常表现出显著模拟到现实（Sim-to-Real）差距，表现为渲染伪影、退化前景资产、光照不匹配与时序闪烁；解决这些耦合缺陷需要联合恢复局部外观、协调编辑内容并保持时间一致性，而现有方法通常只解决其中一部分。
- 提出 RealityBridge：视频恢复与协调框架，将编辑后的 3DGS 渲染转换为现实驾驶片段，同时保留模拟器定义的结构、编辑与动态——条件化视频基础模型于互补模态信号，轻量 GateNet 自适应控制其在骨干块间的注入。
- 开发任务导向策展流水线构建训练数据，设计四阶段监督训练策略并配奖励引导后训练；大量实验表明 RealityBridge 在恢复与协调上优于现有方法，同时保持强时间一致性。

## 正文

长尾危险场景对安全导向的自动驾驶至关重要，但难以大规模收集。可编辑 3D 高斯泼溅（3D Gaussian Splatting，3DGS）仿真通过真实场景重建与可控编辑提供可扩展的替代。然而，编辑后的 3DGS 渲染视频往往表现出显著的模拟到现实（Sim-to-Real）差距，表现为渲染伪影、退化前景资产、光照不匹配与时序闪烁。解决这些耦合缺陷需要联合恢复局部外观、协调编辑内容并保持时间一致性，而现有方法通常只解决这些要求的一部分。为填补这一空白，我们提出 RealityBridge，一个视频恢复与协调框架，将编辑后的 3DGS 渲染转换为现实驾驶片段，同时保留模拟器定义的结构、编辑与动态。RealityBridge 条件化一个视频基础模型于互补的模态信号，用一个轻量 GateNet 自适应控制它们在骨干块间的注入。我们进一步开发一个任务导向的策展流水线构建训练数据，并设计一个四阶段监督训练策略，随后进行奖励引导的后训练。大量实验表明，RealityBridge 在恢复与协调上优于现有方法，同时保持强时间一致性。

## 关键词

#自动驾驶 #3DGS仿真 #视频恢复 #模拟到现实
