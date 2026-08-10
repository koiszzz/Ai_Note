# Kohn-Sham Spectral Embedding on Sparse Graphs at the Nishimori Temperature for Image Classification

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：V. S. Usatyuk, D. A. Sapozhnikov, S. I. Egorov　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2607.28428)

------

arXiv:2607.28428v3 Announce Type: replace

Abstract: We propose Kohn-Sham Spectral Embedding (KSSE), an energy-based model replacing the top-layer classifier of convolutional networks with a sparse-graph spectral embedding at the Nishimori temperature of an associated Random-Bond Ising Model the spectral detectability threshold where class structure becomes marginally distinguishable from disorder. Mapping pre-trained features onto quasi-cyclic low-density parity-check graphs, we construct a regularized Laplacian (Bethe-Hessian) as an effective Kohn-Sham Hamiltonian, yielding D independent spectral problems-one per feature channel-solvable in $O(N log N + k_{mode}^{2} N)$ time by FFT on circulant blocks (Pontryagin self-duality), with low-mode Rayleigh-Ritz refinement ($k_{mode}=5$). Physically, this is a k.p effective-mass reduction on a one-dimensional ring crystal: the circulant support is the perfect crystal, the data weights a slowly varying impurity potential, and the Nishimori crossing a Fermi level at the band edge. Star-domain surgery optimizes the graph: instead of eliminating all frustrated cycles impossible without destroying the codewords-edge shifts create certified convexity around codewords with bounded residual frustration, with multi-scale fractal certification (basins $D_{2}<1$ vs rough landscapes $D_{2}>3$). The theory includes a generalized Ihara-Bass identity with a sharp spectral threshold, a non-backtracking growth trichotomy with frustration as a gauge-invariant $Z_{2}$ flux, a trapping-set spectral test, exact channel separability with a cup-product obstruction, plus loop-series, convexity, surgery, and quasi-stationarity bounds. On ImageNet-1000 with frozen EfficientNet-B4 features (D=1792) under a transductive protocol, KSSE achieves 88.93% Top-1 accuracy with ~21.24M parameters-beating Swin-L (197M, 86.4-87.3%) and matching the lower end of ViT-H/14 (632M, 88.0-89.5%) with 10x and 30x fewer parameters.
