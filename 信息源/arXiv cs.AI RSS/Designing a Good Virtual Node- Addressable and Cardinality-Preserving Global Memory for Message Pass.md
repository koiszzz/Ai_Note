# Designing a Good Virtual Node: Addressable and Cardinality-Preserving Global Memory for Message Passing Architectures

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：F\'elix Marcoccia　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.02709)

------

arXiv:2608.02709v1 Announce Type: cross

Abstract: Virtual nodes give message-passing neural networks a simple global communication route, but the standard node--VN--node pipeline compresses the graph into one homogeneous state and broadcasts it identically to every node. Building on the Two-Radius analysis of Mishayev et al., we ask how auxiliary virtual memory can relieve this finite-capacity bottleneck without self-attention. We identify two requirements. First, the global memory should be factorized into independently writable and readable states: this can be achieved using addressable cross-attention slots. Second, addressability alone does not preserve multiplicity, because softmax attention is invariant to uniform replication. Inserting each slot query as a private key/value anchor recovers the discarded normalization mass and yields, on bounded color domains, an injective multiset representation able to implement a 1-WL refinement. Experiments on multiplicity-aware Two-Radius, motif counting, and constrained link-set prediction support this addressable and cardinality-preserving virtual memory at (O(nMd)) arithmetic cost.
