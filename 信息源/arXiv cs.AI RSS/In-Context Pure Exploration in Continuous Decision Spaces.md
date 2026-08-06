# In-Context Pure Exploration in Continuous Decision Spaces

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Alessio Russo, Yin-Ching Lee, Ryan Welch, Aldo Pacchiano　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2602.17976)

------

arXiv:2602.17976v2 Announce Type: replace-cross

Abstract: In active sequential testing, also termed pure exploration, a learner is tasked with the goal to adaptively acquire information so as to identify an unknown ground-truth hypothesis with as few queries as possible. This problem has several motivating applications, including Best-Arm Identification (BAI) in bandits, where actions index hypotheses, and generalized search problems, where strategically chosen queries reveal partial information about a hidden label. In many modern settings, however, the hypothesis, or recommendation space, is continuous: for example, identifying a near optimal action in a continuous-armed bandit, localizing an $\epsilon$-ball contained in a target region, or estimating the minimizer of a function from noisy observations. Existing methods are predominantly frequentist and model-specific, while learned approaches have been limited to finite recommendation spaces. We introduce C-ICPE, a theory-guided learned model for Bayesian fixed-confidence pure exploration with continuous recommendations. C-ICPE meta-trains sequential architectures over a task prior to jointly learn exploration, stopping and recommendations strategies. At inference time, it actively gathers evidence on tasks and identifies an $\epsilon$-optimal recommendation without parameter updates.
