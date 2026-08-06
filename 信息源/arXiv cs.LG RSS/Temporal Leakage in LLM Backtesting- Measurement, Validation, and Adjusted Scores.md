# Temporal Leakage in LLM Backtesting: Measurement, Validation, and Adjusted Scores

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Zeyu Zhang, Bradly C. Stadie　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.02985)

------

arXiv:2608.02985v1 Announce Type: new

Abstract: The standard check for contamination in LLM backtests is simple: compare scores before and after the training cutoff. We show this check is uninformative. Four flagship models fail it on questions they cannot have memorized: every scored question resolved after their cutoffs. The reason is structural. Models legitimately know more about times near their cutoff, so recency mimics leakage, and we prove no passive backtest can separate the two from genuine skill. Measurement, not just detection, requires information from outside the backtest. We supply it in two forms. A known cutoff identifies leakage at the boundary; a matched clean control identifies it globally and yields a leakage-adjusted score. We also derive where leakage hides: it concentrates on outcomes that surprised the crowd and were well covered in training, and partial memorization is disproportionately rewarded. We validate the estimators against ground truth by planting leakage in twin models, where they recover the injected dose and return null on clean questions. Deployed on frontier models, they detect one cutoff-localized signature and, at the audit's power floor, clear five models whose apparent advantages were recency alone. Backtests need not be discarded; they need one defensible reference.
