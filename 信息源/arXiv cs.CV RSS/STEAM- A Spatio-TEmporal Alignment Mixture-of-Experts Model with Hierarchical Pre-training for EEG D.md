# STEAM: A Spatio-TEmporal Alignment Mixture-of-Experts Model with Hierarchical Pre-training for EEG Decoding

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Zhu Chen, Dingkun Liu, Yuheng Chen, Dongrui Wu　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.02070)

------

arXiv:2608.02070v2 Announce Type: replace

Abstract: Brain-computer interfaces (BCIs) have been widely used in motor rehabilitation, disease diagnosis, and other neural engineering scenarios. However, conventional neural signal decoding algorithms often suffer from limited generalizability and high adaptation costs, motivating recent interest in BCI foundation models. Existing approaches still struggle to jointly achieve general transferability, accurate decoding, and efficient downstream adaptation. We present STEAM, a hierarchical transfer framework that reconciles general-purpose representation learning with paradigm-specific specialization in EEG foundation models. The framework is instantiated as a dual-branch spatio-temporal encoder in which a shared soft mixture-of-experts (SSMoE) module aligns the spatial and temporal branches, allowing complementary representations to exchange information through a compact set of soft slots. Across seven downstream datasets and fourteen evaluation settings, STEAM attains the best average rank among the compared methods at a competitive inference cost measured in FLOPs. Building upon the Stage-I general initialization, the hierarchical pre-training strategy further specializes the model to a target paradigm without retraining from scratch, yielding consistent gains in paradigm-specific decoding accuracy.
