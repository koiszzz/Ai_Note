# Integrating Implicit and Explicit Relational Biases through Graph-Based Multiple Instance Learning: A Case Study in Skin Lesion Diagnosis

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Rafa{\l} Buler (Gda\'nsk University of Technology), Jakub Buler (Gda\'nsk University of Technology), Maciej Bobowicz (Medical University of Gda\'nsk), Micha{\l} Grochowski (Gda\'nsk University of Technology)　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.06037)

------

arXiv:2608.06037v1 Announce Type: cross

Abstract: Relational inductive biases are essential for capturing structural dependencies among data. This study investigates a dual-level relational framework for image classification, bridging the gap between implicit representation learning and explicit structural modelling. We begin by establishing a baseline using an EfficientNetB3 architecture. To move beyond standard convolutional biases, we adopt a patch-based strategy, employing a convolutional masked autoencoder to learn implicit inter-patch relationships through self-supervised reconstruction. We then extend this approach by incorporating explicit relational modelling, organizing the learned embeddings into various graph topologies, including grid-based, random, and k-nearest neighbour structures. Experimental results on the ISIC-2018 and ISIC-2019 skin lesion diagnosis benchmarks show that combining implicit inter-patch modelling with explicit graph-based message passing yields the best performance. On the ISIC-2018 test set, the baseline model achieves a balanced accuracy of 76.17%, which improves to 77.12% with implicit patch-based relational modelling. The fully integrated grid-structured Graph Attention Network further increases performance to 79.27%. Similarly, on ISIC-2019, the implicit approach reaches 59.84% balanced accuracy, while the combination of implicit and explicit modelling yields 60.67%.
