# SCD4VPR: Multi-modal Scene Change Detection for Long-term Visual Place Recognition Database Update

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Diwei Sheng, Vijayraj Gohil, Satyam Gaba, Zihan Liu, Giles Hamilton-Fletcher, John-Ross Rizzo, Yongqing Liang, Chen Feng　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2604.11402)

------

arXiv:2604.11402v2 Announce Type: replace

Abstract: Long-term autonomy in mobile robotics requires maps that remain accurate as environments change over time. Visual Place Recognition (VPR), a core localization capability, degrades sharply as the temporal gap between query and database images grows, particularly across seasonal transitions. Scene Change Detection (SCD) offers a principled mechanism for database maintenance, but existing methods rely on binary, uni-modal visual features that cannot distinguish structural changes from viewpoint-induced differences - a distinction essential for correct update decisions. We propose SCD4VPR, a scene change detection that jointly reasons about what has changed and distinguishes genuine change from viewpoint-induced difference in a unified vision-language framework. SCD4VPR fuses VLM-generated semantic descriptions with visual features via cross-modal attention and refines predictions with geometric-semantic matching, producing multi-class change masks that separately identify object changes, appearance changes, and viewpoint-induced changes. We introduce NYC-CD, the first real-world street-view SCD benchmark with pixel-level multi-class annotations across 8,122 image pairs. Experiments across four SCD benchmarks show that SCD4VPR consistently improves three architecturally distinct backbones. In a controlled VPR database maintenance experiment on NYU-VPR spanning summer through late winter, we confirm that retrieval performance deteriorates substantially when the database is left unchanged, and show that SCD4VPR-guided updates recover most of this loss (+30.1 R@1 at the largest time gap) while keeping the database far more compact than naive append.
