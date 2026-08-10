# Spectral Distillation: From Nonlinear Dynamics to Linear State-Space Models

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Liane Galanti, Devan Shah, Shlomo Fortgang, Elad Hazan　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.05416)

------

arXiv:2608.05416v1 Announce Type: new

Abstract: Can nonlinear dynamical systems be learned through a compact linear state-space representation, without directly solving a non-convex system-identification problem? We give a provable pipeline for doing so. Starting from observations of an unknown nonlinear dynamical system, we first learn an implicit spectral predictor using Observation Spectral Filtering (OSF), a convex method that competes with the best linear observer for the system. We then apply spectral-to-LDS distillation to convert this predictor into an explicit recurrent linear dynamical system. Our main theorem shows that the average prediction error of the distilled LDS decomposes into an exponentially-small distillation term and the OSF learning term governed by the Luenberger complexity of the best observer. The guarantee is dimension-free: it depends on observer complexity rather than on the latent dimension needed to represent the nonlinear system. To our knowledge, this yields the first end-to-end provable method for extracting a best-in-hindsight LDS representation of nonlinear dynamics through convex learning followed by provable distillation. Experiments on linear LDS benchmarks and MuJoCo behavior cloning show that the train-then-distill pipeline produces compact LDS predictors that match or outperform directly trained baselines.
