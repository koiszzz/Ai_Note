# DARAD: Dual Adapters and Ranking-Aware Distillation for Continual Remote Sensing Image-Text Retrieval

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Xi Chen, Xu Chen, Xiangyang Jia, Wei Wang, Xu Zhang, Zhenyuan Sun　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.06059)

------

arXiv:2608.06059v1 Announce Type: new

Abstract: With the rapid growth of Earth observation technologies, remote sensing archives are rapidly expanding, making remote sensing image-text retrieval (RS-ITR) increasingly important. However, continual RS-ITR remains challenging because scale variation and distribution shifts in RS aggravate cross-modal alignment space distortion, making it difficult for existing continual learning (CL) methods to support reliable continual retrieval. To address this challenge, we propose DARAD, a dual-adapter and ranking-aware distillation framework that preserves the historical cross-modal ranking structure while learning new visual and textual concepts from evolving archives. Specifically, the visual branch introduces a spatial fusion adapter, which integrates coarse regional cues and fine-grained patch cues to accommodate RS scale variation while anchoring visual updates to the pretrained alignment space. The textual branch employs multi-expert semantic routing, which separates shared textual semantics from semantically specialized residuals to absorb newly emerging descriptions while constraining global text embedding drift. Furthermore, bidirectional ranking distillation uses a frozen teacher model and historical anchors to preserve the historical cross-modal ranking structure, thereby mitigating alignment space distortion across continual stages. Experiments under a multi-stage continual retrieval protocol show that DARAD achieves superior performance over existing CL methods, improving adaptation to newly arrived data while maintaining effectiveness on historical data.
