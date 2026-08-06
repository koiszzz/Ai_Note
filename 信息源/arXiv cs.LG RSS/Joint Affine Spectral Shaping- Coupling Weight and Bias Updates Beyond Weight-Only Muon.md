# Joint Affine Spectral Shaping: Coupling Weight and Bias Updates Beyond Weight-Only Muon

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Gongyue Zhang, Honghai Liu　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.02991)

------

arXiv:2608.02991v1 Announce Type: new

Abstract: Matrix spectral optimizers reshape weight-update spectra but usually delegate vector-valued biases to a separate optimizer. We study whether this separation is neutral. We formulate each affine layer as a joint momentum matrix $A=[M_W,\alpha m_b]$ and apply a capped regularized-inverse spectral map to the complete matrix, producing both the weight and physical bias updates. A strict five-seed ablation on a four-layer BERT-mini trained from scratch on IMDb compares exact-SVD Muon, weight-only inverse shaping, affine-probe inverse shaping, and the proposed joint regularized inverse (JRI). Weight-only inverse shaping raises validation-loss-selected test accuracy from $84.903\pm0.242\%$ to $85.562\pm0.308\%$ and lowers selected test loss from $0.3479$ to $0.3345$. Allowing bias to alter the joint SVD while retaining an independent Adam bias update does not improve over weight-only inverse shaping. Using the transformed bias jointly raises selected test accuracy to $85.738\pm0.180\%$ and lowers test loss to $0.3291$, with all five seeds improving relative to the probe baseline. During the peak-performance window, JRI preserves the eligible weight-update norm while reducing the bias-update norm from $0.02095$ to $0.00301$, lowers boundary-function share from $86.58\%$ to $78.97\%$, and changes the cosine between weight-induced boundary motion and explicit bias from $+0.030$ to $-0.137$. An independent 22-seed replication yields $85.743\pm0.203\%$ selected test accuracy. These results identify joint affine spectral allocation as a small but consistent extension to weight-only spectral optimization.
