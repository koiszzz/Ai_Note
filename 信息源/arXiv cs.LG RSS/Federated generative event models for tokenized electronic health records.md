# Federated generative event models for tokenized electronic health records

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Michael C. Burkhart, Luke Solo, Inhyeok Lee, S'Khaja Charles, Zewei "Whiskey" Liao, Kaveri Chhikara, Dema Therese, Wan-Ting Liao, Catherine A. Gao, William F. Parker, Brett K. Beaulieu-Jones　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.02939)

------

arXiv:2608.02939v1 Announce Type: new

Abstract: Electronic health record foundation models are limited by institutionally siloed data and substantial performance degradation under cross-site transfer. We evaluated federated training of tokenized generative event models (GEMs) across 122,251 intensive care hospitalizations from three independent health systems harmonized to the Common Longitudinal ICU Data Format. Models were assessed on 12 post-24-hour clinical prediction tasks using within-site, cross-site, centralized, and federated training configurations. GEMs achieved the highest mean within-site and cross-site ROC-AUC and were substantially more transportable than conventional supervised models: their average cross-site penalties were 0.025 ROC-AUC and 0.027 PR-AUC, compared with 0.079 and 0.089 for LightGBM. Federated Learning (FedAvg and FedAvgM) approached the performance of centralized GEM training, with most gains obtained within 5-10 communication rounds. However, centralized multi-site training provided only modest improvements over complete local training. Multi-site models were most useful when local training data were limited, with their advantage narrowing as institutional data accumulated. These findings show that federated GEM training is technically feasible and preserves most centralized performance, but that the main open challenge is learning transportable representations to translate larger, but heterogeneous data from multiple health systems into a reliable target-site benefit.
