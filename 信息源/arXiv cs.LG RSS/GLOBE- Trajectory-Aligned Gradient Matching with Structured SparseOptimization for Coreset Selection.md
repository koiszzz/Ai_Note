# GLOBE: Trajectory-Aligned Gradient Matching with Structured SparseOptimization for Coreset Selection

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Hetian Liu, Jin Cui, Mengcheng Shi, Yanbin Hu, Xinyue Long, Boran Zhao, Pengju Pen　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.02690)

------

arXiv:2608.02690v1 Announce Type: new

Abstract: On-device training of deep neural networks is fundamentally constrained by the computational and memory costs of large-scale datasets. Coreset selection offers a practical solution by retaining only a compact subset of real training samples. However, existing gradient-based methods commonly rely on gradients computed at a single model snapshot and employ greedy or pursuit-based selection procedures, limiting their ability to capture evolving optimization dynamics and handle strongly correlated samples. We propose GLOBE (Gradient Local-Balanced Extraction), a trajectory-aligned coreset selection framework that formulates sample selection as a globally optimized sparse weighting problem. GLOBE represents each sample by a gradient trajectory constructed across multiple training checkpoints, thereby capturing its influence throughout different stages of optimization. To preserve the training behavior of the full dataset, we introduce a multi-order matching objective that jointly aligns the first-order mean and projected uncentered second-order moments of gradient trajectories. GLOBE further combines Group LASSO, Elastic Net regularization, and nonnegative budget constraints to induce group- and sample-level sparsity while stabilizing the weights of correlated trajectories. Finally, class-balanced Top-K selection maintains adequate category coverage under limited sampling budgets. Experiments across six benchmarks and five evaluation architectures demonstrate that GLOBE consistently outperforms existing coreset selection methods in downstream test accuracy, particularly at low retention ratios. These results highlight the effectiveness of combining dynamic gradient information, multi-order distribution matching, and structured sparsity for data-efficient learning.
