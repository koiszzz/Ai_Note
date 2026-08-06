# IPPRO: Importance-based Pruning with PRojective Offset for Magnitude-indifferent Structural Pruning

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Jaeheun Jung, Jaehyuk Lee, Yeajin Lee, Donghun Lee　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2507.14171)

------

arXiv:2507.14171v3 Announce Type: replace-cross

Abstract: Importance-based structured pruning overwhelmingly relies on filter magnitude. This proxy is fundamentally flawed: due to scale invariance, functionally identical filters can receive arbitrarily different importance scores under rescaling. We propose IPPRO (Importance-based Pruning with PROjective Offset), a scale-invariant pruning framework grounded in projective geometry. By embedding filters into real projective space ($\mathbb{RP}^N$), IPPRO resolves the singularity at the origin, placing all filters at an equal angular distance from the zero filter. We define PROscore, which captures functional importance by measuring a filter's angular displacement toward zero under a single gradient step (directional collapse). We further connect PROscore to exact $L_0$ relaxation, proving this one-shot criterion reliably predicts multi-step pruning dynamics. Extensive experiments across CNNs, Vision Transformers, and LLMs (e.g., ResNet, DeiT, LLaMA) demonstrate that IPPRO consistently outperforms existing methods, yielding particularly striking gains under high compression and no-fine-tuning regimes, IPPRO establishes a robust, architecture-agnostic paradigm for neural network compression.
