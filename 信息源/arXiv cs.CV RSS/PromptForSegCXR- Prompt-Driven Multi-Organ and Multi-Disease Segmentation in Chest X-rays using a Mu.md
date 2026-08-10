# PromptForSegCXR: Prompt-Driven Multi-Organ and Multi-Disease Segmentation in Chest X-rays using a Multi-stage Fusion Mechanism

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Abduz Zami, Shadman Sobhan, Rounaq Hossain, Md. Sawran Sorker, Mohiuddin Ahmed, Md. Redwan Hossain, Md Palash Uddin　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：eess.IV　|　原文：[打开链接](https://arxiv.org/abs/2507.00673)

------

arXiv:2507.00673v2 Announce Type: replace-cross

Abstract: Image segmentation is central to automated medical image analysis, enabling precise identification of anatomical structures and pathological regions. Conventional segmentation models typically target a single organ or disease, limiting their adaptability across clinical scenarios. While multi-organ and multi-disease segmentation has been explored, building such datasets requires extensive manual annotation by medical experts. Prompt-driven segmentation offers a flexible, user-guided alternative that speeds up annotation, yet no prior work has addressed prompt-based interactive segmentation across multiple organs and diseases in chest X-rays. This study makes two main contributions. First, we introduce a novel dataset of expert-designed doodle prompts spanning 23 classes (six organs and seventeen diseases), curated from multiple public chest X-ray datasets for prompt-driven segmentation. Second, we propose PromptForSegCXR, a lightweight dual-input segmentation framework that combines the chest X-ray with user-provided doodle prompts to accurately segment diverse anatomical and pathological regions. The model uses a multi-stage feature fusion strategy to integrate spatial and semantic representations, along with a depthwise-pointwise-residual convolution block with squeeze-and-excitation attention for efficient hierarchical feature extraction and adaptive recalibration. Experimental results show the model achieves a Dice score of 81.62 percent on the full dataset, outperforming SAM-based prompt segmentation models by up to 10 percent and conventional segmentation architectures by up to 23 percent, while remaining lightweight. These results demonstrate the effectiveness of the proposed approach for accurate, flexible, prompt-driven chest X-ray segmentation.
