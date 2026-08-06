# On MUON optimization: From non-convergence to an error analysis with Polar Express and the Newton-Schulz polynomial from implementations

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Thang Do, Steffen Dereich, Arnulf Jentzen　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：math.OC　|　原文：[打开链接](https://arxiv.org/abs/2608.04607)

------

arXiv:2608.04607v1 Announce Type: cross

Abstract: Stochastic gradient descent (SGD) optimization methods are the standard instruments for the training of deep neural networks (DNNs). In many relevant artificial intelligence (AI) systems - such as popular large language models (LLMs)-not the standard SGD scheme is used as the optimization method but instead suitable accelerated variants of SGD are employed. One of the most popular methods of such accelerated SGD variants is the momentum orthogonalized by Newton-Schulz (MUON) optimizer proposed by Jordan et al. in 2024. The MUON optimizer exploits the special matrix structure of the weight parameters in the training of the DNNs and, in its original form, employs five Newton-Schultz (NS) matrix steps in each MUON iteration.

In this work we propose and study a generalized variant of the MUON optimizer involving an arbitrary number of generalized NS steps with polynomials of possibly arbitrary high degree. The considered optimizer covers MUON with the original NS polynomial as well as MUON combined with the recently proposed Polar Express method as special cases. For a simple class of stochastic optimization problems (SOPs) we show for almost every mini-batch size that MUON fails to converge to the solution of the SOP as the number of gradient steps converges to infinity. We also establish an error analysis for MUON with the generalized NS steps that provides convergence rates in terms of the number of gradient steps and in terms of the size of the mini-batch. We illustrate our general error analysis for MUON in the case of several concrete examples including quadratic stochastic optimization problems (SOPs) as well as $\ell_2$ regularized logistic regression for binary classification.
