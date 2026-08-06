# POEM: Phase-Aware $\mathrm{SO}(2)$ Feature Rotation for Time Series Forecasting Under Periodicity Drift

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Jiawen Zhu, Shuhan Liu, Shengxuan Li, Qiming Shi, Di Weng　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.03630)

------

arXiv:2608.03630v1 Announce Type: new

Abstract: Deep learning has advanced time series forecasting, but periodicity drift, in which cycle timing and phase vary over time, remains a challenging problem. Existing methods predominantly model these sequences on fixed time grids, suffering from a limited ability to accommodate phase-related variation. To address this limitation, we propose \textbf{POEM}, a phase-aware forecasting framework based on latent feature rotation using the special orthogonal group in two dimensions, denoted by $\mathrm{SO}(2)$. POEM aims to reduce the phase-related variability by learning a phase-correction coordinate and applying an invertible $\mathrm{SO}(2)$-based rotation to paired latent features. To extrapolate this correction coordinate, Directional Phase Increment Attention (DPIA) retrieves historical phase increments from similar temporal contexts and integrates them into future phase corrections. Experiments demonstrate that POEM achieves competitive performance, while qualitative visualizations suggest that the learned phase-aware transformation makes latent trajectories more regular.
