# Support Operation Factorization: Compositional Readout of Frozen Vision Encoders under Controlled Interventions

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Zhongyao Wang, Wanli Ouyang, Taoyong Cui, Pheng Ann Heng　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.06174)

------

arXiv:2608.06174v1 Announce Type: new

Abstract: Compositional analysis of frozen vision encoders should determine both what changed and where it changed. Standard factor probes score these axes separately, however, and can reward multiple operations that reuse the same predicted slot. We call this failure operation laundering. We introduce an injectively aligned leave-one-cell-out protocol over support x operation grids and SO-OPF, a readout that factors cell energy into support salience and a competitive operation posterior. This formulation separates two questions that aggregate scores conflate: whether the carrier composes held-out bindings when the grid is known, and whether that grid can be recovered from flat cell labels. With frozen DINOv3 features, known factorial assignment reaches 0.874 injective accuracy on Shapes3D-Extended and 0.799 on globally image-disjoint COCO; learning the assignment from flat labels reaches 0.769 and 0.762, respectively. Under matched-axis-aware supervision on Shapes3D, the factored carrier improves learned-assignment accuracy from 0.653 to 0.841 over a dense carrier and eliminates its laundering gap. SigLIP2 replicates the COCO separation. A rebuilt MuJoCo substrate exposes a boundary: learned-assignment accuracy is 0.569 with DINOv3 and 0.484 with SigLIP2, with substantial slot collapse. Thus factored readout and injective evaluation recover held-out bindings on two substrates while exposing, rather than hiding, a renderer-specific failure boundary; they do not establish universal recovery from flat labels.
