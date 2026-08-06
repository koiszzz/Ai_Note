# An Analysis and Implementation of Seam Carving for Content-Aware Image Resizing

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Francesco Tosoni　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.04329)

------

arXiv:2608.04329v1 Announce Type: new

Abstract: Seam carving is a classical content-aware image resizing operator that modifies the width or height of an image by repeatedly removing (or inserting) seams, i.e., 8-connected monotonic paths of pixels of locally minimal importance. Because seams bend around salient content rather than uniformly scaling or cropping it, the operator preserves vital image structures while discarding (or duplicating) low-energy regions. This article describes a C++ implementation of the operator that follows the original formulation of Avidan and Shamir (2007), including the optional forward-energy criterion subsequently introduced by Rubinstein, Shamir and Avidan (2008). The implementation supports image reduction, image enlargement via ordered seam insertion, multi-pass enlargement for large scale factors, a user-supplied weight mask for object protection and removal, along with dumping of energy maps and visualisation of seams. We detail the algorithm, its parameters and its computational complexity, discuss design choices with respect to the original descriptions, and illustrate the behaviour of the operator on natural images.
