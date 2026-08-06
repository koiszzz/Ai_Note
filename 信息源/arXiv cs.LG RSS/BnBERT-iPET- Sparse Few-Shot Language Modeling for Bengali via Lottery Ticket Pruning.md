# BnBERT-iPET: Sparse Few-Shot Language Modeling for Bengali via Lottery Ticket Pruning

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Sajib Hossain, Md Kamrus Samad, Anan Ghosh, Labib Imam Chowdhury, Nabeel Mohammed　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.05104)

------

arXiv:2608.05104v1 Announce Type: new

Abstract: Deep neural networks have shown impressive success in NLP tasks owing to their complex structure and huge number of edges. Achieving state-of-the-art performance in natural language processing with a large pre-trained model such as BERT is expensive and time-consuming, carries a large carbon footprint, and is difficult to realize on machines with minimal computational capability. This creates a barrier to training complex models for resource-constrained languages such as Bengali. However, in a complex neural model, not all edges are equally impactful, and the contributions of some of them can be neglected. Pruning promises to reduce the memory footprint of regular networks, shorten the training time of ever-growing networks, and increase inference efficiency without sacrificing comparable performance. In this work, we introduce BnBERT-iPET, a sparse few-shot language modeling approach for Bengali, and experimentally show that a lightweight few-shot-learned language model retaining only 10% of the edges of an initial model such as BERT can perform neck and neck with much larger models on challenging tasks for a resource-constrained language such as Bengali. By learning from few shots through iterative pattern exploiting training and achieving 90% sparsity with the Lottery Ticket Hypothesis pruning technique, our pruned BnBERT-iPET model proves to be a tough competitor to state-of-the-art language models such as Bangla Electra, Indic-BERT, and XLM-RoBERTa on downstream tasks over standard benchmark datasets of the Bengali language.
