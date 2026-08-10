# A note on conditional PAC-efficient reasoning in large language model routing

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Hao Zeng, Bingyi Jing　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：stat.ML　|　原文：[打开链接](https://arxiv.org/abs/2512.03057)

------

arXiv:2512.03057v2 Announce Type: replace-cross

Abstract: We study distribution-free risk control for model routing, motivated by large language model reasoning. We formalize pointwise conditional efficiency under a probably approximately correct guarantee and show that it forces a nearly impossible router: at almost every input where the fast model exceeds the target loss, the algorithm must route to the expert with probability at least one minus the prescribed error level. We therefore introduce a restricted conditional formulation based on a prespecified family of conditioning sets, together with an explicit router. The proposed router achieves finite-sample conditional validity and, under separation and margin conditions, near-oracle expert usage. The main insight is that the level of conditioning determines whether distribution-free reliability can coexist with computational savings: pointwise control is too strong, whereas structured setwise control remains feasible.
