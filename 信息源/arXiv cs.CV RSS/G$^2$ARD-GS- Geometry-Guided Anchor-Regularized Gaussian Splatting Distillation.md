# G$^2$ARD-GS: Geometry-Guided Anchor-Regularized Gaussian Splatting Distillation

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Puyuan Zhang, Jianming Huang, Wenkai Ye, Wei Dong　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05704)

------

arXiv:2608.05704v1 Announce Type: new

Abstract: Dense colored LiDAR maps provide accurate city-scale geometry, but lifting them into 3D Gaussian Splatting (3DGS) retains millions of primitives, making the resulting models costly to store, transmit, render, and adapt. Aggressive primitive reduction alleviates this burden, but can remove the local surface support needed for stable novel-view synthesis and downstream geometric use. We introduce G$^2$ARD-GS, a geometry-guided distillation method that converts a dense Gaussian prior instantiated either as a training-free point-cloud lift or a trained GS model into a compact, reusable representation. G$^2$ARD-GS progressively consolidates the prior into surface-aware representatives, then recovers appearance on the resulting fixed topology under construction-time anchor constraints, with no primitives added or removed during recovery. Under limited supervision, geometry-aware view selection allocates the available view budget. On MatrixCity, G$^2$ARD-GS achieves the best PSNR, SSIM, and LPIPS across matched $5\times$--$30\times$ compression budgets, outperforming PUP by $3.2$--$6.8$,dB in PSNR. When reused as frozen geometry, the compact model improves off-trajectory appearance adaptation by $3.7$--$4.9$,dB over PUP 3D-GS and preserves image-to-model registration accuracy on Cambridge KingsCollege at $30\times$ compression. Project page: https://patrick1159.github.io/gardGS-page/.
