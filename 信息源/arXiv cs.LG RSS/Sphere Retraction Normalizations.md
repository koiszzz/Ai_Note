# Sphere Retraction Normalizations

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Jie Zhang, Cheng-Fang Su, Yi-Jui Huang, Min-Te Sun　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.02668)

------

arXiv:2608.02668v1 Announce Type: new

Abstract: Residual connections are the de facto mechanism for training deep neural networks stably. Geodesic Normalization (GeoNorm) recasts them on a Riemannian manifold, orthogonalizing each layer output against the current hidden state and applying the resulting update through the Riemannian exponential map. Every hidden state thus keeps a constant $\ell_{2}$-norm, confining the residual stream to a hypersphere. The exponential map, however, is only one member of a broad family of retraction maps. We show that on the hypersphere this entire family collapses to a single scalar design choice. What distinguishes one retraction from another is only how the magnitude of an update is converted into a rotation angle within the plane spanned by the hidden state and the update. This view places Euclidean residual connections and GeoNorm in one framework. Instantiating it with the metric projection retraction and the Cayley retraction yields Proj-SpheretNorm and Cay-SpheretNorm, which are exactly norm-preserving yet require only algebraic operations. Both prove to be members of a one-parameter family of angular retractions, $p$-SpheretNorm, whose rotation angle saturates rather than growing without bound. The two methods above are recovered exactly at $p = 1$ and $p = 2$, while the identity map and GeoNorm arise only as limits at either end. On nanoGPT, all three methods outperform existing lightweight deep connection schemes, and the best validation loss is attained at finite $p$, indicating that the exponential map is not the preferred retraction for spherical residual streams but merely one end of a spectrum.
