# Spectral Aliasing Pretext: A novel task for Self-Supervised fault diagnosis in rotating machinery

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Victor Gialis, Maxime Metz, David Esteve, Abdenour Soualhi　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.05705)

------

arXiv:2608.05705v1 Announce Type: cross

Abstract: Deep learning is a new way for machinery fault diagnosis but requires extensive labeled data, a scarce resource in industrial settings. We propose Spectral Aliasing Pretext (SAP), a self-supervised learning method that pretrains models on unlabeled vibration data by exploiting spectral aliasing. We deliberately undersample signals to create folded spectrum, then train a Transformer to reconstruct the original unfolded spectrum. This pretext task forces the model to learn frequency-domain invariants characteristic of mechanical faults, without potentially destructive augmentations. Experiments on the CWRU dataset show that SAP learns stable and highly discriminative representations. In a linear probing setting, SAP quickly achieves very high classification performance with only a small fraction of labeled data and low variance. In contrast, full fine-tuning, including fully supervised training, does not lead to more stable or better results. Overall, these findings suggest that SAP combined with linear probing can be more effective and reliable than fully supervised training for fault diagnosis with limited labeled data.
