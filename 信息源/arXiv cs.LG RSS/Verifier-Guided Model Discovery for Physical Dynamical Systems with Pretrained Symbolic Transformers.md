# Verifier-Guided Model Discovery for Physical Dynamical Systems with Pretrained Symbolic Transformers

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Farbod Faraji, Francesco Belardinelli　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.02662)

------

arXiv:2608.02662v1 Announce Type: new

Abstract: Reliable forecasting of nonlinear physical systems underpins scientific discovery and engineering decision-making. Yet high-fidelity simulations are prohibitively costly, and machine-learning surrogates can be opaque and encode assumptions about system dynamics, limiting generalizability. Pretrained transformers mapping synthetic ODE trajectories to equations offer interpretable alternatives, promising transfer without system-specific equation knowledge. Transferring them reliably to high-dimensional physical data, however, remains an open challenge. We develop a verifier-guided (VG) workflow around ODEFormer as a symbolic backbone, using dynamical and physical-admissibility criteria to select from a multi-trajectory candidate equation pool, enabling transfer. On canonical Van der Pol oscillators, VG outperforms the original ODEFormer workflow across held-out initial conditions. We then address vortex shedding, a phenomenon occurring in atmospheric and plasma systems of societal relevance, through coordinate reduction and symbolic discovery at fixed and varying Reynolds numbers. VG discovers fixed-parameter reduced-order equations that recover the fundamental shedding oscillator and higher harmonics without a wake-specific candidate library or prescribed Navier-Stokes structure, while the cross-parameter model generalizes to withheld regimes. Reconstruction fidelity alone did not determine symbolic discoverability, highlighting the importance of compatibility between latent dynamics and the backbone's pretraining distribution. This work establishes a verifier-guided neural-to-symbolic methodology for interpretable and physically auditable forecasting in the natural sciences.
