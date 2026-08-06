# Multimodal Auto-regressive Transformer Surrogate for Modeling Variable Operations and Quantifying Uncertainty in Geological Carbon Storage

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Yifu Han, Louis J. Durlofsky　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.02629)

------

arXiv:2608.02629v1 Announce Type: new

Abstract: The use of variable well perforation and injection strategies can improve the efficiency of geological carbon storage operations. We develop a new multimodal auto-regressive transformer surrogate to model these operations under geological uncertainty. A modified SEAM CO2 geomodel, which involves a faulted system with three stacked aquifers, is considered. The two injection wells are perforated in stages, from bottom to top, with the stage durations and individual well injection rates treated as control variables. The surrogate model processes three input modalities - the 3D geomodel, scalar parameters characterizing relative permeability functions, and control variables - through separate encoders. These are fused via self-attention in a transformer encoder, and a temporal decoder generates predictions auto-regressively through encoder-decoder cross-attention. The surrogate is trained, using 4000 GEOS flow simulations, to predict saturation and pressure at monitoring locations, total injected and mobile CO2 mass, and saturation footprints. For a new test set, involving randomly sampled geomodels and control variables, the surrogate achieves a median saturation MAE of 0.028 and median relative errors of 0.2-5% for the other quantities of interest. Importantly, it captures the switch from rate to bottom-hole-pressure control. The surrogate model is used within a hierarchical Markov chain Monte Carlo data assimilation procedure for a synthetic true model under three operational strategies. Substantial uncertainty reduction is achieved for key metaparameters, particularly the fault permeabilities. Posterior predictions for saturation footprints and total injected and mobile CO2 mass are also shown to be generally consistent with true model results.
