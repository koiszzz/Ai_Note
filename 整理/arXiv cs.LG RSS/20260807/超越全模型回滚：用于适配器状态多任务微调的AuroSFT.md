---
published: 2026-08-07
title: "超越全模型回滚：用于适配器状态多任务微调的 AuroSFT"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Beyond Full-Model Rollback- AuroSFT for Adapter-State Multi-Task Fine-Tuning.md"
source_note: "[[信息源/arXiv cs.LG RSS/Beyond Full-Model Rollback- AuroSFT for Adapter-State Multi-Task Fine-Tuning]]"
source_sha256: 64b44c90dbe729e95ff474ea149a177aeaa8319fec9edd1e410ea4fa2eb8ed89
original_url: "https://arxiv.org/abs/2608.05250"
processed: 2026-08-07
language: zh-CN
---

# 超越全模型回滚：用于适配器状态多任务微调的 AuroSFT

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Yue Han, Ziniu Liu
> - **发布时间**：2026-08-07
> - **分类**：cs.LG
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05250)

## 摘要

- 提出 AuroSFT：将过拟合感知多任务 SFT 的承载状态重构为紧凑、可合并的适配器状态的参数高效框架。
- 冻结预训练骨干，仅训练注入的适配器，在任务级峰值回滚适配器检查点，并继续在剩余活跃混合上训练。
- 层级上每个适配器对低秩权重因子而非样本表示应用 AuroRA 启发的自适应非线性层，更新保持输入线性、秩有界且可精确合并进冻结投影。
- 在保留骨干比较协议下平均准确率 61.36%（对照 msft 参考行 59.85%），在全部五个骨干上取得更高精度。

## 正文

多任务监督微调（SFT）常将异构数据混合视为单一优化问题，即使不同任务可能在各自的最佳时机达到最佳泛化。msft 通过任务级推出、排除与回滚暴露这一错配，但其原始形式化将调度器状态物化为全模型检查点，使阶段转换的存储、恢复与部署代价高昂。本文提出 AuroSFT，一个参数高效框架，将过拟合感知多任务 SFT 的承载状态重构为紧凑、可合并的适配器状态。AuroSFT 冻结预训练骨干，仅训练注入的适配器，在任务级峰值回滚适配器检查点，并继续在剩余活跃混合上训练。在层级别，每个适配器对低秩权重因子而非样本表示应用 AuroRA 启发的自适应非线性层，所得更新保持输入线性、秩有界，且可精确合并进冻结投影。在保留骨干比较协议下，AuroSFT 平均准确率达 61.36%，而对应 msft 参考行为 59.85%，并在全部五个骨干上取得更高精度。代码见匿名仓库：https://anonymous.4open.science/r/AuroSFT-80D1。

## 关键词

多任务微调、适配器、过拟合感知、LoRA、回滚
