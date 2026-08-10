# Curia-MAE: Multi-Modal Multi-Anatomy MAE Pre-Training for 3D Medical Image Segmentation

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Th\'eo Danielou, Antoine Saporta, L\'eo Alberge, Corentin Dancette　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05844)

------

arXiv:2608.05844v1 Announce Type: new

Abstract: Radiology foundation models learn transferable representations that can be adapted to new tasks by training only small layers on top of a frozen encoder. Dense prediction tasks such as 3D segmentation are, however, underrepresented in their evaluation, and, with the encoder kept frozen, pre-trained models still fall short of nnU-Net, the state-of-the-art reference trained from scratch. To close this gap we extend convolutional MAE pre-training with a robust reconstruction objective, a feature regularizer, and a local-global similarity objective. Using this method, we propose Curia-MAE, a multi-modal, multi-anatomy MAE model pre-trained on 300,000 CT and MRI images covering a large number of anatomical sites. On eight anatomy- and lesion-focused segmentation benchmarks, Curia-MAE improves frozen-encoder performance over a strong MAE baseline, while remaining competitive under full finetuning and superior on lesion tasks, where labeled data is scarce. These results indicate that a single frozen encoder can be reused across diverse segmentation tasks, reducing the cost of adapting and deploying such models in clinical workflows. We will make our pre-trained model weights publicly available.
