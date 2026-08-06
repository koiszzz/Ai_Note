# Pruned BPE: Post-training Visibility Pruning and Token Reallocation for Byte Pair Encoding

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Kenny Shao　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.00837)

------

arXiv:2608.00837v2 Announce Type: replace-cross

Abstract: Byte Pair Encoding (BPE) is widely used for subword tokenization, but standard BPE exposes every learned merge token to the downstream model, including tokens that mainly serve as intermediate construction units and rarely appear in the final encoded corpus. This paper proposes Pruned BPE, a post-training visibility-pruning and token-reallocation method that separates merge construction from model-visible vocabulary selection. After standard BPE training, tokens are evaluated by final exposure. Low-exposure tokens are retained as internal-only merge nodes, while their visible vocabulary slots are reassigned to better-exposed candidates learned through resumed training. During encoding, internal-only tokens are recursively expanded into visible descendants while the original BPE merge order is preserved. Experiments on two non-overlapping English- and Chinese-dominated corpora and their combination show that Pruned BPE consistently reduces encoded length relative to Standard BPE at the same training corpus, evaluation corpus, and model-visible vocabulary size. At a 40% exposure threshold, the reduction is approximately 0.27%--0.36% on same-corpus evaluations. In a vocabulary-only evaluation using a shared exact minimum-token dynamic-programming encoder, Pruned BPE retains an advantage of approximately 0.23%--0.31%, indicating that the improvement arises from a more efficient visible vocabulary. These gains represent a meaningful fraction of the approximately 1.5%--3.8% marginal reduction that would otherwise require adding another 2K Standard BPE tokens. Qualitative analysis shows that internal-only tokens include reusable English fragments, Chinese components, partial UTF-8 byte sequences, and structured-text fragments. The results indicate that post-training visibility pruning can improve BPE vocabulary efficiency without increasing the vocabulary exposed to the language model.
