# Computing Actual Causes for Neural Network Predictions under Structured Causal Inputs

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Jannick Strobel, Muqsit Azeem, Stefan Leue　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.03772)

------

arXiv:2608.03772v1 Announce Type: new

Abstract: Explaining the predictions of neural networks is a central challenge in trustworthy AI. Existing explanation methods, such as those based on feature attribution or minimal sufficient sets, typically treat input features as independent, which can yield misleading explanations when inputs exhibit structured dependencies. We address this by formalizing explanations as Halpern-Pearl (HP) actual causes, modeling input dependencies using Boolean Structural Causal Models (SCMs). We compute HP causes by applying bound propagation and branch-and-bound techniques, while providing formal guarantees of completeness and minimality. Our experiments show that we substantially outperform brute-force and ILP baselines in scalability, and outperform heuristic search as graph size grows, computing all minimal actual causes on instances with search spaces of up to $2.3\times10^{13}$ candidate (cause, contingency) pairs, on SCMs with up to 28 nodes, within a 180s per-instance budget. In a case study, we further show that ignoring input dependencies inflates the number of reported causes, 14.9% of which are spurious under our SCM.
