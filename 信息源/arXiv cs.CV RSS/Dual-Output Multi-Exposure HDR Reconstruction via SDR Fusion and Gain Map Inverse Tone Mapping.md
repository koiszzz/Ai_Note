# Dual-Output Multi-Exposure HDR Reconstruction via SDR Fusion and Gain Map Inverse Tone Mapping

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Jinho Kim, Jinwoo Kim, Seon Joo Kim　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05626)

------

arXiv:2608.05626v1 Announce Type: new

Abstract: We propose DOME-HDR, a dual-output multi-exposure HDR reconstruction framework that jointly produces a perceptually balanced SDR image and a consistent HDR image via gain map inverse tone mapping. Given three bracketed LDR inputs, DOME-HDR first synthesizes a base SDR using a LoRA-adapted latent diffusion model. A dual cross-attention fusion module injects complementary structural and color cues from the under- and over-exposed images while anchoring on the mid exposure for stability. The synthesized SDR then guides HPGM, our HDR Prior-guided Gain Map network, to predict a spatially varying gain map for reliable dynamic-range expansion. We evaluate on Kalantari, Tel, and Challenge123 using both full-reference and no-reference metrics, where DOME-HDR achieves state-of-the-art HDR reconstruction quality; ablations further confirm the effectiveness of dual cross-attention and SDR-guided gain map estimation.
