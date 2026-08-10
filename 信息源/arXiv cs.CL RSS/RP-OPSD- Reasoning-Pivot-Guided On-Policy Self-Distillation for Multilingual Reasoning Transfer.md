# RP-OPSD: Reasoning-Pivot-Guided On-Policy Self-Distillation for Multilingual Reasoning Transfer

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Xinye Wang, Junxiao Liu, Shujian Huang　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.06347)

------

arXiv:2608.06347v1 Announce Type: new

Abstract: Multilingual reasoning transfer is crucial for extending reasoning capabilities of large language models (LLMs) beyond high-resource languages. On-policy self-distillation (OPSD) and its variants have emerged as a promising paradigm, providing dense token-level supervision on student-generated rollouts, yet their objectives do not explicitly prioritize reasoning signals most critical to cross-lingual transfer. We characterize that target-language reasoning comprises the generation of both surface text and reasoning pivots, which are decisions that advance or redirect the reasoning process and shape subsequent inference. This motivates concentrating privileged distillation around such pivots. We therefore propose RP-OPSD, Reasoning-Pivot-guided On-Policy Self-Distillation, using the distributional shift between matched teacher views with and without an English reference solution as an operational proxy to guide privileged distillation and reference anchoring. Experiments on mathematical reasoning benchmarks covering 17 languages and multiple difficulty levels show that our method outperforms strong multilingual reasoning baselines and OPSD variants. Further analysis reveals that RP-OPSD concentrates privileged distillation on reasoning-control and problem-condistioned state-update tokens, while downweighting it for tokens that mainly support surface realization. Our code is available at https://github.com/NJUNLP/RP-OPSD.
