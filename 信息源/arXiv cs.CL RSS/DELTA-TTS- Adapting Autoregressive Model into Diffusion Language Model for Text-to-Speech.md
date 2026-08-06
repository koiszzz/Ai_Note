# DELTA-TTS: Adapting Autoregressive Model into Diffusion Language Model for Text-to-Speech

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Junwon Moon, Yejin Lee, Seungbeom Kim, Hoseong Ahn, Sewoong Park, Heeseung Kim, Kyuhong Shim　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：eess.AS　|　原文：[打开链接](https://arxiv.org/abs/2607.04140)

------

arXiv:2607.04140v2 Announce Type: replace-cross

Abstract: Autoregressive (AR) text-to-speech (TTS) models generate discrete speech tokens sequentially, which makes inference slow and can degrade robustness, since local errors propagate to later positions and can escalate into hallucination. This limitation stems from their left-to-right AR commitment: each token must be determined before future speech-token context is available. However, such ordering is not an inherent requirement for TTS, since the model receives the full input text before synthesis. In this paper, we introduce DELTA-TTS, a lightweight LoRA-based adaptation framework that converts a pretrained AR TTS model into a discrete diffusion language model (dLLM) for confidence-ordered speech-token decoding. To better capture the local structure of speech, DELTA-TTS incorporates a convolution module that injects local acoustic context, together with a 1/t-weighted training objective and a time-shifted inference schedule that together defer low-confidence positions to later steps. Trained on only 585 hours of LibriTTS, DELTA-TTS achieves a 1.75% WER on Seed-TTS test-en, outperforming its AR backbone while generating tokens 3.3x faster. Further analysis shows that DELTA-TTS produces sharper text--speech alignment, increases overall decoding confidence, and mitigates the hallucinations observed in AR generation.
