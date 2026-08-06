# Seeking Physics in Diffusion Noise

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Chujun Tang, Lei Zhong, Fangqiang Ding　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2603.14294)

------

arXiv:2603.14294v3 Announce Type: replace-cross

Abstract: Do video diffusion models encode signals predictive of physical plausibility? We probe intermediate denoising representations of pretrained Diffusion Transformers (DiTs) and find that physically plausible and implausible videos are partially separable in mid-layer feature space, even at high noise levels. Within-source and perceptual-quality controls suggest that this signal is not fully explained by generator identity or generic visual quality. We distill the signal into a lightweight, backbone-specific physics verifier trained on frozen features and use it in two complementary inference-time mechanisms under a fixed multi-trajectory budget: progressive trajectory selection, which scores trajectories at intermediate checkpoints and prunes weak candidates early, and reward-gradient guidance, which steers surviving trajectories by backpropagating through only the first few DiT blocks. Experiments on PhyGenBench and Physics-IQ across CogVideoX-2B/5B and Wan 2.1-14B show that progressive selection matches verifier-based Best-of-4 on CogVideoX-2B while reducing wall-clock inference time by 37%, whereas reward-gradient guidance substantially improves physical consistency on CogVideoX-5B, all without fine-tuning the video generator.
