# GSBF: Gaussian Splatting for Environment-Aware Beamforming

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Yijie Bian, Wei Guo, Zixin Wang, Shenghui Song, Jun Zhang, Khaled B. Letaief　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.05896)

------

arXiv:2608.05896v1 Announce Type: new

Abstract: Beamforming plays a key role in multiple-input-multiple-output (MIMO) communication systems. However, conventional beamforming design normally requires accurate instantaneous channel state information (CSI) and iterative optimization, which incur substantial pilot overhead and computational complexity. Recognizing that radio propagation is intrinsically governed by the physical geometry, we develop a 3D Gaussian splatting for environment-aware beamforming (GSBF) pipeline based on multi-modal data, which characterizes the environment through a persistent 3D Gaussian representation. Specifically, GSBF models the environmental scattering response with reciprocity-preserving bidirectional spherical Gaussian (Bi-SG) kernels and performs two-sided electromagnetic rasterization to render an angular propagator map. The rendered map is then aggregated through an over-complete array-manifold dictionary and projected to the constant-modulus beamformers, thereby synthesizing beams directly from the access point (AP) pose and user position without online instantaneous CSI. Simulations demonstrate that GSBF consistently outperforms baselines such as exhaustive beam alignment (EBA) with lower latency.
