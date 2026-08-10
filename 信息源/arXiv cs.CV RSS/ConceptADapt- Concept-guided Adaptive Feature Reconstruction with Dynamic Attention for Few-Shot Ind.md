# ConceptADapt: Concept-guided Adaptive Feature Reconstruction with Dynamic Attention for Few-Shot Industrial Anomaly Detection

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Yufei Li, Yicheng Ruan, Long Tian, Dongsheng Wang, Liang Bao　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05743)

------

arXiv:2608.05743v1 Announce Type: new

Abstract: Few-shot industrial anomaly detection (FS-IAD) focuses on detecting and localizing visual defects in industrial inspection during the cold-start phase, where only a limited number of normal training samples are available per category. Recent advances in this field predominantly leverage visual features from foundation-model and have achieved promising performance. Despite the strong representational power of foundation-model features, the model generalization remains fragile due to the extreme scarcity of normal training data.To address this pivotal issue, we propose ConceptADapt, a concept-guided adaptive feature reconstruction model with dynamic attention. Specifically, our model pre-learns a set of fixed normal concepts from the limited support features and leverages them to mine relationships with query features, thereby recalibrating their statistics for improved anomaly detection at test time. To mitigate the prevalent feature shortcut problem, which is particularly severe under low-data regimes, we further develop a dynamic attention mechanism integrated with sparse autoencoders to learn robust normal concepts during training. Moreover, to enable fast adaptation during inference, our model remains lightweight by incorporating LoRA into the attention module, which introduces only minimal updating parameters.Extensive experiments on three widely adopted FS-IAD benchmarks, including MVTec-AD, VisA, and MPDD, demonstrate that our model consistently outperforms state-of-the-art (SOTA) approaches across both detection and localization tasks, achieving significant improvements under various shot settings.
