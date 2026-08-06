# Bayesian Data Reweighting Improves Multimodal Retrieval for Knowledge-Based Visual Question Answering

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Jingchen Sun, Shaobo Han, Ruiyi Zhang, Naresh Kumar Devulapally, Ming Liu, Yitao Long, Vishnu Suresh Lokhande, Changyou Chen　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.02907)

------

arXiv:2608.02907v1 Announce Type: new

Abstract: Multimodal retrievers are essential for knowledge-based visual question answering, where they retrieve external evidence for image-question pairs. However, existing contrastive training methods typically treat all unmatched query-document pairs as equally informative negatives, which is problematic because many unmatched documents may still be semantically relevant or partially useful. We propose Bayesian Data Reweighting, a probabilistic framework that models query-document importance as latent variables and adaptively infers posterior weights to downweight likely false negatives. With closed-form posterior updates under conjugate priors and stochastic EM optimization, our method consistently improves retrieval accuracy across three retrievers and seven knowledge-based VQA benchmarks.
