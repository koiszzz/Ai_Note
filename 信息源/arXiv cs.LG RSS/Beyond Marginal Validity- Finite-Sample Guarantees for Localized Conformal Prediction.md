# Beyond Marginal Validity: Finite-Sample Guarantees for Localized Conformal Prediction

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Anton Conrad, Rustam Isaev, Denis Belomestny, Eric Moulines, Sergey Samsonov　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：stat.ML　|　原文：[打开链接](https://arxiv.org/abs/2608.06206)

------

arXiv:2608.06206v1 Announce Type: cross

Abstract: Conformal prediction endows arbitrary black-box predictors with finite-sample, distribution-free marginal coverage, yet marginal validity can hide severe covariate-specific miscalibration, while exact distribution-free conditional coverage is finite-sample unattainable. Randomly localized conformal prediction (RLCP) mitigates this gap by calibrating near the test point while preserving marginal coverage. Existing theory, however, lacks finite-sample guarantees for the realized localized set that jointly control conditional validity and oracle efficiency. We provide such guarantees. For any fixed score, under H\"older regularity of the conditional score CDF and standard density and kernel assumptions, we prove high-probability bounds, uniform over a realized localization neighbourhood, for the conditional-coverage gap and the length error relative to the oracle. The bounds decompose into an $O(h^\beta)$ localization bias and a calibration term decreasing with calibration size, clarifying the bandwidth bias-variance tradeoff and when RLCP tracks the oracle. We also analyze data-split learned scores: when the score targets a pivotal score, as in conformalized quantile regression, uniform local guarantees decompose into fixed-score calibration and uniform score-estimation errors, showing that improved learning sharpens localized guarantees.
