# The Luna Bound Propagator for Formal Analysis of Neural Networks

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Henry LeCates, Haoze Wu　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2603.23878)

------

arXiv:2603.23878v3 Announce Type: replace

Abstract: The parameterized CROWN analysis, a.k.a., alpha-CROWN has emerged as a practically successful abstract interpretation method for neural network verification. However, existing implementations of alpha-CROWN are limited to Python, which complicates integration into existing DNN verifiers and long-term production-level systems. We introduce Luna, a new abstract-interpretation-based bound propagator implemented in C++. Luna supports Interval Bound Propagation, the DeepPoly/CROWN analysis, and the alpha-CROWN analysis over a general computational graph. We describe the architecture of Luna and show that it outperforms the state-of-the-art alpha-CROWN implementation in terms of both bound tightness and computational efficiency on supported benchmarks from VNN-COMP 2025. Luna is publicly available at https://github.com/ai-ar-research/luna.
