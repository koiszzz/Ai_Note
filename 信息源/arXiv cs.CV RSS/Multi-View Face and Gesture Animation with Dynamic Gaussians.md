# Multi-View Face and Gesture Animation with Dynamic Gaussians

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Alireza Javanmardi, Vippin Kumar Jeetmal, Christen Millerdurai, Alain Pagani, Didier Stricker　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.04722)

------

arXiv:2608.04722v1 Announce Type: new

Abstract: Creating photorealistic 3D human avatars with realistic upper-body motion remains challenging. Existing approaches either focus on the head and overlook hand gestures, or reconstruct the full body but fail to preserve fine-grained facial fidelity and hand pose accuracy. As a result, current methods struggle to capture the subtle dynamics of facial expressions and hand gestures that are crucial for natural human communication. While methods based on full-body parametric models enable avatar reconstruction from monocular or multi-view inputs, they often lack accurate facial animation and detailed hand articulation. To address these limitations, we propose MVFGA, a novel multi-view-consistent pipeline for generating realistic upper-body avatars. Our approach models the face and hands separately and fuses them with a parametric upper-body mesh model, enabling the capture of fine-grained facial expressions and hand poses for accurate upper-body avatar reconstruction. We then splat 3D Gaussians onto the obtained mesh, enabling high-quality rendering of dynamic avatars from novel viewpoints. Furthermore, we introduce MVFGA-MoCap, a multi-view upper-body motion capture dataset featuring controlled facial expression sequences, diverse hand gestures, and free-form communication. Experiments show that MVFGA generates visually realistic avatars with high-fidelity facial expressions and hand motions, outperforming baselines for upper-body avatar animation. Project page: https://dfki-av.github.io/MVFGA/
