# Enfold: Folding World Model Imagination into Predictive Representations for Ultra-Efficient Embodied Control

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Weili Zeng, Yitong Xing, Fulong Liu, Chengqun Yang, Antao Xiang, Feng Tian, Jingnan Gao, Jisong Cai, Xin Wang, Xiaomin Wu, Yao Mu, Xiaokang Yang, Yichao Yan　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.RO　|　原文：[打开链接](https://arxiv.org/abs/2607.26657)

------

arXiv:2607.26657v3 Announce Type: replace-cross

Abstract: World generative models are typically used through what they produce: a rendered future, a video-conditioned action, or latent context computed by a costly generative branch. We argue that their more reusable asset is the computation that constructs a future. As a generator transforms a corrupted future into a coherent trajectory, its intermediate states organize appearance, spatial layout, and interaction across levels of abstraction. Can this future-generative computation be internalized in a representation inferred from the present alone? We present Enfold, which transfers this computation into a representation predicted from the current visual context and language instruction. During training, multi-level states exposed as the generator processes the observed future supervise a current-only encoder. The learned representation is fed back to condition future generation and is read by task heads without allowing task gradients to reshape the encoder. At deployment, action prediction no longer executes the generator. Across LIBERO, RoboTwin2.0, and real-robot tasks, Enfold supports strong control while reducing action latency by $3.7\times$ relative to Fast--WAM, Enfold-Flash reaches $10.1\times$. Representation analyses show that it suppresses nuisance variation and preferentially captures changes that emerge over longer horizons. When the current scene is altered by human intervention, both the generated continuation and the executed actions adapt, which is inconsistent with fixed trajectory replay. These results recast a world generator as a source of predictive control representations: its future need not be materialized at every step if its internal structure can be enfolded into the present.
