# Hybrid-Adaptive Thread Tuning to Mitigate Simulation Execution Bottlenecks in High-Performance Reinforcement Learning Inference

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Jiming Su, Hantao Hua, Lujia Yin, Yiping Yao, Feng Zhu　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.06025)

------

arXiv:2608.06025v1 Announce Type: new

Abstract: In simulation-in-the-loop decision-making systems, reinforcement learning (RL) inference is often constrained by simulator-side execution overhead, where workloads are highly dynamic and sensitive to runtime thread configurations. Existing multithreaded strategies struggle to match thread resources before or during execution, causing resource contention, scheduling overhead, and reduced throughput. Through empirical analysis, we identify the ratio of task execution time to scheduling time as the key factor determining the optimal thread count. Building on this insight, we propose AutoThread, a hybrid adaptive thread-tuning method for mitigating simulation bottlenecks in RL inference. AutoThread employs a Physics-Informed Neural Operator (PINO) as a thread-count predictor and incorporates a finite-source M/M/1 queueing model to constrain and guide prediction, enabling fast and accurate estimation under dynamic workloads. It further performs load-aware online fine-tuning to compensate for prediction errors and refine resource allocation. Experiments show that AutoThread improves average speedup by 18.4\% over static strategies, achieves average throughput of 1.7x and 1.8x that of XGBoost and Reinforcer, respectively, and reduces execution time by up to 83.8\% compared with state-of-the-art methods. Our code and dataset are publicly available at https://github.com/suchenjm/AutoThread.
