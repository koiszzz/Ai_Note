# Emulate or Estimate? The Divergent Strengths of Base and Post-Trained Language Models for Opinion Simulation

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Seth Grief-Albert, Jessica Bo, Difan Jiao, Ashton Anderson　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.03044)

------

arXiv:2608.03044v1 Announce Type: cross

Abstract: Large language models are increasingly used to simulate human opinions, but prior work reports conflicting results: some studies find promising alignment with human survey data, while others find persona collapse and weak demographic sensitivity. We show that much of this conflict stems from conflating two distinct tasks. We call the first task emulation, in which models generate individual responses that aggregate into a population distribution. We call the second task estimation, in which models directly predict the population distribution. Evaluating six matched base and post-trained models on the Pew American Trends Panel, we find that base models are stronger emulators: they produce response distributions closer to human ground truth and better preserve demographic structure. Post-trained models are stronger estimators, producing more accurate distributional predictions when asked directly. We propose that model selection for human simulation should be guided by whether the task requires generating text or predicting distributions.
