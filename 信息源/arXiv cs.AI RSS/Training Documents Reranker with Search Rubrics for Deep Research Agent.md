# Training Documents Reranker with Search Rubrics for Deep Research Agent

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Wenhan Liu, Yu Lu, Qiaolin Xia, Hui Xu, Tong Zhao, Jian Xi, Yutao Zhu, Haijin Liang, Haibo Shi, Hao Wang, Zhicheng Dou　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.IR　|　原文：[打开链接](https://arxiv.org/abs/2608.03527)

------

arXiv:2608.03527v1 Announce Type: cross

Abstract: Retrieval systems help deep research agents generate high-quality answers by providing relevant documents. However, existing retrievers typically select documents through relevance matching, while individually well-matched top-$k$ documents may not form a \textit{set} that satisfies the complex information needs of an agent query (\eg, diverse, concise and authoritative documents). In this paper, we propose search-oriented rubrics that \textit{explicitly} define the requirements that high-quality document sets should satisfy for each agent query. Our search rubrics are organized into a hierarchical structure and synthesized using a powerful LLM. Based on these search rubrics, we further train a document reranker \textbf{RubricRanker} to select a high-quality subset from retrieved documents. We design a two-stage training framework that consists of rubrics-guided supervised fine-tuning and rubric-based reinforcement learning. Extensive experiments demonstrate that RubricRanker outperforms the strongest baseline by 2.6 points on four deep research benchmarks and generalizes well to five RAG benchmarks.
