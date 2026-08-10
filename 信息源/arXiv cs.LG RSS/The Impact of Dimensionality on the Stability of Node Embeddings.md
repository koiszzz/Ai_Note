# The Impact of Dimensionality on the Stability of Node Embeddings

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Tobias Schumacher, Simon Reichelt, Markus Strohmaier　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2604.08492)

------

arXiv:2604.08492v3 Announce Type: replace

Abstract: Previous work has shown that node embedding methods can produce different representations and downstream predictions across repeated training runs, even when trained on the same data with identical hyperparameters. However, the role of embedding dimensionality in this instability remains poorly understood. In this work, we systematically analyze how embedding dimensionality affects the stability of embeddings from five widely used node embedding methods: ASNE, DGI, GraphSAGE, node2vec, and VERSE. We evaluate stability from both representational and functional perspectives across a broad range of dimensions, datasets, and repeated training runs, and relate the resulting stability patterns to predictive performance. Our results show that dimensionality can substantially affect embedding stability, although the observed effects depend strongly on the embedding method and stability notion considered. While node2vec and ASNE generally became more stable at higher dimensions, GraphSAGE and VERSE often exhibited non-monotonic behavior or decreasing stability. We further find that dimensions associated with high stability do not necessarily coincide with those yielding the strongest downstream performance. Overall, our findings demonstrate that embedding dimensionality can have a substantial impact on the stability of node embeddings and downstream predictions.
