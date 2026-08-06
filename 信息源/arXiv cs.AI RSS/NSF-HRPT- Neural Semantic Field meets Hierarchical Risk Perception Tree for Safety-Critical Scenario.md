# NSF-HRPT: Neural Semantic Field meets Hierarchical Risk Perception Tree for Safety-Critical Scenario Assessment

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Yu Zhao, Jiangyu Pan, Tao Hu, Ming Yin, Fan Yang, Jiangfan Liu, Xiubo Liang　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.04776)

------

arXiv:2608.04776v1 Announce Type: new

Abstract: The ability to accurately assess and anticipate risks in safety-critical scenarios is crucial for autonomous driving systems. While existing research has made progress in collision prediction, accurately quantifying risk levels from monocular vision inputs remains challenging due to the complex dynamics of multi-agent interactions and the inherent uncertainty in real-world environments. To address these challenges, we present NSF-HRPT, a novel framework that combines learning-based perception with structured reasoning for quantitative risk assessment. Our approach features a Neural Semantic Field (NSF) that learns to model scene semantics, trajectory predictions, and probabilistic Time-to-Collision (TTC) distributions from simulation data. During inference, the pre-trained NSF serves as a prior for our Hierarchical Risk Perception Tree (HRPT), which enables efficient parallel computation and spatial reasoning about multi-agent risks. Additionally, we introduce a Sim2Real enhancement strategy that improves real-world applicability without retraining by incorporating priors from foundation models. Extensive evaluations demonstrate that our framework achieves state-of-the-art performance on synthetic benchmarks and delivers competitive, near-state-of-the-art results on real-world datasets for both TTC estimation accuracy and risk localization precision. The proposed method provides an effective solution for real-time risk awareness from monocular camera inputs.
