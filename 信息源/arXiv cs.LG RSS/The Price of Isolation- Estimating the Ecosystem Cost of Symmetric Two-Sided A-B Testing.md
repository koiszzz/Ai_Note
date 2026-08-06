# The Price of Isolation: Estimating the Ecosystem Cost of Symmetric Two-Sided A/B Testing

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Yuanyuan Shen, Yiren Yan, Wenjie Li, Chunhui Zhu　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.IR　|　原文：[打开链接](https://arxiv.org/abs/2608.04432)

------

arXiv:2608.04432v1 Announce Type: cross

Abstract: On two-sided content platforms, symmetric two-sided isolation (assigning matched fractions of creators and viewers to isolated treatment and control submarkets) is widely used for creator-side and cold-start experiments because it removes cross-arm marketplace interference. Isolation, however, thins each viewer's candidate catalog, and intuition suggests the resulting engagement cost should fade as the platform grows: a small fraction of a vast catalog is still vast. We show that, in an order-statistics model of engagement, whether this intuition holds depends on the upper tail of match quality. Extreme-value theory yields tail-class loss laws with a sharp dichotomy: for light or bounded tails the loss vanishes as the candidate pool grows, whereas under heavy tails it converges to a size-independent constant, so expanding the candidate pool, even by orders of magnitude, does not asymptotically eliminate the cost. Evidence from two production experiments on a platform with millions of active creators is consistent with this picture: a pure A/A traffic sweep reveals a measurable, depth-graded engagement cost; a one-sided catalog ablation independently shows that per-viewer thinning contributes to the loss; and a tail index calibrated on the small exploration pool predicts an effect consistent with the one observed in the far larger full-catalog ablation. Isolation thus carries a price that experimenters should budget for, like any other cost. We give practitioners a preflight procedure that estimates it before launch, sizes traffic accordingly, and recommends a fallback design when the predicted cost exceeds a chosen tolerance.
