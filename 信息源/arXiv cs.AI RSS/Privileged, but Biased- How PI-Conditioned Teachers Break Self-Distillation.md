# Privileged, but Biased: How PI-Conditioned Teachers Break Self-Distillation

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Sarthak Harne, Chinmay Karkar, Yash Pandya, Ahmed Awadallah, Akshay Nambi　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.04794)

------

arXiv:2608.04794v1 Announce Type: new

Abstract: Self-distillation (SD) has emerged as a compute-efficient alternative to reinforcement learning with verifiable rewards: a self-teacher, conditioned on privileged information (PI) about the answer such as a reference solution, supplies dense per-token supervision to a student that never sees it. Reported gains, however, come almost exclusively from narrow, low-difficulty settings, leaving open a basic question: as a lone objective, with no reward term, does SD teach anything? We reproduce SDPO's reported gains in its easy setting, then apply the identical setup to difficult tasks and find that it does not. Across question answering, mathematics, coding, and multi-turn agentic tool use, across reasoning modes, model sizes, and forms of PI, and under both the SDPO and OPSD recipes, the per-token loss falls steadily while validation accuracy does not improve and typically degrades. We explain this failure through a single causal chain from the loss to the model it produces. The chain begins with PI bias: having seen one particular reference solution, the teacher's per-token target is pulled toward that trajectory rather than toward correctness in general, an effect we quantify with a PI Bias Score. Trained to match this target everywhere, the student's objective becomes nearly blind to whether a rollout is correct, and the loss it assigns falls mostly on low-information tokens like stopwords, punctuation, uncertainty markers, rather than those that determine the answer; within correct rollouts the exploratory tokens incur the highest divergence, so it penalizes the hesitation that reasoning requires. The result is a flatter, less decisive student that is no better at reasoning: as a lone objective, SD optimizes a signal decoupled from task success.
