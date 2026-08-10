# Layer-wise Positional Bias in Short-Context Language Modeling

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Maryam Rahimi, Mahdi Nouri, Yadollah Yaghoobzadeh　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2601.04098)

------

arXiv:2601.04098v2 Announce Type: replace-cross

Abstract: Transformer language models systematically prefer tokens at specific input positions regardless of semantic relevance---a phenomenon known as positional bias. Prior work characterizes this bias in model behavior through performance drops in long-context tasks or in model architecture through attention-based analyses. However, it remains unmeasured how input positions actually drive predictions layer by layer. We introduce a layer conductance framework within a sliding-window design, applied to short-context next-word prediction to isolate model-internal behavior from task and context-window pressure. The resulting layer-wise positional importance profiles are stable across diverse texts and lexical scrambling, confirming they reflect model-internal structure. Characterizing how these profiles evolve across depth, we find recency bias increases monotonically while primacy bias is subtle and diminishes. We also find that this positional bias is not uniform across word types: function words exhibit higher recency bias while content words show higher primacy bias.
