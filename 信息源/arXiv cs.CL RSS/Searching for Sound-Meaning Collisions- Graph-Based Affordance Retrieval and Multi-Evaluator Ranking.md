# Searching for Sound-Meaning Collisions: Graph-Based Affordance Retrieval and Multi-Evaluator Ranking for Pun Translation at CLEF 2026 JOKER Task 2

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Russell Taylor, Adam Brikman, Prateek Awate　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.04299)

------

arXiv:2608.04299v1 Announce Type: new

Abstract: Fifteen years ago, Low proposed that pun translators should stop searching for equivalent words and instead search for new points of contact between sound and meaning. In this paper, we investigate that idea computationally. We model pun translation as a process of discovery, exploration, and selection. A retrieval system searches semantic and phonological neighborhoods for target-language affordances: sound-meaning bridges that may support new wordplay. Multiple language models then explore these opportunities by generating competing translations, while a multi-perspective generate-and-rank architecture selects among them. Beyond system development, our primary contribution is an analysis of how retrieved affordances propagate through the translation process. We find that generators actively exploit retrieved opportunities, evaluators progressively concentrate around stronger sound-meaning bridges, and exact phonological collisions are selected at disproportionately high rates when available. At the same time, many puns still yield no usable affordances, suggesting that retrieval remains the central bottleneck in computational pun translation. The resulting picture is remarkably close to the process envisioned by Low. Successful pun translation emerges not from preserving source-language words, but from discovering new places in the target language where sound and meaning collide.
