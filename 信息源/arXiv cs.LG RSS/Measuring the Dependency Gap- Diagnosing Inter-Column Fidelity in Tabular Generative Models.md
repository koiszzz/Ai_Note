# Measuring the Dependency Gap: Diagnosing Inter-Column Fidelity in Tabular Generative Models

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Jie Zhang　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2607.21636)

------

arXiv:2607.21636v3 Announce Type: replace

Abstract: Synthetic tabular data are valued for preserving not just column-wise marginals but inter-column dependency, which carries much of the minority-class signal in domains such as fraud detection and clinical risk. Yet standard certification is largely blind to it: a fully-factorized baseline that destroys all inter-column dependency still appears nearly real under the commonly reported linear classifier two-sample test (C2ST), and is only mildly penalized by pairwise Trend scores. This is a known weakness of linear detection scores, which we confirm on four benchmarks. We therefore decompose a stronger, gradient-boosted C2ST score into marginal, dependency, and numerical-categorical cross terms, each read against a zero-dependency reference and a real-data oracle. Applied to representative flow-matching (TabbyFlow/EF-VFM) and diffusion (TabDiff) generators, it finds a persistent dependency gap of comparable magnitude in both, tracking what their objectives share rather than anything specific to one. Dependency is necessary for minority-class utility, since a zero-dependency reference collapses it, yet the generators' residual gaps coincide with much smaller shortfalls that do not track the measured gap. The gap is neither a structural limitation of mean-field objectives nor closed by a 16x capacity increase where training is clean, which motivates supervising dependency directly in the objective as the next intervention to test.
