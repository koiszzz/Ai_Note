# Multimodal Spatiotemporal Atmospheric Data Assimilation with Latent Flow-matching

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Dibyajyoti Chakraborty, Romit Maulik　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.05103)

------

arXiv:2608.05103v1 Announce Type: new

Abstract: Data assimilation (DA) uses Bayesian inference to update the state of a numerical forecast model with observed data. In this study, we propose a fundamentally different, unified approach to atmospheric data assimilation. We use latent video flow-matching to sample temporally consistent trajectories from a prior trained using ERA5 reanalysis (69 variables over an 8-day window). We also use posterior sampling to assimilate real observation sources, such as those from the NOAA Integrated Global Radiosonde Archive and the Integrated Surface Database. Because the prior generates a continuous trajectory, it naturally propagates information between observed and unobserved frames. Therefore, we can perform various DA tasks, such as filtering and smoothing, simply by changing the observed frames. Moreover, we generate full-state ensemble forecasts directly from sparse observations, achieving performance competitive with state-of-the-art observation-to-forecast models.
