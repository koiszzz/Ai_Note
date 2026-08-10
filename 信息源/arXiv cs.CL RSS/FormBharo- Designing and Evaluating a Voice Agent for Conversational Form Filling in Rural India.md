# FormBharo: Designing and Evaluating a Voice Agent for Conversational Form Filling in Rural India

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Aman Dalmia, Sanskriti Midha, Jigar Doshi　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.06027)

------

arXiv:2608.06027v1 Announce Type: new

Abstract: In India, almost every social benefit starts with a form, yet the people who need these benefits most are often unable to read or write. Reaching them requires a spoken conversation. Today that work falls to frontline health workers who enroll beneficiaries one at a time, a poor use of stretched capacity. We built FormBharo ("fill the form" in Hindi), a voice agent that fills a structured form over a phone call under tight latency and cost budgets by pairing Large Language Models (LLMs) with deterministic, rule-based validation and flow control. It is being piloted with ARMMAN, an NGO running large-scale maternal and child mobile-health programs in India, to enroll low-income, Hindi-speaking mothers in antenatal and postnatal care. To our knowledge, it is the first voice agent piloted to fill an enrollment form for this population. We openly release FormVoiceAgentBench, a benchmark pairing human-recorded Hindi audio with 3,760 multi-turn conversation tests across 960 simulated calls, to evaluate our agent's components (transcription, extraction, reply generation) and end-to-end form completion under real acoustic variations. Form completion drops by up to ~41 points when LLMs receive error-prone real-speech transcripts instead of reference ones. The rule-based controls recover many turn-level extraction errors, helping smaller, cheaper models match or surpass frontier models on form completion. Component performance does not predict end-to-end performance: GPT-5.5 leads turn-level extraction accuracy on reference transcripts (99.8%) but ranks lower on form completion. Since errors both propagate and cancel across the pipeline, the optimal model choice of models emerges only through end-to-end evaluation. Finally, no single model is best across accuracy, cost, and latency at once, so we use a Pareto-based weighted-sum scalarization to select a deployable configuration balancing the three.
