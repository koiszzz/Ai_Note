# HAPEns: Hardware-Aware Post-Hoc Ensembling for Tabular Data

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Jannis Maier, Lennart Purucker　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2603.10582)

------

arXiv:2603.10582v2 Announce Type: replace

Abstract: Ensembling is commonly used in machine learning on tabular data to boost predictive performance and robustness, but larger ensembles often lead to increased hardware demand. We introduce HAPEns, a post-hoc ensembling method that explicitly balances accuracy against hardware efficiency. Inspired by multi-objective and quality diversity optimization, HAPEns constructs a diverse set of ensembles along the Pareto front of predictive performance and resource usage. Existing hardware-aware post-hoc ensembling baselines are not available, highlighting the novelty of our approach. Experiments on 83 tabular classification datasets show that HAPEns significantly outperforms baselines, finding superior trade-offs for ensemble performance and deployment cost. Ablation studies also reveal that memory usage is a particularly effective objective metric. Further, we show that even a greedy ensembling algorithm can be significantly improved in this task with static multi-objective weighting.
