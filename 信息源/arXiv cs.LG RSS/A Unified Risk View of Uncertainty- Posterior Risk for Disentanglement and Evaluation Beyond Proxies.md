# A Unified Risk View of Uncertainty: Posterior Risk for Disentanglement and Evaluation Beyond Proxies

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Frieder Wizgall, Georg Tirpitz, Moritz Seiler, Kerstin Ritter, B\'alint Mucs\'anyi　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.05995)

------

arXiv:2608.05995v1 Announce Type: new

Abstract: Reliable uncertainty estimates are critical in safety-sensitive applications, where understanding the sources of predictive uncertainty is essential. This often requires disentangling epistemic uncertainty from aleatoric uncertainty, yet these uncertainty types are not defined consistently across the literature, making it difficult to assess whether a method produces accurate uncertainty estimates. Evaluation is further complicated by the fact that ground-truth epistemic uncertainty is typically unavailable. Existing benchmarks therefore mostly rely on proxy tasks such as out-of-distribution detection, which do not provide complete ground-truth uncertainty targets and offer limited insight into the structure and quality of uncertainty estimates. We propose a unified definition of uncertainty as pointwise posterior risk, the expected loss of a predictor under the distribution of plausible ground-truth functions given the data. This view combines Bayesian uncertainty over functions with estimator-dependent deviations from the posterior mean, capturing effects such as misspecification and optimization error. This formulation constitutes the foundation of a theory-backed benchmark that enables direct computation of oracle epistemic and aleatoric uncertainty using semi-synthetic datasets with real covariates and known generative processes. By avoiding proxy evaluations, the benchmark enables fine-grained analysis of uncertainty estimates. Empirically, we find that accurate prediction does not guarantee reliable uncertainty disentanglement. The benchmark reveals practically useful differences between methods, identifying approaches with meaningful alignment to oracle uncertainty targets while exposing sensitivity to datasets and modeling choices.
