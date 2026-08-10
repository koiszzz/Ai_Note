# Evidential Rule Learning for Interpretable Classification with Abstention

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Javier Fumanal-Idocin, Javier Andreu-Perez　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.05859)

------

arXiv:2608.05859v1 Announce Type: new

Abstract: Interpretable classification often requires more than accurate predictions for real-life deployment: models should be transparent about the evidence behind their decisions and abstain when they cannot decide reliably. We introduce Fast Evidential Rule Learning (FERL), a method that learns interpretable, accurate fuzzy rule models whose outputs are evidential. Unlike post-hoc calibration, FERL's belief, plausibility, and abstention capabilities arise directly from the fuzzy memberships in a single deterministic pass, with no auxiliary head, held-out set, or repeated inference. Our theoretical analysis further shows that FERL is Lipschitz stable, which means that its evidential outputs vary smoothly with the input. Against state-of-the-art rule learners, FERL is statistically significantly more accurate across a 30 tabular-dataset benchmark ($+2.6\%$ average accuracy over the second best). Its native set predictions attain the best utility-discounted accuracy among credal classifiers ($u_{65}/u_{80}=0.80/0.83$ vs.\ $0.79/0.80$ for the naive credal classifier), at higher set coverage ($0.92$ vs.\ $\le0.82$). FERL also matches dedicated out-of-distribution detectors on tabular near-OOD detection ($77.7$ vs.\ $77.4$ AUROC for the strongest baseline). Under detector-class-disjoint concept-bottleneck evaluation, its it is within $2.3$ AUROC points of the strongest dedicated detector on both CUB and AwA2, while attaining the best AwA2 AUPR-Out ($68.3$) and novel-class rejection ($57.2$), while being able to name which attributes are anomalous.
