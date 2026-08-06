# Implementing Causal Perception: Competing SCMs and Situated Fairness

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Jose M. \'Alvarez　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.03917)

------

arXiv:2608.03917v1 Announce Type: new

Abstract: Causal perception occurs when agents with competing Structural Causal Models (SCMs) of the same system infer different probability distributions, including the hypothetical distributions implied by each agent's SCM under the same set of interventions. It shapes how agents reason about the system and how they perceive its fairness. Causal perception is a promising probabilistic framework, but it has remained purely theoretical. This work provides the first implementation of the causal perception framework of \'Alvarez and Ruggieri (2025). We operationalize structural (agents disagree on the causal graph) and parametrical (agents agree on the causal graph but disagree on its weights) causal perception. We design algorithms for computing interventional and counterfactual distributions and propose suitable distance measures to quantify the disagreement. Using the German Credit dataset, we illustrate how causal perception affects accuracy and fairness in a multi-expert decision setting. We show that the perception verdict is sensitive to the choice of distance metric and threshold. We also show that causal perception changes fairness assessments and threshold-based decisions. Bias proves situated with respect to the agent's SCM, demonstrating that competing worldviews in fairness problems cannot be ignored.
