# SemiSAM-O1: Pushing the Boundary of Annotation-Efficient Medical Image Segmentation with Generalist Knowledge Fusion

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Yichi Zhang, Le Xue, Bichun Xu, Judong Luo, Zhigang Wu, Yu Fu, Zixin Hu, Yuan Cheng, Yuan Qi　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2604.24109)

------

arXiv:2604.24109v2 Announce Type: replace

Abstract: Semi-supervised learning (SSL) has become a promising solution to alleviate the annotation burden of deep learning-based medical image segmentation models. While recent advances in foundation model-driven SSL have pushed the boundary to extremely limited annotation scenarios, they fail to maintain robust competitive performance in complex imaging modalities. In this paper, we propose SemiSAM-O1, an annotation-efficient framework using only one annotated template case for segmentation. SemiSAM-O1 extends the specialist-generalist collaborative learning framework to the extreme one-label setting by fully exploiting the foundation model's feature representation capability beyond its prompting interface. SemiSAM-O1 operates in two stages. In the first stage, the foundation model's encoder extracts dense features from all volumes, and class prototypes derived from the single annotated template are propagated to the unlabeled pool via feature similarity to produce coarse initial pseudo-labels. In the second stage, an iterative training-and-refinement loop progressively improves both the segmentation model and the pseudo-labels over multiple rounds, where each round trains the model from scratch on current pseudo-labels and generates updated predictions with voxel-wise uncertainty estimates. An uncertainty-guided refinement step further leverages the foundation model's global feature space to correct high-uncertainty regions by aggregating labels from their most similar confident neighbors, establishing a virtuous cycle of mutual improvement. Extensive experiments on a wide range of segmentation tasks across different modalities and anatomical targets demonstrate that SemiSAM-O1 significantly narrows the performance gap between one-label semi-supervised learning and full supervision, while significantly reducing the computational overhead of online foundation model inference.
