# An Axiomatic Benchmark for Evaluation of Scientific Novelty Metrics

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Miri Liu, ChengXiang Zhai　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2604.15145)

------

arXiv:2604.15145v2 Announce Type: replace

Abstract: The rigorous evaluation of the novelty of a scientific paper is, even for human scientists, a challenging task. With the increasing interest in AI scientists, it is becoming more and more important that this task be automatable and reliable, lest attention and compute be wasted on ideas that have already been explored. Due to the challenge of quantifying ground-truth novelty, however, existing novelty metrics generally validate against noisy, confounded signals such as citation counts or peer review scores. We introduce a benchmark that compares novelty metrics without requiring explicit novelty labels. It tests whether scores move correctly under controlled pool manipulations, organized under three axioms requiring that scores fall as the pool covers more of a paper's content, rise as the pool loses relevance, and fall as the pool moves later in time. Indeed, we show that even for the most direct human signal, ICLR reviewer novelty scores, the axis of novelty is entangled with quality. Across ten systems, from embedding metrics to AI scientist novelty checks, we find that surface redundancy is largely solved but conceptual redundancy is not, and that embedding metrics and LLM-based metrics both have their places; future metrics should combine such approaches for better novelty evaluation. We release our benchmark and evaluation code to enable this research.
