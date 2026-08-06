# OmniEdit-Bench: A Comprehensive Benchmark for Instruction-based Video Editing

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Chenxuan Miao, Yutong Feng, Yi Lu, Yunfeng Yan, Donglian Qi, Shiwei Zhang, Yu Liu, Xi Chen, Hengshuang Zhao　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05049)

------

arXiv:2608.05049v1 Announce Type: new

Abstract: Instruction-based video editing (IVE) is an emerging field with broad applications, yet evaluating editing models remains challenging. Existing benchmarks suffer from two major limitations: limited task coverage inherited from image editing, which overlooks video-specific dimensions, and inadequate metrics that fail to measure instruction fidelity, allowing incorrect edits to receive high scores due to strong visual priors from the original video. To address these issues, we introduce a comprehensive and structured benchmark for IVE. Our benchmark decomposes editing tasks into multiple video-specific dimensions, including spatial, temporal, audio, and reference-based editing, extending beyond conventional frame-level evaluation. It also distinguishes explicit and implicit instructions and incorporates reasoning-based scenarios to better reflect real-world requirements. Furthermore, we propose an evaluation framework that assesses editing quality from four complementary dimensions: accuracy, preservation, realism, and consistency, using both human judgments and state-of-the-art vision-language models. To emphasize instruction fidelity, we introduce an accuracy-aware penalty mechanism that conditions other scores on accuracy, preventing visually plausible but incorrect edits from receiving inflated evaluations. Extensive experiments on representative open-source and commercial models show that current IVE models remain far from satisfactory. OmniEdit-Bench provides a comprehensive and reliable testbed for evaluating instruction-based video editing and offers insights into future research directions.
