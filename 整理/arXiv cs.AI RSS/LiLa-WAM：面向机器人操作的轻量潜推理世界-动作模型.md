---
title: "LiLa-WAM：面向机器人操作的轻量潜推理世界-动作模型"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/LiLa-WAM- Lightweight Latent Reasoning World-Action Model for Robotic Manipulation.md"
source_note: "[[信息源/arXiv cs.AI RSS/LiLa-WAM- Lightweight Latent Reasoning World-Action Model for Robotic Manipulation]]"
source_sha256: 5445f27d1ee1a707bcbae4d0896c9d5734658b81f5e7d2dc1247670aba9316a9
original_url: "https://arxiv.org/abs/2608.03701"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# LiLa-WAM：面向机器人操作的轻量潜推理世界-动作模型

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Fan Yang、Yuting Su、Xiaobo Wang 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03701)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/LiLa-WAM- Lightweight Latent Reasoning World-Action Model for Robotic Manipulation|查看原始文件]]

## 摘要

- 提出 LiLa-WAM，轻量世界-动作模型：在紧凑潜空间中推理未来，可在单张 24GB GPU 上端到端训练。
- 核心设计是由未来状态预测与动作生成共同塑造的紧凑潜推理空间，保持模型轻量的同时与控制良好对齐。
- 提出视觉转换 token（VTT）：无语言任务表示，把每个任务编码为视觉特征空间中的一个方向。
- 在 RoboTwin 2.0、LIBERO 与真实机器人任务上的实验显示其有效性，单 GPU 训练下在 50 个 RoboTwin 任务上取得 90.48% 的成功率。

## 正文

论文编号：arXiv:2608.03701v1（更新类型：cross）。以下为摘要全文翻译。

世界-动作建模已成为机器人控制的有前景范式，因为它使模型超越对观测的反应，预见场景将如何演化。然而，现有 WAM 往往带来可观的计算开销。像素空间方法通常把大量容量分配给与控制无直接相关的视觉细节，而一些潜空间方法需要多阶段训练来构建推理空间。由此产生的训练成本可能使这类方法在适度计算预算下难以训练。在本工作中，我们提出 LiLa-WAM，一个轻量世界-动作模型：在紧凑潜空间中推理未来，并可在单张 24GB GPU 上端到端训练。其核心设计是一个由未来状态预测与动作生成共同塑造的紧凑潜推理空间，使模型保持轻量的同时与控制良好对齐。为进行任务指定，我们进一步提出视觉转换 token（VTT），一种无语言任务表示，把每个任务编码为视觉特征空间中的一个方向。在 RoboTwin 2.0、LIBERO 与真实机器人任务上的实验证明了 LiLa-WAM 的有效性，单 GPU 训练下在 50 个 RoboTwin 任务上取得 90.48% 的成功率。

## 关键词

#世界模型 #机器人操作 #潜空间推理 #轻量模型
