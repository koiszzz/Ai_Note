# DocPO: Advancing Document Policy Optimization via Tailored Step-Aware Rewards

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Yunhao Wang, Binghong Wu, Zhenyu Huang, Jiacheng Shi, Shuo Huang, Tinghao Yu, Feng Zhang　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.00536)

------

arXiv:2608.00536v2 Announce Type: replace

Abstract: Reinforcement learning (RL) for document parsing often relies on reference-based rewards rooted in edit distance (e.g., tree edit distance), yet it remains hard to optimize in the high-accuracy regime because such rewards become weakly discriminative: near-correct outputs receive very similar scores, providing limited learning signal for hard cases. We propose Step-Aware Annealing (SAA), a plug-and-play reward sharpening mechanism that progressively increases reward curvature during training, amplifying subtle quality differences among high-scoring samples while preserving stability in early learning. Built on SAA, we introduce DocPO, a document policy optimization framework with element-specific, reference-based rewards anchored by edit-distance signals: normalized string edit distance (NED) for text, tree edit distance similarity (TEDS) for tables, and a hybrid Rubric+edit reward for formulas. Experiments on OmniDocBench and DocElemHard show that SAA consistently improves GRPO-style RL across document elements over non-annealed rewards, without requiring additional human supervision for reward construction.
