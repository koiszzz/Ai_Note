# StreamSplat: Streaming Feed-Forward 3D Gaussian Splatting

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Changhao Song, Yuxuan Wang, Qibiao Li, Youcheng Cai, Ligang Liu　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.01659)

------

arXiv:2608.01659v2 Announce Type: replace

Abstract: Feed-forward 3D Gaussian Splatting enables efficient novel-view synthesis without per-scene optimization, but most existing methods assume a fixed set of context views and process them jointly. This limits their applicability to online scenarios where calibrated views arrive sequentially and the scene must be updated causally. We present \emph{StreamSplat}, a streaming feed-forward 3DGS framework that incrementally maintains a persistent geometry-grounded scene state and decodes it into renderable 3D Gaussians after each input chunk. StreamSplat centers on a \textbf{Voxel-Aligned Causal Cache (VACC)}, which stores historical 3D tokens in a memory-bounded voxel structure so that memory grows with explored scene geometry rather than stream length. To better reuse history during causal prediction, we introduce \textbf{History-Projected Depth Anchoring (HPDA)} to project cached geometry as depth guidance for current cost-volume estimation, and \textbf{Cache-Guided Feature Injection (CGFI)} to inject cached latent evidence into Gaussian-token regression. Experiments on DL3DV, RealEstate10K, and ScanNet show that StreamSplat remains competitive with state-of-the-art feed-forward 3DGS methods under sparse causal inputs, despite not using future views or full-scene context. More importantly, it scales to long input streams with 256, 512, and 1024 views where fixed-view baselines run out of memory, yielding sustained improvements in novel-view synthesis quality as more observations arrive. The code will be made publicly available upon acceptance.
