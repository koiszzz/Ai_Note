# Post-Hoc Trajectory-Risk Certification for Modular LLM-Based Security Agents

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Zhenpeng Li　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CR　|　原文：[打开链接](https://arxiv.org/abs/2608.05199)

------

arXiv:2608.05199v1 Announce Type: cross

Abstract: Autonomous security agents operate as staged pipelines, such as classifying network traffic and then attributing attacks to a specific technique. Split conformal prediction gives each stage finite-sample coverage, but deployment requires a trajectory-level guarantee across the full chain. These guarantees do not compose automatically when stages are independently trained and calibrated. Bonferroni allocation is distribution-free but conservative under correlated errors. We show that a natural pairwise-correlation extension to three or more stages is invalid because it gives a lower rather than an upper bound, and derive a valid spanning-tree alternative. We distinguish whether stages are dependent from whether an audit sample is large enough to certify that dependence, and give matching upper and information-theoretic lower sample-complexity bounds. We also show that coarse-to-fine label selection can create near-perfect measured correlation without learned dependence.

On a two-stage intrusion-detection pipeline across 6 open LLMs and 2 datasets, removing this artifact reduces measured correlation from near 1 to 0-0.78. A direct audit of trajectory failure becomes 13.7% tighter than Bonferroni once the audit reaches the required sample size, but is worse when undersized. A modular certificate using per-stage certificates and a pairwise overlap bound yields a positive average gain of 0.6%, quantifying the cost of lacking joint access. Same-model, cross-model, and permuted-pairing tests show that residual dependence reflects shared sample difficulty, not shared model representations. Average trajectory coverage across 12 configurations is 92.7% +/- 2.4% at alpha = 0.10. Under cross-dataset deployment, single-step miscoverage reaches 100% even when accuracy remains 78%, showing that distribution shift destroys calibrated confidence before raw accuracy.
