# The Impossibility Triangle of Long-Context Modeling

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Yan Zhou　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2605.05066)

------

arXiv:2605.05066v2 Announce Type: replace-cross

Abstract: We identify and prove a fundamental trade-off governing long-sequence models: no model can simultaneously achieve (i) per-step computation independent of sequence length (Efficiency), (ii) state size independent of sequence length (Compactness), and (iii) the ability to recall a number of historical facts proportional to sequence length (Recall). We formalize this trade-off within an Online Sequence Processor abstraction that unifies Transformers, state space models, linear recurrent networks, and their hybrids. Using the Data Processing Inequality and Fano's Inequality, we prove that any model satisfying Efficiency and Compactness can recall at most O(poly(d)/log V) key-value pairs from a sequence of arbitrary length, where d is the model dimension and V is the vocabulary size. We classify 52 architectures published before March 2026 into the triangle, showing that each achieves at most two of the three properties and that hybrid architectures trace continuous trajectories in the interior. Experiments on synthetic associative recall tasks with five representative architectures validate the theoretical bound: empirical recall capacity lies strictly below the information-theoretic limit, and no architecture escapes the triangle.
