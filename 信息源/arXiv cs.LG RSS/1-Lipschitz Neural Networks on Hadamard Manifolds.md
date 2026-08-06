# 1-Lipschitz Neural Networks on Hadamard Manifolds

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Davide Murari, Marta Ghirardelli, Ben Adcock, Elena Celledoni, Brynjulf Owren, Carola-Bibiane Sch\"onlieb　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：math.NA　|　原文：[打开链接](https://arxiv.org/abs/2607.19335)

------

arXiv:2607.19335v3 Announce Type: replace-cross

Abstract: Controlling the Lipschitz constant of a neural network is a standard way to promote robustness and stability. Most existing constraining strategies are designed for Euclidean spaces. In this work, we construct and analyze a class of 1-Lipschitz neural networks on Hadamard manifolds. Our layers are of gradient-descent type, $1$-Lipschitz, and quasi-$\alpha$-firmly nonexpansive. The core building blocks of the proposed architecture are Busemann functions, and we exploit the properties of Busemann gradient flows to design $1$-Lipschitz geometry-preserving layers. We provide explicit constructions and examples for hyperbolic manifolds and the manifold of symmetric positive definite (SPD) matrices. We test the proposed architecture in two numerical experiments: robust classification on the Poincar\'e disk and masked-Wishart covariance reconstruction. On the Poincar\'e disk, the proposed networks yield robust classifiers under hyperbolic perturbations. On the SPD manifold, we train SPD-valued denoisers and adopt them as a Plug-and-Play prior for a masked-Wishart covariance reconstruction problem. We show improved results from the nonexpansive denoiser over static, data-only, and Log-Euclidean denoising baselines, and empirically test its convergence properties.
