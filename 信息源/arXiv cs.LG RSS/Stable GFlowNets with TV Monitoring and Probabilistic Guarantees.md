# Stable GFlowNets with TV Monitoring and Probabilistic Guarantees

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Zengxiang Lei, Ananth Shreekumar, Jonathan Rosenthal, Ruoyu Song, Alvaro A. Cardenas, Daniel J. Fremont, Dongyan Xu, Satish Ukkusuri, Z. Berkay Celik　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2605.01729)

------

arXiv:2605.01729v2 Announce Type: replace

Abstract: Generative Flow Networks (GFlowNets) learn to sample states proportional to an unnormalized reward. Despite their theoretical promise, practical training is often unstable, exhibiting severe loss spikes and mode collapse. To tackle this, we first assess the sensitivity of GFlowNet objectives, demonstrating that a small Total Variation (TV) distance between the learned and target distributions does not preclude unbounded training loss. Motivated by this mismatch, we establish converse guarantees by deriving loss-to-TV bounds that certify global fidelity from bounded trajectory balance losses. Lastly, we propose Stable GFlowNets, an algorithm that leverages our theoretical results to stabilize training, and empirically demonstrate improved training behavior and superior distributional fidelity.
