# MoECa: Aligning Feature Reuse with Expert Decomposition in Diffusion Transformers

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Maoliang Li, Haojing Chen, Jiayu Chen, Zihao Zheng, Xinhao Sun, Hailong Zou, Xiang Chen　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2606.15615)

------

arXiv:2606.15615v2 Announce Type: replace

Abstract: Diffusion Transformers with Mixture-of-Experts (DiT-MoE) improve model capacity under sparse activation, but diffusion inference is still bottlenecked by redundant computation across timesteps. Existing caching methods mainly operate at the token level, which becomes suboptimal in DiT-MoE because each token update is internally decomposed into multiple routed expert branches. Our analysis shows that cross-timestep redundancy in DiT-MoE is better characterized at the expert-branch level than at the whole-token level. Based on this observation, we propose MoECa, a fine-grained caching framework that performs branch-level feature reuse across timesteps. MoECa further introduces expert-aware adaptive control and synchronized cache updates across MoE and attention paths to maintain stable intermediate states. Experiments on multiple DiT-MoE models show a favorable speed--quality trade-off, with up to 2.93$\times$ speedups while preserving generation quality.
