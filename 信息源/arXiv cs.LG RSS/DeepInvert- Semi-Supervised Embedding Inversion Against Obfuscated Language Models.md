# DeepInvert: Semi-Supervised Embedding Inversion Against Obfuscated Language Models

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Zhicong Huang, Cheng Hong, Tao Wei　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CR　|　原文：[打开链接](https://arxiv.org/abs/2608.04477)

------

arXiv:2608.04477v1 Announce Type: cross

Abstract: Cloud-based language model services routinely process prompts containing sensitive information. Obfuscation-based defenses---including ObfusLM, SentinelLMs, TextObfuscator, and DPNR---mitigate this risk by transforming prompt representations before transmission, offering a lightweight alternative to cryptographic solutions. We show these defenses provide far less protection than previously believed.

We present DeepInvert, a semi-supervised embedding inversion attack that recovers original tokens from obfuscated representations with higher accuracy than prior methods. The key insight is that unlabeled obfuscated embeddings retain exploitable semantic structure despite perturbation. DeepInvert combines supervised training on labeled shadow data with a novel unsupervised consistency objective over unlabeled target embeddings, alternating between the two via a mixed training pipeline. Defense-aware adaptations further extend the attack to diverse obfuscation mechanisms across encoder-based and autoregressive architectures.

Experiments on nine defenses, five tasks, and four model architectures show that DeepInvert outperforms prior attacks on most defenses. Against ObfusLM, DeepInvert achieves 73.5\% top-1 token recovery versus 26.2\% for the previous best. Our results reveal a task-dependent tension: obfuscation schemes preserving enough signal for utility also retain sufficient structure for inversion, while schemes resisting inversion collapse utility. On simpler classification tasks, some DP-based defenses can maintain both. We call for a re-evaluation of this defense class.
