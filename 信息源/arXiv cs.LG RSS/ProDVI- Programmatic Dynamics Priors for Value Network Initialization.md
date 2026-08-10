# ProDVI: Programmatic Dynamics Priors for Value Network Initialization

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Xinwei Liu, Junyuan Liang, Jianting Zhang, Wuhui Chen　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.06015)

------

arXiv:2608.06015v1 Announce Type: new

Abstract: Deep Reinforcement Learning (RL) is notoriously sample inefficient. One contributing factor is that RL agents are typically initialized from scratch, forcing them to acquire task-relevant knowledge through online interaction. Existing approaches obtain informative initializations through pre-collected datasets, high-fidelity simulators, or meta-learning over related tasks, but these prerequisites may be difficult to access or even unavailable. In this paper, we propose Programmatic Dynamics Priors for Value Network Initialization (ProDVI), a framework that leverages the commonsense and domain knowledge encoded in large language models to initialize RL agents without relying on these resources. Specifically, ProDVI prompts a code-generating language model to produce executable Python functions that encode coarse hypotheses about environment dynamics. These functions are then used to generate synthetic transitions. Based on these transitions, we construct an auxiliary dynamics prediction objective to pretrain the state-action encoder of the value network in an actor-critic framework. The learned representation provides dynamics-aware inductive biases before online RL begins. Importantly, the generated programs are used only for representation pretraining and are not required to faithfully simulate the target environment. While the generated programs may be inaccurate, their induced initialization can be corrected through online learning from real transitions and rewards. Experiments on OpenAI Gym and DeepMind Control Suite tasks show that ProDVI can effectively improve the sample efficiency of model-free RL algorithms.
