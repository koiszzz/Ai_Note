# CLIP-Joint-Detect: End-to-End Joint Training of Object Detectors with Contrastive Vision-Language Supervision

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Behnam Raoufi, Hossein Sharify, Mohamad Mahdee Ramezanee, Khosrow Hajsadeghi, Saeed Bagheri Shouraki　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2512.22969)

------

arXiv:2512.22969v2 Announce Type: replace

Abstract: Conventional object detectors rely on cross-entropy classification, which can be vulnerable to class imbalance and label noise. We propose CLIP-Joint-Detect, a simple and detector-agnostic framework that integrates CLIP-style contrastive vision-language supervision through end-to-end joint training. A lightweight parallel head projects region or grid features into the CLIP embedding space and aligns them with learnable class-specific text embeddings via InfoNCE contrastive loss and an auxiliary cross-entropy term, while all standard detection losses are optimized simultaneously. The approach applies seamlessly to both two-stage and one-stage architectures. We validate it on Pascal VOC 2007+2012 using Faster R-CNN and on the large-scale MS COCO 2017 benchmark using modern YOLO detectors (YOLOv11), achieving consistent and substantial improvements while preserving real-time inference speed. Extensive experiments and ablations demonstrate that joint optimization with learnable text embeddings markedly enhances closed-set detection performance across diverse architectures and datasets.
