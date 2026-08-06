# DRIFT: Derailing Denoising Trajectories of Flow-Matching VLAs with Adversarial Patch Attack

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Hoseong Tae, Jong-Seok Lee　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.03207)

------

arXiv:2608.03207v1 Announce Type: cross

Abstract: Flow-matching vision-language-action (VLA) models such as pi0 generate robot actions by integrating a learned denoising velocity field, and have been reported to resist adversarial perturbations that readily fool autoregressive VLAs. We show that this robustness is largely illusory: it stems from prior attacks ignoring the multi-step denoising ODE. We introduce DRIFT (Denoising Redirection via Input perturbation of the Flow-matching Trajectory), a test-time universal adversarial patch placed on the robot's gripper that attacks the denoising velocity field of an off-the-shelf policy. Our central finding is counterintuitive: attacking only the first denoising step is both stronger and cheaper than attacking a wider window of steps, which we explain through a gradient conflict unique to input-space optimization and which is exactly opposite to the training-time backdoor regime. On pi0 and pi0.5 across four LIBERO suites, DRIFT breaks essentially all originally-solvable tasks with a small single patch, far exceeding action- and embedding-space attack baselines.
