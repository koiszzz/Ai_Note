# Should the Boundary Term Be Learned in Reflected Diffusion? Conormal Trace and Reflection Masking

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Ziyue Wang, Takafumi Kanamori　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：stat.ML　|　原文：[打开链接](https://arxiv.org/abs/2608.03469)

------

arXiv:2608.03469v1 Announce Type: cross

Abstract: We study score learning for reflected diffusion on bounded domains. Reflection keeps trajectories feasible but does not ensure that the learned score satisfies the boundary behavior implied by the forward process. With implicit score matching, integration by parts leaves a boundary term, and we show that it depends on one scalar at each boundary point: the diffusion- weighted normal component of the score, or conormal trace. The no-flux condition fixes this value while leaving the re- maining boundary components unrestricted; under anisotropic diffusion it generally differs from the ordinary normal score component. On hyperrectangles, our parametrization enforces the required trace without additional trainable parameters or a stochastic boundary estimator and, under regularity assump- tions, can represent the true score, whereas fixing an incorrect value creates an error that more data cannot remove. We ex- tend the construction to simplices and polygonal domains and identify reflection masking: hard reflection can keep samples feasible even when the learned trace is wrong, so post-reflection metrics may hide the error. Experiments show the clearest separation with less frequent reflection, anisotropic diffusion, and mass near intersections of constraints; under full reflection, final sample placement improves inconsistently, illustrating how hard repair can mask boundary-score errors and decouple score accuracy from downstream generation quality.
