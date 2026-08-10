# FashionPose: Unified Text-Driven Fashion Synthesis with Joint Geometric and Photometric Control

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Chuancheng Shi, Shaotian Li, Zhenlong Yuan, Zifeng Cheng, Fei Shen　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2507.13311)

------

arXiv:2507.13311v2 Announce Type: replace

Abstract: Realistic and controllable garment synthesis is essential for fashion e-commerce, yet it demands precise coordination between human pose geometry and environmental photometry. Conventional pose-guided frameworks suffer from two fundamental limitations: they rely heavily on predefined skeletons from off-the-shelf estimators, restricting semantic flexibility; and they predominantly focus on studio-like generation under neutral lighting, failing to reconcile geometric configurations with complex, scene-specific illumination described in natural language. To bridge this gap, we propose FashionPose, a cascaded architecture that reconciles geometric and photometric control within a unified language-driven interface. Unlike conventional frameworks, our framework employs a decoupled yet synergistic strategy: (1) a bidirectional contrastive alignment mechanism that grounds textual semantics into an explicit geometric manifold, enabling template-free pose generation; (2) an identity-anchored synthesis module that translates these geometric priors into high-fidelity imagery while preserving fine-grained appearance; and (3) a prompt-conditioned relighting module that leverages the generated pose as a spatial anchor to achieve environment-aware shading. This hierarchical design effectively transforms high-level instructions into consistent visual representations, ensuring both structural precision and atmospheric harmony. To facilitate this paradigm, we construct PoseCap, a dataset with over 40,000 caption-keypoint pairs. Extensive experiments demonstrate that FashionPose outperforms existing benchmarks in pose accuracy and physical realism, providing a robust solution for personalized, scene-aware virtual fashion displays.
