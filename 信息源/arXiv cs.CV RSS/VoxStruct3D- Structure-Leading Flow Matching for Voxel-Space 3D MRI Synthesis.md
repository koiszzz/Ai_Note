# VoxStruct3D: Structure-Leading Flow Matching for Voxel-Space 3D MRI Synthesis

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Fang Li, Yang Gao, Shihao Zou, Weixin Si, Hongyu Wu, Qing Xia, Shuai Li, Aimin Hao　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.04557)

------

arXiv:2608.04557v1 Announce Type: new

Abstract: High-fidelity 3D MRI synthesis requires both globally coherent anatomy and fine-grained voxel-level detail. Although latent diffusion makes volumetric generation tractable, its image autoencoder introduces a reconstruction bottleneck that can limit the fine detail recoverable in the final volume. We present VoxStruct3D, a voxel-space flow-matching framework that directly models full-resolution MRI volumes using a clean-data prediction objective. Its Volumetric Voxel Generator (VVG) combines factorized 3D patch embedding with overlapping upsampling, time-modulated residual refinement, and skip fusion, enabling neighboring tokens to jointly reconstruct shared voxel regions and suppress patch-boundary artifacts. To complement direct voxel-space modeling with an explicit anatomical prior, we further introduce a Structure-First, Image-Follows (SFIF) strategy. A frozen pretrained 3D medical encoder and a StructVAE extract compact structure tokens that preserve dominant anatomy, while a structure-leading schedule keeps their trajectory ahead of the image trajectory. Patch-Aligned RoPE spatially aligns the unequal token grids, and asymmetric attention enforces one-way guidance from structure to image. Experiments on pathological and healthy T1-weighted brain MRI datasets show that VoxStruct3D achieves the strongest overall performance across feature-distribution alignment, sample diversity, and perceptual quality, producing anatomically coherent and visually realistic volumes.
