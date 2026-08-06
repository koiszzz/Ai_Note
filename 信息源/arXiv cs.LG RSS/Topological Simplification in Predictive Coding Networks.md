# Topological Simplification in Predictive Coding Networks

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Adam Shaw, Jiayu Li, Michael Sperling, Michael Kim, Alvin Jin　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.02816)

------

arXiv:2608.02816v1 Announce Type: new

Abstract: We study the topology of learned representations in predictive coding networks (PCNs), a neuro-inspired bidirectional architecture, using a quantitative layer-wise persistent homology analysis. We train well-performing PCNs on a synthetic classification dataset ($\geq 99.9\%$ test accuracy) and on MNIST ($\geq 95\%$ test accuracy), and measure how topological features change across layers for different architectures and activation functions. We find that smaller PCNs collapse connected components across layers earlier than larger models (Spearman $\unicode{x1D70C} \in [0.72, 0.79]$ across activations), with model size measured as the sum of hidden-layer widths. We also observe a strong negative correlation ($\unicode{x1D70C} = -0.58$) between the depth at which simplification occurs and reconstruction error; i.e., architectures that simplify later reconstruct better. Finally, a seed-level bootstrap comparison across architectures and activations shows that PCNs consistently collapse connected components later than matched MLPs, with an average difference of $3.6$ layers. These results suggest that persistent homology offers a useful quantitative lens on the compression--reconstruction tradeoff in PCNs, and that both model capacity and the recurrent, bidirectional dynamics of predictive coding inference shape when this tradeoff is resolved across layers.
