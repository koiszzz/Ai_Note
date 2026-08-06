# MemFly: On-the-Fly Memory Optimization via Information Bottleneck

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Zhenyuan Zhang, Xianzhang Jia, Zhiqin Yang, Zhenbo Song, Wei Xue, Sirui Han, Yike Guo　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2602.07885)

------

arXiv:2602.07885v2 Announce Type: replace

Abstract: Long-term memory enables large language model agents to tackle complex tasks through historical interactions. However, existing frameworks encounter a fundamental dilemma between compressing redundant information efficiently and maintaining precise retrieval for downstream tasks. To bridge this gap, we propose MemFly, a framework grounded in information bottleneck principles that facilitates on-the-fly memory evolution for LLMs. Our approach minimizes compression entropy while maximizing relevance entropy via a gradient-free optimizer, constructing a stratified memory structure for efficient storage. To fully leverage MemFly, we develop a hybrid retrieval mechanism that seamlessly integrates semantic, symbolic, and topological pathways, incorporating iterative refinement to handle complex multi-hop queries. Comprehensive experiments demonstrate that MemFly substantially outperforms state-of-the-art baselines in memory coherence, response fidelity, and accuracy.
