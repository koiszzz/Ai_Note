# LongCat Sparse Attention: Taming the Lightning via Streaming-aware Hierarchical Cross-Layer Indexing

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Wen Zan, Jiaqi Zhang, Jianchao Tan, Hong Liu, Cunguang Wang, Xiang Li, Duyue Ma, Guanyu Wu, Yifan Lu, Fengcun Li, Yerui Sun, Peng Pei, Yuchen Xie, Xunliang Cai　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.01662)

------

arXiv:2608.01662v2 Announce Type: replace-cross

Abstract: DeepSeek Sparse Attention (DSA) enables efficient long-context modeling through its Lightning Indexer. However, practical deployment remains constrained by the indexer's expensive $O(L^2)$ scoring overhead and the hardware-inefficient, discontinuous memory-access patterns induced by its outputs. To address these system-level bottlenecks, we introduce LongCat Sparse Attention (LSA), a hardware-algorithm co-designed framework comprising three complementary and orthogonal strategies: (1) Streaming-Aware Indexing, which selectively converts scattered KV entries into hardware-aligned contiguous layouts to enable coalesced HBM access; (2) Cross-Layer Indexing, which amortizes indexing overhead by reusing the results produced by a single layer across consecutive layers, supported by cross-layer distillation; and (3) Hierarchical Indexing, which adopts a coarse-to-fine scoring scheme to progressively narrow the candidate set for each query, thereby substantially reducing indexing computation. Extensive scaling experiments, ranging from 69B-A3B to 560B-A27B models, demonstrate that LSA consistently achieves performance on par with full attention across both general-purpose and long-context benchmarks. Moreover, LSA supports native training with context lengths of up to one million tokens and underpins the development of LongCat-2.0 (1.6T-A48B). To facilitate further research, we also introduce and open-source LongCat-Flash-Lite-Sparse (69B-A3B), which integrates LSA into LongCat-Flash-Lite and incorporates an updated long-context training corpus.
