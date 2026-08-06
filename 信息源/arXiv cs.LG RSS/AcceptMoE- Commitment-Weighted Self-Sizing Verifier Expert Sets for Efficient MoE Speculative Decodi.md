# AcceptMoE: Commitment-Weighted Self-Sizing Verifier Expert Sets for Efficient MoE Speculative Decoding

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Shuang Liang (Mark), Hao (Mark), Chen, Zhiwen Mo, Qianzhou Wang, Guoyu Li, Lingxiao Ma, Wayne Luk　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.02989)

------

arXiv:2608.02989v1 Announce Type: new

Abstract: Speculative decoding verifies a tree of draft tokens in one target-model forward pass. For a mixture-of-experts (MoE) target, however, parallel verification can activate the union of the experts selected by all tree nodes, even though only a small subset of those nodes reaches the accepted output. Token count, activated-expert union size, and expert-weight traffic are therefore distinct cost measures: reducing the token workload need not shrink the expert union proportionally, and under offloading, transfer traffic also depends on cache residency. We introduce AcceptMoE, a verifier-side expert selector that combines target-router scores with offline-estimated commitment probabilities and automatically adjusts the number of eligible experts for each verification block, eliminating the need for a user-specified expert budget. Under offloading, AcceptMoE conditions expert eligibility on cache residency instead of predicting natural routes and prefetching the corresponding expert weights. Although constraining target-expert eligibility changes the model distribution, across 12 model-task pairs spanning three MoE targets and four benchmarks, AcceptMoE's mean accuracy is 0.27 percentage points lower than that of EAGLE-3 speculative decoding with natural routing. Served with SGLang at batch size one, it reaches 1.290 times the throughput of this baseline with all expert weights in GPU memory, and 2.06 times under physical expert offloading, while reducing host-to-device traffic by 73.6 percent to 77.1 percent.
