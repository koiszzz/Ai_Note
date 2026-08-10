# Diff-VF: Training-free High-quality Long Video Generation via Diffusion Model

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Haoning Yang, Xinyuan Chen, Yaohui Wang, Guo Lu　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05976)

------

arXiv:2608.05976v1 Announce Type: new

Abstract: Recently, diffusion models have made great progress in video generation. However, most existing video diffusion models are trained with short videos, and degrade when extrapolated to long videos, struggling to maintain long-range temporal coherence while retaining diverse motions. To generate consistent, high-quality and dynamic long videos, we propose Diff-VF, a training-free, plug-and-play and model-agnostic framework that converts existing short-video diffusion backbones into long-video generators without modifying or fine-tuning the base model. Diff-VF couples three complementary strategies: Hybrid Noise Initialization (HNI) to constrain global semantics, Weighted Window Sampling (WWS) to remove inter-window discontinuities, and Temporal Extended Sampling (TES) to establish long-range dependencies with a timestep-varying fusion. We further extend Diff-VF to long-video enhancement via Skip Residual Guidance that balances fidelity and realism through timestep-dependent guidance. VBench-Long evaluation results show that Diff-VF achieves a more favorable balance between temporal coherence and motion diversity than base models and recent training-free long video generation baselines, including FreeNoise, FreeLong, and RIFLEx, while maintaining competitive frame-wise quality. Experiments on two base models demonstrate the applicability to video diffusion models with different spatial-temporal modeling strategies. Extensive ablations validate the contribution of each component and hyperparameters.
