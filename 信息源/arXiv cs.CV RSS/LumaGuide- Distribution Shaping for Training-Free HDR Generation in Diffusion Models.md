# LumaGuide: Distribution Shaping for Training-Free HDR Generation in Diffusion Models

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Bowen Chen, Shreshth Saini, Balu Adsumilli, Alan C. Bovik　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2607.26237)

------

arXiv:2607.26237v2 Announce Type: replace

Abstract: Pretrained diffusion models generate realistic images but are constrained by the statistical biases of their training data, limiting their ability to produce high dynamic range (HDR) content. In this work, we introduce LumaGuide, a training-free framework for distribution shaping in diffusion models. Instead of modifying model parameters, LumaGuide steers the sampling process to match target feature distributions via differentiable energy-based guidance. We instantiate this framework for HDR generation by controlling luminance distributions in perceptually uniform PQ space. Our results show that aligning luminance histograms is sufficient to induce HDR-consistent behavior, including coherent highlights and preserved shadow detail, while maintaining semantic fidelity. Beyond HDR, LumaGuide enables flexible specification of target distributions through data-driven presets, reference images, or text-driven predictors, and extends naturally to video generation with temporal consistency constraints. More broadly, our work demonstrates that controllable generation can be achieved by directly shaping output distributions at sampling time, without retraining diffusion models.
