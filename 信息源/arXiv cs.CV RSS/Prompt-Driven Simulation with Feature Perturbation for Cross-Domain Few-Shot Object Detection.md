# Prompt-Driven Simulation with Feature Perturbation for Cross-Domain Few-Shot Object Detection

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Linhai Zhuo, Junxi Cai, Tianwen Qian, Qingping Zheng, Yang Liu　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.01348)

------

arXiv:2608.01348v2 Announce Type: replace

Abstract: Data augmentation, which simulates diverse visual variations to expand the source distribution and induce synthetic domain shifts, is a simple yet effective strategy for mitigating severe domain shifts and limited labeled target data in cross-domain few-shot object detection (CD-FSOD). Existing approaches rely on conventional data augmentation, such as Color-Jitter, Mosaic, and background-centric adaptation (e.g., Domain-RAG), which are limited in modeling complex domain shifts and often lead to suboptimal performance. In this paper, we propose PSP-FSOD, a principled framework that integrates prompt-driven domain simulation with feature perturbation regularization to improve generalization in CD-FSOD. To enable controllable domain synthesis, we design a prompt-driven strategy that leverages the visual grounding capability of large VLMs to jointly model foreground and background variations, generating semantically consistent yet domain-diverse training samples. Moreover, we adopt a grounding-aware generation scheme that guides object placement and alleviates semantic-spatial misalignment, thereby improving foreground adaptation. To ensure training stability and robustness, we further introduce a noise-induced feature perturbation mechanism that injects Gaussian noise into multi-scale intermediate features with distribution correction, encouraging consistent predictions under perturbations and reducing reliance on domain-specific cues. Extensive experiments demonstrate that PSP-FSOD produces high-quality domain-diverse supervision and learns domain-invariant representations, consistently improving performance across CD-FSOD benchmarks.
