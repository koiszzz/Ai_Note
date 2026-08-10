# CogVis: Must Open-Vocabulary Change Detection Perceive the Scene Anew for Every Query?

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Zijie Wang, Chen Zhong, Wei He　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.06150)

------

arXiv:2608.06150v1 Announce Type: cross

Abstract: Earth-surface monitoring requires change detection models capable of recognizing arbitrary semantic categories. Open-Vocabulary Change Detection (OVCD) addresses this need. However, existing methods often entangle temporal perception, semantic discrimination, and region verification, causing unstable results and redundant computation. Inspired by human visual change perception, we propose CogVis, a cognitive memory-guided framework that reformulates OVCD as a perception-memory-verification paradigm. CogVis first employs a Scene Change Perceptron (SCP) to extract a reusable, category-agnostic change prior from frozen bi-temporal features, thereby decoupling temporal evidence from semantic category decisions. A Semantic Memory Calibrator (SMC) then compensates for category-dependent score shifts by dynamically estimating an image-query-specific decision threshold. Finally, an Adaptive Region Filter (ARF) filters connected candidates using learned semantic, temporal, and structural reliability. Experiments on seven benchmarks spanning semantic change detection, binary change localization, and building-damage assessment show that CogVis achieves state-of-the-art performance across all evaluated datasets. By sharing scene-level change perception, CogVis further avoids repeating category-agnostic temporal perception across queries and improves inference throughput by 28.50%.
