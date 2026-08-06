# SparseDitto: Customizing GPU Kernels for Different Sparsity Patterns with LLM-Based Agentic System

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Shiyang Li, Guangyan Sun, Jinwei Tang, Yanzhi Wang, Mingyi Hong, Caiwen Ding　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.DC　|　原文：[打开链接](https://arxiv.org/abs/2608.05033)

------

arXiv:2608.05033v1 Announce Type: cross

Abstract: Sparse matrix kernels are fundamental to scientific computing, graph analytics, and machine learning. Their GPU performance depends strongly on the input sparsity pattern and execution strategy. For the same SpMM on the same matrix, cuSPARSE exhibits a 350x performance gap between CSR and Blocked-ELL. Our study of multiple data formats, specialized systems, and sparse compilers shows that no single implementation consistently dominates across sparsity patterns and operators. This motivates a system that can adapt its representation, execution strategy, and hardware mapping to each workload and target GPU.

We present SparseDitto, an LLM-based system that constructs a GPU kernel for each matrix, operator, and target GPU. SparseDitto supports SpMV, SpMM, and SpGEMM within a unified design framework. A lightweight additive model ranks established strategies using structural features of the input matrix. An architecture-aware planner then proposes several candidate designs. Coding and verification agents implement and refine them using measurements from the target GPU. Across three sparse operators and a diverse set of matrices, SparseDitto achieves a geometric-mean speedup of 2.68x over cuSPARSE on an NVIDIA RTX PRO 6000 GPU, with a maximum of 146.61x. On an NVIDIA H200 GPU, it achieves 2.79x, with a maximum of 78.5x. Its generated SpMM kernels also accelerate full-batch GCN training by up to 3.39x.
