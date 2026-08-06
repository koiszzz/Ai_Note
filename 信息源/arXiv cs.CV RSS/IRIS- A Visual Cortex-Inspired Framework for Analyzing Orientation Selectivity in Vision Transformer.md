# IRIS: A Visual Cortex-Inspired Framework for Analyzing Orientation Selectivity in Vision Transformers

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Vaishnavi B Mohan, Vijayakrishna Naganoor, Yashas Annadani, Shashank Hegde　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05122)

------

arXiv:2608.05122v1 Announce Type: new

Abstract: Vision transformers (ViTs) have become the de facto standard for image encoding across many perception tasks. Despite their empirical success, it remains mechanistically unclear how they encode low-level features, given their lack of inductive biases: ViTs process information globally rather than relying on local structure. Biological visual systems, in contrast, build low-level features, such as orientation selectivity in the primary visual cortex, by combining information from small, localized regions of the visual field. These features are general-purpose representations, shared and required across multiple specialized neural pathways, unlike higher-level, task-specific semantic features. This raises the question if such biologically-grounded features arise in ViTs. In this work, we systematically study how orientation selectivity emerges in ViTs by introducing a suite of neuroscience-inspired metrics: representational similarity score (RSS), orientation recruitment score (ORS), and orientation tuning bandwidth to quantify how orientation is encoded in representational geometry and as a function of model depth. Through extensive analysis, we find that: (1) the training paradigm is the strongest determinant of orientation selectivity, with models sharing an objective, peaking at comparable relative depths regardless of scale (2) many units are orientation-selective early in training, with early-to-middle layers recruiting more such units over time, while deeper layers lose selectivity and broaden their tuning toward semantic encoding and (3) our metrics offer a mechanistic heuristic for how many layers to unfreeze for best downstream generalization. Our framework presents a way to track biologically-grounded features during ViT training, probes how desired properties are encoded in transformer representations, and builds a systematic understanding of how ViTs generalize across tasks.
