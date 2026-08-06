# Subject-Level Heterogeneity in EEG Motor Imagery Decoding: A Large-Scale Benchmark and Portfolio-Based Reduction of the Search Space

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Xavier Vasques, Paul Barbaste, Olivier Oullier　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：q-bio.NC　|　原文：[打开链接](https://arxiv.org/abs/2607.22778)

------

arXiv:2607.22778v2 Announce Type: replace-cross

Abstract: Robust EEG motor imagery decoding remains limited by strong inter-individual variability, making it difficult to identify pipelines that generalize across users. We present a large-scale, standardized within-session benchmark of decoding pipelines across three public datasets: Cho2017 (52 subjects), PhysionetMI (109 subjects), and Zhou2016 (4 subjects). Using a common MOABB LeftRightImagery setting, two frequency bands (8-15 Hz and 8-30 Hz), and a broad combination of feature extraction, preprocessing, and classification steps, we analyzed 216,714 raw evaluation rows, which after structured aggregation yielded 44,928, 109,000, and 4,192 subject-level observations respectively.

Covariance tangent-space projection (cov-tgsp) and Common Spatial Patterns (CSP) consistently defined the strongest methodological families, though their relative ordering was dataset-dependent. On Cho2017, the best family-level mean accuracy came from cov-tgsp in 8-30 Hz (0.712 +/- 0.140), whereas Zhou2016 favored CSP (0.832 +/- 0.121 in 8-15 Hz). These aggregate rankings concealed substantial subject-level heterogeneity: 42 distinct winning pipelines across 52 Cho2017 subjects, and 93 across 109 PhysionetMI subjects.

We then used the benchmark as an empirical performance landscape for building compact portfolios of pipelines of size K. Several construction procedures were compared, including a ranking-based Top-K Mean heuristic and search-based strategies. Results were broadly consistent, with Top-K Mean giving the best trade-off. A single best global pipeline already retained 94.2% of the oracle in Cho2017 and 81.8% in PhysionetMI; at K = 12, oracle retention rose to 96.5% and 90.0%. The landscape is therefore subject-dependent, and this heterogeneity can be exploited through compact portfolios that make personalization more feasible.
