# Equation-Free Period-Aware Forecast-Error Contraction for Estimating Negative Largest Lyapunov Exponents from Short Trajectory Ensembles

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Andrei Velichko, N'Gbo N'Gbo, Viet-Thanh Pham　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：nlin.CD　|　原文：[打开链接](https://arxiv.org/abs/2608.05522)

------

arXiv:2608.05522v1 Announce Type: cross

Abstract: Estimating positive largest Lyapunov exponents from data is comparatively natural because neighboring trajectories separate, whereas stable dynamics require resolving contraction before measurement noise or finite precision erases the signal. We introduce a period-aware forecast-error contraction procedure for estimating a dominant negative Lyapunov exponent from ensembles of short scalar trajectories without using governing equations or an analytical Jacobian. A k-nearest-neighbor predictor is trained on trajectory histories, the geometric-mean absolute forecast error is evaluated at phase-consistent horizons, and the exponent is obtained from the slope of the logarithmic error profile. Unlike data-driven approaches that reconstruct local evolution matrices or differentiate a learned surrogate, the proposed method extracts the contraction rate directly from out-of-sample forecast errors. Two adaptations are essential: the forecast step is synchronized with the detected orbit period, and candidate slopes are accepted only when they form a stable consensus across several transient lengths. On the logistic map, the method recovers 92 of 112 negative-exponent parameter values with a mean absolute error of 0.0253 and $R^2=0.886$. On a two-dimensional map without fixed points, independent scalar pipelines based on the three observables $x_n$, $y_n$, and $z_n$ give mean absolute errors of 0.00879--0.01145 and $R^2=0.983$--$0.986$. Because the estimation stage uses only observed trajectories, the framework provides a basis for repeated-relaxation experiments in which short sensor responses are available but the governing equations and analytical Jacobian are unknown. Experimental validation remains a subject of future work.
