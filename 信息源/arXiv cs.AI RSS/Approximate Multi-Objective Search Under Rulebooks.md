# Approximate Multi-Objective Search Under Rulebooks

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Omar Muhammetkulyyev, Oren Salzman, Tichakorn Wongpiromsarn　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.RO　|　原文：[打开链接](https://arxiv.org/abs/2608.04398)

------

arXiv:2608.04398v1 Announce Type: cross

Abstract: Robotic planning often involves multiple objectives with complex priority relationships, such as safety, efficiency, and regulatory compliance. Rulebooks formalize these relationships, allowing partial ordering of objectives that generalizes both Pareto and lexicographic dominance. Computing the full set of rulebook-optimal solutions, however, is computationally expensive. To address this challenge, we introduce the concept of epsilon-rule-dominance, a principled notion of approximate dominance under rulebooks, and propose RA*pex, a best-first search algorithm that efficiently computes a compact set of epsilon-approximate rulebook-optimal solutions. RA*pex leverages dimensionality reduction, a technique used to speed up existing multi-objective search algorithms, while respecting rule hierarchies by maintaining separate closed sets and performing dominance checks over truncated and residual rule sets. We provide a formal analysis of RA*pex, proving that every rulebook-optimal solution is epsilon-rule-dominated (a generalization of approximate dominance we introduce) by at least one solution in the returned set. Empirical results demonstrate that our approach achieves computation times over two orders of magnitude faster than existing methods.
