# When Large Language Models Know the Table: A Framework for Assessing Data Contamination in Tabular Datasets

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Matteo Silvestri, Fabiano Veglianti, Flavio Giorgi, Fabrizio Silvestri, Gabriele Tolomei　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2510.20351)

------

arXiv:2510.20351v3 Announce Type: replace-cross

Abstract: Large language models (LLMs) are increasingly exposed to data contamination, i.e., performance gains driven by prior exposure of test datasets rather than generalization. However, in the context of tabular data, this problem is largely unexplored. Existing approaches primarily rely on memorization tests, which are too coarse to detect contamination. In contrast, we propose a framework for assessing contamination in tabular datasets by generating controlled queries and performing comparative evaluation. Given a dataset, we craft multiple-choice aligned queries that preserve task structure while allowing systematic transformations of the underlying data. These transformations are designed to selectively disrupt dataset information while preserving partial knowledge, enabling us to isolate performance attributable to contamination. We complement this setup with non-neural baselines that provide reference performance, and we introduce a statistical testing procedure to formally detect significant deviations indicative of contamination. Empirical results on eight widely used tabular datasets reveal clear evidence of contamination in four cases. These findings suggest that performance on downstream tasks involving such datasets may be substantially inflated, raising concerns about the reliability of current evaluation practices.
