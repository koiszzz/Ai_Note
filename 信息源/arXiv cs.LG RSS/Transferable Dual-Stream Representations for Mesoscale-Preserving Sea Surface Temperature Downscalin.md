# Transferable Dual-Stream Representations for Mesoscale-Preserving Sea Surface Temperature Downscaling

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Parth Doshi, Priyanka Aravindan, Vaishnav Vaidheeswaran, Md Mahbub Alam, Gabriel Spadon　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.04230)

------

arXiv:2608.04230v1 Announce Type: new

Abstract: Deep learning models for scientific spatio-temporal downscaling often minimize reconstruction error while failing to preserve physically meaningful multi-scale structure. For sea surface temperature prediction, this can yield outputs that are numerically plausible yet overly smooth, missing mesoscale variability critical to regional ocean dynamics. Existing methods often focus on pixel-wise objectives or single-context conditioning, which limits their ability to preserve spectral fidelity and generalize across regions. To address this, we propose EddyFlow, a representation learning framework for kilometer-scale sea surface temperature downscaling that balances predictive accuracy, scale-dependent structure, and regional generalization. EddyFlow is trained on the Gulf of St.~Lawrence and evaluated in zero-shot and few-shot settings on the Bay of Fundy and the Gulf of Mexico. EddyFlow demonstrates that physics-informed representation learning reduces zero-shot RMSE by 21%, achieves up to 85.6% skill relative to persistence on unseen domains, and maintains near-ideal spectral fidelity with a PSD ratio of $\approx 1.00$.
