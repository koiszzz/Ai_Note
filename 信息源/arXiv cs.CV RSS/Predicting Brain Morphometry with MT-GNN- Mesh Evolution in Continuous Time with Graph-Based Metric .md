# Predicting Brain Morphometry with MT-GNN: Mesh Evolution in Continuous Time with Graph-Based Metric Tensor Embeddings

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Hao Ding, Daniel Semchin, Paul M. Thompson, Boris Gutman　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05132)

------

arXiv:2608.05132v1 Announce Type: new

Abstract: Predicting how a subcortical structure's shape will evolve from a few prior scans could support prognosis and clinical-trial enrichment. Existing longitudinal mesh predictors either extrapolate shape trajectories via high-dimensional embeddings or regress vertex deformations directly. We instead predict the surface's intrinsic geometry in continuous time: a single per-structure graph network predicts the future per-vertex first fundamental form (metric tensor) for an arbitrary causal multiple-visit history and an arbitrary prediction horizon, conditioned on a Fourier encoding of the lead time. The predicted metric is decoded into a surface by a differentiable As-Rigid-As-Possible solver, and the model is trained end-to-end on the rigid-aligned vertex error. Training through the reconstruction keeps the decoded prediction a valid surface and consistently improves it. On 14 subcortical structures from the ADNI dataset, the proposed mesh evolution model (MT-GNN) predicts best among the evaluated methods at every horizon ($-2.29\%$ mean vertex error vs. the temporal mean, $p{=}6.1{\times}10^{-5}$, beating it on 14/14 structures), ahead of geodesic shape regression (DCM, $-0.19\%$) and a mesh transformer (TransforMesh, $-0.45\%$; $p{=}1.2{\times}10^{-4}$), with the lead widening as the horizon grows.
