# ABC: Numerical Data Collection under Local Differential Privacy without Prior Knowledge

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Incheol Baek, Hyungbin Kim, Yon Dohn Chung　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CR　|　原文：[打开链接](https://arxiv.org/abs/2608.05737)

------

arXiv:2608.05737v1 Announce Type: cross

Abstract: Local Differential Privacy (LDP) provides strong privacy guarantees for collecting numerical data. A fundamental challenge, however, is that existing LDP mechanisms require a predefined data domain, which is often unknown in practice. This lack of prior knowledge creates a critical dilemma for the data collector: if the chosen domain is too narrow, values outside the range are clipped, leading to information loss. Conversely, if the domain is too wide, excessive noise is added during the privatization process, which degrades the quality of collected data. This highlights the need for methods that can dynamically estimate the data domain.

In this work, we propose an adaptive LDP framework that addresses this problem. In our method, each user sends two pieces of information: their perturbed numerical data, and a privatized signal indicating if their original value was clipped by the current domain. By aggregating these signals, our proposed method, Adaptive Bounding of Clipping regions (ABC) method, iteratively adjusts the domain to fit the underlying data distribution without prior knowledge. Our theoretical analysis shows that the estimated data domain converges to an appropriate range.

In the empirical evaluation, the results demonstrate that our framework significantly improves the quality of numerical data collection across various datasets and underlying LDP mechanisms. We also show that the estimated range successfully converges in practice and our approach is robust to its hyperparameters through comprehensive ablation studies.
