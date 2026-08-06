# Less Traffic, Better Outcomes: Competition-Aware Request Dispatch in Real-Time Ad Exchanges

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Jonaid Shianifar, Blaz Mramor, Fangda Zou, Matthieu C. Martin, Xingsheng Guo, Zhihua Zhu, Rong Zhou, Bichen Shi　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.03705)

------

arXiv:2608.03705v1 Announce Type: cross

Abstract: Real-time bidding (RTB) ad exchanges typically forward nearly all incoming requests to demand-side platforms (DSPs), even though only a small fraction receive bids. This over-distribution weakens auction outcomes: DSPs throttle participation under compute and budget constraints, reducing the effective use of limited bidding capacity. We present a competition-aware request dispatch framework that uses distributional bid prediction and probabilistic forwarding to decide whether each request should be sent to each DSP. The system adapts per-DSP thresholds over time through lightweight policy optimization to track non-stationary market conditions. We evaluate the framework through four sequential online experiments on a production platform serving over 20 billion daily requests. A full multi-DSP deployment reduces DSP request volume under the policy by 34.2% while increasing net revenue by 4.6% (p<0.001) in a recent 14-day window after an initial DSP adaptation period. Further analysis highlights strong heterogeneity across traffic segments and reveals that aggregate metrics can be misleading. Segment-level and per-DSP analyses suggest that the policy surfaces comparative advantages among DSPs, improving monetized outcomes without increasing overall request volume.
