# AFD-Ledger: Deployment Provisioning for Attention--FFN Disaggregation

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Chengyu Qiu, Xiao Fu, Fengcun Li, Yulei Qian, Yuchen Xie, Xunliang Cai, Yingdi Shan, Yongwei Wu, Mingxing Zhang　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.DC　|　原文：[打开链接](https://arxiv.org/abs/2608.04502)

------

arXiv:2608.04502v1 Announce Type: cross

Abstract: Attention--Feed-Forward Network (FFN) Disaggregation (AFD) is emerging as a promising architecture for serving Mixture-of-Experts (MoE) language models. While existing AFD systems improve the efficiency of disaggregated execution, they leave a deployment question unanswered: under the same model, workload, time-per-output-token (TPOT) service-level objective (SLO), hardware budget, hardware catalog, and runtime capabilities, does AFD provide higher throughput than the best collocated deployment? Answering this question requires jointly optimizing hardware assignment and deployment organization for both architectures, making exhaustive provisioning prohibitively expensive. We present AFD-Ledger, an offline analytical provisioning system that independently provisions AFD and collocated deployments using an analytical execution model and an evaluation-bounded hardware search. Across deployment spaces where exhaustive provisioning is feasible, AFD-Ledger reduces complete deployment evaluations by 68.8%--83.5% while still recovering the globally optimal deployment. On three physical LongCat 2.0 deployments, it preserves the correct architecture decision while predicting AFD-to-collocated throughput within 6.6%--9.6% of measurement. Using this validated framework, we show that homogeneous AFD improves fixed-budget throughput in only a minority of the studied settings, heterogeneous AFD requires deployment-level hardware complementarity rather than heuristic device selection, and role-specific hardware improvements matter primarily when they enable better deployment organizations by crossing deployment capability--price boundaries.
