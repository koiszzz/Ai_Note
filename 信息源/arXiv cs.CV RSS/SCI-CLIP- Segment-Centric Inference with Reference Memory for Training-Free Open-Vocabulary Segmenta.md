# SCI-CLIP: Segment-Centric Inference with Reference Memory for Training-Free Open-Vocabulary Segmentation

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Mohamad Zamini, Diksha Shukla　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05627)

------

arXiv:2608.05627v1 Announce Type: new

Abstract: Training-free open-vocabulary segmentation remains limited by a missing inference abstraction. Frozen vision-language features are produced at patch level, yet dense prediction requires a unit that simultaneously governs feature interaction, spatial support, contextual recovery, and retrieval-based correction. We present SCI-CLIP, a segment-centric inference framework built around the principle that the same region abstraction should organize all stages of dense open-vocabulary prediction. SCI-CLIP first induces a region-consistent interaction graph over frozen visual tokens, then reconstructs dense features by propagating values over this graph, augmenting them with selective cross-window support only where local evidence is insufficient. The same segment abstraction is subsequently used to construct and query an offline reference memory, aligning exemplar retrieval with the units on which prediction is made. SCI-CLIP turns frozen CLIP-style features into spatially coherent, context-aware, and retrieval-compatible dense predictions without any training. SCI-CLIP consistently improves the structural quality of dense predictions, the robustness of contextual reasoning, and the alignment of exemplar-based correction, yielding stronger open-vocabulary segmentation across eight benchmarks. Project code is available at: https://github.com/mzamini92/SCICLIP.
