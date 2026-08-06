# Algorithms with Polynomially-Improved Approximation Factors for the $2 \rightarrow q$ Norm, and Applications

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Samuel B. Hopkins, Stefan Tiegel　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.DS　|　原文：[打开链接](https://arxiv.org/abs/2605.25303)

------

arXiv:2605.25303v3 Announce Type: replace-cross

Abstract: The $2 \rightarrow q$ norm of a matrix $X \in \mathbb{R}^{n \times d}$ is defined as $\lVert X \rVert_{2 \rightarrow q} = \sup_{\lVert v \rVert_2 = 1} \lVert Xv \rVert_q$. We give polynomial-time multiplicative approximation algorithms for this norm when $q > 2$ (i.e. in the hypercontractive setting). This problem either directly captures or is closely related to long-standing open problems in combinatorial optimization and hardness of approximation (e.g. Small Set Expansion), quantum information (e.g. Best Separable State), and algorithmic statistics.

Very little is known about what approximation factors we can achieve for this problem in polynomial time, even though such approximations have significant downstream consequences. Barak, Brand\~{a}o, Harrow, Kelner, Steurer, and Zhou showed that no polynomial-time algorithm can achieve an approximation factor better than $2^{\sqrt{\log n}}$, assuming the Exponential Time Hypothesis (FOCS'12). On the other hand, a simple spectral algorithm gives a $d^{1/4}$-approximation as a baseline. For the important special case of $q = 4$, prior work of Guth, Maldague, and Urschel (SIAM Matrix Analysis and Applications'25) can be combined with known sparsification techniques to give a $d^{1/6}$-approximation. We improve over these results by polynomial factors, giving a $d^{1/8}$-approximation.

Moreover, we construct sum-of-squares certificates for the $2 \rightarrow q$ norm. This directly implies improved algorithms for robust mean and covariance estimation, robust regression, and clustering, when the data only satisfies a bound on its $q$-th moment.
