# MathDebugger: Detecting and Diagnosing Errors in Synthetic Mathematical Data

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Hao Liang, Meiyi Qiang, Yuying Li, Zefeng He, Xiaochen Ma, Ruichuan An, Yongzhen Guo, Zhengzhou Zhu, Bin Cui, Wentao Zhang　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2502.19058)

------

arXiv:2502.19058v2 Announce Type: replace

Abstract: Synthetic mathematical data has become an important resource for scaling the reasoning capabilities of large language models, yet errors in generated questions and solutions can substantially undermine its value. We introduce MathDebugger, a type-aware benchmark for evaluating whether models can detect and diagnose errors in synthetic mathematical data. MathDebugger contains 2,000 correct questions, 2,000 erroneous questions balanced across four error types, and 2,000 annotated solutions, including 610 erroneous solutions spanning three error types. Each instance is manually verified and labeled for correctness, with erroneous instances further assigned a fine-grained error category. Human annotation achieves substantial to near-perfect agreement, with per-type Fleiss kappa ranging from 0.69 to 0.91. We evaluate 14 representative large language models and three process reward models. The results show that even strong reasoning models remain far from saturating MathDebugger, particularly when identifying fine-grained error types. We also uncover a consistent solving-verification gap: models specialized for mathematical reasoning or long-form reasoning do not necessarily outperform their general-purpose counterparts when auditing mathematical data. Finally, we show that explicit error-type information provides actionable guidance for correcting erroneous questions and solutions, yielding consistent and statistically significant improvements. MathDebugger provides a practical benchmark for developing more reliable mathematical data synthesis and quality-control pipelines.
