# MALT: Lightweight Curvature-Aware Muon via Diagonal Preconditioning

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Tongle Wu, Huanyu Dong, Ying Sun, Ziye Ma　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.05088)

------

arXiv:2608.05088v1 Announce Type: new

Abstract: Muon has recently emerged as a promising alternative to AdamW for language model pretraining by orthogonalizing momentum matrices using Newton-Schulz iterations. Although Muon mitigates gradient anisotropy, it does not explicitly account for the curvature geometry of the loss landscape and may therefore remain sensitive to curvature anisotropy. We bridge this gap by proposing MALT (Muon Augmented by Lightweight Two-sided Preconditioning), which uses lightweight diagonal preconditioners to reduce the sensitivity of Muon to curvature anisotropy. Specifically, MALT uses two-sided diagonal preconditioners with low memory and computational overhead to approximately capture the curvature geometry of the loss landscape. It orthogonalizes the preconditioned momentum using Newton-Schulz iterations and maps the result back to define the update direction, while norm grafting controls the update magnitude. To improve the robustness of MALT to stochastic gradient noise, we further propose MALTER (MALT with Adaptive stEpsize Rescaling). Convergence guarantees are provided for MALT in the stochastic non-convex setting. Experiments on GPT-2 Small, Medium, and Large pretraining show that the proposed methods outperform Muon while maintaining nearly the same memory footprint and wall-clock time.
