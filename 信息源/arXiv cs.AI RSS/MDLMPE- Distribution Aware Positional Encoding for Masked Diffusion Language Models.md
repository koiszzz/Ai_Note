# MDLMPE: Distribution Aware Positional Encoding for Masked Diffusion Language Models

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Tong Ling, Hang Lei, Feng Xiao, Changhui Sun, Jiahang Xie, Hao Liu, Lu Liu, Yanlong Du　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.03769)

------

arXiv:2608.03769v1 Announce Type: cross

Abstract: Masked diffusion language models (MDLMs) enable parallel generation and bidirectional context modeling, but their positional context differs fundamentally from that of autoregressive (AR) models. Whereas AR decoding exposes a contiguous prefix, MDLM denoising produces dynamic, non-contiguous configurations of revealed and masked tokens. Conventional positional encodings such as RoPE capture sequence order and pairwise displacement but remain insensitive to this evolving token-availability structure. To address this limitation, we propose MDLMPE, a positional encoding designed specifically for masked diffusion. To the best of our knowledge, MDLMPE is the first method to make positional representations explicitly aware of the changing revealed/masked configuration. It represents token availability as a binary sequence, applies distance-aware Gaussian weighting, and projects the resulting pattern through a cosine basis to obtain distribution-aware positional features. These features are added to token embeddings and mapped by a lightweight MLP to angular offsets that modulate the standard RoPE phases. Extensive experiments on LLaDA and DREAM demonstrate that MDLMPE generally outperforms conventional positional encoding methods across supervised fine-tuning, pretraining, zero-shot evaluation, and block-diffusion settings. Further ablations show that the complete combination of availability state, Gaussian locality, spectral basis, and embedding injection yields the strongest result. These results establish the evolving token-availability distribution as a useful positional signal for masked diffusion language models.
