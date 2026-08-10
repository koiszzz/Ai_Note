# MARS: Margin and Semantic-Aware Data Augmentation for Reward Modeling

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Payel Bhattacharjee, Osvaldo Simeone, Ravi Tandon　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2602.17658)

------

arXiv:2602.17658v4 Announce Type: replace

Abstract: Reward modeling is central to RLHF, RLAIF, and PPO-based alignment, but its reliability is often limited by scarce and heterogeneous human preference data. In this paper, we introduce MARS (Margin and Semantic-Aware Data Augmentation for Reward Modeling), an adaptive augmentation framework for controlled low-resource reward modeling. MARS allocates more augmentation to low-margin preference pairs and uses semantic-distance-based refinement to improve chosen-rejected contrast before generating synthetic preference samples. Across three preference datasets, two reward-model backbones, and downstream alignment evaluations, MARS improves average RewardBench performance and alignment win rates over uniform augmentation, WoN, and AdaBoost-style baselines. Ablations and independent-judge evaluations suggest that the gains are not solely explained by semantic refinement alone or GPT-4.1 judge coupling.
