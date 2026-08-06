# Benchmarking Deep Learning Models for Dense Event Classification of Offshore Wind Infrastructure in Sentinel-1 Time Series

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Thorsten Hoeser, Felix Bachofer, Claudia Kuenzer　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.04706)

------

arXiv:2608.04706v1 Announce Type: new

Abstract: Monitoring of offshore wind energy infrastructure life cycles, especially during the deployment phase, is an important contribution for stakeholders to make informed decisions in a phase of increasing deployment activities. ESA's Sentinel-1 Synthetic Aperture Radar (SAR) mission produces large data archives that enable the global monitoring of offshore wind infrastructure. Turning these high-volume archives into information requires algorithms that automatically extract single event labels from dense time series at a global scale. In this study, we present a structured comparison of ten deep learning model-training variants for the dense classification of Sentinel-1 based offshore wind infrastructure time series, aiming to advance rule-based event classification of this task. We trained LSTM, Transformer, and fully connected model variants with monotemporal, unidirectional, and bidirectional context awareness, each with and without self-supervised pretraining. Among these, the supervised BiLSTM performs best, raising the target AUC score from 0.7853 for the rule-based baseline to 0.8509, and the perfect match rate from 0.3508 to 0.5063. Combining the BiLSTM predictions with the existing baseline labels in a label-transition-minimising ensemble further improves agreement with the test data. Using these improved labels, we isolate the deployment phase of individual turbines at a global scale and conduct a regional and subregional analysis covering 2016-01-01 to 2025-03-31, reporting median deployment durations of 84 d (China), 242 d (EU), and 258 d (UK). Deployment-related drivers, including legal regulations such as subsidies, and environmental conditions, emerge clearly from the analysed results across multiple spatial scales.
