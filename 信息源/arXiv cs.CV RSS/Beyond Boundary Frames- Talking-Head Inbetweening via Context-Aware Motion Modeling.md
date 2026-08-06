# Beyond Boundary Frames: Talking-Head Inbetweening via Context-Aware Motion Modeling

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Yuchen Deng, Hai-Tao Zheng, Jie Wang, Xiaotian Li, Feidiao Yang, Yuxing Han　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2512.03590)

------

arXiv:2512.03590v3 Announce Type: replace

Abstract: Existing talking-head generation methods primarily target open-ended generation rather than bridging two existing video segments. In this paper, we study talking-head inbetweening, a practical editing task that aims to generate realistic intermediate frames under fixed endpoint constraints. Unlike generic video inbetweening, this task requires recovering subtle speech-driven facial dynamics over long temporal gaps, where the boundary frames alone provide insufficient guidance for realistic motion recovery. To address this problem, we propose BBF (Beyond Boundary Frames), a unified context-aware framework for talking-head inbetweening. BBF consists of three complementary components: Endpoint Anchoring for preserving endpoint consistency, Motion Evolution Modeling for capturing plausible temporal transitions from surrounding visual context, and Speech Dynamics Refinement for injecting fine-grained speech-driven facial dynamics from speech audio. A progressive optimization strategy further balances structural consistency and motion refinement during denoising. Extensive experiments on the talking-head benchmarks HDTF and Hallo3 demonstrate that BBF consistently achieves state-of-the-art performance. In particular, BBF surpasses the strongest baseline on Hallo3 by 23.3% in FID and 36.5% in FVD. Moreover, BBF demonstrates strong generalization on generic video inbetweening benchmarks.
