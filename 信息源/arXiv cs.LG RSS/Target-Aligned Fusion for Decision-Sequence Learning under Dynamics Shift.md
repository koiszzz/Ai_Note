# Target-Aligned Fusion for Decision-Sequence Learning under Dynamics Shift

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Guojian Wang, Quinson Hon, Xuyang Chen, Lin Zhao　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2511.09173)

------

arXiv:2511.09173v3 Announce Type: replace

Abstract: External trajectories can improve offline decision-sequence learning, but dynamics shift may make some source subsequences inconsistent with the target environment. We study how to fuse such trajectories with limited target data for Decision Transformer learning under dynamics shift. We propose Target-Aligned Fusion (TAF), a principled framework that derives source-data fusion from a target-domain Bellman-risk criterion. Our analysis bounds this risk by two measurable data-alignment quantities: $\Delta_m$, the state-structure mismatch of retained fragments, and $\Delta_w$, the weighted transport cost from source to target transitions. This decomposition yields a gate--then--weight rule: source fragments are first filtered by target-side state-structure alignment, and retained transitions are then reweighted by local target feasibility. We instantiate this principle as TAF-DT, which uses maximum mean discrepancy (MMD) for fragment selection, optimal transport for feasibility-aware weighting, and the resulting fused law for advantage-token relabeling and Q-regularized Transformer training. Across gravity, kinematic, and morphology shifts on D4RL-style control tasks, TAF-DT achieves the strongest aggregate performance against strong offline RL and sequence-model baselines and produces more stable stitch-junction sequence semantics. Overall, these results indicate that aligning external trajectories to target-domain structure and feasibility is a practical way to exploit source data under dynamics shift.
