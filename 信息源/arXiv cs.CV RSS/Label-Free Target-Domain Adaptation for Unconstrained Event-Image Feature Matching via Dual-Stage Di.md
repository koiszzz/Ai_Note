# Label-Free Target-Domain Adaptation for Unconstrained Event-Image Feature Matching via Dual-Stage Distillation

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Zhonghua Yi, Hao Shi, Qi Jiang, Yufan Zhang, Kailun Yang, Kaiwei Wang　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2607.10082)

------

arXiv:2607.10082v2 Announce Type: replace

Abstract: Building pixel-level correspondence between event and image data is a fundamental task for multi-sensor systems. However, existing cross-modal matching methods are largely restricted by their reliance on either matching labels or strictly aligned hardware, which limits them to unlabeled and unconstrained real-world scenarios where neither matching ground truth nor prior sensor relationships are available. To address this, we propose a novel two-stage training paradigm. First, we leverage large-scale data to perform label-agnostic distillation pretraining, upgrading optimization objectives with distribution-based and contrastive losses to learn highly generalizable representations. Second, to tackle unlabeled and unconstrained downstream data, we introduce an epipolar-guided self-distillation framework. By utilizing consistency verification to isolate robust matches and incorporating geometric confidence derived from an external epipolar prior, our model can effectively self-evolve directly on target domains without any supervision. Furthermore, we introduce a rigorous cross-modal evaluation benchmark based on TUM-VIE, featuring physically separated cameras with distinct intrinsic parameters and resolutions. Extensive experiments demonstrate that our proposed method achieves state-of-the-art performance on both MVSEC and TUM-VIE pose estimation tasks. The source code and benchmark will be made publicly available at https://github.com/ZhonghuaYi/nexus2-official.
