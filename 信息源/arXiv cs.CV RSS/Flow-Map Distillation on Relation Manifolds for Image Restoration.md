# Flow-Map Distillation on Relation Manifolds for Image Restoration

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Zihao He, Songhua Liu　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05769)

------

arXiv:2608.05769v1 Announce Type: new

Abstract: Knowledge distillation for image restoration typically aligns intermediate features or relation matrices between teacher and student networks as static targets, ignoring the dynamic structure of the knowledge transfer process. In this paper, we propose Flow-Map Distillation on Relation Manifolds (FoRM), which reformulates relation-based knowledge transfer as a continuous flow mapping problem on the relation manifold. Rather than regressing a constant velocity field between student and teacher relation states, FoRM learns a flow map operator $\mathcal{F}_\theta(\mathbf{z}, t, s)$ that directly predicts the relation state at any target time $s$ given the current state at time $t$, enabling richer trajectory-level supervision. To ensure global self-consistency of the learned flow map, we introduce a safe semigroup consistency constraint that enforces compositional agreement using ground-truth bridge states, eliminating phantom-state error accumulation. An endpoint anchoring loss further prevents the operator from drifting away from the teacher target. Extensive experiments on five image restoration tasks, including super-resolution, deraining, denoising, deblurring, and low-light enhancement, demonstrate consistent gains over state-of-the-art distillation baselines across multiple backbone architectures, reducing training variance by approximately 50\% compared to naive flow matching distillation while achieving superior restoration quality.
