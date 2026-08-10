# Hierarchical Flow Matching for 3D Point Cloud Generation

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Linhao Wang, Qichang Zhang, Ye Su, Hao Wang　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05557)

------

arXiv:2608.05557v1 Announce Type: new

Abstract: Generating high-quality 3D point clouds requires capturing both global shape topology and local geometric details. Existing flow-based methods rely on continuous normalizing flows (CNFs) that demand expensive ODE solving and trace estimation during training, while diffusion models require hundreds of iterative denoising steps. Moreover, most approaches adopt single-level generation directly in point space, disregarding the hierarchical structure natural to 3D shapes. We propose Hierarchical Flow Matching (HFM) that extends flow matching to bilevel structure for unconditional 3D point cloud generation. HFM decomposes the task into two levels via optimal-transport flow matching: a \textit{Latent Flow Matching} models the global shape manifold in a compact latent space, and a \textit{Conditional Point Flow Matching} reconstructs detailed point clouds conditioned on the latent code. Both flows are trained with simple MSE regression losses. The resulting straight OT paths enable efficient sampling with as few as 15 Euler steps per flow, while the structured latent space supports downstream tasks including classification. Extensive experiments on ShapeNet and ModelNet benchmarks demonstrate that HFM achieves competitive or even best performance compared with prior state-of-the-art methods.
