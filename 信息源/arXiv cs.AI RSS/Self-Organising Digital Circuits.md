# Self-Organising Digital Circuits

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Marcello Barylli, Gabriel B\'ena, Alexander Mordvintsev, Eleni Nisioti, Sebastian Risi　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.02606)

------

arXiv:2608.02606v1 Announce Type: new

Abstract: Fault tolerance in classical computing has traditionally relied on static strategies like hardware redundancy and error-correcting codes. Biological systems, in contrast, exhibit adaptive plasticity, maintaining function through dynamic re-organisation around damage. Inspired by this principle, we introduce Self-Organising Digital Circuits, framing functional logic generation and maintenance as a meta-learning problem on graphs. Our architecture employs a topology-masked Transformer that configures the Lookup Tables (LUT) of a circuit's Boolean gates. Extending the pattern-generation paradigm of Neural Cellular Automata (NCA), it navigates the degenerate Boolean search space to satisfy a computational task, rather than regenerating a fixed target state. We demonstrate that it can self-assemble functional circuits from scratch and rapidly re-route logic around permanent, previously unseen hardware faults. For soft errors, the policy achieves near-perfect recovery (>99.99\% accuracy) from damage sizes far exceeding training conditions. We further observe generalisation across circuit scales: accuracy improves on graphs substantially wider than those seen during training. This work bridges the principles of biological self-organisation with the practical domain of digital hardware.
