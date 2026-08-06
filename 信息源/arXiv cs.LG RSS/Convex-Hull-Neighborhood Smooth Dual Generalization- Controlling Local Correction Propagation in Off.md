# Convex-Hull-Neighborhood Smooth Dual Generalization: Controlling Local Correction Propagation in Offline RL

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Yi Yang, Zhennan Chen, Mingfeng Lv, Hanlei Li, Zhengsen Ruan, Lvqing Yang　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.03108)

------

arXiv:2608.03108v1 Announce Type: new

Abstract: Offline reinforcement learning (offline RL) can benefit from nearby out-of-distribution (OOD) actions, but estimation errors at these actions may be amplified by bootstrapping. Existing regularization and local-generalization methods control either the admissible OOD region or the influence of generalized targets, often through separate mechanisms. We propose Convex Hull Neighborhood Smooth Dual Generalization (CSDG), which expresses the Bellman backup as an in-sample value target plus a CHN-local correction. This formulation makes the generalized contribution explicit and separates it from the in-sample reference path. The correction is obtained by smoothing in-sample-oriented and OOD-oriented candidates sampled at different perturbation radii. A mixture coefficient lambda scales its contribution to each backup, while the recursive discount remains gamma. Under boundedness and fixed perturbation kernels, we derive an exact one-step correction identity, a time-varying iterate bound, and a fixed-point bound that depends only on the branch discrepancy at the fixed point. We further characterize the implicit policies induced by the idealized operators and give a conditional non-degradation criterion. The practical algorithm approximates these quantities using asymmetric bounded noise and expectile regression, without exact support classification or an additional pessimistic OOD penalty. Experiments on Gym-MuJoCo and AntMaze show strong aggregate performance and stable value estimation. Code is available at: https://github.com/YOUNG-fnxm/CSDG
