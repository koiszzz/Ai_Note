# E$^2$M: Double Bounded $\alpha$-Divergence Optimization for Tensor-based Discrete Density Estimation

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Kazu Ghalamkari, Jesper L{\o}ve Hinrich, Morten M{\o}rup　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：stat.ML　|　原文：[打开链接](https://arxiv.org/abs/2405.18220)

------

arXiv:2405.18220v4 Announce Type: replace-cross

Abstract: Tensor-based discrete density estimation requires flexible modeling and proper divergence criteria to enable effective learning; however, traditional approaches using $\alpha$-divergence face analytical challenges due to the $\alpha$-power terms in the objective function, which hinder the derivation of closed-form update rules. We present a generalization of the expectation-maximization (EM) algorithm, called the E$^2$M algorithm. It circumvents this issue by first relaxing the optimization into the minimization of a surrogate objective based on the Kullback-Leibler (KL) divergence, which is tractable via the standard EM algorithm, and subsequently applying a tensor many-body approximation in the M-step to enable simultaneous closed-form updates of all parameters. Our approach offers flexible modeling for not only a variety of low-rank structures, including the CP, Tucker, and Tensor Train formats, but also their mixtures, thus allowing us to leverage the strengths of different low-rank structures. We evaluate the effectiveness of our approach on synthetic and real datasets, highlighting its comparable convergence to gradient-based procedures, robustness to outliers, and favorable density estimation performance compared to prominent existing tensor-based methods.
