# Stop Replacing Noise with Noise: Two-Source Reliability Assessment for Label Correction and Sample Reweighting in Label-Noise Learning

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Wenxiao Fan, Kan Li　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.03432)

------

arXiv:2608.03432v1 Announce Type: new

Abstract: Refurbishment-based noisy-label learning mixes an observed label with a model-derived pseudo target, typically using one sample-wise cleanliness score to control both branches. This creates a hidden coupling: reducing trust in the observed label automatically increases trust in the pseudo target. We show that this complementarity can replace one unreliable signal with another because a pseudo target learned from corrupted supervision may reproduce the noise it is meant to correct. Our representation diagnostics provide a consistent account of this mismatch: noisy supervision redirects deeper layers more strongly, whereas shallower relations remain comparatively stable and provide information beyond the loss posterior. We therefore propose TRACE, a Two-Source Reliability Assessment framework for Label Correction and Sample Reweighting. TRACE assesses the observed label using loss fit, shallow relation stability, and prediction agreement, while separately assessing the pseudo target using model confidence. Its source-specific scores control target correction and supervision strength without assuming complementary reliability. Across synthetic and real-world noisy benchmarks, TRACE improves representative refurbishment baselines and yields more reliable pseudo supervision.
