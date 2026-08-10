# Multivariate Time Series Forecasting needs Cross Variable Loss

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Kuiye Ding, Yifan Hu, Hanchen Wang, Hao Xue　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.05742)

------

arXiv:2608.05742v1 Announce Type: new

Abstract: Multivariate time series forecasting presents unique challenges because future variables often co-evolve under shared system dynamics. While existing studies mainly focus on cross-variable dependencies in historical observations, dependencies among future values are much less explored. Specifically, modern forecasting models largely follow the Direct Forecasting (DF) paradigm, generating multi-step forecasts with point-wise objectives that do not explicitly constrain cross-variable structure. In this work, we show that the DF objective is mismatched in the presence of cross-variable and lagged dependencies, revealing an objective gap. To address this issue, we propose \textbf{C}ross-\textbf{V}ariable \textbf{Loss} (CvLoss), a plug-in structural regularizer that constrains forecast residuals on a cross-variable graph. CvLoss penalizes inconsistent edge-wise residual differences over forecast patches, encouraging consistency across both synchronous and asynchronous interactions. Our experiments show that CvLoss consistently improves competitive forecasting models, outperforms representative learning objectives, and is compatible with a variety of forecasting backbones.
