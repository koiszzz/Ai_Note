# Optimal Rates for Learning with Monotone Adversaries

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Anay Mehrotra　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：stat.ML　|　原文：[打开链接](https://arxiv.org/abs/2608.06337)

------

arXiv:2608.06337v1 Announce Type: cross

Abstract: A monotone adversary observes an i.i.d. labeled sample and appends a finite number of further examples of its choice, every one of them labeled correctly by the target hypothesis. The learner sees a uniform shuffle of the combined sample and is scored on the original distribution. Every example is correctly labeled, but the insertions depend on the clean sample, so the combined sample is not exchangeable. Larsen, Pabbaraju, and Shetty, who introduced this model, showed that empirical risk minimization attains expected error $O((d/n)\log(n/d))$ for classes of VC dimension $d$, and that every known optimal learner can be pushed away from the $\Theta(d/n)$ rate, optimal for PAC learning. They asked whether the extra logarithm is an artifact of those particular algorithms or an inherent consequence of the lack of exchangeability.

We show that this additional cost is inherent beyond VC dimension one. In the worst case over classes of VC dimension $d$ and over known finite insertion budgets, the minimax expected error is $\Theta(1/n)$ at $d=1$ and $\Theta((d/n)\log(n/d))$ for $d\geq 2$. The same rates hold with Littlestone dimension $d_{\mathrm L}$ in place of $d$, so the clean online-to-batch rate $O(d_{\mathrm L}/n)$ is unattainable as well. Thus, somewhat counterintuitively, adding correctly labeled examples can make learning harder by a logarithmic factor, even for classes that admit finite mistake bounds in online learning. The dimension-one upper bound is achieved by a simple improper learner whose analysis adapts the leave-one-out argument underlying the one-inclusion graph. All of our lower bounds are elementary and come from a single construction: an explicit class and prior on which two target hypothesis, which differ a point of nonnegligible mass, produce the same sample.
