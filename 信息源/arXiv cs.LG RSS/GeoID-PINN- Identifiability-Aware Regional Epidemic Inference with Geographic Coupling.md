# GeoID-PINN: Identifiability-Aware Regional Epidemic Inference with Geographic Coupling

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Weixiong Hua, Fan Bu　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.02633)

------

arXiv:2608.02633v1 Announce Type: new

Abstract: Regional surveillance data reflect local transmission, reporting, seeding, and external infection pressure, which are difficult to identify separately. We introduce GeoID-PINN, a physics-informed neural network (PINN) for susceptible-infectious-recovered-deceased (SIRD) dynamics. The model represents spatial dependence with a row-stochastic source-composition matrix whose rows assign nonnegative source weights that sum to one. We regularize this matrix toward a spatial prior constructed from distance, adjacency, commuting, or lead-lag information. In a four-region simulation with known truth, a compatible distance prior gives source-composition error 0.099. The error rises to 0.159 without regularization and 0.577 under a strongly misspecified prior, while trajectory fit and transmission-scale estimates remain similar. Accurate trajectories therefore do not guarantee recovery of the regional dependence structure. We also evaluate GeoID-PINN retrospectively using COVID-19 data from 64 Louisiana counties. Relative to an autoregressive negative-binomial baseline, Forecast-Trained Geo-PINN reduces mean squared error (MSE) from 32,957 to 11,468 and mean absolute error (MAE) from 70.60 to 57.73. The baseline has lower negative log likelihood (NLL), 5.158 versus 5.346, indicating better distributional fit but worse point accuracy. In a controlled 15-county comparison, county adjacency reduces MSE by 6.85 percent and MAE by 3.1 percent. Similar performance across plausible priors supports structured regularization but not unique edge recovery. These results require prior-sensitivity and observation-model checks before interpretation.
