# KVAE: Family of Tokenizers for Multimodal Generative Models

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Andrey Shutkin, Denis Parkhomenko, Ivan Kirillov, Kirill Chernyshev, Kirill Malakhov, Ilia Vasiliev, Ilia Trushkin, Valeriya Kobenko, David Chikovani, Alexander Ivanov, Azat Saginbaev, Egor Silvestrov, Ivan Mikheev, Konstantin Zakharov　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05798)

------

arXiv:2608.05798v1 Announce Type: new

Abstract: Latent diffusion modeling (LDM), a prominent paradigm, utilizes tokenizers to map input signal to compressed representation. This dependency positions tokenizer as an integral part of generation process itself, since it affects learning speed, quality of synthesized samples and lay foundation for later applications. This report presents series of KVAE tokenizers for audio, image and video, all designed for subsequent text-conditioned generation: KVAE-Audio, a continuous full-band 48 kHz tokenizer with a 50 Hz latent of 64 channels; KVAE-3D -- two causal video tokenizers for 4x16x16 and 4x8x8 compression; KVAE-2D, an image model, compressing input by factor of 8 with 32 channels. We demonstrate that reconstruction (PSNR, LPIPS, PESQ, etc.) and generation results on objective (Frechet Distance, CLIP score, CLAP score, etc.) and subjective (side-by-side evaluation) metrics matches or surpasses frontier opensource tokenizers, such as VAEs from Wan-2.2, HunyuanVideo-1.5, FLUX.2, MovieGen, StableAudio and MMAudio. Considering difficulty of development, we share with community training details, model selection method and ablation on design choices. The code is publicly available at https://github.com/kandinskylab/kvae and https://github.com/kandinskylab/kvae-audio.
