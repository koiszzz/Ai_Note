# A Unified Framework for Trajectory Prediction with Explicit Planning and Reaction Decomposition

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Jiaheng Chen, Jiaxing Li, Tinghe Zhang, Chaopeng Guo　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.05673)

------

arXiv:2608.05673v1 Announce Type: new

Abstract: Trajectory prediction has shifted toward structured formulations with explicit social modeling. However, existing methods inadequately distinguish the functional roles of social influence in trajectory planning. Observing that agents typically form motion plans by anticipating others' future behaviors before making local reactive adjustments, we identify social interactions as playing staged roles, namely planning precedes reaction. We propose INTraJ, a unified framework that decomposes social influence into two stages: a planning stage constructs reference trajectories using future social information, and a reaction stage recovers local adjustments from the residual between full-context prediction and the reference. INTraJ supports both multi-target and single-target paradigms. Extensive experiments on four standard benchmarks, including Argoverse 2, Argoverse 2-ped, ETH/UCY, and SDD, demonstrate consistent improvements, particularly in FDE and long-horizon consistency, with state-of-the-art performance achieved in several settings. INTraJ reframes trajectory prediction as a planning-driven two-stage process, validating that staged social modeling is critical for stable predictions. The code is publicly available at https://github.com/11isnotavailable/INTraJ.
