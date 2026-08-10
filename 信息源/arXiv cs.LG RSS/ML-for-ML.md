# ML-for-ML

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Yutong Zhao, Noga H. Rotman, Gianni Antichi, Ran Ben Basat　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.NI　|　原文：[打开链接](https://arxiv.org/abs/2608.06046)

------

arXiv:2608.06046v1 Announce Type: cross

Abstract: AI training workloads are growing rapidly, making their time, energy, and infrastructure costs increasingly important. In shared cloud clusters, training and fine-tuning jobs compete with co-running workloads for network resources, while network mechanisms and ML training choices are typically optimized separately: networking controls how bytes move, whereas ML systems control when and how much communication occurs. We argue that this separation leaves end-to-end performance on the table.

We present ML-for-ML, a cross-layer perspective in which network-side and ML-side knobs are selected jointly under a shared time-to-target-loss objective. Our preliminary prototype shows that by co-optimizing the ML and network parameters, we reach the target loss up to 42% faster.
