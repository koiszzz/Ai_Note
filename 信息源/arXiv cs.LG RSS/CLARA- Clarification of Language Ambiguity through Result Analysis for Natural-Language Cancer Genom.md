# CLARA: Clarification of Language Ambiguity through Result Analysis for Natural-Language Cancer Genomics Queries

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Pratyush Kumar Shukla, Manveer Singh Tib, Siddhant Garg　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：q-bio.GN　|　原文：[打开链接](https://arxiv.org/abs/2608.05195)

------

arXiv:2608.05195v1 Announce Type: cross

Abstract: A natural language interface can be used to make cancer genomics databases easier to use, but even if a question is perfectly fluent, its scientific meaning can be ambiguous. We propose CLARA, a framework that represents a question as a typed scientific query specification, considers a few possible interpretations, executes them, and asks for clarification when the estimates diverge. CLARA was assessed on mutation-prevalence contrasts among eight TCGA PanCancer Atlas cohorts and a 30-gene panel. This benchmark consisted of 330 unique executable contrasts varying in mutation scope, assay denominator, and sample context; 115 contrasts were result-sensitive and 215 were result-stable, per the preregistered definition of relative divergence greater than 0.10 or absolute divergence greater than 5 percentage points. An independently implemented pandas execution engine perfectly replicated all 660 results from the SQLite engine. In a separate 120-question LLM-generated, manually vetted language stress test, CLARA recognized all 60 result-sensitive contrasts and needlessly clarified 13 of 60 stable contrasts (accuracy 89.2%, sensitivity/recall 100%, specificity 78.3%). Standalone machine learning had superior overall accuracy (97.5%) but missed one critical contrast. This demonstrates that downstream execution can distinguish consequential from inconsequential ambiguity and reveal an explicit trade-off between safety and burden.
