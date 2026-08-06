# Rethinking Reservoir Pruning: A Dynamical Perspective for Echo State Networks

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Sudip Laudari, Puspa Raj Adhikari　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.04593)

------

arXiv:2608.04593v1 Announce Type: new

Abstract: Echo State Networks (ESNs) offer an efficient framework for temporal prediction, but their randomly initialized reservoirs are often over-parameterized and dynamically redundant. Existing pruning methods largely rely on static connectivity or activation statistics, which may overlook neurons that shape input-driven state transitions. We propose Dynamical Mode Pruning (DMP), a reservoir pruning method that ranks neurons by their contribution to dominant transition modes obtained from a trajectory-averaged Jacobian Gramian. DMP removes low-impact units and retrains only the readout. Experiments on chaotic and real-world time-series benchmarks show that DMP improves or preserves forecasting accuracy while reducing redundant reservoir components. Our results suggest that dynamical influence is a useful criterion for reservoir refinement beyond static structural importance alone.
