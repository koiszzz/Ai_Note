---
published: 2026-08-07
title: "CalibForge：用于扩展可学习终端任务的对抗性求解器校准"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/CalibForge- Adversarial Solver Calibration for Scaling Learnable Terminal Tasks.md"
source_note: "[[信息源/arXiv cs.CL RSS/CalibForge- Adversarial Solver Calibration for Scaling Learnable Terminal Tasks]]"
source_sha256: f82226c6e789f039e027e5c8ddebe0db28cc8486a46c8f69ad0f2058ec9633ea
original_url: "https://arxiv.org/abs/2608.06352"
processed: 2026-08-07
language: zh-CN
---

# CalibForge：用于扩展可学习终端任务的对抗性求解器校准

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Fanzhe Meng, Guoxin Chen, Jiale Zhao, Shuang Sun, Zhiyu Lin, Wayne Xin Zhao, Ruihua Song, Ji-Rong Wen, Kai Jia
> - **发布时间**：2026-08-07
> - **分类**：cs.LG
> - **原文**：[打开链接](https://arxiv.org/abs/2608.06352)

## 摘要

- 训练终端智能体需要可执行、可验证且不仅可解、还恰具学习挑战的任务；可执行验证确立可行性，却不揭示任务相对给定求解器设定的行为。
- 提出 CalibForge：自主终端任务合成系统，利用验证过的求解器行为通过对抗性求解器校准修订候选任务；多求解器校准瞄准异构求解器池内的分歧，对比求解器校准瞄准指定的强过/弱败关系；两者都操作于以可解性锚定的求解器相对可学习区。
- 构建 5431 个校准终端任务；两种策略都产生比仅人工编写与验证或普通单求解器反馈更有效的监督。
- 全集合训练的模型在 Terminal-Bench 2.0 上达 32.58% 与 47.57%，较对应基座模型最大提升 24.71 个百分点（Terminal-Bench 2.0）、27.68（SWE-bench Pro）、30.04（Doc2Repo）。

## 正文

训练终端智能体需要可执行、可验证且不仅可解、还恰具学习挑战的任务。可执行验证确立了可行性，却不揭示任务相对给定求解器设定的行为。本文提出 CalibForge，一个自主终端任务合成系统：利用验证过的求解器行为通过对抗性求解器校准修订候选任务。多求解器校准瞄准异构求解器池内的分歧，对比求解器校准瞄准指定的强过/弱败关系；两者都将锚定在可证可解性上的求解器相对可学习区操作化。使用 CalibForge，研究构建了 5431 个校准终端任务。消融表明两种策略都比仅人工编写验证或普通单求解器反馈产生更有效的监督。在全集合上训练的模型在 Terminal-Bench 2.0 上取得 32.58% 与 47.57%。相对对应基座模型的最大提升在 Terminal-Bench 2.0 上达 24.71 个百分点、SWE-bench Pro 上 27.68 个百分点、Doc2Repo 上 30.04 个百分点。综合而言，这些结果支持将求解器相对可学习性作为构建有效且可迁移智能体训练数据的实用目标。

## 关键词

终端智能体、任务合成、求解器校准、可学习性、智能体训练数据
