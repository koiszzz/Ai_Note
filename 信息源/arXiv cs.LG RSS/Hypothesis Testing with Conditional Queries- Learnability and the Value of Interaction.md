# Hypothesis Testing with Conditional Queries: Learnability and the Value of Interaction

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Zonghuan Xu　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.06262)

------

arXiv:2608.06262v1 Announce Type: new

Abstract: Model evaluations may fix all tests before observing any responses or select later tests using earlier responses. We study this choice in a conditional-query model on a finite outcome space $\mathcal{X}$ with $|\mathcal{X}|=N$. We first ask which pairs of distribution classes can be reliably distinguished. We then ask how many additional queries are required to match an adaptive tester when all queried events must be fixed in advance. We show that learnability holds if and only if the two classes have positive separation in their pairwise conditional probabilities. When this separation is zero, the optimal worst-case error is exactly $1/2$ at every finite query budget. For any $T$-query adaptive policy and any $\rho \in (0,1)$, we construct a randomized non-adaptive procedure using $O(N^2(T + \log(1/\rho)))$ pair queries chosen before any response is observed. Its simulated transcript is within $\rho$ in total variation of the adaptive transcript, uniformly over all distributions in the model. We also construct a matching family with constant adaptive query complexity and $\Omega_\varepsilon(N^2)$ non-adaptive query complexity. Consequently, the worst-case fixed-error adaptivity gap is $\Theta_\varepsilon(N^2)$. Thus interaction can reduce the required number of tests by a quadratic factor, but the apparent exponential branching of an interactive evaluation does not yield an exponential query advantage.
