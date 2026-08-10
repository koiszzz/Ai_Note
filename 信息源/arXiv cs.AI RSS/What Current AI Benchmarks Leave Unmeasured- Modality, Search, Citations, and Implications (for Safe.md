# What Current AI Benchmarks Leave Unmeasured: Modality, Search, Citations, and Implications (for Safety Evaluations)

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Ro Encarnaci\'on, Tina Behzad, Emma Lurie, Dana\'e Metaxa　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.HC　|　原文：[打开链接](https://arxiv.org/abs/2608.06202)

------

arXiv:2608.06202v1 Announce Type: cross

Abstract: Large language model (LLM) benchmark evaluations are routinely used to support claims about model safety, reliability, and deployment readiness. Yet most evaluations rely on a single access modality (model APIs), perform a single run per prompt, and report accuracy as the primary outcome metric, without accounting for conditions such as web search that may have effects on model behavior in deployment. We audit these assumptions for one of the most widely-used LLMs, comparing two modalities, ChatGPT's chat UI and OpenAI's API, with and without web search enabled. We use a stratified total sample of 401 prompts from two popular benchmarks, BBQ and SafetyBench, collecting 4,812 total responses across three repeated runs per prompt. Beyond standard performance measures, we evaluate model output dimensions including response consistency, response text similarity, citation grounding, and abstention behavior. For instance, chat UI responses were less accurate than API responses on both benchmarks with search disabled. Enabling web search reduced accuracy by up to 8 percentage points, and even reversed the direction of modality performance trends for one benchmark. Repeated runs of the same prompt produced inconsistent responses in up to 21\% of prompts. The two modalities also grounded answers in different citations, and abstention behavior was also inconsistent across both modalities. These results illustrate that, even within a model family, reporting only simple accuracy metrics can obscure important forms of model behavioral variation relevant to AI safety assessments. We argue that AI safety evaluations should systematically account for modality, multi-run consistency, search conditions, and response-level behaviors to better reflect how deployed AI systems behave in practice.
