# Beyond Reprojection Error: Camera Calibration with 3D Targets

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Dennis Ruppel, Hasan Kutlu, Kai A. Neumann, Martin Knuth, Pedro Santos, Andreas Weinmann, Arjan Kuijper　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05066)

------

arXiv:2608.05066v1 Announce Type: new

Abstract: In 3D reconstruction, camera calibration is an essential element for achieving high fidelity and accuracy of the reconstructed geometry. While existing approaches rely upon 2D planar calibration, this work proposes a framework tailored for 3D reconstruction that is based on predicting scene rays, which adds flexibility to the reconstruction pipeline and enables the use of recent advances in camera models. Novel metrics, reconstruction and intersection error, derived from predicted scene rays are employed in combination with a bootstrapping procedure that statistically evaluates different calibration objects and calibration pipelines for both intrinsic and extrinsic camera parameters. The results show that the generalized distortion model more faithfully captures physical camera effects and yields an improvement in calibration accuracy. Reprojection error is shown to be a potentially misleading indicator of 3D accuracy, and the proposed ray-based metrics provide a more holistic assessment. An icosahedron calibration target is designed to enrich calibration information for 3D reconstruction together with a ring-feature-based detector. The icosahedral target yields approximately 40% lower mean intersection and more stable calibration across bootstrap trials on synthetic data, while real-data performance demands very tight fabrication tolerances.
