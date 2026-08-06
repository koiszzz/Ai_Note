# NPMixer: Hierarchical Neighboring Patch Mixing for Time Series Forecasting

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Jung Min Choi, Vijaya Krishna Yalavarthi, Lars Schmidt-Thieme　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2605.07476)

------

arXiv:2605.07476v2 Announce Type: replace

Abstract: Multivariate time series forecasting remains a challenge due to the complexity of local temporal dynamics and global dependencies across multiple variables.

In this paper, we propose \textbf{N}eighboring \textbf{P}atching \textbf{Mixer} (\textbf{NPMixer}), a hierarchical architecture featuring a Learnable Stationary Wavelet Transform that adaptively learns filter coefficients to decompose signals into trend and detail components in a data-dependent manner.

Our framework introduces a Neighboring Mixer Block that captures local temporal dynamics through a series of hierarchical MLP layers operating on non-overlapping patches.

Specifically, the mixer block utilizes MLPs to learn temporal patterns within and across these patches, expanding the receptive field to capture multi-scale dependencies.

A Channel-Mixing Encoder is applied to high-frequency components to learn channel correlations while preserving the stability of the underlying global trend.

Extensive experiments on seven benchmark datasets demonstrate that NPMixer consistently outperforms state-of-the-art models, achieving better performance in 20 out of 28 ($71.4\%$) evaluated experimental setups for MSE.
