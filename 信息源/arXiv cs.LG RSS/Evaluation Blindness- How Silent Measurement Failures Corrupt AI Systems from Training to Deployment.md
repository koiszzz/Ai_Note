# Evaluation Blindness: How Silent Measurement Failures Corrupt AI Systems from Training to Deployment

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Priyanka Bajaj (Independent Researcher)　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.02786)

------

arXiv:2608.02786v1 Announce Type: new

Abstract: AI systems can fail silently. The failure propagates through training loops, evaluation pipelines, and production monitoring stacks until downstream harm makes it visible. This paper introduces evaluation blindness: a measurement function M exhibits evaluation blindness with respect to failure class F when it produces readings indistinguishable from a healthy state while the system is actually failing, with no auxiliary signal flagging the gap.

The problem surfaces at two lifecycle stages the literature has treated separately. At training time, reward models are gamed, importance-sampling corrections are silently miscalculated, and benchmark contamination inflates fine-tuning evaluations, all while loss curves look healthy and gradient updates proceed normally. At deployment time, monitoring fails to catch six classes of production failure, including an Operational category that is 100% silent by structural definition.

We provide a formal detectability predicate unifying both stages. Four training-time case studies trace concrete breakdowns, including a real implementation bug in TRL PR #6594 where gradients are corrupted as loss decreases normally. A six-class taxonomy validated against 50 real-world incidents from court documents and regulatory filings finds that 53% of verifiable public failures were silent. A failure budget framework ties acceptable failure rates to use-case risk class.

The implication is direct: measurement infrastructure is a correctness concern across the full AI lifecycle, not just at evaluation time. Data, code, and taxonomy schema are at https://github.com/priyanka25aug/llm-failure-taxonomy.
