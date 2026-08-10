# Is Self-Pretraining really useful to improve diagnosis in medical Time Series?

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Omar Coser, Antonio Orvieto, Paolo Soda, Loredana Zollo　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.06122)

------

arXiv:2608.06122v1 Announce Type: new

Abstract: Inspired by recent evidence that transformer architectures benefit from Self-PreTraining (SPT) on long-context benchmarks, we investigate whether similar gains extend to multimodal, multivariate, and even simple univariate medical time series. Our objective is to assess the impact of SPT on the performance and scalability of transformer-based models across diverse medical applications, particularly under limited data conditions. We evaluate transformer architectures on three representative medical time-series tasks: rehabilitation robotics (Camargo dataset), stress detection (Non-EEG Stress), and Parkinson's disease detection (Gait Parkinson's Disease). Models are trained either from scratch or through SPT using four masking-based objectives designed to promote temporal and cross-modal representation learning, and we systematically vary model depth to examine how capacity interacts with pre-training benefits. Across datasets and configurations, SPT consistently improves classification accuracy by 0-6 percentage points depending on masking strategy, dataset and architecture, with gains observed not only in multivariate settings but also when models are restricted to simple univariate inputs. The improvements increase for deeper models that can better exploit the enriched temporal representations learned during pre-training. These findings indicate that SPT is a simple and general strategy that enhances transformer performance on medical time-series tasks without requiring task-specific architectural changes, supporting its potential to improve robustness and accuracy in data-limited clinical settings.
