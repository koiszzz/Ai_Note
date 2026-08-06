# A Mechanistic Analysis of Transformers for Dynamical Systems

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Gregory Duth\'e, Nikolaos Evangelou, Wei Liu, Ioannis G. Kevrekidis, Eleni Chatzi　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2512.21113)

------

arXiv:2512.21113v2 Announce Type: replace

Abstract: Transformers are increasingly adopted for modeling and forecasting time-series, yet their internal mechanisms remain poorly understood from a dynamical systems perspective. In contrast to classical autoregressive and state-space models, which benefit from well-established theoretical foundations, Transformer architectures are typically treated as black boxes. This gap becomes particularly relevant as attention-based models are considered for general-purpose or zero-shot forecasting across diverse dynamical regimes. In this work, we do not propose a new forecasting model, but instead investigate the representational capabilities and limitations of single-layer Transformers when applied to dynamical data. Building on a dynamical systems perspective, we interpret causal self-attention as a linear, history-dependent recurrence and analyze how it processes temporal information. Through a series of linear and nonlinear case studies, we identify distinct operational regimes. For linear systems, we show that in the single-head attention-only setting, the convexity constraint imposed by softmax attention restricts the class of autoregressive operators that can be represented, leading to oversmoothing when the target dynamics require mixed-sign lag coefficients. For nonlinear systems under partial observability, attention instead acts as an adaptive delay-embedding mechanism, enabling effective state reconstruction when sufficient temporal context and latent dimensionality are available. These results help bridge empirical observations with classical dynamical systems theory, providing insight into when and why Transformers succeed or fail as models of dynamical systems.
