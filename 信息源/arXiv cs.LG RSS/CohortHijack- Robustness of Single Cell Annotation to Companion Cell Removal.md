# CohortHijack: Robustness of Single Cell Annotation to Companion Cell Removal

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Arash Vashagh, Yasmin Vashagh　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.05900)

------

arXiv:2608.05900v1 Announce Type: new

Abstract: Many single-cell annotation tools refine an initial cell label using nearby cells or cluster-level voting. We study whether this refinement can be manipulated without changing the target cell. We introduce CohortHijack, a robustness audit that removes selected non-target cells from the query cohort while preserving the target expression profile, base prediction, and trained model. We evaluate random and structured removal methods, together with greedy, multi-start, and beam search, on PBMC3K and Paul15 using logistic regression and calibrated linear SVM classifiers. Structured removal was consistently stronger than random removal on Paul15. Multi-start search changed 24.33% of linear-SVM targets and 19.67% of logistic-regression targets while removing a small fraction of the cohort and keeping mean collateral changes below 0.4%. Ablations confirmed that the effect disappeared when neighborhood refinement was disabled. We also evaluated CellTypist majority voting, where independent predictions remained unchanged across all evaluations, but refined labels changed after small companion-cell removals. These findings identify query cohort composition as a target-preserving attack surface in single-cell annotation.
