# DIVE: Dynamic Iterative Visual Evidence Construction for Efficient Vision-Language Models

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Chen Zhong, Xiao An, Zijie Wang, Jiepan Li, Guangyi Yang, Wei He　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.04496)

------

arXiv:2608.04496v1 Announce Type: new

Abstract: Visual inputs in vision-language models (VLMs) are often encoded into substantially longer token sequences than text, making visual tokens a major bottleneck for efficient inference. Abundant recent methods address this bottleneck by scoring token importance and pruning low-scoring tokens in a single pass. However, one-shot scoring is insufficient because a token's prompt-relevant usefulness depends on the evidence already retained. Motivated by this insight, we introduce DIVE (Dynamic Iterative Visual Evidence Construction), a training-free framework that recasts visual-token pruning as dynamic evidence construction. DIVE repeatedly selects the remaining token with the highest residual-conditioned score, updates the visual and prompt residuals to discount the evidence already explained, and re-evaluates the remaining tokens. This select-update-re-evaluate process builds a retained set of complementary, prompt-relevant evidence. Experiments across eight image-understanding benchmarks show that DIVE consistently preserves performance across token budgets. With an 88.9% reduction in visual tokens, DIVE retains 98.2% of the uncompressed model's average performance. Code is available at https://github.com/Zhong-Chenchen/DIVE.git.
