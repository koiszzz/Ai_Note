# On Same-Sample and Independent-Sample Stochastic Extragradient for Monotone Variational Inequalities

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：TaeHo Yoon, Nicolas Loizou　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：math.OC　|　原文：[打开链接](https://arxiv.org/abs/2608.06182)

------

arXiv:2608.06182v1 Announce Type: cross

Abstract: We study stochastic extragradient (SEG) methods for solving monotone variational inequality problems (VIPs) over a feasible set. Although extragradient is a foundational algorithm for VIPs and its deterministic convergence theory is well developed, its stochastic counterpart remains less understood. Most existing analyses focus on independent-sample SEG (I-SEG) and assume either that the domain is compact or that the variance of the stochastic operator is uniformly bounded. The behavior of same-sample SEG (S-SEG), a natural variant with materially different properties, has received far less attention. In this work, we address these gaps in the literature. We first show that S-SEG is sensitive to samplewise Lipschitz parameters: mean Lipschitzness and bounded variance alone do not ensure convergence, even on a compact set. Then, for possibly unbounded domains, we establish a high-probability restricted-gap convergence for each SEG variant under a relaxed set of assumptions, and show that certain fundamental improvements to these results are impossible in general. Finally, we show that a known asymmetric double step-size selection that guarantees almost sure last-iterate convergence for I-SEG can fail for S-SEG: there exists a stochastic monotone VIP for which S-SEG diverges almost surely even under the modified step-sizes.
