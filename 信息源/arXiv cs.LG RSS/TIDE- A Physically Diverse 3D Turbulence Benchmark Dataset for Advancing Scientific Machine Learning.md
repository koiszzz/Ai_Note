# TIDE: A Physically Diverse 3D Turbulence Benchmark Dataset for Advancing Scientific Machine Learning

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Yilong Dai, Yiming Sun, Yiheng Chen, Shengyu Chen, Peyman Givi, Xiaowei Jia, Runlong Yu　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：physics.flu-dyn　|　原文：[打开链接](https://arxiv.org/abs/2608.04222)

------

arXiv:2608.04222v1 Announce Type: cross

Abstract: Turbulence is a central testbed for machine learning on physical dynamics because its governing laws are known exactly. However, most existing studies remain in 2D, while 3D turbulence has fundamentally different physics and is far more costly to simulate. Existing 3D resources also typically provide only one realization per configuration, making it difficult to distinguish learning the dynamics from fitting the statistics of a single flow. In this paper, we introduce TIDE (Turbulent Incompressible DNS Ensembles), a 256^3 DNS corpus and benchmark for 3D incompressible turbulence, with 15 configurations on eight controlled axes, independent ensembles, pressure fields, and equation-level verification. The benchmark includes five tasks, standardized learned baselines, controlled generalization splits, and physical-fidelity metrics alongside pointwise error. Across the main forecasting configurations, current learned models barely outperform persistence and still make about twice the error of a spectral solver given the true equations. Moreover, lower pointwise error can coincide with severely distorted small-scale dynamics, showing that accuracy alone does not ensure physical fidelity. Generalization results further show that most regime shifts reflect limited training coverage, whereas forced-to-decay transfer exposes a missing conditioning variable: operators trained under forcing continue to predict driven evolution when the external drive is removed. Closing these accuracy, fidelity, and conditioning gaps is the central open problem made measurable by TIDE.
