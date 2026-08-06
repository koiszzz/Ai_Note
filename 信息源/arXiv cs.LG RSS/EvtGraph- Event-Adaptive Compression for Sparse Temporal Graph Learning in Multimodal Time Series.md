# EvtGraph: Event-Adaptive Compression for Sparse Temporal Graph Learning in Multimodal Time Series

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Ziqian Wang, Tingxiong Xiao, Yuxiao Cheng, Jinli Suo　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.04368)

------

arXiv:2608.04368v1 Announce Type: new

Abstract: Multimodal temporal data are inherently irregular and uneven in information density, yet most models rely on uniform discretization, leading to inefficient representations.

We propose \textbf{EvtGraph}, a unified framework that aligns computation with temporal salience under explicit budget constraints. EvtGraph reparameterizes sequences into event-level tokens via event-adaptive compression (EAMC), selects a compact subset with a node budget (NBC), and performs temporally constrained sparse graph reasoning (T2SG). This transforms dense sequences into structured computation over salient events, reducing complexity while preserving critical transitions.

We show that this design provides a practical mechanism for allocating representational capacity under a fixed budget, yielding a consistent performance--efficiency trade-off, where a small budget is often sufficient in practice. Experiments on multimodal clinical (MIMIC-IV + CXR) and cross-domain benchmarks demonstrate that EvtGraph outperforms both Transformer-based and recurrent baselines while significantly improving efficiency.

These results suggest that budget-constrained event-centric representation provides a general paradigm for learning from high-redundancy temporal data.
