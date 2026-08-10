# Cautious Context Steering for Language Model Personalization

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Gihoon Kim, Jeyoung Lee, Suhan Woo, Sekwon Oh, Minsu Jeon, Hyounsoo Han, Euntai Kim　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.05813)

------

arXiv:2608.05813v1 Announce Type: new

Abstract: Personalizing language models (LMs) to individual user preferences is essential for aligning responses with diverse goals and backgrounds. Existing methods typically train a separate adapter for each user or learn a reward model whose scores depend on the user. Despite explicitly optimizing for each user, these methods must learn from limited observations and therefore suffer from data sparsity and poor generalization to unseen users and domains. In-context learning (ICL) and Context Steering (CoS) can instead provide more effective personalization by conditioning the base LM directly on user context and leveraging its pretrained capabilities without per-user training. Yet neither adapts the influence of that context across decoding steps: ICL leaves it uncontrolled, whereas CoS applies a fixed steering coefficient and requires two LM forward passes per step. We propose Cautious Context Steering (CCS), which adds a lightweight adapter to a frozen backbone LM to decide at each token whether and how strongly user context should affect generation. The adapter learns this behavior from an oracle context-conditioned LM and preserves the base LM when the context is not helpful. A single CCS adapter trained on only one dataset improves generation quality both in-domain and across four out-of-distribution personalization benchmarks, demonstrating robust generalization to new users and domains. CCS also avoids per-user fine-tuning and the additional context-conditioned forward pass required by CoS, substantially reducing inference cost.
