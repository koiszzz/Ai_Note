# Prescribed-Basis Coefficient-to-Coefficient Neural Operator for Partial Differential Equations

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Chuqi Chen, Yang Xiang, Weihong Zhang　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：math.NA　|　原文：[打开链接](https://arxiv.org/abs/2510.10350)

------

arXiv:2510.10350v3 Announce Type: replace-cross

Abstract: Operator learning provides a data-driven approach to approximating solution operators of partial differential equations, but its effectiveness depends strongly on how input and output functions are represented. Point-value representations can make the trainable map mesh-dependent and high-dimensional; snapshot-based POD/PCA reductions require aligned data and basis construction, while learned representations introduce additional trainable encoders, decoders, or neural bases. We propose the Fixed-Basis Coefficient-to-Coefficient Network (FB-C2CNet), which learns PDE solution maps in fixed, data-independent approximation spaces using prescribed bases as function encoders and decoders. Input observations are encoded by regularized least-squares projection onto bases such as finite element, random-feature, or radial-basis-function bases. A neural network maps the resulting input coefficients to output coefficients, and the fixed decoder reconstructs the solution at arbitrary target locations. This separation of basis selection from network training avoids neural basis learning and snapshot-based basis extraction, reduces the dimension of the trainable map, and lowers training cost. With suitable prescribed bases, FB-C2CNet also accommodates scattered, non-aligned, and sample-dependent observations. We analyze the stability--bias trade-off of regularized coefficient encoding and the intrinsic projection error determined by the output space. Experiments on elliptic, nonlinear time-dependent, weak-solution, high-dimensional, and inverse Stokes boundary-recovery problems demonstrate competitive accuracy with reduced trainable dimension and training cost, including for high-resolution and irregularly sampled data.
