# YouTube-Occ: Learning Indoor 3D Semantic Occupancy Prediction from YouTube Videos

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Haoming Chen, Lichen Yuan, TianFang Sun, Jingyu Gong, Xin Tan, Zhizhong Zhang, Yanyun Qu, Yuan Xie　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2506.18266)

------

arXiv:2506.18266v2 Announce Type: replace

Abstract: 3D semantic occupancy prediction is crucial for fine-grained scene understanding, yet its advancement in privacy-sensitive indoor environments is fundamentally hindered by the scarcity of large-scale annotated 3D data. To overcome this limitation, we explore learning indoor 3D semantic occupancy prediction from abundant, uncalibrated in-the-wild internet videos while simultaneously bypassing the extensive manual annotation. Specifically, we introduce \textit{YouTube-Occ}, including an automated data pipeline that leverages 2D and 3D foundation models to process raw web videos, estimating camera geometry, reconstructing scene point clouds, and enriching them with dense semantic pseudo-labels. However, these plausible pseudo-labels fail to yield performance gains under naive supervision. To address this impasse, we further propose a pre-training framework driven by feature distillation with a dual-alignment strategy. Within it, an intra-frame alignment utilizes a voxel-anchored Gaussianization module to align 3D features with corresponding 2D priors, whereas a cross-scene alignment achieves global semantic consistency via class-prototype distillation. Empirically, YouTube-Occ delivers consistent gains across three mainstream architectures on the NYUv2 and Occ-ScanNet benchmarks, especially under limited-data conditions. We will publicly release our code and data, hoping to inspire future research.
