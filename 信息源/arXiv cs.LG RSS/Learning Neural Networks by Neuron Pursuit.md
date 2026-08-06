# Learning Neural Networks by Neuron Pursuit

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Akshay Kumar, Jarvis Haupt　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2509.12154)

------

arXiv:2509.12154v2 Announce Type: replace

Abstract: The first part of this paper studies the evolution of gradient flow for homogeneous neural networks near a class of saddle points exhibiting a sparsity structure. The choice of these saddle points is motivated from previous works on homogeneous networks, which identified the first saddle point encountered by gradient flow after escaping the origin. It is shown here that, when initialized sufficiently close to such saddle points, gradient flow remains near the saddle point for a sufficiently long time, during which the set of weights with small norm remain small but converge in direction. Furthermore, important empirical observations are made on the behavior of gradient descent after escaping these saddle points. The second part of the paper, motivated by these results, introduces a greedy algorithm to train deep neural networks called Neuron Pursuit (NP). It is an iterative procedure which alternates between expanding the network by adding neuron(s) with carefully chosen weights, and minimizing the training loss using this augmented network. The efficacy of the proposed algorithm is validated using numerical experiments.
