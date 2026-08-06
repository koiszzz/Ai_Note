# SAFECAST: Robust Failure Detection for VLA Policies with Contrast-Set Training and Calibration

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Harshitha Rajaprakash, Aditeya Prajapati, Rong Xue, Abrar Anwar, Jesse Thomason　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.RO　|　原文：[打开链接](https://arxiv.org/abs/2608.04246)

------

arXiv:2608.04246v1 Announce Type: cross

Abstract: Vision-language-action policies often fail under deployment-time distribution shifts such as clutter, distractor objects, lighting changes, novel objects, altered initial states, and reworded instructions. Hidden-state-based risk probes combined with functional conformal prediction can detect rollout failures, but their reliability depends on calibration data matching deployment conditions. We introduce SAFECAST, which leverages contrast set perturbations to improve hidden-state probe training and calibration for deployment time shift. SAFECAST statistically significantly improves failure detection ROC-AUC scores over a state of the art baseline in both real-world DROID and LIBERO simulation experiments across multiple VLM backbones. We further find that SAFECAST benefits most when both visual and language contrast set perturbations are used to augment data, and that with contrast set perturbations, sim-to-real calibration leads to better probes than using real rollout data only.
