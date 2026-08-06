# OmniVR: Joint Video-Audio Conditional Generation for Restoring Degraded Historical Films

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Xin Lu, Zihao Fan, Mingchen Zhong, Jie Huang, Xueyang Fu, Zheng-Jun Zha　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.04224)

------

arXiv:2608.04224v1 Announce Type: new

Abstract: Historical films suffer from co-occurring visual and audio degradations---blur, noise, flicker, hiss, clipping, and dropout---yet existing methods restore each modality independently, leaving quality gaps and cross-modal inconsistency. We present OmniVR, the first joint audio-video generative restoration model. Built upon a 22B-parameter audio-video generation backbone, OmniVR formulates restoration as conditional generation within a unified multimodal DiT: the low-quality video and audio are encoded as latent conditions, combined with a fixed restoration prompt, and jointly denoised to recover visual structure, temporal motion, and acoustic detail under one coordinated objective. Three key designs enable this adaptation: (1) a joint audio-video degradation pipeline that simulates real old-film characteristics from Internet-collected data; (2) an architecture-preserving text-to-audio-video (T2AV) to audio-video-to-audio-video (AV2AV) transition with prompt annealing that maximally retains the generative prior; and (3) first-frame image-to-video (I2V) anchoring with loss reweighting and waveform supervision for long-video extrapolation and audio fidelity. We also propose OmniVRBench, the first benchmark that evaluates audio-video restoration across visual quality, audio quality, temporal consistency, and audio-visual synchrony on 200 real historical clips. OmniVR surpasses all prior methods on all six visual metrics, achieves the best audio quality, and produces natural colorization---the first method to jointly address all three aspects. Code and weights will be publicly released. Project Page: https://xin1u.github.io/OminiVR_PAGE/
