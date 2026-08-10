# Iterate or Widen? When Test-Time Refinement Helps LiDAR Scene Completion: A Controlled Study of Evidence Geometry, Training Coverage, and Compute

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Shijie Hao, Weining Zhang　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.06014)

------

arXiv:2608.06014v1 Announce Type: new

Abstract: Should a completion model spend extra test-time compute by iterating, or spend a similar parameter budget on a wider one-shot predictor? The answer is easily confounded by denoising curricula, corruption augmentation, capacity, and unpaired evaluation. We study this question in LiDAR semantic scene completion by comparing a one-shot predictor, a parameter-matched wider predictor, and a weight-tied multigrid refiner initialized from the same frozen predictor. The protocol separates coherent region removal, independent thinning, range-dependent attenuation, and additive clutter while preserving exact scene-condition pairing. Across five training seeds and 815 SemanticKITTI sequence-08 frames, the full iterative system improves mIoU over the wide control by 0.911 points under contiguous angular removal, with a 95% moving-block bootstrap interval of [0.804, 1.040] that clears a predeclared 0.5-point practical margin. Under independent 75% thinning, iteration adds only 0.300 points [0.166, 0.436], whereas observation-family augmentation adds 5.975 points [5.662, 6.140]. Neither intervention repairs additive clutter. The iterative system also costs 10.74 ms and 0.75 GiB per frame, versus 6.25 ms and 0.23 GiB for the wide control. These results establish a geometry-conditioned empirical boundary rather than a universal advantage: coherent gaps can justify fixed-depth refinement, broadly thinned evidence is addressed more effectively by training coverage, and spurious evidence requires a different robustness mechanism.
