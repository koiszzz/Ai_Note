# In-Context Forcing: Uncovering Context Effects in Autoregressive Video Diffusion

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Lingxiao Yang, Liu Liu, Moran Li, Han Feng, Wenjian Cao, Jiangning Zhang, Ye Shi　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05237)

------

arXiv:2608.05237v1 Announce Type: cross

Abstract: Current few-step autoregressive video diffusion models depend on previous fully denoised clean frames as context for all denoising steps of the current frame. However, these clean frames leak excessive local details, which causes the model to take shortcuts, resulting in compromised temporal semantics and dynamics. Inspired by the perspective of diffusion as masking, we explore the impact of noisy contexts on few-step autoregressive generation. Yet, simply applying contexts with the same noise levels provides insufficient guidance, leading to poor temporal consistency. To resolve this dilemma, we introduce In-Context Forcing, a progressive autoregressive paradigm that utilizes contexts with decreasing noise levels. By applying less masking to distant frames and more masking to adjacent ones, this approach provides adaptive guidance, effectively ensuring both robust temporal consistency and high inter-frame dynamics. Furthermore, by decoupling the strict dependence on previous clean frames, our paradigm enables cross-frame parallel denoising, achieving substantial inference acceleration without sacrificing performance. Extensive experiments on VBench demonstrate that our method significantly outperforms state-of-the-art approaches in both visual fidelity and inference speed.
