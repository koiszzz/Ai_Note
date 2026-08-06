# Seeing through boxes: Non-Line-of-Sight 3D Reconstruction from Radar Signals

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Jiachen Lu, Hailan Shanbhag, Haitham Al Hassanieh　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2605.29098)

------

arXiv:2605.29098v2 Announce Type: replace

Abstract: Reconstructing object geometry from radio frequency (RF) signals is fundamentally challenging due to the lensless imaging nature of RF sensing, which leads to low spatial resolution and high noise. Unlike light signals, RF signals can penetrate occlusions and thus capture information about hidden scenes. Existing Non-Line-of-Sight (NLoS) 3D neural reconstruction methods can recover coarse surfaces inside enclosed environments but often suffer from unstable optimization, noisy surface geometry, and surface ambiguity, failing to produce accurate zero-level sets from the signed distance field (SDF). These limitations largely stem from neglecting the role of Line-of-Sight (LoS) geometry outside the enclosed region, which provides valuable physical constraints for modeling signal propagation. In this paper, we introduce a Unified LoS and NLoS neural geometry reconstruction framework GeRaF 2.0 that leverages the outside LoS geometry to model and guide RF propagation from the LoS region into the NLoS region. By integrating visual LoS priors into the neural field formulation, GeRaF 2.0 achieves stable training and physically consistent reconstruction of both visible and hidden geometry, setting a new state-of-the-art in RF-based geometry reconstruction.
