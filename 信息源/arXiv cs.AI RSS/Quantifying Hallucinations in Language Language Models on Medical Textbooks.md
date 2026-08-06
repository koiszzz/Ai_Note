# Quantifying Hallucinations in Language Language Models on Medical Textbooks

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Brandon C. Colelough, Davis Bartels, Dina Demner-Fushman　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2603.09986)

------

arXiv:2603.09986v3 Announce Type: replace-cross

Abstract: Hallucinations, the tendency for large language models to provide responses with factually incorrect and unsupported claims, is a serious problem within natural language processing for which we do not yet have an effective solution to mitigate against. Existing benchmarks for medical QA rarely evaluate this behavior against a fixed evidence source. We ask how often hallucinations occur on textbook-grounded QA and how responses to medical QA prompts vary across models. We conduct two experiments, the first experiment to determine the prevalence of hallucinations for a prominent open source large language model (LLaMA-70B-Instruct) in medical QA given closed-source zero-shot prompts, and the second experiment to determine the prevalence of hallucinations and clinician preference to model responses. We observed, in experiment one, with the passages provided, LLaMA-70B-Instruct hallucinated in 19.7\% of answers (95\% CI 18.6 to 20.7) even though 98.8\% of prompt responses received maximal plausibility, and observed in experiment two, across models, lower hallucination rates aligned with higher usefulness scores ($\rho=-0.71$, $p=0.058$). Clinicians produced high agreement (quadratic weighted $\kappa=0.92$) and ($\tau_b=0.06$ to $0.18$, $\kappa=0.57$ to $0.61$) for experiments 1 and 2 respectively. Our findings indicate that, across all scales and architectures tested, current large language models remain unfit for unsupervised clinical deployment, and that human expert oversight is both necessary and the dominant cost driver.
