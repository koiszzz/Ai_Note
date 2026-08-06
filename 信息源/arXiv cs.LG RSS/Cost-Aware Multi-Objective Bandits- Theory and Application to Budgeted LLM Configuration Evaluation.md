# Cost-Aware Multi-Objective Bandits: Theory and Application to Budgeted LLM Configuration Evaluation

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Bo Xue, Zhi Hong, Jiayi Li, Yuanyu Wan, Ji Cheng, Shuang Qiu　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.04333)

------

arXiv:2608.04333v1 Announce Type: new

Abstract: Large language model (LLM) configuration evaluation is challenging due to limited evaluation budgets, varying costs, and multiple competing objectives. In this paper, we formulate LLM configuration evaluation as a cost-aware multi-objective bandit problem, where each configuration evaluation incurs a configuration-dependent cost and yields a noisy vector-valued outcome. Under this framework, we study two fundamental problems: online configuration selection and Pareto configuration identification. For online configuration selection, we propose a hypervolume-based UCB algorithm that optimizes an optimistic hypervolume-per-cost index. We establish a budgeted regret bound of order $O\bigl(\sum_{i\ne i^\star}\frac{\log B}{\Delta_i}\bigr)$, where $B$ is the evaluation budget, $i^\star$ is the optimal configuration in terms of hypervolume efficiency, and $\Delta_i$ is the corresponding efficiency gap of configuration $i$. This bound retains the logarithmic budget dependence of classical single-objective budgeted bandits. For fixed-budget Pareto identification, we develop a cost-aware empirical gap elimination algorithm and prove that its error probability is of order $O\bigl(\exp(-\frac{B}{H_{\mu,c}})\bigr)$, where $H_{\mu,c}$ is a cost-aware Pareto identification complexity depending on configuration costs and Pareto classification gaps. This error probability decays exponentially with the evaluation budget and recovers the standard Pareto set identification guarantee when all configuration costs are identical. Experiments on LLM configuration evaluation tasks demonstrate that the proposed framework enables efficient online decision-making and accurate cost-aware Pareto identification under limited budgets.
