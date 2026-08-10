# Faster and Better Alignment for Flow Matching Models via Step-aware Advantages

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Zhixiong Yue, Feiyang Ye, Zixuan Ni, Sheng Shen, Yu Zhang　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2602.01591)

------

arXiv:2602.01591v2 Announce Type: replace

Abstract: Recent advances in flow matching models, particularly with reinforcement learning (RL), have significantly enhanced human preference alignment in few-step text-to-image generators. However, existing RL-based approaches for flow matching models typically rely on numerous denoising steps, while suffering from sparse and imprecise reward signals that often lead to suboptimal alignment. To address these limitations, we propose Temperature-Annealed Few-step Sampling with Group Relative Policy Optimization (TAFS-GRPO), a novel framework for training flow matching text-to-image models into efficient few-step generators well aligned with human preferences. Our method iteratively injects adaptive time-dependent noise into one-step clean predictions. By repeatedly annealing the model's sampled outputs, it introduces stochasticity into the sampling process while preserving the semantic integrity of each generated image. Moreover, its step-aware advantage integration mechanism combines GRPO with temperature-annealed sampling to eliminate the need for a differentiable reward function and provide dense, step-specific rewards for stable policy optimization. Extensive experiments demonstrate that TAFS-GRPO achieves strong performance in few-step text-to-image generation and significantly improves the alignment of generated images with human preferences. The code and models of this work will be available to facilitate further research.
