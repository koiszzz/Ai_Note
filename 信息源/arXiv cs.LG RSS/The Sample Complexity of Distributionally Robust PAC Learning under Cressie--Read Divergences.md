# The Sample Complexity of Distributionally Robust PAC Learning under Cressie--Read Divergences

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Elad Aigner-Horev, Daniel Rosenberg, Roi Weiss　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.04686)

------

arXiv:2608.04686v1 Announce Type: new

Abstract: We study distributionally robust PAC learning for the $0$--$1$-loss, where adversarial perturbations of the data distribution are constrained by a Cressie--Read divergence of order $k>1$ and radius $\rho\geq 0$. For hypothesis classes with VC dimension $d$, we establish realizable and agnostic sample-complexity bounds tight up to constant and logarithmic factors, respectively; ordinary empirical risk minimization attains both rates up to logarithmic factors. For target accuracy $\varepsilon\in(0,1)$ and confidence $\delta\in(0,1)$, their respective orders are \[ \max\!\left\{\frac{1}{\varepsilon}, \frac{\rho^{\frac 1{k-1}}}{\varepsilon^{k_\star}} \right\}\cdot(d+\log \delta^{-1}) \qquad\text{and}\qquad \max\!\left\{\frac{1}{\varepsilon^2}, \frac{\rho^{\frac1{k-1}}}{\varepsilon^{k_\star\vee 2}} \right\}\cdot(d+\log \delta^{-1}), \] where $k_\star={k}/{(k-1)}$. For every fixed $\rho>0$, robustness changes the realizable $\varepsilon$-dependence from $\varepsilon^{-1}$ to $\varepsilon^{-k_\star}$ as $\varepsilon\downarrow0$. In the agnostic case, for $1<k<2$, robustness changes the $\varepsilon$-dependence from $\varepsilon^{-2}$ to $\varepsilon^{-k_\star}$, whereas for $k\geq2$ the exponent remains the classical $2$, with nontrivial $\rho$-dependence.

Building on the known scalar reduction of robust $0$--$1$ risk to ordinary classification error, our analysis reveals a scale-sensitive interaction between the statistical estimation of classification error and its amplification by robustness, sharply explaining the transition in the agnostic rate. We extend the previously studied $\chi^2$-divergence case to every Cressie--Read order $k>1$, close its upper--lower gaps, and recover standard PAC learning rates as $\rho\to0$, unlike previous bounds that fail to interpolate correctly in this limit.
