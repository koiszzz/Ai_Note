# Faster-WAM: Efficient Inference-Time Future Conditioning for Robust World Action Models

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Weiheng Zhao, Haoyi Jiang, Xin Shi, Liu Liu, Fan Huang, Zhizhong Su, Wei Sui, Xinggang Wang　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.04404)

------

arXiv:2608.04404v1 Announce Type: new

Abstract: World Action Models (WAMs) improve robot manipulation by learning how the environment evolves beyond the current observation. However, existing approaches face a fundamental dilemma: Joint-WAMs preserve future-aware representations during inference but incur prohibitive computation costs, while efficient alternatives remove future modeling at inference time and may lose the robustness benefits of temporal reasoning. In this work, we revisit the role of future representations in WAMs and show that inference-time future conditioning is critical for generalization under distribution shifts. This observation motivates Faster-WAM, an efficient future-conditioning WAM that preserves future representations while avoiding expensive video-action interaction. Faster-WAM introduces a sparse future-conditioning framework that computes future representations once and selectively reuses them throughout action denoising. Specifically, we propose SparseMoT to replace ubiquitous layer-wise fusion with selective video-action interaction at a compact subset of network stages, and Interval KV-Fusion to aggregate multi-depth future representations without increasing attention complexity. Experiments demonstrate that Faster-WAM achieves a substantially better performance-efficiency trade-off than existing WAMs. On the out-of-distribution LIBERO-Plus benchmark, Faster-WAM improves success rate from 49.14% to 73.57% compared with Fast-WAM, while running 2.21$\times$ faster than Joint-WAM. It further achieves state-of-the-art performance on LIBERO and RoboTwin 2.0, while demonstrating strong robustness in real-world manipulation.
