# GraphCliff: Short-Long Range Gating for Modeling Critical Activity Changes Caused by Subtle Molecular Differences

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Hajung Kim, Jueon Park, Junseok Choe, Seungheun Baek, Hyeon Hwang, Jaewoo Kang　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CE　|　原文：[打开链接](https://arxiv.org/abs/2511.03170)

------

arXiv:2511.03170v3 Announce Type: replace-cross

Abstract: The quantitative structure-activity relationship assumes a smooth mapping between molecular structure and biological activity. However, activity cliffs, defined as pairs of structurally similar compounds with large potency differences, break this continuity. Recent activity cliff benchmarks show that machine learning models with extended connectivity fingerprints outperform graph neural networks. Our analysis shows that the embedding distances of conventional graph neural networks fail to reflect the activity differences, collapsing structurally similar yet functionally divergent molecules into nearly indistinguishable representations. To recover sensitivity to such local changes while preserving global molecular context, we propose GraphCliff, which integrates short and long range information at the node level through a locally conditioned gating mechanism. Experimental results demonstrate that GraphCliff consistently improves performance on both non-cliff and cliff compounds, with layer-wise embedding analyses attributing these gains to sharper discrimination of structurally similar molecules relative to strong baseline graph models.
