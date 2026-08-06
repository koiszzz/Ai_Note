# State Propagation Also Satisfies: A Complex-Valued State-Space Model for Deterministic State Tracking

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Xiaohe Li, Yang Lu　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.03425)

------

arXiv:2608.03425v1 Announce Type: new

Abstract: Transformer-based architectures have dominated sequence modeling, largely due to the expressive power of attention mechanisms. However, for a class of deterministic state tracking tasks---such as parity checking, modular counting, and parenthesis matching---attention may be overkill. In this paper, we show that \textbf{state propagation alone is sufficient}.

We propose the \textbf{Complex State Propagator (CSP)}, a minimalistic recurrent architecture that \textbf{only propagates hidden states} across layers without output projections at intermediate steps. The state is represented as a complex-valued vector, updated via input-dependent rotations in the complex domain. To enable deep propagation without gradient vanishing or degradation, we introduce a \textbf{block-level skip connection} alongside element-wise complex normalization and SiLU activation at sequence boundaries. Applied with Focal Loss, CSP achieves \textbf{100\% accuracy} with perfect F1 scores across canonical tasks.
