# A geometry-based deep equilibrium model for image restoration under multiplicative Gamma noise

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Shengkun Yang, Luca Ratti, Zhichang Guo　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：math.NA　|　原文：[打开链接](https://arxiv.org/abs/2608.04944)

------

arXiv:2608.04944v1 Announce Type: cross

Abstract: We propose a deep learning framework for image restoration from images degraded by both multiplicative Gamma noise and blur. Unlike conventional deep equilibrium (DEQ) models that rely on implicit neural regularization, the proposed method learns an explicit and interpretable regularizer parameterized by geometric priors associated with surface area and mean curvature. To minimize the resulting variational model, we develop a mirror descent algorithm tailored to the commonly used Gamma-noise fidelity terms. Leveraging the Kurdyka-Lojasiewicz property for functions defined in $o$-minimal structures, we establish the global convergence of the generated iterates to a critical point. Experimental results on both grayscale and color image restoration demonstrate that the proposed method consistently outperforms representative model-based approaches while achieving performance comparable to state-of-the-art DEQ models based on implicit regularization, despite requiring substantially fewer trainable parameters.
