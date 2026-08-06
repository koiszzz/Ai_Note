# Conditionally Identifiable Latent-Environment Modeling for Out-of-Distribution Recommendation

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Qianqian Wang, Wenwu Gong, Yunshan Li, Zhenqing Wu, Ruili Wang, Lili Yang　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.IR　|　原文：[打开链接](https://arxiv.org/abs/2608.03647)

------

arXiv:2608.03647v1 Announce Type: cross

Abstract: Out-of-distribution (OOD) recommendation is vulnerable to preference shifts induced by a latent environment. Existing methods can infer latent states from logged interactions, yet the statistical meaning of the latent environment and its effect on preference remain underdetermined. We formulate this task as conditionally identifiable risk-aware recommendation (CI-RR) and propose Conditionally Identifiable Latent-Environment Recommendation (CILER). CILER uses a user-conditioned exponential family to model the latent environment and a feature-indexed polynomial to specify how it changes preference. It predicts by marginalizing item probabilities over the inferred environment distribution. Under sufficient variation, correct specification, and decoder regularity, CILER identifies the environment-sensitive representation up to the stated equivalence class. We further bound excess deployment log-risk by environment-inference error. Controlled studies test the observable consequences of sufficient variation and model specification. Experiments on three datasets show that CILER improves all twelve OOD ranking metrics under feature, temporal, and geographical shifts within shared support.
