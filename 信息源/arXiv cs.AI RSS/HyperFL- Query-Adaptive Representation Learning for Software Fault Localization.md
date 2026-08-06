# HyperFL: Query-Adaptive Representation Learning for Software Fault Localization

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Shuai Shao, Yiming Zeng, Yu Zhao, Tingting Yu　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.SE　|　原文：[打开链接](https://arxiv.org/abs/2608.02967)

------

arXiv:2608.02967v1 Announce Type: cross

Abstract: Software fault localization identifies the code locations responsible for reported issues and is a fundamental step toward automated debugging and program repair. Recent retrieval-based approaches formulate fault localization as a dense retrieval task by learning a shared embedding space between issue reports and source code. However, these methods encode all issue reports using a fixed query representation, despite the substantial diversity of real-world issue reports in length, structure, and debugging information. To address this limitation, we propose HyperFL, a query-adaptive representation learning framework for software fault localization. HyperFL employs a lightweight hypernetwork to generate query-specific LoRA parameters for the query encoder, enabling dynamic query adaptation while keeping the code encoder fixed and reusable. Experiments on a real-world issue localization benchmark demonstrate that HyperFL consistently improves retrieval performance across multiple embedding backbones, achieving up to 13.3% relative improvement in function-level MRR@10 and 16.7% relative improvement in Hit@1 over the state-of-the-art method SweRank. Further analysis shows that HyperFL learns distinct adaptation patterns for different issue characteristics, highlighting the effectiveness of query-adaptive representations for software issue localization.
