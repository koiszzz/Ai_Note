# Oilbird: Training-Free Speculative Decoding with Keys the Verifier Already Computes

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Tao Jin, Phuong Minh Nguyen, Zhenzhu Yan, Teeradaj Racharak, Naoya Inoue　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.03839)

------

arXiv:2608.03839v1 Announce Type: new

Abstract: Training-free speculative decoding drafts by matching an exact suffix of the context against a pool of earlier context. That lookup misses correct drafts already in the pool, most visibly on tool-calling traffic, where a request repeats almost everything but the few values minted for it, and where one rejected token discards the correct continuation behind it. We diagnose the failure position by position across ten benchmarks and find it to be a problem of addressing rather than of coverage: on our densest tool-calling benchmark, about half of what the strongest exact-match drafter misses is present in the pool yet unreachable by exact matching. We therefore propose a second, semantic draft source: the same pool, re-keyed by the hidden state the verifier has already computed at each committed token, together with a merge that lets it ride inside an existing lexical drafter's tree. In three published drafters, at matched pool and budget, it lifts accepted length by 24-29%. Oilbird reaches 4.4x autoregressive decoding speed on API-Bank, against 3.9x for the strongest training-free baseline in our harness and 2.0x for EAGLE-3.
