# Spectral Integrated Gradients for Coarse-to-Fine Feature Attribution

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Soyeon Kim, Seongwoo Lim, Kyowoon Lee, Jaesik Choi　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2605.19607)

------

arXiv:2605.19607v2 Announce Type: replace-cross

Abstract: Integrated Gradients (IG) is a widely adopted feature attribution method that satisfies desirable axiomatic properties. However, the choice of integration path significantly affects the quality of attributions, and the standard straight-line path introduces all input features simultaneously, often accumulating noisy gradients along the way. To address this limitation, we propose Spectral Integrated Gradients, which constructs integration paths based on singular value decomposition (SVD) of the baseline-to-input difference. By progressively activating singular components from largest to smallest, SIG introduces global structure before fine-grained details, naturally following a coarse-to-fine progression. Through extensive evaluation across diverse image classification datasets, we demonstrate that SIG produces cleaner attribution maps with reduced noise and achieves improved quantitative performance compared to existing path-based attribution methods. Our code is available at https://github.com/leekwoon/sig/.
