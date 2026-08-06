# One-Point Contraction: Erasing Representational Separability toward Irreversible Deep Forgetting

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Jaeheun Jung, Bosung Jung, Suhyun Bae, Donghun Lee　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2507.07754)

------

arXiv:2507.07754v3 Announce Type: replace

Abstract: Machine unlearning is usually evaluated by what the classifier outputs: forget-set accuracy, confidence, membership-inference scores. We show that this is not enough. Across 14 representative unlearning methods on CIFAR-10 and SVHN, a single linear map fitted on a held-out calibration set, with no access to the forgotten data, reverses the unlearning in seconds and recovers forget-set accuracy to within a few percent of the original model. Recovered features even support pixel-level reconstruction through a generic decoder. We call this diagnostic Feature Mapping Recovery (FM-recovery). The pattern it exposes is uniform: current unlearning methods do not erase information from the representation, they apply an invertible linear distortion that hides it from one particular prediction head. We propose One-Point Contraction (OPC), an unlearning objective that collapses forget-set features to the origin while leaving the retain-set geometry intact. We prove that this contraction is equivalent to driving the predictive distribution to maximum entropy, so the same mechanism delivers behavioral forgetting and representation-level erasure at once. Forgotten queries land in a region the network treats as out-of-distribution, and the gradient signal on those queries collapses along with their features. OPC is the only method in our benchmark that survives FM-recovery, resists relearning and gradient-inversion attacks, and decouples forget from retain features in entangled settings, all without sacrificing retain or test accuracy.
