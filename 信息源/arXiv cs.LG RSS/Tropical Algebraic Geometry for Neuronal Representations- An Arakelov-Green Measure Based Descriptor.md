# Tropical Algebraic Geometry for Neuronal Representations: An Arakelov-Green Measure Based Descriptor for Graph Learning

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Yuyang Zhang, Weihan Xu, Xuehai Zhou, Shucheng Cao, Qihuang Zhang　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.04460)

------

arXiv:2608.04460v1 Announce Type: new

Abstract: The quantitative analysis of 3D neuronal morphologies requires capturing both graph topology and spatial geometry. Current message-passing Graph Neural Networks (GNNs) are bounded by the 1-Weisfeiler-Lehman (1-WL) test, limiting their ability to capture cycles induced by spatial proximities. To address this, we propose a training-free geometric prior based on tropical algebraic geometry. We apply the recently established tropical Abel-Jacobi transform and polarization distances to machine learning on tree-structured data. We introduce a structural transformation pipeline, comprising cycle space augmentation and quotient space construction, to convert spatial trees into cyclic metric graphs suitable for embedding into the Tropical Jacobian. Computing exact tropical polarization distances requires solving the NP-Hard Closest Vector Problem (CVP) on integer lattices. Instead of relying on explicit approximations with quantization errors (e.g., Babai's rounding), we adopt a continuous relaxation on the universal cover of the Albanese torus. We show that the discrete Arakelov-Green measure, computed in closed form via the graph Laplacian's generalized inverse, decomposes exactly into the intrinsic path metric minus the unquantized polarization distance on this cover, avoiding integer lattice searches. This metric yields two descriptors: eigenvectors provide node-level structural coordinates, and the permutation-invariant eigenvalue spectrum provides a graph-level signature. On the BREC benchmark, the eigenvector formulation demonstrates expressivity beyond the 1-WL limit. On 3D morphology datasets (ACT-4, JML-4, BIL-6), the spectrum seamlessly integrates into standard architectures (VAEs, GNNs, Tree-LSTMs) without additional trainable parameters, outperforming explicit lattice approximations and improving classification accuracy over existing spatial models.
