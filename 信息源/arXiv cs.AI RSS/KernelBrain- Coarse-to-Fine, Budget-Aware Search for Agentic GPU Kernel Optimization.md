# KernelBrain: Coarse-to-Fine, Budget-Aware Search for Agentic GPU Kernel Optimization

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Shuai Che, Gang Peng　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.DC　|　原文：[打开链接](https://arxiv.org/abs/2608.02611)

------

arXiv:2608.02611v1 Announce Type: cross

Abstract: Automating GPU kernel optimization remains difficult in practice: generated variants can violate correctness constraints, runtime measurements are noisy, and search often stalls early. We present a practical optimization agent that combines LLM-guided mutation, adaptive resource allocation, policy-gated evaluation, and profiler-informed diagnosis. The system screens many candidates with low-cost evaluation and allocates higher-fidelity budget only to promising survivors to optimize and evolve GPU kernels. On important Triton kernel generation tasks, this design improves both kernel quality and search efficiency, reaching 0.88x-6.72x speedup over PyTorch and up to 1.4x speedup over the state-of-the-art kernel agent, with up to 48% lower optimization time.
