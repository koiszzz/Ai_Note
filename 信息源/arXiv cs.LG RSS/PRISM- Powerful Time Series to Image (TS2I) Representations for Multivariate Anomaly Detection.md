# PRISM: Powerful Time Series to Image (TS2I) Representations for Multivariate Anomaly Detection

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Mateusz Smendowski, Kamil Faber, Piotr Nawrocki, Nathalie Japkowicz, Roberto Corizzo　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.03926)

------

arXiv:2608.03926v1 Announce Type: new

Abstract: Time series anomaly detection (TSAD) underpins applications in predictive maintenance, finance, and cloud computing, however performance remains sensitive to representation choices, especially in multivariate settings. While transforming time series into images has shown success in forecasting and classification, it remains unclear how multivariate, high-dimensional series should be mapped to multi-channel images and whether vision backbones can match time-domain baselines in TSAD. We introduce PRISM, a plug-and-play meta-workflow enabling systematic construction and evaluation of image-based representations for multivariate TSAD. Our evaluation spanning over 7,000 experiments shows that well-designed PRISM configurations are competitive with 24 time-domain baselines, achieving the best VUS-PR on 10 of 14 datasets, with an average improvement of 41% over the best competing method on those datasets. Further, we identify channelization - how the channel dimension of multi-channel images is constructed - as a critical and previously understudied design dimension, and introduce MSM, a novel statistics-based scheme achieving 11-27% gains over PCA-based alternatives. Finally, ImageNet-pretrained encoders transfer effectively to TSAD, with frozen encoders retaining 92% of fine-tuned performance while training 1.8 times faster. Our code is available at: https://github.com/Smendowski/PRISM.
