# Stochastic Emulation using Generalized Stratified Sampling for Performance-Based Risk Optimization of Structures

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Isabela D. Rodrigues, Seymour M. J. Spence, Henrique M. Kroetz, Andr\'e T. Beck　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.05006)

------

arXiv:2608.05006v1 Announce Type: new

Abstract: Metamodels are instrumental in reducing the computational burden associated with nested reliability analyses and optimization loops in Performance-Based Risk Optimization (PBRO) of structures under stochastic loads. In this context, stochastic emulators are particularly useful because they approximate response distributions while accounting for the intrinsic stochasticity of the simulator. Among these methods, Stochastic Polynomial Chaos Expansion (SPCE) is especially attractive because it does not require replications of nonlinear analyses at fixed input conditions. However, SPCE may present limitations in accurately representing extreme responses in the tails of structural response distributions. To address this limitation, this study proposes a framework that combines Generalized Stratified Sampling (GSS) with SPCE. The GSS scheme partitions the input space into strata according to the intensity of the hazard, improving the representation of extreme responses, while independent SPCE emulators are trained within each stratum. The conditional exceedance probabilities estimated in each stratum are then recombined using the total probability theorem to evaluate the probabilistic constraints. The proposed GSS-SPCE framework is applied to the optimal design of buckling-restrained brace cross-sectional areas in a two-story steel building. The objective is to minimize the initial construction cost while satisfying prescribed probabilistic performance constraints. Results show that the proposed framework accurately estimates structural response distributions, including their tail regions, while substantially reducing the number of nonlinear model evaluations required for PBRO.
