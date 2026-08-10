# Multi-Representation Geometric Hierarchy Fusion: An Implicit-Submap Driven Framework for Resilient 3D Place Recognition

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Xiaohui Jiang, Haijiang Zhu, Chade Li, Ning An　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2506.14243)

------

arXiv:2506.14243v4 Announce Type: replace

Abstract: LiDAR-based place recognition is critical for long-term autonomous driving without GPS. Existing handcrafted feature methods face dual limitations. First, descriptor instability occurs due to inconsistent point cloud density from motion and environmental changes during repeated traversals. Second, representation fragility arises from reliance on single-level geometric abstractions in complex scenes. To overcome these, we propose a novel framework for 3D place recognition. We introduce an implicit 3D representation using elastic neural points. This representation is designed to reduce the influence of input-density variations and to provide more regular geometric evidence for descriptor construction. From this, we derive occupancy grids and normal vectors. These enable the construction of fused descriptors that integrate complementary perspectives: macro-level spatial layouts from a bird's-eye view and micro-scale surface geometries from 3D clusters. Extensive evaluations on diverse datasets, including KITTI, KITTI-360, MulRan, and NCLT, demonstrate that the proposed method achieves competitive and robust performance compared with representative handcrafted and learning-based baselines. The results suggest that the proposed framework provides a favorable trade-off among recognition accuracy, runtime efficiency, and map memory footprint. It also shows improved robustness under density variations and viewpoint changes in the evaluated scenarios. The code will be released soon.
