# SVI-DAG: A Structured Variational Inference Approach to Bayesian Causal Discovery

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Shrenik Zinage　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.04930)

------

arXiv:2608.04930v1 Announce Type: new

Abstract: Bayesian causal discovery seeks to determine the posterior distribution of causal theories, which are interpreted as directed acyclic graphs (DAGs) that explain the observed data. The resulting posterior allows systematic reasoning regarding epistemic uncertainty within these theories. Nonetheless, finding such graphs is difficult due to identifiability problems and limited observational data. Furthermore, precisely approximating posterior over graphs is challenging given vast range of potential DAGs. Recent Bayesian approaches have addressed some of these challenges, yet they remain limited as they fail to encode dependencies between edges, and lack principled ways to incorporate domain knowledge as inductive biases during the search process. To overcome these limitations, we propose SVI-DAG, a structured variational inference approach to Bayesian causal discovery using observational data and prior beliefs that uses normalizing flows to model dependencies between edges, supporting expressive and multimodal posterior learning over DAGs. To mitigate mode seeking behaviour in evidence lower bound optimization and promote mode coverage, we use stein variational gradient descent to update the node potentials using a kernel in acyclicity space. We evaluate SVI-DAG against 5 state-of-the-art Bayesian DAG learning methods and demonstrate superior performance in uncertainty quantification while remaining competitive in terms of structural accuracy.
