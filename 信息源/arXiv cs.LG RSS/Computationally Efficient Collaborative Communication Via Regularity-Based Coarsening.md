# Computationally Efficient Collaborative Communication Via Regularity-Based Coarsening

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Mark Bedaywi, Scott Emmons, Nika Haghtalab, Stuart Russell　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.GT　|　原文：[打开链接](https://arxiv.org/abs/2608.05327)

------

arXiv:2608.05327v1 Announce Type: cross

Abstract: Our results show that the existence of a short high-utility protocol already suffices for efficient communication. In particular, in a game with $n$ possible observations and $m$ actions: (1) For any achievable target utility $\alpha$, we give an algorithm with $\mathrm{poly}(n, m, 1/\epsilon)$ runtime that designs a protocol achieving utility at least $\alpha-\epsilon$ using only $2^{\mathcal O(CC_\alpha(G))}/\epsilon^2$ bits of communication. Here, $CC_\alpha(G)$ is the minimum number of bits used by any protocol, even a computationally inefficient one, to achieve utility $\alpha$. (2) We prove that this exponential dependence on $CC_\alpha(G)$ is tight up to a constant. That is, unless $\mathrm P=\mathrm{NP}$, no polynomial-time algorithm can in general find optimal protocols using fewer than $2^{CC_\alpha(G) -2}$ bits.

We note that our results strictly weaken the assumptions required by prior work in the multi-agent information aggregation literature, filling a gap that had remained elusive even for games with constant $CC_\alpha(G)$. In particular, prior guarantees for agreement-based information aggregation rely on structural assumptions such as informational substitutes or weak learnability. We show that these assumptions already imply $CC_\alpha(G) = O(1)$ and are therefore more restrictive conditions than required by our protocol to succeed.

On a technical level, our results involve a novel strengthening of the Frieze-Kannan weak regularity lemma and yield the following powerful polynomial-time transformation tool: for every communication game $G$, it constructs a game $\hat G$ that is a coarsening of the agents' observation spaces into constant-size partitions, such that $G$ and $\hat G$ are indistinguishable with respect to every short communication protocol. This coarsening theorem is the engine behind our algorithm and may be of independent interest.
