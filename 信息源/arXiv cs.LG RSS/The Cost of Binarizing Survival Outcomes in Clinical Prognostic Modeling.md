# The Cost of Binarizing Survival Outcomes in Clinical Prognostic Modeling

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Shashank Yadav, David M. Routman, Andrew Y. K. Foong　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：q-bio.QM　|　原文：[打开链接](https://arxiv.org/abs/2608.04046)

------

arXiv:2608.04046v1 Announce Type: cross

Abstract: Survival analysis is an established framework for analyzing time-to-event data, yet many clinical machine learning studies still binarize the outcome before model training. This practice excludes censored patients, collapses temporal information into a single threshold, and can affect which features are selected as prognostically relevant. We examine the cost of this binarization in the context of Bayesian network (BN) feature selection, using two recent publications as case studies: one that applies BN-based feature selection to a head-and-neck cancer cohort and a second surgical cohort study that, while not BN-based, likewise binarizes its survival endpoint. We replace the binary scoring function with the Cox partial log-likelihood for feature-to-outcome edges, a modification we call the Survival-Aware Bayesian network, and recover prognostic features that binarization misses. Our ablation experiment confirms that the improvement is driven by the time-to-event scoring formulation rather than by retaining more patients. The results generalize across five endpoint-cohort combinations in head-and-neck cancer and extend to three further cancer types (breast, colorectal, and kidney). We propose that clinical studies with survival outcomes should use time-to-event methods by default, as binarization discards the prognostic signal retained by survival analysis.
