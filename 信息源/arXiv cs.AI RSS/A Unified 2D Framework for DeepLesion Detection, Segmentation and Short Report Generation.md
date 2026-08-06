# A Unified 2D Framework for DeepLesion Detection, Segmentation and Short Report Generation

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Ruida Cheng, Tejas S. Mathai, Benjamin Hou, Qingqing Zhu, Zhiyong Lu, Matthew McAuliffe, Ronald M. Summers　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.02805)

------

arXiv:2608.02805v1 Announce Type: cross

Abstract: In previous work, we integrated large language models (LLMs) into the lesion segmentation model based on the ULS23 DeepLesion dataset, using short-form findings from the reports. In this study, we developed a unified 2D lesion analysis framework that integrates LLM-based reasoning, lesion bounding box detection, segmentation, and radiology report generation from the original DeepLesion dataset. In the testing phase, we achieved relatively high lesion bounding box detection accuracy with mAP50 of 70.1%, mAP50-95 of 46.4%; Lesion segmentation performance with a Dice score of 62.6%; short report generation accuracy with BLEU_1 score of 64.3%, BLEU_4 score of 49.6%, METEOR of 34.7%, and ROUGE_L of 60.1%. In this work, we address the challenging issue of segmentation in the original DeepLesion dataset and achieve a 28.5% Dice score improvement over the nnUNet lesion segmentation model. We also integrated spatial and anatomical context into the DeepLesion short report generation. We released the implementation, dataset, and models on Github. https://github.com/ruida/2D_DeepLesion_Foundation
