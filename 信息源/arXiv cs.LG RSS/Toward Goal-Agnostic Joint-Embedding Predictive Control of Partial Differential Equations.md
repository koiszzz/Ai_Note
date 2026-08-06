# Toward Goal-Agnostic Joint-Embedding Predictive Control of Partial Differential Equations

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Jonathan Gallagher, Roberto Guglielmi　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2607.21644)

------

arXiv:2607.21644v2 Announce Type: replace

Abstract: We present a goal-agnostic control framework for partial differential equations (PDEs) built around an end-to-end joint-embedding predictive architecture (JEPA). A lightweight 2D vision-transformer (ViT) and action-conditioned latent dynamics are trained offline without a reward or downstream goal, before being frozen and reused by a model-predictive path integral (MPPI) controller. We minimize a control objective in the latent space, initially expressed via the $L^2$ distance and additionally illustrate the benefit of recasting the control objective in terms of an explicit physical observable when available. By instead minimizing the tracking error for a learned linear kinetic-energy (KE) probe on the frozen latent-state rollouts, we demonstrate the ability to reproduce the control of held-out trajectories with $R^2=0.989$, while requiring no change to the underlying world model. For a controlled 2D Navier--Stokes benchmark, using a KE-probe within MPPI planning improves the mean native reward from $-12.08\pm0.86$ for latent-$L^2$ tracking to $-10.90\pm0.91$ (95\% CI), all while lowering last-quarter velocity-field RMSE from $0.0765$ to $0.0692$. Across three intentionally withheld, dissimilar, aperiodic targets, KE planning lowers late field RMSE by $53\%$ relative to latent-$L^2$ planning ($0.0220$ versus $0.0469$), winning across 30 paired comparisons. The same frozen model also supports stabilization around a steady-state configuration via direct regulation of KE, achieving $2.7\%$ mean relative error. While the latent probe proves brittle to measurement noise and missing pixels, our findings support the claim that latent dynamics can remain flexible and goal-agnostic, particularly when calibrated observables (granted they guarantee unique continuation) are a suitable objective for state control.
