# FinReportBench: Measuring and Improving Institution-Grade Financial Report Generation

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Yinghao Tang, Tan Zhenwei, Yiyao Wang, Wanli Gu, Xiaolu Zhang, Jun Zhou, Wei Chen　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.04374)

------

arXiv:2608.04374v1 Announce Type: new

Abstract: Large language models can produce fluent financial analysis, but fluency alone does not establish whether a report is suitable for institutional delivery. We introduce FinReportBench, an expert-grounded benchmark for measuring and improving institution-grade financial report generation. Expert review reveals recurring gaps in report identity, institutional components, source discipline, and visual delivery. We derive a 35-item rubric through expert partial orders, multimodal evidence, and audits of decision boundaries, covering deliverability, report identity, and institutional completeness. Starting from 10,000 balanced Chinese and English financial-research source records, we curate 244 bilingual tasks across three research objects and two input tiers. Each task separates the public query, reconstructed research trajectory, and hidden source packet. Three independent judge families reproduce the expert partial order at near-ceiling rates, showing that bounded, observable criteria support reliable evaluation. Across nine model families, basic deliverability is nearly saturated, while report identity and institutional completeness remain the primary bottlenecks. The largest cross-model gaps concern generation-trace control, information density, and data discipline rather than basic report framing. We then use benchmark-guided skill distillation to turn recurrent failures into reusable generation and self-review constraints. Across five model families, the evolved skill improves mean G1 by 33.85 points and mean G2 by 13.83 points over paired no-skill runs while preserving G0 for every pair. Code and benchmark artifacts are available at https://github.com/MisterBrookT/finreportbench.
