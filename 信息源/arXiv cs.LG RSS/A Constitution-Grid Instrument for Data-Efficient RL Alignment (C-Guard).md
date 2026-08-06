# A Constitution-Grid Instrument for Data-Efficient RL Alignment (C-Guard)

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Xianling Zhang　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.00180)

------

arXiv:2608.00180v2 Announce Type: replace-cross

Abstract: Conflicting objectives are general in RL alignment, and training on them data-efficiently is hard. Training a safety guard with RL means optimizing two objectives that conflict: catch real harm, and do not refuse benign prompts. Our finding is that over-refusal improves 22.4% to 12.8%, while under-refusal on adversarial attacks silently worsens 0.27 to 0.33. We present C-Guard, a constitution-grid instrument that generates the RL training data, and C-LIM, a per-cell learnability score that decides each cell's move: prune, densify, amend, expand. C-LIM flags the dead-weight data region before any training budget is spent: 187 untargeted rows had bought zero gain, and our method lifts the same region's learning impact 0.733 to 0.80. Code and the constitution are open-sourced.
