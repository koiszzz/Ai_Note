# Bi-PT: Bidirectional Cross-Attention Point Transformers for Four-Chamber Heart Reconstruction from Sparse Cardiac MRI Data

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Chenchuhui Hu, Shaoming Pan, Leon Axel, Meng Ye　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2607.06923)

------

arXiv:2607.06923v2 Announce Type: replace

Abstract: We propose Bi-PT, a pipeline for reconstructing 3D four-chamber human heart meshes from clinical sparsely sampled cardiac magnetic resonance imaging (CMR) data. This work addresses the error-prone generation of 3D cardiac shape from a sparse point cloud (SPC) extracted from 2D long-axis and short-axis views used in routine clinical CMR protocols. Bi-PT enables accurate inference of the four-chamber heart mesh from the SPC by learning robust point features via bidirectional point cross-attention between an atlas and the SPC, together with per-point semantic labels that improve correspondence estimation. We formulate the deformation field as a Neural Ordinary Differential Equation (NODE) parameterized by a per-point affine transformation and translation to deform the atlas toward the target heart shape. By learning such a NODE, we can guarantee the deformation field to be a locally affine diffeomorphic deformation. We also integrate a semantic label loss into the Chamfer distance to encourage label-consistent correspondences and add a smoothness regularization to stabilize and improve the learning of the deformation field. Extensive experiments demonstrate that Bi-PT achieves accurate and robust performance compared to baselines.
