# EdgeLM: Edge Demonstrations for Language Models' Table Understanding

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Soroush Omidvartehrani, Mohammadamin Habibollah, Mohammadreza Daviran, Davood Rafiei　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.04390)

------

arXiv:2608.04390v1 Announce Type: new

Abstract: Large language models (LLMs) perform table-centric prediction through in-context learning, making demonstration selection critical to performance. Existing retrieval methods prioritize similarity to the query, but similar demonstrations often reinforce the model's likely prediction rather than reveal the distinctions needed for difficult decisions. We propose EdgeLM, a retrieval framework that instead selects edge evidence, demonstrations that are both relevant to the query and informative about the decision boundary. EdgeLM retrieves two complementary forms of edge evidence by selecting data edges, nearby examples with different ground-truth labels, and model edges, similar examples previously misclassified by the deployed model. EdgeLM requires neither model retraining nor task-specific engineering. Across five data wrangling tasks, fifteen datasets, and five open-weight and proprietary LLMs, EdgeLM consistently achieves the best or near-best performance in every setting, while ablations show that the two forms of edge evidence provide complementary benefits. Our code and datasets are publicly available at https://github.com/soroushomidvar/EdgeLM.
