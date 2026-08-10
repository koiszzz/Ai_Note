# Depth-Guided Video Object Counting in Crowded Scenes

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Yuanjing Xu, Xinyan Liu, Weidong Chen, Zixuan Zou, Linhao Zhang, Zhuangzhe Meng, Antoni B. Chan, Weigang Zhang　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.06236)

------

arXiv:2608.06236v1 Announce Type: cross

Abstract: Our primary objective is to advance video object counting in crowded scenes, aiming to robustly count all instances of a target category based on given text or visual prompts. Existing methods rely on RGB information, limiting their discriminative ability in crowded and occluded conditions. To address this, we propose a Depth-Guided Detector (DG-Det) along with a general post-processing pipeline. By integrating depth cues with multi-scale RGB-D cross-attention and explicit occlusion prediction, our method enhances spatial understanding and achieves robust detection in crowded and occluded scenes. Furthermore, we introduce a unified de-duplication framework to eliminate cross-frame redundant counting. To facilitate future research, we also release a new RGB-D Video Object Counting dataset featuring depth information and multiple object categories persequence. Extensive experiments demonstrate that our method achieves a 62.01\% reduction in MAE compared to existing baselines, and also produces consistent improvements in RMSE. We provide the source code at https://github.com/streamer-AP/DG-Net and the dataset at https://huggingface.co/datasets/aerospace123/RGBD-VideoCount.
