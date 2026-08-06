# Optimizing the Preconditioner: A Black-box Online-to-Nonconvex Conversion with Static Regret Minimization Oracles

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Haichen Hu, David Simchi-Levi　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2607.17607)

------

arXiv:2607.17607v2 Announce Type: replace

Abstract: We study whether stochastic nonconvex optimization can be reduced to ordinary static regret minimization in online convex optimization in a black-box manner. For smooth nonconvex objectives, our reduction maintains a predictable gradient tracker, while a black-box online learner selects a preconditioner that determines how this tracker is transformed into the update direction. The learner receives linear convex losses and is evaluated against a single fixed comparator over one undiscounted online game. For a $\beta$-smooth objective with range bounded by $M$ and an unbiased stochastic-gradient oracle with variance bounded by \(\sigma^2\), we establish $$\frac{1}{T}\sum_{t=1}^T

\mathbb E\!\left[\|\nabla f(x_t)\|_2^2\right]

\lesssim

\frac{\sigma\sqrt{M\beta}}{\sqrt T}

+

\frac{\sqrt{M\beta}\,

\mathscr R_T(\mathcal A,I_d)}{T}

+

\frac{M\beta}{T}.$$ Consequently, any black-box OCO algorithm with $\mathscr R_T(\mathcal A,I_d)=O(\sqrt T)$ recovers the classical $O(\frac{1}{\sqrt{T}})$ convergence rate.

We further show that the same black-box framework extends beyond the smooth setting to Lipschitz nonconvex objectives without Lipschitz continuous gradients. Importantly, this extension continues to rely only on an ordinary static-regret guarantee and requires no stronger notion of online regret. When the OCO oracle admits square-root static regret, the resulting conversion achieves the optimal $O(T^{-2/7})$ convergence rate for the corresponding Goldstein stationary point. These results resolve the open problem posed by Chen and Hazan (2024). More broadly, our framework separates optimizer design into gradient prediction and online preconditioner selection, providing a principled perspective on how adaptive optimization methods may be understood through static regret and applied in nonconvex optimization.
