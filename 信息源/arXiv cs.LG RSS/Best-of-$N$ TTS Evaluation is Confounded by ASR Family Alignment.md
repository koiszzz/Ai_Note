# Best-of-$N$ TTS Evaluation is Confounded by ASR Family Alignment

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Taehyung Yu, Seongjae Kang　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2607.08256)

------

arXiv:2607.08256v2 Announce Type: replace-cross

Abstract: Best-of-$N$ (BoN) inference improves content consistency in zero-shot text-to-speech by selecting among multiple candidates with an automatic speech recognition (ASR) verifier. We identify an evaluation confound: the apparent quality of a verifier depends strongly on the ASR family used for evaluation. On LibriSpeech-PC with F5-TTS, verifier rankings vary substantially across Whisper, wav2vec 2.0, and HuBERT evaluators, while same-family verifier and evaluator pairs recover considerably more oracle headroom than cross-family pairs despite highly similar representations. This pattern suggests identity- or lineage-level coupling rather than general representational similarity. To mitigate this bias, we propose two cross-family rank ensembles: rank averaging and conjunctive max-rank. Both improve mean word error rate across independent evaluators without degrading automatic similarity or quality metrics, and the best ensemble achieves a $12\%$ relative WER reduction over F5-TTS at $N=10$. These findings motivate cross-evaluator triangulation as a more reliable default for reporting BoN TTS performance.
