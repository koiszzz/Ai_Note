---
published: 2026-08-05
title: "图注意力何时应稀疏：学习逐边 Tsallis 指数"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/When Should Graph Attention Be Sparse- Learning a Per-Edge Tsallis Index.md"
source_note: "[[信息源/arXiv cs.AI RSS/When Should Graph Attention Be Sparse- Learning a Per-Edge Tsallis Index]]"
source_sha256: 0af9248a33dcfae303c8466f2aeead4dfd81a853ce58c4b57ff00ede2c999f42
original_url: "https://arxiv.org/abs/2608.02938"
processed: 2026-08-05
language: zh-CN
---

# 图注意力何时应稀疏：学习逐边 Tsallis 指数

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Kleyton da Costa、Bernardo Modenesi
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02938)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/When Should Graph Attention Be Sparse- Learning a Per-Edge Tsallis Index|查看原始文件]]

## 摘要

- 提出 LTGA（可学习 Tsallis 图注意力），图注意力层：Tsallis 熵指数 q 与权重联合学习，在重尾（q<1）、softmax（q=1）与紧支撑（q>1）注意力之间连续插值，粒度从全局标量到逐边指数，用有界重参数化使每个模型从 GAT 基线出发。
- 图注意力用 softmax 归一化邻域分数，这是香农统计下的最大熵选择；但同配与异配图需要不同注意力形状，一个固定归一化无法同时服务两者。
- 八个基准、十个种子下，LTGA-Edge 取最佳平均秩（2.75），但综合检验不拒绝（p=0.199），学习 q 不比搜索它更好：验证调优的冻结网格达 61.4%、调优 α-entmax 62.2%、容量匹配 q≡1 对照 62.0%，LTGA-Edge 61.7%。
- 学习指数买来的是单次运行而非网格，外加可解释机制：q 离开 1 处剪掉 42% 注意力系数精确为零，且这些边选择性地是错误的边——恢复它们花费 7.1 分，同速率随机剪枝再多花 13.0 分；项目页：https://kleyt0n.github.io/ltga

## 正文

论文编号：arXiv:2608.02938v1（更新类型：cross）。以下为摘要全文翻译。

图注意力用 softmax 归一化邻域分数，这是香农统计下的最大熵选择。但同配与异配图需要不同的注意力形状，一个固定的归一化无法同时服务两者。我们提出 LTGA（Learnable Tsallis Graph Attention，可学习 Tsallis 图注意力），一个图注意力层：其 Tsallis 熵指数 q 与权重联合学习，在重尾（q<1）、softmax（q=1）与紧支撑（q>1）注意力之间连续插值，粒度从全局标量到逐边指数四种，使用有界重参数化使每个模型从 GAT 基线出发。在八个基准、十个种子上，LTGA-Edge 取得最佳平均秩（2.75），但综合检验不拒绝（p=0.199），学习 q 并不比搜索它更好：验证调优的冻结网格达到 61.4%，调优的 α-entmax 62.2%，容量匹配的 q≡1 对照 62.0%，而 LTGA-Edge 为 61.7%。学习指数买来的是单次运行而非网格，外加一个可解释机制：在 q 离开 1 的地方，它把 42% 的注意力系数剪到精确为零，而那些边选择性地是错误的——恢复它们花费 7.1 分，而同速率的随机剪枝再多花 13.0 分。项目页面：https://kleyt0n.github.io/ltga

## 关键词

#图注意力 #Tsallis熵 #稀疏化 #可解释性
