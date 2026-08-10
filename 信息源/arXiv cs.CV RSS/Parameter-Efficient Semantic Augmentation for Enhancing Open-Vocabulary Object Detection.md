# Parameter-Efficient Semantic Augmentation for Enhancing Open-Vocabulary Object Detection

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Weihao Cao, Runqi Wang, Xiaoyue Duan, Jinchao Zhang, Ang Yang, Liping Jing　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2604.04444)

------

arXiv:2604.04444v2 Announce Type: replace

Abstract: Open-vocabulary object detection (OVOD) enables models to detect any object category, including unseen ones. Benefiting from large-scale pre-training, existing OVOD methods achieve strong detection performance on general scenarios (e.g., OV-COCO) but suffer severe performance drops when transferred to downstream tasks with substantial domain shifts. This degradation stems from the scarcity and weak semantics of category labels in domain-specific task, as well as the inability of existing models to capture auxiliary semantics beyond coarse-grained category label. To address these issues, we propose HSA-DINO, a parameter-efficient semantic augmentation framework for enhancing open-vocabulary object detection. Specifically, we propose a multi-scale prompt bank that leverages image feature pyramids to capture hierarchical semantics and select domain-specific local semantic prompts, progressively enriching textual representations from coarse to fine-grained levels. Furthermore, we introduce a semantic-aware router that dynamically selects the appropriate semantic augmentation strategy during inference, thereby preventing parameter updates from degrading the generalization ability of the pre-trained OVOD model. We evaluate HSA-DINO on OV-COCO, several vertical domain datasets, and modified benchmark settings. The results show that HSA-DINO performs favorably against previous state-of-the-art methods, achieving a superior trade-off between domain adaptability and open-vocabulary generalization.
