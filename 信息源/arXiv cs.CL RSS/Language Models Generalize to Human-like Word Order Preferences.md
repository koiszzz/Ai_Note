# Language Models Generalize to Human-like Word Order Preferences

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Amanda Popadich, Shane Steinert-Threlkeld　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.05028)

------

arXiv:2608.05028v1 Announce Type: new

Abstract: A central question in language acquisition is whether linguistic biases can emerge from general learning mechanisms operating over underdetermined input. Artificial Language Learning (ALL) studies have shown that human learners reliably generalize beyond the evidence provided, including by preferring scope-homomorphic noun phrase modifier orders. In this work, we investigate whether language models exhibit the same bias under similar conditions. We create a controlled learning environment in which models are trained on a corpus where all noun phrases containing multiple modifiers have been removed, eliminating direct evidence about modifier ordering, and are then evaluated on multiple modifier sentences. Across three model sizes, we find that they consistently prefer scope-homomorphic orders despite never observing them during training. These preferences vary in strength by modifier type. To investigate the source of these preferences, we examine noun-modifier association strength using pointwise mutual information (PMI). While PMI reflects known modifier-ordering patterns, it does not explain the models' ordering preferences. These findings demonstrate that LMs can recover human-like linguistic generalizations from impoverished input and provide a controlled framework for investigating the mechanisms underlying such biases.
