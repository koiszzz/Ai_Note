# Pivot-Centric Trajectory Prediction: Bridging Long Horizons via Dynamical Guidance

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Xiucong Zhao, Jindong Tian, Hao Miao　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.RO　|　原文：[打开链接](https://arxiv.org/abs/2608.03521)

------

arXiv:2608.03521v1 Announce Type: cross

Abstract: Forecasting precise future motion of surrounding agents is essential for reliable autonomous vehicles. However, as the demand for longer prediction horizons increases, existing endpoint-completion or iterative-refine methods increasingly struggle with weak guidance and compounding errors. To tackle the long-horizon prediction challenge, we propose Pivot-Centric Trajectory Prediction (PCTP). By introducing ``pivots'' and focusing on predicting pivot points along extended trajectories, we divide the long-term prediction task into short-term sub-tasks at various scales. Specifically, PCTP decouples the long-term trajectory predicting process into two processes: pivot prediction and pivot-based trajectory refinement. The pivot prediction process aims to utilize global map context and agent-to-agent interactions to identify these ``pivot points'', while the pivot-based trajectory refinement process focuses on local map details and refines the short-term trajectory based on predicted ``pivot points''. Compared with existing methods, PCTP provides more intermediate guidance while reducing compounding errors. Moreover, PCTP is a flexible approach that can be integrated into most state-of-the-art trajectory prediction models. Experimental results show that PCTP improves the prediction accuracy of leading models on both Argoverse I and Argoverse II datasets with minimal impact on model size. Specifically, PCTP combined with QCNet outperforms all published ensemble-free methods on the Argoverse II leaderboard at submission.
