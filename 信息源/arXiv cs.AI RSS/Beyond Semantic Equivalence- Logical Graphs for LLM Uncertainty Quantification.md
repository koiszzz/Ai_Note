# Beyond Semantic Equivalence: Logical Graphs for LLM Uncertainty Quantification

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Yanni Dong, Minghua Liu, Meilin Zhu, Xiaowei Huang, Lijun Zhang　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2607.16868)

------

arXiv:2607.16868v2 Announce Type: replace

Abstract: Large Language Models often produce confidently stated yet unreliable outputs, posing critical challenges for deployment in safety-sensitive applications. Existing uncertainty metrics such as semantic entropy capture agreement at the level of semantic equivalence, but largely ignore the logical relationships between distinct answers. As a result, they tend to overestimate uncertainty and falsely flag hallucinations in settings where generated responses are diverse in form yet logically compatible (e.g., differing only in granularity or specificity). We propose Logical Graph Uncertainty (LGU), a framework that explicitly models implication and incompatibility among answers. LGU aggregates probability mass along entailment chains onto the most specific hypotheses the answers support, measures the entropy of the resulting distribution, and penalizes mutual incompatibility among those hypotheses. Across multiple question-answering benchmarks and model families, LGU ranks first on average among existing uncertainty measures, with its largest gains---up to +7.1\% AUROC and +3.5\% AUARC over semantic entropy---on questions whose sampled answers are logically structured.
