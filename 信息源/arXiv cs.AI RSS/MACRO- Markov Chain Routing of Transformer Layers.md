# MACRO: Markov Chain Routing of Transformer Layers

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Pawe{\l} Batorski, Abtin Pourhadi, Akylgali Aitaza, Przemys{\l}aw Spurek, Paul Swoboda　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.05872)

------

arXiv:2608.05872v1 Announce Type: cross

Abstract: Standard Large Language Models (LLMs) execute layers sequentially. Dynamic layer routing, i.e. search for a different execution path through layers involving layer repetitions, skips and other moves, can improve performance. Existing routing approaches often require updating model weights, running expensive search loops per test instance, or demand ground-truth labels during inference. In this work, we propose Markov Chain Routing of Transformer Layers (MACRO), a framework that learns task-specific routes over LLM architectures without modifying underlying parameters. MACRO models layer routing as a context-dependent Markov policy conditioned on layer indices, computation budget phases, directional displacements, and operator context, supporting skip, repeat, and residual hidden-state addition operations. The Markov route distribution is updated via feedback on training data and decoded using a top-k Viterbi algorithm to isolate high-probability candidate programs. We evaluate MACRO across diverse reasoning and knowledge benchmarks on multiple open-weight LLMs. MACRO achieves a +5.0% average accuracy improvement over the unrouted baselines, with largest gains on small models. We outperform the best dynamic routing approach Dr. LLM by +7.2%, while reducing route-search time 9.4x (from 14.8 to 1.6 hours). Our code is publicly available at https://github.com/Batorskq/MACRO.
