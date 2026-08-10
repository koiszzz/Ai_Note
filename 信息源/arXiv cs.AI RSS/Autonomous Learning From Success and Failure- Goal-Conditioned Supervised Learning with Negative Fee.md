# Autonomous Learning From Success and Failure: Goal-Conditioned Supervised Learning with Negative Feedback

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Zeqiang Zhang, Fabian Wurzberger, Gerrit Schmid, Sebastian Gottwald, Daniel A. Braun　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2509.03206)

------

arXiv:2509.03206v2 Announce Type: replace-cross

Abstract: Learning from reward functions and imitation learning of demonstrations are the two principal approaches for training autonomous systems that interact with an environment through action and observation. Both, however, require human specification for each behaviour to be acquired, a problem for long-lived self-adaptive systems whose goals and operating conditions cannot be fully anticipated at design time. Recently, Goal-Conditioned Supervised Learning (GCSL) through self-imitation has been proposed as a self-supervised alternative: by strategically relabelling goals, agents can derive policy insights from their own experiences. Despite its successes, this framework presents two notable limitations: (1) learning exclusively from self-generated experiences can exacerbate the agents' inherent biases; (2) the relabelling strategy allows agents to focus solely on successful outcomes, precluding them from learning from their mistakes. To address these issues, we propose GCSL with Negative Feedback (GCSL-NF), which evaluates each trajectory twice: positively with respect to relabelled goals, and correctively with respect to the goal originally intended. The corrective target comes from a similarity function learned contrastively from trajectory-induced neighbourhood relations, so that neither a reward function nor a geometric distance needs to be specified. Our experiments show that GCSL-NF overcomes limitations imposed by agents' initial biases, increasingly benefits from negative feedback as learning progresses, and matches or surpasses GCSL- and HER-based methods. By reducing reliance on prespecified reward functions, the proposed approach is particularly relevant for self-adaptive autonomous systems, where adaptation objectives may be diverse, changing, or difficult to engineer.
