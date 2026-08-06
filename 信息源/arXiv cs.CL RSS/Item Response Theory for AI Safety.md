# Item Response Theory for AI Safety

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Joshua Fonseca Rivera (Independent), Neil Shah (Independent), David Demitri Africa (UK AI Security Institute), Konstantinos Voudouris (UK AI Security Institute)　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.05086)

------

arXiv:2608.05086v1 Announce Type: cross

Abstract: Language models differ in how safely they behave and these differences are measured by safety benchmarks. But aggregated benchmark scores are hard to trust and interpret, because benchmarks duplicate one another, correlate heavily, and models may sandbag when they detect evaluation. To address these issues, we draw on Item Response Theory (IRT), a statistical toolkit for measuring these latents from performance on items with inferred psychometric properties. We fit IRT models to eight safety benchmarks across 192 language models, the largest psychometric analysis of LLM safety evaluations to date, and contribute three results. First, we find that three interpretable factors of refusal strictness, truthfulness, and contextual harm explain most of the variance between models across benchmarks. Second, psychometrically selected items recover full benchmark scores with lower error than random subsets of the same size, and roughly ten adaptively chosen items suffice for several individual benchmarks, cutting evaluation cost by 97-99%. Third, IRT supports audits of individual models, showing that it can be used to detect naive sandbagging and changes of model behind APIs. Overall, we show IRT is a ready-made toolkit for reading, reducing, and auditing safety benchmarks, which we recommend frontier labs and evaluators adopt.
