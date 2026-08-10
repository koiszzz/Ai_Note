# Vorch-Streamer: Extending Human Audio-Visual Generation to Real-Time Long-Form Streaming

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Menglin Han, Yang Ding, Yulei Lu, Haoran Yu, Xin Ma, Junyi Chen, Zhangkai Ni, Lin Ma, Yaohui Wang　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05663)

------

arXiv:2608.05663v1 Announce Type: new

Abstract: Real-time long-form avatar audio--video generation requires causal, continuous synthesis while maintaining audiovisual synchronization and visual consistency. Adapting a pretrained bidirectional model to this setting presents two key dilemmas. First, autoregressively reusing generated blocks as context creates exposure bias, causing errors and visual drift to accumulate over long rollouts. Second, a global speech utterance does not indicates a causal generator which portion should be spoken next when only limited local audio--video context is available. We present \textbf{Vorch-Streamer}, a post-training framework that addresses these challenges and enables real-time long-form Text-to-Audio-Video (T2AV) streaming. We construct a synthetic corpus of 80K avatar clips spanning 12--21 seconds and first train a causal generator with mixed Teacher Forcing and Diffusion Forcing. We then apply long-horizon Self Forcing with DMD distillation, exposing the model to its own rollout distribution while preserving the quality of the pretrained bidirectional teacher. To explicitly control speech progression, an external language model predicts discrete 25-Hz speech-planning tokens, whose continuous features condition the audio diffusion branch and align each causal block with the content it should speak. With bounded causal context and four-step denoising, Vorch-Streamer jointly generates audio and video from text at 27.12 FPS, exceeding the 24-FPS real-time playback rate while maintaining competitive audio--lip synchronization and strong identity preservation over long-form generation.
