# SFT Conflicts, RL Coexists: A Theoretical and Empirical Analysis of Multi-Task Learning for LLMs

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Kejian Zhu, Zhuoran Jin, Shangqing Tu, Hongbang Yuan, Yushi Bai, Kang Liu, Juanzi Li, Jun Zhao　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.03573)

------

arXiv:2608.03573v1 Announce Type: cross

Abstract: Supervised Fine-Tuning (SFT) and Reinforcement Learning (RL) exhibit fundamentally different behaviors in enhancing multi-task reasoning for large language models (LLMs). Our preliminary experiments revealed a phenomenon: SFT suffers from severe task conflicts under multi-stage training, whereas RL enables stable coexistence across diverse tasks. Empirically, we trace this to the parameter level, observing that RL induces sparse and approximately orthogonal updates across tasks. We provide a theoretical explanation for this mechanism by analyzing multi-task gradient interference. Our results reveal a distinction: interference in SFT is norm-limited, scaling with the absolute gradient magnitude, whereas interference in RL is variance-limited, bounded by the gradient variance induced by advantage normalization and on-policy optimization. This small variance bound yields near-orthogonal optimization directions across tasks. Leveraging this insight, we propose Parallel-RL, a paradigm that decouples multi-task training, significantly improving efficiency and flexibility.
