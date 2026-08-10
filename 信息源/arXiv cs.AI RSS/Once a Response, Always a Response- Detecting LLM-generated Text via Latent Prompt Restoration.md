# Once a Response, Always a Response: Detecting LLM-generated Text via Latent Prompt Restoration

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Hongrui Bao, Yubing Ren, Yanan Cao, Jinhan You, Fang Fang, Shi Wang　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.05741)

------

arXiv:2608.05741v1 Announce Type: cross

Abstract: Large language models (LLMs) can generate fluent and convincing text at scale, creating growing risks for misinformation dissemination, educational misuse, and platform governance. These concerns make robust detection of machine-generated text increasingly necessary. Recent zero-shot detectors mainly exploit probability-based statistical discrepancies, but they do not explicitly account for the training process of LLMs, which leaves a distinct generation mechanism insufficiently modeled and limits detection robustness. To address this issue, we propose EchoPrompt, a training-free detector based on latent prompt restoration. Our key intuition is that machine-generated text is typically produced conditioned on an upstream prompt, and this hidden dependency can be partially reactivated by prepending a unified generic prefix. Specifically, EchoPrompt restores a generic assistant-response context, measures the induced likelihood gain with an instruction-tuned model, calibrates it against the corresponding base model, and aggregates the resulting differences into a score that quantifies latent prompt dependency. Extensive experiments show that EchoPrompt achieves state-of-the-art performance among zero-shot detectors while maintaining strong robustness across challenging evaluation settings.
