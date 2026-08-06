# Maglev: Sliding Recurrent Memory

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Bo Liu, Qiang Liu　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.02870)

------

arXiv:2608.02870v1 Announce Type: new

Abstract: We introduce \ours{}, a recurrent Transformer architecture with fixed-size memory that generalizes sliding-window attention while remaining parallelizable during training. \ours{} consists of two coupled models: a prefiller $Q$, which leverages full attention\footnote{In practice, we use interleaved full and sliding-window attention for $Q$, as this yields stronger performance. The essential requirement is that $Q$ be more expressive than $P$, with access to the full history.} to produce memory targets $m'_t$, and a decoder $P$, which uses only sliding-window attention and recurrent K/V injection to produce decoder memories $m_t$ for next-token prediction. We train \ours{} with a memory consistency loss that aligns $m_t$ with $m'_t$, allowing inference to use $P$ alone. Empirically, \ours{} improves validation loss and downstream pretraining benchmarks over sliding-window and latent recurrent transformer baselines. Moreover, sharing parameters between $P$ and $Q$ reduces parameter memory while preserving most of the gains.
