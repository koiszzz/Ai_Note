# Cura 1T: Specialized Model for Agentic Healthcare

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：actAVA AI, :, Haolin Chen, Leon Qi, Steve Brown, Deon Metelski, Tao Xia, Joonyul Lee, Qixuan Wang, Kevin Riley, Frank Wang, Weiran Yao　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2607.15314)

------

arXiv:2607.15314v2 Announce Type: replace

Abstract: Healthcare AI agents handle patient consultation, clinical reasoning over text and images, interactive diagnosis, and electronic health record (EHR) tool use, yet specialized agentic models that cover these use cases together remain limited. These capabilities fail in different ways, and a narrow update for one task can degrade another. We present Cura 1T, a healthcare-specialized LLM built on the open-weight Kimi-K2.6 and trained through a human-gated recursive self-improvement (RSI) loop. Specifically, in each round, the RSI harness plans a target capability, trains the model, evaluates benchmark trajectories, and refines the data mixture from observed failures with targeted synthetic and curated examples rather than a single generic medical-data update. Across the healthcare evaluation suite, Cura 1T ranks at or near the top among frontier baselines while remaining competitive on out-of-domain reasoning and agentic benchmarks.
