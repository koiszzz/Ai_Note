# Sequential Kernel-based Conditional Independence Testing via Adaptive Betting

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Zheng He, Danica J. Sutherland　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：stat.ML　|　原文：[打开链接](https://arxiv.org/abs/2606.18993)

------

arXiv:2606.18993v2 Announce Type: replace-cross

Abstract: Testing conditional independence is fundamental yet intrinsically difficult: without additional assumptions, Type I error control is impossible in general. The "Model-X'' paradigm addresses this difficulty by assuming exact knowledge of a relevant conditional distribution. While small deviations from this assumption can sometimes be tolerated in classical one-shot testing, existing sequential conditional independence tests typically require the Model-X conditional to be known exactly, making them fragile when it must instead be estimated. We propose a new approach that is substantially more robust to such estimation error. Our method applies testing-by-betting to an adaptively optimized Kernel Conditional Independence statistic, together with a normalization scheme and a truncate-and-shift calibration strategy. These modifications greatly reduce Type I error inflation while preserving high power across high-dimensional synthetic benchmarks and real-world fairness tasks, outperforming existing sequential Model-X approaches. Code is available at https://github.com/he-zh/SKCI.
