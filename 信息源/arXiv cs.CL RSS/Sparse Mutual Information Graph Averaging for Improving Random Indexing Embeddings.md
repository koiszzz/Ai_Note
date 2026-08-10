# Sparse Mutual Information Graph Averaging for Improving Random Indexing Embeddings

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Sriram Loganathan, Gokul Anand, Aung Bo Bo, Yourui Shao, William B. Andreopoulos　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.05724)

------

arXiv:2608.05724v1 Announce Type: new

Abstract: Sparse word embedding pipelines can avoid dense co-occurrence matrix materialization, dense factorization, and gradient training while still relying on sparse global corpus statistics. This paper studies Random Indexing (RI) vectors refined by weighted averaging on a sparse Positive Pointwise Mutual Information (PPMI) graph. On a fairytales corpus, the covered semantic analogy set consists of 272 Google family- category questions. On this family subset, PPMI top-K graph averaging repairs a weak RI initialization, improving accuracy from 19.4+-0.7% to 30.7+-2.9% across five seeds. Under the single tested runs, the same neighborhood averaging reduces family- subset analogy accuracy for PPMI+SVD (singular value decom- position), Binary+SVD, CBOW, and Skip-gram. Thus the method is not competitive with neural baselines on text8 and gives near- zero strict similarity correlation on SimLex-999. While Bloom filter sketches underperform RI in the tested configuration, we find that PPMI graph averaging with top-K pruning is a useful non-gradient repair for weak RI embeddings. On the fairytales dataset, PPMI top-K=50 graph averaging improves RI with accuracy going from 19.4+-0.7% to 30.7+-2.9%, and performing best with a seed42 of 34.6%.
