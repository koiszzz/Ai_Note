# Beyond Global Routing Aggregation: Phase-Aware Expert Merging for MoE Vision-Language Models

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Hongyu Zhang, Cheng Yan, Xiang Xia, Wuyang Zhang　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.04454)

------

arXiv:2608.04454v1 Announce Type: cross

Abstract: Mixture-of-experts vision-language models (MoE-VLMs) increase model capacity with sparse expert activation, yet deployment requires storing the full expert pool. Training-free expert merging reduces this burden, and many routing-based methods aggregate routing statistics across all tokens to determine merge compatibility. However, MoE-VLM inference is phase-structured: image-context tokens carry visual content, question tokens specify the query, and answer tokens produce the output, with different counts and routing distributions. Because image-context tokens are far more numerous, global aggregation can overemphasize image-context processing and obscure phase-conditioned expert roles, making experts serving different phases appear interchangeable and degrading model performance. We therefore argue that MoE-VLM expert merging should preserve phase-conditioned expert roles, judging compatibility by how experts serve different phases rather than globally aggregated routing statistics. Based on this view, we propose RoleMerge, a training-free method that constructs each expert's Routing Role Profile (RRP) from phase-normalized routing statistics, capturing its relative phase preference. Guided by expert-phase information loss, RoleMerge merges experts with compatible profiles and their corresponding router entries while preserving answer-decoding expert distinctions. Experiments on three models and multiple benchmarks show that RoleMerge preserves more of the full model's performance than alternative expert-merging methods at matched expert-retention ratios, with relative improvements of up to 9.6 percent in six-task macro-average performance. These results validate phase-conditioned expert roles as a more effective basis than global routing aggregation for MoE-VLM expert merging.
