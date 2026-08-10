# Token-Native Storage: Read and Write in your Agent's Language

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Kumar Shivendu　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.DB　|　原文：[打开链接](https://arxiv.org/abs/2608.02376)

------

arXiv:2608.02376v2 Announce Type: replace-cross

Abstract: Search and database engines still store text as UTF-8, a format built for humans. But the systems that increasingly read and write that text (embedders, rerankers, and language-model agents) work with token IDs, not characters, so every access pays to translate between the two. As agents become the primary readers and writers of stored text, we argue for token-native storage: keep the text as the model's own byte-pair-encoding (BPE) token IDs. Packing r50k IDs as uint16 already beats UTF-8 by 2.25x on English with no compression, and an entropy coder on top reaches 3.30x. Across six tokenizers and three corpora (English, code, Hindi), compressing token IDs matches or beats every byte codec, even a corpus-trained zstd dictionary. Two findings sharpen the case. BPE numbers tokens by merge order instead of frequency, and re-ranking by frequency lets a plain integer codec (streamvbyte) recover most of the entropy coder's ratio while decoding ~7x faster, a near-free change to how AI labs publish vocabularies. And because a model reads token IDs, not text, a token-native store hands over the IDs directly instead of re-tokenizing on every read. The only requirement is that reader and writer share a tokenizer, and different model families often use different ones today, so we argue for standardization: a published, shared vocabulary, the way ASCII and UTF-8 standardized text.
