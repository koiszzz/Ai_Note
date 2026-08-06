# MAPRPose: Mask-Aware Proposal and Amodal Refinement for Multi-Object 6D Pose Estimation

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Yang Luo, Yan Gong, Yongsheng Gao, Xiaoying Sun, Jie Zhao　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2604.20650)

------

arXiv:2604.20650v3 Announce Type: replace

Abstract: 6D object pose estimation in cluttered scenes remains challenging due to severe occlusion and sensor noise. We propose MAPRPose, a two-stage framework that leverages mask-aware correspondences for pose proposal and amodal-driven Region-of-Interest (ROI) prediction for robust refinement. In the Mask-Aware Pose Proposal (MAPP) stage, we lift 2D correspondences into 3D space to establish reliable keypoint matches and generate geometrically consistent pose hypotheses based on correspondence-level scoring, from which the top-$K$ candidates are selected. In the refinement stage, we introduce a tensorized render-and-compare pipeline integrated with an Amodal Mask Prediction and ROI Re-Alignment (AMPR) module. By reconstructing complete object geometry and dynamically adjusting the ROI, AMPR mitigates localization errors and spatial misalignment under heavy occlusion. Furthermore, our GPU-accelerated RGB-XYZ reprojection enables simultaneous refinement of all $N \times B$ pose hypotheses in a single forward pass.
