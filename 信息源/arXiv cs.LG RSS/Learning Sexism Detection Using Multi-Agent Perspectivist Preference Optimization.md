# Learning Sexism Detection Using Multi-Agent Perspectivist Preference Optimization

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Hadi Mohammadi, Tina Shahedi, Robert A. Bagheri, Mehdi Dastani, Masoume M. Raeissi　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.04056)

------

arXiv:2608.04056v1 Announce Type: cross

Abstract: When people label text for sexism, they often disagree, and not because some of them are wrong: they genuinely perceive sexism differently. Most NLP systems discard this disagreement by collapsing it into a majority vote. We propose the Multi-Agent Perspectivist Preference Optimization (MAP-PO) framework to keep these different perspectives. On the EXIST 2024 dataset of labeled English and Spanish tweets, we first cluster annotators by their labeling behavior rather than their demographic attributes. We then fine-tune one Large Language Model agent per cluster to reproduce that cluster's annotation behavior, and coordinate the agents with preference optimization that combines individual and team-level rewards. We evaluate MAP-PO in four settings defined by two languages and two backbone language models, asking whether each agent reproduces the annotations of its own cluster and whether the agents together reproduce the majority label. Two findings hold in all four settings. First, without fine-tuning the agents behave almost identically, so cluster-specific training is necessary. Second, we show that training each agent only on the labels of its own cluster pushes the agents far beyond the clusters they should represent, while adding a shared team-level training signal consistently keeps each agent calibrated to its cluster.
