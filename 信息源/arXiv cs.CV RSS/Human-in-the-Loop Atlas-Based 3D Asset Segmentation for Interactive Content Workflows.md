# Human-in-the-Loop Atlas-Based 3D Asset Segmentation for Interactive Content Workflows

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Paul Julius K\"uhn, Saptarshi Neil Sinha, Jakob Hansen, Robin Horst　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2606.17824)

------

arXiv:2606.17824v2 Announce Type: replace

Abstract: Segmenting 3D assets into meaningful regions remains challenging, especially when segmentation criteria are application-dependent and require user control. We present a human-in-the-loop pipeline for generating a segmented 2D parameterized atlas from a 3D model for interactive media, game, and XR content workflows. Our method first selects a compact set of rendered views using a greedy set cover strategy over sampled surface points, and then supports interactive segmentation of these views with SAM~2 and Label Studio. The resulting masks are back-projected onto the model's UV parameterization to produce a unified segmented atlas that supports downstream production tasks such as segment-wise material assignment, style transfer, and semantic labeling. We assess the pipeline through a demonstration-based technical evaluation on eight cultural heritage objects. The results show that the approach can generate usable segmented atlases across diverse geometries while revealing recurring sources of manual correction, particularly fine structures, cavities, and weak appearance boundaries. The code is available at https://github.com/saptarshineil/ai_assisted_atlas_segmentation
