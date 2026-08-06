# When Context Returns: Toward Robust Internalization in On-Policy Distillation

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Xun Wang, Ruishuo Chen, Zhuoran Li, Yu Chen, Longbo Huang　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2606.11627)

------

arXiv:2606.11627v2 Announce Type: replace

Abstract: Recent work has shown that on-policy distillation can internalize privileged context, such as system prompts or task hints, into a student model so that the context is no longer needed at inference time. However, we identify a counterintuitive and previously unstudied phenomenon: reintroducing the original privileged context to the distilled student often degrades its performance, even on instances it already solves correctly without context. We term this phenomenon context-induced degradation and argue that robust internalization requires not only matching the teacher's context-conditioned behavior, but also remaining stable when the privileged context is reintroduced, a desirable property we call context invariance. To promote this property, we formulate a novel view-robust internalization risk and propose No-Context Anchoring (NCA), a lightweight yet effective consistency regularizer that uses the student's stop-gradient no-context output as an anchor and aligns its context-conditioned output via forward KL divergence. Across 14 configurations spanning diverse domains and model families, NCA improves context-conditioned accuracy in most settings and reduces context harm in 12 out of 14, while preserving or improving no-context performance, demonstrating greater robustness to context reintroduction.
