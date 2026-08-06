# Dynamical Lie Algebras Cannot Describe Shallow QAOA: Cragged Terrains, Barren Plateaus, and Empirical Hardness Models

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Harrison Copp, Charlton Li, An\v{z}ej Margeta-Cacace, Amy Qiao　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：quant-ph　|　原文：[打开链接](https://arxiv.org/abs/2608.04252)

------

arXiv:2608.04252v1 Announce Type: cross

Abstract: The dynamical Lie algebraic (DLA) theory of variational quantum algorithms (VQAs) predicts commonplace exponentially vanishing loss and gradient variances for sufficiently deep parametrized circuits. In this work, we show that these predictions fail dramatically in the shallow-circuit (and particularly constant-depth) regime for the Quantum Approximate Optimization Algorithm (QAOA) applied to the maximum independent set (MIS) problem. In a large-scale numerical study across $\sim$23,000 problem instances, we find that barren plateaus are rare, while landscapes whose variances polynomially increase with system size---which we term "cragged terrains"---are common across graph families. This aggregate polynomial growth persists both for generic, low-symmetry random graphs and for highly symmetric vertex-transitive graphs, indicating that DLA-based variance predictions do not describe landscape scaling in this regime. As a stopgap alternative to the theory, we train empirical hardness models to predict instance-wise hardness metrics for QAOA-MIS. While these models generalize poorly, they nonetheless recover the correct landscape scaling class (barren plateau vs. cragged terrain) with high fidelity. Taken together, our results identify shallow QAOA for MIS as a prototypical setting in which asymptotic, unitary-design-centric predictions may be fundamentally insufficient to describe shallow variational quantum algorithms more broadly, emphasizing the need for more empirically-informed models of VQA loss landscapes.
