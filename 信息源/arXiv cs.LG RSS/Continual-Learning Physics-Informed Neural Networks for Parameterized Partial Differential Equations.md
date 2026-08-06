# Continual-Learning Physics-Informed Neural Networks for Parameterized Partial Differential Equations

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Xujia Chen, Xinyue Hu, Letian Chen, Yi Liu, Wenhui Fan　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.04778)

------

arXiv:2608.04778v1 Announce Type: new

Abstract: Physics-informed neural networks (PINNs) incorporate governing equations into neural-network training and can approximate PDE solutions without requiring large observational datasets. Parameterized PINNs (ParamPINNs) further take physical parameters as inputs, allowing a single model to represent a family of PDE solutions over a parameter domain. Existing ParamPINNs, however, still face inefficient training, uneven accuracy across parameters, and overfitting to a limited set of sampled parameter tasks, which can impair generalization to unsampled parameters. To address these issues, we propose a continual-learning physics-informed neural network (CL-PINN), which treats PDE instances at different parameter values as related tasks and learns them sequentially. CL-PINN combines Bayesian-optimization-based active parameter selection, task-wise dynamic loss weighting, sparse physics-constrained replay, and an optional parameter subnetwork to improve task allocation and knowledge retention under bounded active-task capacity. It requires no observational data and is designed to solve parameterized PDEs over relatively broad parameter domains under limited computational resources. Multi-seed evaluations on five benchmarks, including one continuous function and four parameterized PDEs, show that Bayesian selection substantially reduces objective-loss queries relative to grid-greedy search, while sparse replay mitigates forgetting of earlier tasks. Under the prescribed within-case resource protocols, CL-PINN generally provides higher and more balanced solution accuracy than fixed-sampling and grid-greedy baselines. CL-PINN offers a practical route toward learning PDE solutions that generalize across physical parameters and has the potential to support reusable physics-informed surrogates for large-scale engineering parameter studies.
