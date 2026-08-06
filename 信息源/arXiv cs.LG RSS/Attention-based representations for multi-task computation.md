# Attention-based representations for multi-task computation

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Daniel Hsu, Mingyue Xu　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.04243)

------

arXiv:2608.04243v1 Announce Type: new

Abstract: Multi-head attention layers produce vector representations that support multiple downstream tasks. We establish bounds on the number of heads required in two simple and concrete multi-task scenarios. In the first scenario, a vector representation is sought so that linear predictors can compute both the smallest and largest numbers in a given list. In this case, it is known two attention heads with small embedding dimension and bit precision level suffice. We prove that a single attention head requires exponentially higher embedding dimension or precision level. In the second scenario, a vector representation is sought so that a polynomial threshold function can compute the XOR of a given string of $n$ bits. This scenario is analogous to the first one for $n=2$, since XOR is readily computed by a linear function using a vector representation that encodes both the AND and the OR of the two bits. We observe that $n$-bit XOR requires the product of the number of heads and the polynomial degree to be at least $n$, and we construct multi-head attention layers that match this lower bound. These results generalize to arbitrary (symmetric) Boolean functions, where the bound is given in terms of the threshold degree.
