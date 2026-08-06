# Beyond Motion Cues and Structural Sparsity: Revisiting Small Moving Target Detection

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Guoyi Zhang, Han Wang, Xiaohu Zhang　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2509.07654)

------

arXiv:2509.07654v2 Announce Type: replace

Abstract: Small moving target detection is crucial for many defense applications but remains highly challenging due to low signal-to-noise ratios, ambiguous visual cues, and cluttered backgrounds. In this work, we propose a novel deep learning framework that differs fundamentally from existing approaches, which often rely on target-specific features or motion cues and tend to lack robustness in complex environments. Our key insight is that small target detection and background discrimination are inherently coupled, even cluttered video backgrounds often exhibit strong low-rank structures that can serve as stable priors for detection. We reformulate the task as a tensor-based low-rank and sparse decomposition problem and conduct a theoretical analysis of the background, target, and noise components to guide model design. Building on these insights, we introduce TenRPCANet, a deep neural network that requires minimal assumptions about target characteristics. Specifically, we propose a tokenization strategy that implicitly enforces multi-order tensor low-rank priors through a self-attention mechanism. This mechanism captures both local and non-local self-similarity to model the low-rank background without relying on explicit iterative optimization. In addition, inspired by the sparse component update in tensor RPCA, we design a feature refinement module to enhance target saliency. The proposed method achieves state-of-the-art performance on two highly distinct and challenging tasks: multi-frame infrared small target detection and space object detection. These results demonstrate both the effectiveness and the generalizability of our approach.
