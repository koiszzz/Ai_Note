# Bi-Level Reinforcement Learning Pathway for Sim-to-Real Optimality

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Akhil S Anand, Shambhuraj Sawant, Paavo Parmas, Jasper Hoffmann, Dirk Reinhardt, Sebastien Gros　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2510.17709)

------

arXiv:2510.17709v2 Announce Type: replace

Abstract: Training Reinforcement Learning (RL) policies using simulation models before deployment in real-world environments is a common strategy when real-world interaction is expensive. This approach is used in sim-to-real RL and in dyna-style model-based RL. A key limitation of this approach is that the policies trained in simulation often perform poorly in the real world due to discrepancies between the simulation model and the real-world environment, referred to as the sim-to-real gap. This gap reflects the objective mismatch: simulation models are typically constructed for predictive accuracy, whereas policies are trained to maximize task performance. Since the policy learned in simulation is implicitly defined by the simulation parameters, understanding the sensitivity of the learned policy to these parameters enables gradient-based adaptation of the simulation model to improve real-world policy performance. Motivated by this, we derive the sensitivity of locally converged policies trained with Stochastic Policy Gradient (SPG) methods in an actor-critic setting, which is the most widely used approach in RL. Based on this sensitivity analysis, we formulate a bi-level RL approach that can address the objective mismatch problem by learning simulation parameters using gradients of real-world policy performance, thereby directly coupling simulation model adaptation with policy performance. We provide a thorough convergence analysis of the proposed bi-level RL approach and illustrate the concept through a proof-of-concept bi-level PPO algorithm.
