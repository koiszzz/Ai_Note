# Uncovering Spontaneous Physics Representations in In-Context Learning

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Yeongwoo Song, Jaeyong Bae, Dong-Kyum Kim, Hawoong Jeong　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2508.12448)

------

arXiv:2508.12448v2 Announce Type: replace-cross

Abstract: In-context learning (ICL) lets large language models (LLMs) solve new tasks from prompts alone, across an ever-widening range of domains, yet the mechanisms underlying this ability remain poorly understood. Physical systems offer a controlled testbed for this question as they provide experimentally controllable data with structured dynamics grounded in fundamental principles. Here we study the ICL ability of LLMs, focusing on physical reasoning. Using dynamics forecasting as a proxy task, we first show that LLMs forecast physical dynamics in context, with accuracy improving as more history is provided. Analyzing the model's residual stream reveals internal activations that correlate with key physical quantities such as energy. These correlations strengthen gradually with context length, indicating that LLMs spontaneously form representations aligned with physical concepts without any physics-specific supervision. To assess whether these representations contribute to the model's predictions, we introduce a layer-wise gradient-based attribution analysis. We find that, residual directions more strongly correlated with energy also receive greater attribution to numerical predictions. This pattern is not observed for features correlated with directly observed quantities such as displacement, suggesting that the energy-related signal is not merely numerical information copied from the input. Our results broaden ICL analysis to structured physical dynamics and give a mechanistic account of how LLMs organize physical structure in context.
