# Dual-space posterior sampling for Bayesian inference in constrained inverse problems

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Ali Siahkoohi, Kamal Aghazade, Ali Gholami　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：physics.geo-ph　|　原文：[打开链接](https://arxiv.org/abs/2603.00393)

------

arXiv:2603.00393v2 Announce Type: replace-cross

Abstract: Inverse problems constrained by partial differential equations are often ill-conditioned due to noisy, incomplete data or inherent non-uniqueness. A prominent example is full waveform inversion (FWI), which estimates Earth's subsurface properties by fitting seismic measurements subject to the wave equation, where ill-conditioning stems from noisy, band-limited, finite-aperture measurements and complex geological structures. A Bayesian framework describes the solution more comprehensively: instead of a single estimate, a posterior distribution of plausible solutions characterizes the non-uniqueness and can be sampled to quantify uncertainty. However, no clear procedure exists for translating hard physical constraints, such as the wave equation, into priors amenable to existing sampling techniques. We address this by sampling the posterior in the dual space via an augmented Lagrangian formulation, which converts hard constraints into penalties suited to sampling algorithms while enforcing them progressively through multiplier updates, so they are satisfied in the limit. We integrate the alternating direction method of multipliers (ADMM) with Stein variational gradient descent (SVGD), a particle-based sampler: the constraint is relaxed at each iteration and the multiplier updates progressively enforce its satisfaction. This enables posterior sampling under hard constraints while inheriting the favorable conditioning of dual-space solvers, where partial constraint relaxation permits productive updates even when the current model is far from the true solution. We validate the method on a stylized Rosenbrock conditional inference problem and on frequency-domain FWI for a Gaussian anomaly model and the Marmousi II benchmark, demonstrating physically consistent uncertainty estimates and posterior contraction with increasing data coverage.
