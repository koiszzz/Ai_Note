# Towards Trustworthy Hypergraph Neural Networks under Label Noise

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Mengyao Zhou, Zhiheng Zhou, Xiao Han, Guiying Yan　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.04377)

------

arXiv:2608.04377v1 Announce Type: new

Abstract: Hypergraph neural networks (HGNNs) have demonstrated remarkable capabilities in processing complex higher-order relationships. However, their performance is highly dependent on labeled data, making them vulnerable to label noise. Despite advances in learning with label noise (LLN) and graph learning with label noise (GLN), noisy-label learning on hypergraphs remains underexplored. In this paper, we present a systematic study of hypergraph node classification under label noise. First, we adapt representative LLN and GLN methods to hypergraphs and evaluate them under a unified benchmark, revealing the limitations of existing robust learning strategies for hypergraphs. Building on this, we propose a new hypergraph robust framework, HyperTrust, which first estimates hyperedge trustworthiness through a pretraining-based, entropy-aware strategy, and then incorporates the HyperedgeBoost module to enhance reliable supervision by connecting unlabeled nodes to trustworthy hyperedges, as well as the HyperedgePrune module to suppress noisy propagation by removing untrustworthy node-hyperedge incidences. Finally, two modules work collaboratively to adjust the hypergraph structure and generate final predictions. Extensive experiments and theoretical analysis demonstrate the effectiveness and robustness of HyperTrust on multiple hypergraph datasets under various noisy settings. Our work provides a unified benchmark and an effective solution for hypergraph learning with label noise and lays a foundation for future research in this direction.
