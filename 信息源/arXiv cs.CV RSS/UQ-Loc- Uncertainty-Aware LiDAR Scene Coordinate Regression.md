# UQ-Loc: Uncertainty-Aware LiDAR Scene Coordinate Regression

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Jacek Komorowski　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.06307)

------

arXiv:2608.06307v1 Announce Type: new

Abstract: LiDAR-based Scene Coordinate Regression (SCR) maps point clouds directly to 3D scene coordinates, enabling precise 6-DoF localisation without explicit map retrieval. However, existing methods produce deterministic predictions, discarding aleatoric uncertainty that could improve robustness and downstream decision-making. We present UQ-Loc, which extends the LightLoc architecture with an anisotropic Gaussian covariance head that predicts a full 3x3 positive-definite covariance matrix per voxel. Training uses a Negative Log-Likelihood (NLL) loss augmented with a kNN-based spatial smoothness regulariser, while inference employs a modified SC2-PCR solver with uncertainty-weighted seed scoring and a Mahalanobis-distance inlier test. We adopt Expected Calibration Error (ECE) as a principled metric for evaluating the quality of the predicted uncertainty. Experiments demonstrate that UQ-Loc achieves consistent improvement in 6-DoF localization accuracy while producing well-calibrated covariances.
