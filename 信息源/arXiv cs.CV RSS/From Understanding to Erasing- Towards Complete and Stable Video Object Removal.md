# From Understanding to Erasing: Towards Complete and Stable Video Object Removal

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Dingming Liu, Wenjing Wang, Chen Li, Jing Lyu, Haotian Dong　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2604.01693)

------

arXiv:2604.01693v2 Announce Type: replace

Abstract: Video object removal aims to erase target objects while reconstructing visually plausible and temporally coherent content. However, target objects often induce shadows, reflections, illumination changes and other effects that extend beyond the provided mask, making conventional mask-conditioned completion prone to visible residuals. We therefore formulate side-effect-aware object removal as an understanding-guided process that integrates object--effect relations, affected-region localization, and context-aware reconstruction. Specifically, we introduce Object-Induced Relation Distillation to transfer token-level object--effect relations from a pretrained vision foundation model to the video diffusion model. We then design Object-aware Framewise Context Cross-Attention to combine target-object semantics with per-frame background context for removal and reconstruction, and propose Attention-guided Region Localization to derive a soft spatial prior over the target object and its affected regions. Extensive experiments across multiple benchmarks demonstrate that our method achieves more complete object-and-effect removal and outperforms existing approaches in removal quality, side-effect suppression, and temporal consistency.
