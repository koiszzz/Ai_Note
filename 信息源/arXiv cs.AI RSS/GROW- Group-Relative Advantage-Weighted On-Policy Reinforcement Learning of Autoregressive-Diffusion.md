# GROW: Group-Relative Advantage-Weighted On-Policy Reinforcement Learning of Autoregressive-Diffusion Text-to-Speech model

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Guanrou Yang, Tian Tan, Qian Chen, Ziyang Ma, Yakun Song, Zhikang Niu, Qi Chen, Wenming Tu, Haitao Li, Shan Yang, Xie Chen　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：eess.AS　|　原文：[打开链接](https://arxiv.org/abs/2608.03215)

------

arXiv:2608.03215v1 Announce Type: cross

Abstract: Reinforcement learning for flow-matching text-to-speech is complicated by deterministic ODE sampling: trajectory-level policy-gradient methods typically convert the ODE into an SDE and track per-step likelihood ratios, introducing stochastic perturbations and substantial overhead. We propose GROW, a group-relative advantage-weighted on-policy RL method that acts directly on the standard flow-matching objective. For each prompt, GROW samples a group of on-policy utterances, separately standardizes intelligibility and speaker-similarity rewards within the group, and combines them to reweight flow-matching regression. A Wasserstein-2 velocity penalty anchors the updated model to a frozen pretrained reference. A group-mean reward baseline is introduced to convert reward weighting into advantage weighting. For strong pretrained TTS models with concentrated rewards, positive exponential weighting is dominated by reward-agnostic self-imitation, whereas a zero-mean signed advantage preserves effective within-group credit assignment. Instantiated on DiTAR and evaluated on LibriSpeech and Seed-TTS EN/ZH, GROW reduces average WER from 2.016 to 1.558 and raises speaker similarity from 0.676 to 0.715 while keeping UTMOS. With 10-NFE training rollouts and 32-NFE evaluation, GROW retains comparable performance while training 2.9x faster than 32-NFE DiTAR-GRPO. We will open-source complete GROW codes, faithful DiTAR reproduction, and all model checkpoints.
