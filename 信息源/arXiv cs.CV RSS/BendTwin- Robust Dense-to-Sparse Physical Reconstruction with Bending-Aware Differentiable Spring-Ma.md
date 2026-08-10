# BendTwin: Robust Dense-to-Sparse Physical Reconstruction with Bending-Aware Differentiable Spring-Mass Models

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Yixiong Jing, Qi Wang, Lin Chen, Junwei Jiang, Guangming Wang, Haibing Wu, Olaf Wysocki, Wanli Ma, Brian Sheil　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.06164)

------

arXiv:2608.06164v1 Announce Type: new

Abstract: Reconstructing objects with mechanical properties from video observations enables physically consistent dynamic prediction, benefiting robotics planning and interaction. Existing spring--mass based physical driven reconstruction approaches offer efficient and differentiable physical reconstruction, but they typically rely on axial springs alone. Such formulations oversimplify the underlying structural mechanics and can become mechanically under-constrained when the physical graph is coarsened, limiting their ability to preserve stable local deformation. We present BendTwin, a bending-aware differentiable spring--mass framework for video-based reconstruction and future prediction of deformable objects. BendTwin introduces bending stiffness and damping over local surface triplets, penalizing deviations from rest angles and regularizing higher-order deformation. These bending constraints improve mechanical stability while preserving the simplicity of spring--mass system. Experiments show that BendTwin consistently outperforms the axial-only PhysTwin baseline. Ablation studies further demonstrate that the bending constraints maintain system stability across different downsampling ratios and consistently improve upon the original PhysTwin formulation. Overall, BendTwin provides an effective approach for constructing mechanically faithful digital twins from sparse-view RGB-D videos.
