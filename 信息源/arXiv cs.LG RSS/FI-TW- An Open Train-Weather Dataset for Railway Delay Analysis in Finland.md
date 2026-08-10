# FI-TW: An Open Train-Weather Dataset for Railway Delay Analysis in Finland

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Vinicius Pozzobon Borin, Jean Michel de Souza Sant'Ana, Usama Raheel, Nurul Huda Mahmood　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2601.16592)

------

arXiv:2601.16592v2 Announce Type: replace

Abstract: Train delays result from complex interactions between operational, technical, and environmental factors. While weather impacts railway reliability, particularly in Nordic regions, existing datasets rarely integrate meteorological information with operational train data. This study presents the first publicly available dataset combining Finnish railway operations with synchronized meteorological observations from 2018-2024. The dataset integrates operational metrics from Finland Digitraffic Railway Traffic Service with weather measurements from 209 environmental monitoring stations, using spatial-temporal alignment via Haversine distance. It encompasses 28 engineered features across operational variables and meteorological measurements, covering approximately 38.5 million observations from Finland's 5,915-kilometer rail network. Preprocessing includes strategic missing data handling through spatial fallback algorithms, cyclical encoding of temporal features, and robust scaling of weather data to address sensor outliers. Analysis reveals distinct seasonal patterns, with winter months exhibiting delay rates exceeding 25\% and geographic clustering of high-delay corridors in central and northern Finland. Furthermore, the work demonstrates applications of the data set in analysing the reliability of railway traffic in Finland. A baseline experiment using XGBoost regression achieved a Mean Absolute Error of 2.73 minutes for predicting station-specific delays, demonstrating the dataset's utility for machine learning applications. The dataset enables diverse applications, including train delay prediction, weather impact assessment, and infrastructure vulnerability mapping, providing researchers with a flexible resource for machine learning applications in railway operations research.
