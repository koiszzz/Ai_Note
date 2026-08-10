# Shape-Aware Oriented Bounding Box (OBB) to Horizontal Bounding Box (HBB) Conversion

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Badha Rathna Sabhapathy, Gotam Dahiya, Vishesh Vatsal　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05858)

------

arXiv:2608.05858v1 Announce Type: new

Abstract: Accurate object detection in aerial and satellite imagery is dependent upon the bounding box representation. This is especially true for spatially oriented objects such as ships or aircrafts. Oriented Bounding Boxes (OBB) have a tighter fit and more robust non-max suppression compared to Horizontal Bounding Boxes (HBB), any current post-processing conversion from OBB to HBB either introduces excess empty and background space or removes data from the detection. This paper introduces a novel approach for a shape-aware OBB-to-HBB conversion for ship detection in remote sensing imagery. It leverages hull shape, hull fullness, and the bounding box orientation to produce a tighter axis-aligned HBB representation. The proposed method is benchmarked against three baselines methods for OBBto-HBB conversion, Outer HBB which uses minimum and maximum, Area Equivalent HBB and GBB Marginalized HBB.
