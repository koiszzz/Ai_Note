# Keep the Needle, Prune the Haystack: Defect-Preserving Token Pruning for Efficient Zero-Shot Anomaly Detection

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Yanning Hou, Jingyuan Zhang, Xiaoyun Wang, Qixiang Ma, Sihang Zhou, Ke Xu　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.03681)

------

arXiv:2608.03681v2 Announce Type: replace

Abstract: Zero-shot visual anomaly detection has achieved remarkable progress, with recent vision-only approaches further improving performance while simplifying the inference pipeline. However, existing methods typically perform dense computation over all images and spatial tokens, despite the fact that normal samples dominate real-world scenarios and anomalies usually occupy only small regions. Token pruning offers a promising solution, but introduces an asymmetric pruning risk in anomaly detection: retaining normal tokens mainly incurs redundant computation, whereas removing anomalous tokens may eliminate the only evidence for detection and localization. This risk is particularly severe in early layers, where pruning provides the greatest computational benefit but anomaly semantics remain unreliable. We propose KeepAD, a defect-preserving token pruning framework that formulates token selection as high-recall, anomaly-aware routing. In shallow layers, KeepAD combines coverage-preserving selection over local $2\times2$ patch neighborhoods with deterministic anomaly rescue to reduce the risk of discarding subtle defects. In deeper layers, frozen normal and abnormal prototypes guide pruning under an image-adaptive token budget, aggressively removing low-risk normal tokens while preserving local anomaly evidence. Dense-to-sparse self-distillation further supervises early token routing without introducing additional inference overhead. Experiments on six industrial and seven medical zero-shot anomaly detection benchmarks show that KeepAD reduces the token retention ratio to below $20\%$, while limiting the average degradation in image-level and pixel-level AUROC to within $2.7$ percentage points. At the most aggressive operating point, KeepAD achieves a $7.9\times$ speedup over the strongest CLIP-based baseline.
