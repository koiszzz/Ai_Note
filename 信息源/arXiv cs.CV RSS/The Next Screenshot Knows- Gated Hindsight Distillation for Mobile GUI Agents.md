# The Next Screenshot Knows: Gated Hindsight Distillation for Mobile GUI Agents

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Weiwei Li, Junzhuo Liu, Tong Chu, Hengfu Yu, Wen Li　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.06065)

------

arXiv:2608.06065v1 Announce Type: new

Abstract: GUI agents are commonly trained offline from successful interaction trajectories. Standard training decomposes each trajectory into prefix-action pairs: the agent predicts an action from the current screen and interaction history, while the subsequent observation is discarded. This removes the rationale of why an action is correct: the evidence often appears only on the subsequent screen. For example, to enable Soft Wrap, the agent should click Edit or View, but nothing reveals this until the menu opens. Without such evidence, standard imitation gives the model little chance of ever sampling and thus learning the correct reasoning. To address this issue, we propose Gated Hindsight Distillation (GHD), which uses the next screenshot as privileged information during training. A student predicts from the observable trajectory prefix, while a parameter-sharing teacher additionally observes the next screenshot and re-scores the student's on-policy responses. We apply distillation only when the student fails and the hindsight-conditioned teacher recovers the demonstrated action. GHD improves task success over GRPO on AndroidWorld and AndroidLab across two vision-language models. The code and checkpoints will be made available.
