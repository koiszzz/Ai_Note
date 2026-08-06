# Protoreasoning in Tiny Transformers

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Eduardo Valle, Fergal Reid　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.04980)

------

arXiv:2608.04980v1 Announce Type: new

Abstract: We show that tiny transformers can profitably employ a simple form of Chain of Thought, which we call protoreasoning, allowing us to study step-by-step reasoning on ~1M-parameter models and opening up opportunities for much more detailed experimentation and analysis than is feasible for larger models. Current Large Language Models exhibit impressive step-by-step reasoning, but we have yet to understand its generality, i.e., when and how LLMs learn genuinely general algorithms rather than "bags of heuristics." Such questions are hard to settle on compute-intensive frontier models trained on opaque data. To work at model scales far below the threshold for natural-language competence, we define reasoning-friendly tasks on Dyck languages (sentences of correctly nested brackets). We find that protoreasoning traces substantially close the out-of-distribution generalization gap, and ablations confirm that the trace's content, not merely its extra tokens, drives the gain.
