# SSTQ:Privacy-Preserving Vector Quantization via Subsampled Stochastic TurboQuant

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Adel Javanmard, David P. Woodruff, Vahab Mirrokni　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.05127)

------

arXiv:2608.05127v1 Announce Type: cross

Abstract: Achieving local differential privacy in distributed optimization while maintaining low communication cost remains challenging. Existing vector quantization methods, such as vqSGD, use high-dimensional geometric constructions but incur unfavorable dimension-dependent variance. In this work, we propose Subsampled Stochastic TurboQuant (SSTQ), a framework that combines overcomplete equal-norm tight frames, coordinate subsampling, and privacy-aware one-dimensional quantization. SSTQ includes two variants: a Flat Randomized Response version and a Metric-Aware Laplace version, the latter being better suited to higher codebook bit-width regimes. We show that SSTQ achieves optimal mean squared error scaling while using only $\lceil \log_2 N \rceil + b$ bits per client, where $N = \Theta(d)$ is the frame size. We also derive a surrogate privacy-aware codebook objective that reduces the codebook-dependent MSE scaling from $O(4^b)$ to $O(2^b)$. Finally, we empirically evaluate SSTQ against established baselines on federated learning tasks using CIFAR-10 and Fashion-MNIST, demonstrating favorable utility and communication efficiency.
