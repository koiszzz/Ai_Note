# Recall Is Not Enough: A Reader-Context Diagnostic for Budget-Constrained Retrieval-Augmented Generation

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Ananto Nayan Bala　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2607.00725)

------

arXiv:2607.00725v2 Announce Type: replace

Abstract: Retrieval-augmented generation under a fixed context budget forces a selection problem: only a fraction of the retrieved evidence fits in front of the reader. The field's standard metric, recall@k, is scored on the retrieved set, but the reader consumes the packed context - and once packing must discard evidence, the two come apart. We introduce answer-in-context, a diagnostic that measures whether a gold answer survives into the packed context, and argue it is the quantity budgeted RAG should be optimizing. It carries substantial information beyond retrieval, adding Delta R^2 = 0.17-0.27 over recall across three multi-hop datasets; even among questions where all gold was retrieved, whether packing keeps the answer separates exact match by 4.6x. Two independent interventions confirm the mediation: a packing change that raises document coverage without raising answer-in-context leaves accuracy flat, and prompt compression that destroys the answer span lowers both together. A graded variant extends the diagnostic to free-form answers, where no verbatim span exists. We then show the diagnostic is actionable. Casting reader-context construction as budgeted submodular maximization gives a packer that beats both deployed top-k truncation and LLMLingua-2 compression - across three reader families, four scales, and four budgets, at equal-or-lower token cost. Against a hand-tuned query-focused heuristic, which we show approximates the same objective, it reaches parity, winning outright only where evidence density is the binding constraint. Throughout, one variable predicts what helps and what cannot.
