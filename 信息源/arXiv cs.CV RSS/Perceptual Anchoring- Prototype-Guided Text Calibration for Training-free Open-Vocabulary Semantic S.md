# Perceptual Anchoring: Prototype-Guided Text Calibration for Training-free Open-Vocabulary Semantic Segmentation

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Wanli Ma, Jiangwen Lu, Qinmu Peng, Xinge You　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.03991)

------

arXiv:2608.03991v2 Announce Type: replace

Abstract: Training-free open-vocabulary semantic segmentation (OVSS) partitions an image into semantically distinct regions based on arbitrary text descriptions, without learning any additional parameters. However, existing methods typically focus on improving visual representations while treating text embeddings that encode only generic category concepts as fixed classification references. The resulting semantic gap between these generic concepts and the visual representations that capture the specific appearances of target instances often causes incomplete masks and erroneous predictions in non-target regions. Inspired by the symbol-percept correspondence underlying perceptual anchoring, we propose Prototype-Guided Text Calibration (PTC) for training-free OVSS. In the Perceiving stage, PTC selects reliable visual evidence based on initial matching scores to construct category-specific visual prototypes. In the Anchoring stage, PTC uses these prototypes to calibrate their corresponding text embeddings, with the calibration strength adaptively adjusted based on the amount of visual evidence. Consequently, the calibrated text embeddings align more accurately with instance-specific visual representations while preserving generic category semantics and open-vocabulary generalization. Moreover, PTC requires neither additional training nor external models and can serve as a plug-and-play module for existing methods. Extensive experiments across eight benchmarks show that PTC significantly enhances the performance of six representative methods and yields more complete and accurate segmentation results. These results validate PTC as a simple and effective approach to improving visual-text alignment.
