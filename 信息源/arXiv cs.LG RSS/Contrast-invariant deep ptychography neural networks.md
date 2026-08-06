# Contrast-invariant deep ptychography neural networks

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Albert Vong, Steven Henke, Oliver Hoidn, Hanna Ruth, Junjing Deng, Apurva Mehta, David Shapiro, Alexander Hexemer, Nicholas Schwarz　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.02869)

------

arXiv:2608.02869v1 Announce Type: new

Abstract: Ptychography neural networks suffer from scaling inconsistencies when generalizing out of distribution, limiting their real world viability. We address this scaling mismatch using a factorization strategy which decouples the learned object texture from measurement scaling, enabling a single trained network to produce measurement-consistent reconstructions across varying illumination conditions. This requires predicting the learned object in real and imaginary units instead of the canonical amplitude and phase representation. We additionally introduce a synthetic object sampling strategy that minimizes phase distribution mismatch between synthetic training data and experimental targets. These improvements yield up to a 5x reduction in Fourier error over the previous PtychoPINN-torch baseline across 5 experimental datasets spanning multiple beamlines and facilities.
