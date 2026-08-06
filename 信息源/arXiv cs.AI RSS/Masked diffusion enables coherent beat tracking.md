# Masked diffusion enables coherent beat tracking

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Francesco Foscarin, Filip Korzeniowski, Richard Vogl　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.SD　|　原文：[打开链接](https://arxiv.org/abs/2608.04624)

------

arXiv:2608.04624v1 Announce Type: cross

Abstract: Current neural networks for beat tracking generate invalid outputs, such as consecutive downbeats and erratic tempo changes, even when these are not present in the training data. Heavy post-processing techniques can alleviate these problems, but the original cause of this inconsistent behaviour remains unknown. We hypothesise that it stems from inadequate modelling of multiple plausible output beat grids, resulting in an invalid mixture of competing interpretations. We propose a masked diffusion approach that properly models multiple outputs and enables the model to build coherent predictions through iterative inference. We devise three modifications to standard masked diffusion that enable its application to beat tracking: independent masking of beats and downbeats during training and inference, a balanced masking scheduler for inference, and peak-picking across inference steps. Our approach reduces erratic behaviours and improves beat-tracking performance.
