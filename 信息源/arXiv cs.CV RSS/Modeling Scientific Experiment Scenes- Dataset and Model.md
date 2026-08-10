# Modeling Scientific Experiment Scenes: Dataset and Model

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Minghao Zou, Qingtian Zeng, Shangkun Liu, Cong Liu, Paul L. Rosin, Guanghui Yue, Jun Liu, Wei Zhou　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.02892)

------

arXiv:2608.02892v2 Announce Type: replace

Abstract: Scene Graph Generation (SGG) is fundamental to structured visual understanding, yet existing benchmarks focus mainly on daily life images and overlook scientific experiment scenes with specialized instruments, task-specific experimental semantics, and dense, fine-grained physical relations. These scenes are increasingly important for automated experimental analysis and smart education. To bridge this gap, we introduce PhysScene, the first SGG dataset for physical experiment scenes, providing densely annotated scene graphs and benchmarks under multiple supervision and protocol settings. PhysScene further exposes two key algorithmic challenges for SGG: pronounced long-tail relational predicate distributions and a substantial visual-textual semantic gap. To address these challenges, we propose the Cross-Modal Dual-Path Generator (CM-DPG), a model for robust open-vocabulary SGG. The model enhances object-level semantic representations through joint visual-textual encoding and improves relational reasoning using complementary visual and geometric cues. We also incorporate relation-aware pre-training, caption-derived pseudo-supervision, and adaptive weighting to support balanced learning across head and tail predicates. Extensive experiments on PhysScene and VG150 show that CM-DPG achieves competitive performance across multiple evaluation settings, with ablation studies validating the contribution of each component. The dataset and code are publicly available at https://github.com/ZMH-SDUST/CM-DPG.
