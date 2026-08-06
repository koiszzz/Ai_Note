# CORF-GS: Real-Time Wireless Radiance Field Reconstruction via Coupled Optical-RF Gaussian Splatting

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Jinya Zhang, Jiajia Guo, Chao-Kai Wen, Shi Jin　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：eess.SP　|　原文：[打开链接](https://arxiv.org/abs/2607.25569)

------

arXiv:2607.25569v2 Announce Type: replace-cross

Abstract: Recent advances in 3D Gaussian Splatting (3DGS)-based wireless radiance field (WRF) reconstruction provide an efficient solution for wireless channel modeling. However, existing WRF reconstruction methods rely on pre-collected observations and offline optimization, and thus struggle to provide real-time channel knowledge. To bridge this gap, we propose CORF-GS, a real-time WRF reconstruction framework that processes sequential optical and radio frequency (RF) keyframes. Specifically, CORF-GS constructs a unified Gaussian representation for optical and RF with shared geometry and modality-specific appearance, allowing high-resolution optical images to provide structural priors for WRF reconstruction. When a new keyframe arrives, CORF-GS first employs optical-guided Gaussian sampling to densify the WRF in under-represented regions. Since light and radio waves may respond differently to the same object surfaces due to wavelength mismatch, relying solely on optical guidance may neglect RF-informative areas. Therefore, CORF-GS performs coupled optical-RF optimization to jointly refine the shared Gaussians. Compared with the existing two-stage training pipelines, this prevents WRF from passively adapting to a frozen optical geometry and encourages the shared Gaussians to adapt to both optical structures and RF power distributions. Simulations show that CORF-GS achieves state-of-the-art RF spectrum synthesis quality and reduces the reconstruction time by $6.4\times$ compared with existing WRF methods.
