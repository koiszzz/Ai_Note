# CausalOPD: First-Wrong-Step Supervision for Distilling Causal Chain Reasoning

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Jian Zhang, Bingyi Wang, Yizhi Liu　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.03673)

------

arXiv:2608.03673v1 Announce Type: new

Abstract: Many critical reasoning tasks, including clinical diagnosis, legal judgment, and industrial fault diagnosis, require step-dependent causal chains in which early errors propagate and correct conclusions can mask invalid reasoning. Although large language models perform well on such tasks, privacy, latency, and controllability motivate distillation into locally deployable models. Standard trajectory imitation does not correct process errors on the student's own rollout distribution. We propose CausalOPD, a curriculum online process distillation framework. A knowledge-augmented teacher first provides trajectories grounded in domain-specific causal rules, entity relations, and structural constraints. The student then generates on-policy trajectories, and the teacher identifies the first wrong step, defined as the earliest transition that verifiably violates available constraints. Starting from the verified prefix, short-horizon reinforcement learning repairs this localized failure. A causal-stage curriculum advances from evidence-level to mechanism-level and conclusion-level errors, following their propagation order. Across three domains, CausalOPD improves average path correctness by 23.4 percentage points over sequence-level online process distillation and reduces the right-label-wrong-reasoning rate from 15.7% to 4.4%. The domain-specific 8B students also surpass both evaluated proprietary references in path correctness across all domains.
