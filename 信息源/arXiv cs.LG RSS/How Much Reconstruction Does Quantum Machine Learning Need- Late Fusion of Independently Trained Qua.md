# How Much Reconstruction Does Quantum Machine Learning Need? Late Fusion of Independently Trained Quantum Subcircuits

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Prabhjot Singh, Adel N. Toosi, Rajkumar Buyya　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：quant-ph　|　原文：[打开链接](https://arxiv.org/abs/2608.05595)

------

arXiv:2608.05595v1 Announce Type: cross

Abstract: Circuit cutting lets a large quantum neural network (QNN) run as independent subcircuits on small devices, but rebuilding its outputs by reconstruction carries a classical sampling overhead exponential in the number of cuts - the dominant runtime cost in prior work. We ask whether, for machine-learning tasks, this step is necessary, and replace it with late fusion: each subcircuit is trained and measured independently, and a small classical head combines their outputs - a linear-cost, decision-level combination borrowed from multimodal learning. To characterize the trade-off we introduce a quantumness dial $Q$, a tunable reconstruction budget interpolating from pure fusion to full reconstruction, and a cut-entanglement diagnostic that indicates how much reconstruction a task needs (Spearman $\rho=0.59$ over $104$ runs). Across synthetic and standard datasets, independently trained late fusion matches full reconstruction accuracy within $0.04$ at every point of the controlled sweep and on every classical benchmark, at exponentially lower cost; it is also markedly more robust to shot and device noise. Controlled entangled-data experiments locate the boundary where fusion must fail. We do not claim advantage over classical machine learning - consistent with recent benchmarking, quantum offers no accuracy edge on these datasets. Late fusion is thus an efficient, noise-robust, self-characterizing alternative to reconstruction for circuit-cutting QML.
