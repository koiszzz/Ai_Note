# FinVerse: Financial Time-Series Benchmark

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Jaehoon Lee, Jun Seo, Seunghan Lee, Tae Yoon Lim, Dongwan Kang, Hwanil Choi, Minjae Kim, Sungdong Yoo, Junhyeok Kang, Sangjun Han, Soonyoung Lee, Wonbin Ahn　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.03259)

------

arXiv:2608.03259v1 Announce Type: cross

Abstract: As time-series foundation models have emerged, the need for benchmarks that can evaluate their forecasting ability in meaningful ways has become increasingly important. Existing time-series forecasting benchmarks provide useful standardized comparisons, but they often evaluate heterogeneous series with uniform error-based metrics. Strong performance under such metrics does not necessarily imply that a model's forecasts will support the best real-world decisions across domains. For example, in stock forecasting, correctly predicting whether a price will rise or fall can be more directly relevant to realized returns than minimizing point-wise forecast error alone. To this end, we introduce FinVerse, a finance-domain time-series forecasting benchmark that takes a first step toward more realistic evaluation. The released FinVerse data artifact contains 116,897 financial time series with 171.1M observations, of which 60,232 series with 17.4M observations are selected as evaluated targets based on their economic relevance to financial decisions. Unlike generic forecasting benchmarks that primarily emphasize uniform point-forecast or probabilistic accuracy, FinVerse defines 11 metric families comprising 78 evaluation metrics and assigns the most appropriate evaluation metrics to each individual time series based on its underlying economic meaning. Our analysis of 43 public time-series forecasting foundation models shows that strong performance under generic forecasting criteria does not necessarily translate into useful financial forecasts. This finding highlights the need for domain-aware benchmarks that evaluate models under objectives closer to real-world decision making.
