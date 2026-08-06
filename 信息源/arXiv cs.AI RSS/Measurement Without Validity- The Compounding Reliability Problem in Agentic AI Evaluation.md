# Measurement Without Validity: The Compounding Reliability Problem in Agentic AI Evaluation

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：William Caban　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.00794)

------

arXiv:2608.00794v2 Announce Type: replace

Abstract: Agentic AI evaluation pipelines produce benchmark scores that justify deployment decisions, safety certifications, and regulatory compliance claims. No formal framework has yet characterized how validity degrades across the stages of these pipelines. We present a three-layer compounding validity model, V_total <= V_1 x V_2 x V_3, that captures multiplicative degradation across task generation (V_1), human-simulator calibration (V_2), and automated judgment (V_3). Under empirically grounded estimates, a pipeline retaining 70% validity at each stage is at most 34% valid against the intended construct (range 0.22--0.54).

We validate the model against a structured survey of 55 published agentic evaluation papers, finding that approximately 82% apply structurally mismatched, incomplete, or absent inter-rater reliability (IRR) metrics---a pattern consistent with systematic V_3 collapse. We further identify empirical evidence of V_1 failures (task validity flaws in 7 of 10 popular benchmarks) and V_2 miscalibration (up to 9 percentage points inter-simulator variance, with systematic demographic disparities for non-Standard American English speakers).

We derive eight prescriptions grounded in psychometric science and domain-stratified reliability thresholds (ICC>=0.70; alpha >= 0.67/0.70/0.80 by consequence level) that practitioners and benchmark authors can apply immediately. The framework provides a tractable knowledge-based tool for diagnosing and correcting evaluation pipeline validity before deployment decisions are made.
