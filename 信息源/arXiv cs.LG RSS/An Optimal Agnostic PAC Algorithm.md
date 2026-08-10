# An Optimal Agnostic PAC Algorithm

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Markus Engelund Mathiasen, Jian Qian, Nikita Zhivotovskiy　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.06363)

------

arXiv:2608.06363v1 Announce Type: new

Abstract: Let $H\subseteq\{-1,+1\}^X$ be a class of finite VC dimension $d\ge1$. Writing $L$ for the binary risk and $L^*=\min_{h\in H}L(h)$, we construct a learner achieving the statistically optimal risk bound: from an i.i.d.\ sample of size $n$, for every $0<\delta\le 1/2$, with probability at least $1-\delta$, \[

L(\widehat h)

\le L^*+ 7\cdot10^8\left(

\sqrt{\frac{L^*(d+\log(1/\delta))}{n}}

+\frac{d+\log(1/\delta)}{n}

\right). \] This settles the sample complexity of agnostic PAC learning up to universal constants at every fixed $L^*$, matching the lower bounds of Devroye, Gy\"orfi, and Lugosi [A Probabilistic Theory of Pattern Recognition, Springer, 1996].
