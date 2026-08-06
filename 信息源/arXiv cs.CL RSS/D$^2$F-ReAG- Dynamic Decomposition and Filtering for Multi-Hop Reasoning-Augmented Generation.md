# D$^2$F-ReAG: Dynamic Decomposition and Filtering for Multi-Hop Reasoning-Augmented Generation

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Jiaoyang Li, Junhao Ruan, Shengwei Tang, Kaiyan Chang, Zhengtao Yu, Tong Xiao, Jingbo Zhu　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.04444)

------

arXiv:2608.04444v1 Announce Type: new

Abstract: Large language models (LLMs) often generate inaccurate answers due to their reliance on static internal knowledge. Retrieval-augmented generation (RAG) addresses this limitation by integrating external knowledge and excelling at single-hop queries. However, it struggles with multi-hop questions that require cross-document reasoning. Existing methods, such as graph structured RAG or question decomposition, often lack dynamic decomposition and effective filtering, which leads to lower efficiency and accuracy. To overcome these limitations, we propose Dynamic Decomposition and Filtering for Multi-Hop Reasoning-Augmented Generation (D2F-ReAG), a novel paradigm that adaptively controls reasoning depth by judging the reliability of the root-level reasoning. If the root reasoning is reliable, the model directly generates the answer. Otherwise, the question is logically decomposed into sub-questions, and the verified reasoning derived from these sub-questions is used to refine the root reasoning. Experiments on three multi-hop benchmarks demonstrate the effectiveness of our method in handling complex multi-hop questions.
