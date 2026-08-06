# MGSB: Manifold Gated Signature Branch Pressure-Domain Baseline Architecture for Two-Phase Pipeline Flows Under Distributional Shift

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Issah Suleiman, Sormeh Serpoosh, Nadine Elkholy, Hicham Ferroudji, Mohammad Azizur Rahman, Matthew Hamilton　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.04805)

------

arXiv:2608.04805v1 Announce Type: new

Abstract: Leak detection models for multiphase pipelines often degrade when deployed under flow regimes that differ from training. Existing evaluations typically assess performance under in-distribution operating conditions, masking failures caused by regime transitions such as bubble-to-slug flow. We propose the Manifold Gated Signature Bias (MGSB), a regime-aware architecture combining regime-conditioned feature fusion, a TT-RoughPath encoder, and Mean-Teacher consistency regularization to improve robustness under distribution shift. Under leave-one-group-out evaluation, MGSB achieves a detection F1 of 0.930 and an OOD F1 of 0.783, substantially outperforming CNN-LSTM and fully connected baselines under severe feature corruption. Ablations show the proposed architecture, not the training procedure, is the primary contributor to OOD robustness, while Mahalanobis-distance analysis confirms the held-out conditions are genuinely out-of-distribution. These results show that explicit regime-aware modelling is a practical path toward robust, sensor-agnostic leak detection in industrial multiphase pipelines.
