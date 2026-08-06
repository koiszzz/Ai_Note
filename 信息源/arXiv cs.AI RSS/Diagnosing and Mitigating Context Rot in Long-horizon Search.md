# Diagnosing and Mitigating Context Rot in Long-horizon Search

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Shijie Xia, Yikun Wang, Zhen Huang, Pengfei Liu　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.IR　|　原文：[打开链接](https://arxiv.org/abs/2606.29718)

------

arXiv:2606.29718v2 Announce Type: replace-cross

Abstract: Extensive context has become the norm as Large Language Models (LLMs) are increasingly deployed in long-horizon search tasks. The concern that increasing context length degrades model capabilities, known as context rot, has become a widely recognized issue for these applications. However, in deep search scenarios, it remains unclear how models actually fail under extensive context, and to what extent existing methods can mitigate such failures. Through a systematic study of four flagship models across three benchmarks, we identify a previously overlooked phenomenon, which we term premature termination: under extensive context, models give up or provide uncertain incorrect answers long before exhausting the context window. By controlling for query difficulty, we show that the premature termination rate is positively correlated with context length. Based on the findings, we revisit methods to mitigate context rot, including context management and parallel sampling. For context management, we analyze seven methods across three categories and show that they are inherently test-time scaling strategies that reduce the premature termination rate to enable more exploration, and we further provide model-dependent principles for method selection. For parallel sampling, we develop a behavior-aware filtering strategy and observe a performance gain of 2.6% to 4.9% across three aggregation methods.
