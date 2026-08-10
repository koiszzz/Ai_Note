# MoCA: Multi-modal Cross-masked Autoencoder for Time Series in Digital Health

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Howon Ryu, Yuliang Chen, Yacun Wang, Andrea Z. LaCroix, Chongzhi Di, Loki Natarajan, Yu Wang, Jingjing Zou　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：stat.ML　|　原文：[打开链接](https://arxiv.org/abs/2506.02260)

------

arXiv:2506.02260v5 Announce Type: replace-cross

Abstract: Wearable devices enable continuous multi-modal physiological and behavioral monitoring, yet analysis of these data streams faces fundamental challenges including the lack of gold-standard labels and incomplete sensor data. While self-supervised learning approaches have shown promise for addressing these issues, existing multi-modal extensions present opportunities to better leverage the rich temporal and cross-modal correlations inherent in simultaneously recorded wearable sensor data. We propose the Multi-modal Cross-masked Autoencoder (MoCA), a self-supervised learning framework that combines transformer architecture with masked autoencoder (MAE) methodology, using a principled cross-modality masking scheme that explicitly leverages correlation structures between sensor modalities. MoCA demonstrates strong performance boosts across reconstruction and downstream classification tasks on diverse benchmark datasets. We further establish theoretical guarantees by establishing a fundamental connection between multi-modal MAE loss and kernelized canonical correlation analysis through a Reproducing Kernel Hilbert Space framework, providing principled guidance for correlation-aware masking strategy design. Our approach offers a novel solution for leveraging unlabeled multi-modal wearable data while handling missing modalities, with broad applications across digital health domains.
