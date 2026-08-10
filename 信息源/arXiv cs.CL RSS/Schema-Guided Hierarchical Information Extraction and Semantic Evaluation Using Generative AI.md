# Schema-Guided Hierarchical Information Extraction and Semantic Evaluation Using Generative AI

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Modhurita Mitra, Jan-Willem Versteeg, Maarten D. Schermer, Shiva Nadi Najafabadi, Marie L. De Bruin, Lourens T. Bloem　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.06167)

------

arXiv:2608.06167v1 Announce Type: cross

Abstract: We present a schema-based framework for extracting complex, structured information from unstructured text documents using generative AI, followed by automated semantic evaluation of the extracted information against a gold standard. The schema, serving as an information model encoding domain knowledge, provides a unified, systematic, and consistent framework for extraction of hierarchical, nested information, with attributes of variable cardinality, and subsequent evaluation of the results. Information extraction from a document is performed in a single call to the model, in zero-shot mode.

In the evaluation step, we introduce a path-based semantic matching algorithm to align the nested, variable-cardinality attributes in the extracted results with those in the gold standard. We use generative AI for semantic comparison of the extracted and gold standard values of an attribute, and introduce a rubric to classify the result of the comparison, according to domain-specific considerations, as an exact, semantic, useful, or non-match.

We were able to extract 12 out of 14 attributes with an F1 score of $>$90\% from documents published by the health technology assessment organisation NICE, using the generative AI model Claude Opus 3. The time needed to extract the attributes from a document was $\sim$30 times lower than the time taken by a human domain expert. We further demonstrate generalisability of this framework across different generative AI models and transferability across different HTA organisations and languages.
