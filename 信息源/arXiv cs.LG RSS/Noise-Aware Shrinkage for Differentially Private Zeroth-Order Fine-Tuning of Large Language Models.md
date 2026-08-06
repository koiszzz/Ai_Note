# Noise-Aware Shrinkage for Differentially Private Zeroth-Order Fine-Tuning of Large Language Models

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Lele Zheng, Weifeng Kong, Xinyi Zhang, Ke Cheng, Tao Zhang, Yulong Shen　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.03277)

------

arXiv:2608.03277v1 Announce Type: new

Abstract: Differentially private zeroth-order optimization (DP-ZO) enables memory-efficient private fine-tuning of large language models using only forward evaluations. Existing aggregation-based DP-ZO methods reconstruct model updates at a fixed scale, ignoring that the strength of useful signals varies throughout training. Consequently, noise-dominated updates may receive excessive weight and degrade model utility. To address this issue, we propose SAGE, a noise-aware shrinkage method that adaptively attenuates privatized estimates according to their estimated signal quality. SAGE subtracts the known Gaussian noise variance from the observed second moment to estimate the underlying signal energy, stabilizes this estimate through temporal tracking, and compares its current signal-to-noise level with a warm-up reference to derive a bounded shrinkage factor. As pure post-processing, SAGE requires neither additional privacy budget nor model queries and introduces only constant additional state. Our theoretical analysis shows that shrinkage reduces the quadratic update-risk term faster than the linear descent term, preserving useful descent while limiting the influence of noise-dominated updates. Experiments on RoBERTa-large, OPT-1.3B, and OPT-6.7B demonstrate that SAGE outperforms existing baselines in most settings under the same privacy budgets while preserving the forward-only memory efficiency of DP-ZO.
