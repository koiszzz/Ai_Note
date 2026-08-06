# Trajectory-Guided Forget-Recover Network for Continual LLM Unlearning

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Zezheng Wu, Xinghe Cheng, Qinggang Zhang, Haoran Luo, Jiapu Wang, Qing Yang, Jingwei Zhang　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.03123)

------

arXiv:2608.03123v1 Announce Type: cross

Abstract: Machine unlearning aims to eliminate the influence of sensitive data on a model. In the real world, unlearning requests arrive continually, which gives rise to two challenges. First, an unlearning intervention may redistribute target-related computation across remaining pathways, allowing previously forgotten knowledge to re-emerge. Second, repeated unlearning interventions may progressively reduce the model capacity needed to preserve retained utility. To address these challenges, we propose the Trajectory-guided Forget-Recover Network (TFR-Net). TFR-Net tracks channel-level risk across requests. It separates persistent target-related channels from transient hotspots and suppresses only the persistent ones. TFR-Net also recovers model capacity by reactivating dormant channels. These channels make strong contributions to retained utility and show low current and historical forget risk. The recovery is accepted only when retained-utility degradation remains within a predefined tolerance. Experiments on four datasets show that TFR-Net consistently achieves a more favorable trade-off between unlearning effectiveness and retained utility than representative baselines.
