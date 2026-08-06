---
title: "LatentGuard：高效且可检查的 LLM 安全守卫潜推理"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/LatentGuard- Efficient and Inspectable Latent Reasoning for LLM Safeguards.md"
source_note: "[[信息源/arXiv cs.AI RSS/LatentGuard- Efficient and Inspectable Latent Reasoning for LLM Safeguards]]"
source_sha256: ce2572f1c3f6bc2b422d007b6e6993ccb17206a20e27bfc07b9921c311a37d23
original_url: "https://arxiv.org/abs/2608.03838"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# LatentGuard：高效且可检查的 LLM 安全守卫潜推理

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Zhinan Liu、Jie Li、Mingyu Kang 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03838)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/LatentGuard- Efficient and Inspectable Latent Reasoning for LLM Safeguards|查看原始文件]]

## 摘要

- 提出 LatentGuard，高效且可检查的安全守卫框架：把连续潜推理引入守卫模型——用分阶段课程把任务对齐的文本理由渐进压缩为紧凑潜状态，使安全判定可直接从连续表示预测。
- 为保持可检查性，隔离的辅助解码器按需生成紧凑审计工件，使理由生成脱离标准推理路径。
- 实验显示 LatentGuard-8B 把平均加权 F1 从 83.95 提升到 84.91（相对 GuardReasoner-8B），同时把关键路径推理成本从 268.56 个生成理由 token 降至 1.60 个潜推理 token。
- 审计解码器取得 85.75 的审计效用分数，展示通往可部署 LLM 安全守卫的高效且可检查路径。

## 正文

论文编号：arXiv:2608.03838v1（更新类型：new）。以下为摘要全文翻译。

基于推理的守卫模型改善 LLM 安全守卫，但对每次交互解码显式理由使它们部署成本高昂。虽然潜推理方法通过把推理移入连续状态减少 token 生成，但它们对安全审核仍未被充分探索，且缺乏部署所需的检查接口。在本文中，我们提出 LatentGuard，一个高效且可检查的安全守卫框架，把连续潜推理引入守卫模型。LatentGuard 使用分阶段课程，把任务对齐的文本理由渐进压缩为紧凑潜状态，使安全判定可以直接从连续表示预测。为保持可检查性，一个隔离的辅助解码器按需生成紧凑的审计工件，使理由生成脱离标准推理路径。实验表明，LatentGuard-8B 把平均加权 F1 从 83.95 提升到 84.91（相对 GuardReasoner-8B），同时把关键路径推理成本从 268.56 个生成的理由 token 降至 1.60 个潜推理 token。其审计解码器取得 85.75 的审计效用分数，展示了通往可部署 LLM 安全守卫的高效且可检查的路径。

## 关键词

#LLM安全 #潜推理 #守卫模型 #可检查性
