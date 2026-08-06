# LaPrune: Controllable Differentiable Sparsity at Million Scale

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Jakub Antczak, Joanna Wojciechowicz, {\L}ukasz Struski, Jacek Tabor　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.04057)

------

arXiv:2608.04057v1 Announce Type: new

Abstract: Top-$k$ selection determines which components of a sparse model remain active. Hard selection blocks gradients, while continuous relaxations often couple mask hardness to the selected mass. We introduce LaPrune, a mathematically exact-budget differentiable layer that controls the normalized second moment while preserving the selected mass. A LapSum barrier preserves the selection mass, and a normalized second-moment constraint moves the mask from a dense equal-mass allocation toward hard top-$k$ at each budget. We derive a population prediction of the saturated fraction, a near-binary limiting law, and a tight worst-case guarantee on the near-zero fraction. The normalized hardness parameter is invariant to score scale, while a fixed LapSum temperature is not.
