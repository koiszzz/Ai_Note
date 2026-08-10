# How to Recognize New Words: A Comparison Between Context Biasing Methods and Speech LLMs

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Christian Huber, Alexander Waibel　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.05759)

------

arXiv:2608.05759v1 Announce Type: new

Abstract: Recognizing new and rare words - named entities, acronyms, domain specific special words, and other items scarce in training data - remains a key challenge for automatic speech recognition (ASR). We compare two strategies for this: context biasing methods, where an ASR model is extended such that during inference a word list can be supplied, and speech large language models (LLMs) prompted with context directly. We evaluate two context biasing methods based on Whisper against three speech LLMs across read and non-read speech, reporting biased, unbiased, and overall word error rate (WER). The context biasing methods cut biased WER by up to 88% relative while leaving other words largely unaffected. Speech LLMs excel on read speech but generalize less well to non-read speech, and prove sensitive to distractor count and prompt word order. We characterize the resulting trade-offs to guide method selection.
