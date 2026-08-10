# Do Tabular Foundation Models Agree with Themselves?

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Christian Kl\"otergens, Vijaya Krishna Yalavarthi, Lars Schmidt-Thieme, Tom Hanika　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.06004)

------

arXiv:2608.06004v1 Announce Type: new

Abstract: Tabular Foundation Models (TFMs) are currently the best approach to tabular prediction problems. They are constructed as transformers that approximate the Bayesian posterior predictive distribution based on a pre-training prior. These univariate predictors can be converted into multivariate ones autoregressively by sampling one target and adding it to the features.

However, the faithfulness of the resulting joint has not been investigated. Furthermore, TFMs cannot be evaluated against the posterior itself, at least not on real-world datasets, because the ground-truth distribution is unknown. We therefore propose asking a different question: could a model's predictions result from any joint distribution? To answer this question, we pose two requirements that any such model must satisfy. The first is marginalization consistency, which demands that marginalized conditionals are equal to directly predicted marginals. The second is factorization consistency, which demands that different factorization orders result in equal joint distributions. Every TFM that we evaluate violates both of these requirements for both classification and regression across all datasets.
