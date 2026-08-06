# Traceable LLM-Generated Hazard Scenarios for Operational Safety Analysis of Aviation Systems Using ASRS Reports

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Cristian Mascia, Roberto Pietrantuono, Daniel Rodriguez, Stefano Russo　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.04697)

------

arXiv:2608.04697v1 Announce Type: new

Abstract: Operational hazard analysis of aviation system operations must consider interactions among weather, ATC actions, airspace constraints, aircraft operations, and human factors - distinct from the functional hazard assessment applied at the aircraft-system level. We present an AI-assisted approach that generates candidate hazard scenarios from NASA's Aviation Safety Reporting System (ASRS). Given a target adverse outcome, it produces a structured hypothesis as categorical factors and a narrative scenario describing an operational event sequence consistent with the structure. Each scenario includes by a plausibility score from historical co-occurrence evidence and traceability to the most similar held-out ASRS reports. We then propose a hybrid variant, conditioning narrative generation on a structured hypothesis produced via evolutionary abduction, improving correctness and reducing variability. We evaluate multiple large language models, zero-shot versus few-shot prompting, and optional fine-tuning, measuring how prompting and model choice affect the validity and realism of the generated structures and narratives.
