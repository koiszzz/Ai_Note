# COMPAS: Difficulty-Aware Joint Search for Optimizing Code Generation

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Jingzhi Gong, Jie M. Zhang, Gunel Jahangirova, Dong Huang, Mohammad Reza Mousavi, Mark Harman　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.SE　|　原文：[打开链接](https://arxiv.org/abs/2608.04336)

------

arXiv:2608.04336v1 Announce Type: cross

Abstract: Code generation systems make each LLM call with a model, a prompt, and decoding settings. However, existing optimization methods usually tune only part of these choices or use one fixed configuration for all tasks: global optimizers search one configuration for all tasks, routers choose only a model, and prompt optimizers keep the model and decoding settings fixed. This leaves their joint, group-specific interactions unclear. We therefore examine how these choices interact and observe that prompts and decoding settings interact, tuning effects vary by model, and the best configuration varies by task difficulty. Guided by these observations, we introduce COMPAS (Code-generation Optimization over Models, Prompts, And Decoding Settings), a difficulty-aware method that learns group-specific quality-cost fronts through low-cost model selection and joint prompt-decoding search, then routes each test task to its matching front online without further search. Under a matched search budget on LiveCodeBench, COMPAS improves pass@1 from 45.9% for the best baseline to 52.8% while reducing cost from $36.57 to $4.92. This also transfers to repository-level code generation on SWE-bench, resolving 76.0% of tasks versus 70.0% for the best baseline. Code and the reproducibility artifact are available at https://github.com/gjz78910/COMPAS.
