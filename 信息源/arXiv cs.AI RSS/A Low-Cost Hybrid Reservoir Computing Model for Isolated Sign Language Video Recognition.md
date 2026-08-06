# A Low-Cost Hybrid Reservoir Computing Model for Isolated Sign Language Video Recognition

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Nitin Kumar Singh, Arie Rachmad Syulistyo, Yuichiro Tanaka, Hakaru Tamukoh　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.RO　|　原文：[打开链接](https://arxiv.org/abs/2608.03444)

------

arXiv:2608.03444v1 Announce Type: cross

Abstract: Sign language recognition (SLR) enhances communication between hearing and hearing-impaired individuals. Although deep learning (DL) has achieved promising performance in SLR, its high computational cost limits deployment on edge devices. To address this challenge, we propose a lightweight reservoir computing (RC)-based approach for SLR. In the proposed method, MediaPipe extracts body and hand keypoints to capture the spatial and temporal dynamics of gestures. These keypoints are then processed by a hybrid reservoir computing (HRC) architecture that combines deep reservoir computing (DRC) and bidirectional reservoir computing (BRC), transforming the input into a high-dimensional dynamic representation. A ridge regression model maps the final HRC state to class labels. This HRC-based SLR method achieved Top-1, Top-5, and Top-10 accuracies of 61.12%, 86.05%, and 92.56%, respectively, on the Word-Level American Sign Language 100 (WLASL100) video dataset, demonstrating competitive performance compared to deep learning-based approaches. Additionally, due to the lightweight nature of RC, the training time was drastically reduced to only a few seconds compared with DL-based methods such as Bi-GRU.This method offers low computational cost, showing its potential for deployment on edge devices.
