# Standalone DINOv3 for Training-Free Open-Vocabulary Semantic Segmentation in Remote Sensing

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Changhao Zhao, Haoxiang Li, Yuke Li, Hai Liu, LingLin Zeng　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.03023)

------

arXiv:2608.03023v1 Announce Type: cross

Abstract: Remote sensing semantic segmentation is hindered by costly pixel-level annotations, motivating training-free open-vocabulary methods. Recently, the recent release of DINOv3 brings DINO.txt, which equips the standalone DINO backbone with image-text contrastive learning and thus opens up the possibility of open-vocabulary segmentation. We propose DinoSplat-OV, a training-free framework that adapts DINOv3 to remote sensing without fine-tuning or additional pretraining. Targeting the dense distribution, multi-scale nature, and large size of remote sensing imagery, we design two core modules. Its Text-aware Laplacian Propagation module de-noises patch-level predictions by combining textual semantic affinities with local visual similarity, improving regional consistency while preserving boundaries. Its Gaussian Splatting Upsampling module reconstructs pixel-level features through RGB-guided anisotropic aggregation and test-time optimization. A global-anchor sliding-window strategy further supports large-scale imagery. Experiments on UDD5, DOTA, and LoveDA demonstrate competitive or superior performance over existing training-free methods, effectively filling the gap of DINO-series models in training-free open-vocabulary segmentation and providing a viable new path for further advances in this direction.
