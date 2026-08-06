# An active-learning framework for real-time depth perception from monocular vision streams

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Xiaorong Zeng, Weiqiang Chen, Peng Shi, Liang Su, Zirui Wang, Xuewu Ji, Shuiwen Shen　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.04917)

------

arXiv:2608.04917v1 Announce Type: new

Abstract: Biological visual systems can perceive depth from monocular vision flow, continuously integrating temporal visual cues while maintaining a balance between stability and plasticity in dynamic environments. In contrast, artificial perception models deployed on resource-constrained edge devices are typically trained in a static offline manner and remain frozen after deployment, often suffering severe performance degradation under domain shifts. While large-scale models may encode broad knowledge through massive parameter redundancy, lightweight networks face a static optimization dilemma: forcing compact models to learn universal geometric representations is computationally inefficient and often leads to performance saturation. To resolve this issue, an Online Active Learning (OAL) mechanism is introduced to endow compact neural networks with the capability to adapt continuously during operation. A closed-loop Predict-Evaluate-Correct learning paradigm is established to actively select high-confidence, information-rich signals from streaming visual input. Crucially, Elastic Weight Consolidation (EWC) is employed not merely to prevent catastrophic forgetting, but to enforce Selective Plasticity, preserving parameters that encode globally relevant structural knowledge while allowing local alignment to newly observed environments. Built upon a MobileNetV3-Small backbone, the proposed system achieves approximately a 75% reduction in computational cost while maintaining competitive depth estimation accuracy. Experimental results demonstrate that adaptability is not solely determined by model size, but rather by how effectively parameter plasticity is regulated in dynamic environments.
