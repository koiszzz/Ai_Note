# Revisiting Pose Sensitivity in Splat-based Computed Tomography under Sparse-view Reconstruction

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Kiseok Choi, Hyeongjun Cho, Inchul Kim, Min H. Kim　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.04752)

------

arXiv:2608.04752v1 Announce Type: new

Abstract: X-ray computed tomography (CT) reconstructs volumetric representations of objects from projection images obtained by transmitting X-rays through a target. Recent splat-based tomography, which represents a volume as a continuous distribution of 3D Gaussians, has demonstrated both high reconstruction quality and fast convergence in cone-beam sparse-view CT. However, when deployed in real CT systems with limited and non-uniform view distributions, we observe distinctive streak and strip artifacts that are far more pronounced than in conventional reconstruction methods. Through detailed analysis, we show that these artifacts primarily originate from pose inaccuracies in the acquisition geometry rather than from view sparsity itself. We revisit pose sensitivity in the splatting formulation and derive a stable gradient-based framework that jointly refines geometric parameters during reconstruction. Our study not only identifies how pose perturbations propagate through the differentiable projection operator but also reveals why splat-based CT is particularly vulnerable to geometric misalignment. The resulting formulation remains lightweight and easily integrable into existing pipelines while substantially improving reconstruction fidelity under real-world sparse-view conditions.
