# Learning and Clustering on Temporal Graphs: Principles, Primitives, and Pooling

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Nelson Aloysio Reis de Almeida Passos, Emanuele Carlini, Salvatore Trani　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.03696)

------

arXiv:2608.03696v1 Announce Type: new

Abstract: This work focuses on the problem of learning on temporal graphs, with particular emphasis on the task of clustering: obtaining coarse-grained representations by aggregating information from nodes, edges, and temporal dynamics - a task related to pooling in machine learning on graphs, or community detection in network science. Although graph neural networks reach state-of-the-art performance across many downstream graph tasks, their advantage over established descriptive and inferential clustering algorithms is far less settled, especially under demands of efficiency and recovery accuracy. We frame this tension through three linked perspectives: principles, connecting graph learning and community detection through shared spectral foundations and detectability thresholds in stochastic block model regimes; primitives, making spectral clustering and multislice modularity optimization tractable through GPU-accelerated temporal backends; and pooling, viewing principled community detection as a theory-grounded coarse-graining operator for temporal graphs. Our results indicate that algorithmic methods remain the appropriate tool where attributes are absent or weak - scalability rather than accuracy being the binding obstacle - while neural models are most compelling when structural, temporal, and attribute signals align. By making temporal clustering scalable, GPU-accelerated primitives suggest a route toward theory-grounded pooling, while raising a central question: when does community-based coarse-graining preserve the dynamics needed for downstream learning tasks?
