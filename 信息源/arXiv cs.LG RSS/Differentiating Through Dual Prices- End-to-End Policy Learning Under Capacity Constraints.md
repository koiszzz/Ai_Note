# Differentiating Through Dual Prices: End-to-End Policy Learning Under Capacity Constraints

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Mohammadsaeed Haghi, Mahdi Salmani, Nima Kelidari　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.04669)

------

arXiv:2608.04669v1 Announce Type: new

Abstract: Many social services assign scarce resources, such as housing assistance or hospital interventions, to people who arrive one at a time: each arrival must receive a decision immediately, and the long-run usage of every resource must stay within its capacity. We study how to learn such an assignment policy from logged observational data. The standard pipeline is decision-blind: fit one outcome model per arm by regression, price each capacitated resource from the fitted models, and assign each arrival the arm whose predicted outcome minus price is largest. We instead train the outcome models end-to-end, differentiating an off-policy estimate of the deployed policy's value through the dual prices themselves. We study two formulations: an exact nonconvex one, and a convex relaxation whose optimum always satisfies the capacity constraints in expectation and which is suboptimal by at most a term linear in the smoothing temperature and logarithmic in the number of arms. Every method is evaluated in a queueing simulation with resources replenished at their capacity rates. Across six datasets, the two end-to-end variants take the top slots on a deployment-adjusted value index at every delay cost, including zero; when capacities are binding, decision-blind baselines frequently violate them and incur much longer queueing delays. On the largest dataset, a hospital cohort of seventy thousand patients, end-to-end training also achieves significantly higher policy value, a margin that survives a capacity-matched neural baseline. Flexible decision-blind regression remains the stronger pure predictor where ground truth is measurable; end-to-end training is best suited to settings where resources are genuinely scarce and feasibility matters.
