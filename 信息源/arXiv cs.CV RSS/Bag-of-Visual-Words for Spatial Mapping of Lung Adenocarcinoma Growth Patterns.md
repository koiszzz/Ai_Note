# Bag-of-Visual-Words for Spatial Mapping of Lung Adenocarcinoma Growth Patterns

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Darya Ardan, Valentin Oreiller, Henning M\"uller　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05074)

------

arXiv:2608.05074v1 Announce Type: new

Abstract: Spatial mapping of lung adenocarcinoma (LUAD) growth patterns across whole slide images (WSIs) requires resolving architectural context at the region level, yet existing methods operate at the individual tile level and produce generic morphological clusters rather than clinically defined pattern maps. We propose a weakly supervised Bag-of-Visual-Words (BoVW) pipeline that learns a visual vocabulary from frozen foundation model embeddings extracted from a small set of annotated regions of interest (ROIs). Pattern prototypes are constructed as mean BoVW histograms of same-label ROIs and used for nearest-prototype classification of sliding-window regions under Jensen--Shannon divergence. The resulting predictions are projected onto the WSI tile grid to produce interpretable spatial pattern maps. We evaluate the method on 87 CPTAC-LUAD patients using three foundation model encoders and multiple vocabulary sizes on two clinically motivated tasks. For tumour/healthy classification, the best configuration achieves a balanced accuracy of $0.974$ with H-Optimus-1, approaching the $0.987$ obtained by a supervised SVM trained on mean-pooled WSI embeddings. For binary histologic grade classification, the BoVW pipeline achieves higher balanced accuracy than the supervised baseline for all encoders, suggesting that ROI-level pattern decomposition preserves grade-relevant heterogeneity that is attenuated by global mean pooling.
