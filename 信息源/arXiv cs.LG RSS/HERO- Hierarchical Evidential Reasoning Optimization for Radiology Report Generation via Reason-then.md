# HERO: Hierarchical Evidential Reasoning Optimization for Radiology Report Generation via Reason-then-Summarize

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Kun Zhao, Guodong Liu, Hui Ji, Siyuan Dai, Pan Wang, Jifeng Song, Chenghua Lin, Liang Zhan, Haoteng Tang　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2601.03321)

------

arXiv:2601.03321v3 Announce Type: replace

Abstract: Multimodal Large Language Models (MLLMs) have substantially advanced Radiology Report Generation (RRG), yet aligning them through reinforcement learning (RL) remains challenging due to heterogeneous medical supervision. Vanilla Group Relative Policy Optimization (GRPO) assigns uniform credit across the entire generation, leading to segment interference, token dilution, and evidence--diagnosis decoupling, which exacerbates clinical hallucinations. We propose HERO (Hierarchical Evidential Reasoning Optimization), a factorized policy optimization framework that aligns heterogeneous supervision with three optimization granularities. HERO separately optimizes reasoning, diagnosis, and evidence grounding through complementary segment-, token-, and completion-level optimization with a heterogeneous reward formulation covering diagnostic accuracy, reasoning quality, and think--answer consistency. Experiments on MIMIC-CXR and IU-Xray show that HERO outperforms strong supervised and reinforcement learning baselines, achieving state-of-the-art clinical efficacy while producing more evidence-grounded and think--answer-consistent reports, thereby substantially mitigating clinical hallucinations.
