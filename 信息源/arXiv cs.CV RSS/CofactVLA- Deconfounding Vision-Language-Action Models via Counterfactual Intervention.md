# CofactVLA: Deconfounding Vision-Language-Action Models via Counterfactual Intervention

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Yan Zhang, Yinan Wu, Haoran Duan, Jungong Han　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.04396)

------

arXiv:2608.04396v1 Announce Type: new

Abstract: Vision-Language-Action (VLA) models have driven significant progress in robotic manipulation, yet they fundamentally struggle with the vision-override phenomenon. Driven by the severe modality imbalance between dense visual streams and sparse linguistic instructions, VLAs frequently fall prey to causal confusion. Instead of treating language as the primary causal driver, the policy entirely bypasses the original instruction by overfitting to spurious visual confounders, such as prominent objects or familiar layouts. To systematically alleviate this bias, we formalize the process of action generation as a Dual-path Deconfounding Graph (DDG) and propose CofactVLA, a novel causal intervention framework. By dynamically constructing a language-masked counterfactual branch within a single forward pass, CofactVLA isolates and neutralizes visual confounders through two synergistic mechanisms. First, Action-Level Orthogonal Projection Guidance (OPG) geometrically projects the factual velocity field away from the counterfactual visual bias during continuous flow matching, extracting the pure semantic intent. Second, Feature-Level Counterfactual Covariance Reduction (CCR) mathematically deconfounds latent representations by penalizing the positive eigenspace of the covariance difference, explicitly suppressing dominant visual shortcuts while preserving the causal language intent. Extensive experiments demonstrate that CofactVLA establishes a new state-of-the-art across diverse simulation benchmarks. Beyond simulation, real-world robot experiments demonstrate the causal efficacy of our method in bridging the generalization gap, yielding a 52.3\% absolute success rate gain under out-of-distribution scenarios.
