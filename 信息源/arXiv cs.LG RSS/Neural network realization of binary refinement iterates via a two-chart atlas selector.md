# Neural network realization of binary refinement iterates via a two-chart atlas selector

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Tsogtgerel Gantumur　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：math.NA　|　原文：[打开链接](https://arxiv.org/abs/2608.02624)

------

arXiv:2608.02624v1 Announce Type: cross

Abstract: Refinement operators generate many functions used in wavelet constructions, subdivision schemes, and geometric modeling. Their finite iterates can develop rapidly increasing numbers of linear pieces, making them a natural test case for the expressive power of deep neural networks. Earlier work showed that, for scalar binary refinement with a finitely supported mask, every compactly supported continuous piecewise linear seed has finite refinement iterates that admit exact ReLU realizations of fixed width and depth growing linearly with the number of refinement steps. The present paper gives a new construction of this known theorem.

The difficulty is that the refinement cascade is driven by discontinuous binary digit choices, whereas ReLU networks produce continuous piecewise linear maps. We represent the residual dynamics on a polygonal model of the circle and describe each residual position in two overlapping coordinate systems, one ordinary and one shifted by one half. Their discontinuities occur at different points. The network switches between the two descriptions only where both are valid and the corresponding fixed linear cascade updates agree, so the switch is exact and requires no multiplication by a variable selector.

The construction also gives exact readout of every continuous piecewise linear circle function satisfying the natural endpoint compatibility condition. Localized seeds are handled by a two-pass network, and translation covariance, finite decomposition, and gluing extend the result to arbitrary compactly supported continuous piecewise linear seeds in a preserved support window.
