# Threshold-Based Early Stopping of Accumulations in Neural Networks with Binary Activation

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Quentin Luquet de Saint-Germain, Massil Ait Abdeslam, Jean Pierre David　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.06177)

------

arXiv:2608.06177v1 Announce Type: new

Abstract: Binary neural networks are very attractive for constrained deployment, enabling small footprint and low-power inference. For binary activations, the dot products become sign-controlled additions or subtractions, but the number of operations is unchanged. Indeed, every neuron or output channel still accumulates all of its input, even though only the sign will be retained, which is often wasteful. As the accumulation progresses, the running partial sum frequently drifts so far from zero that its final sign becomes highly predictable long before the last term is reached; every contribution evaluated after that point changes the value of the sum but not the final output activation. This paper turns this observation into a post-training early-stopping mechanism. We characterize the behavior of the running accumulations on the training dataset and use this information to predict the final sign as soon as possible. No model parameter is retrained. We count the number of operations under an idealized ordering of weights. On VGG11 applied to the CIFAR-10 dataset, the method removes $86.6\%$ of the accumulation terms of the deepest convolution for a $0.37$-point accuracy drop, and $25\%$ of the full-network arithmetic when used on the three deepest convolutions simultaneously, for a $1.36$-point drop.
