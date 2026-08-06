# Externally Validated Breast Ultrasound Segmentation via Multi-task Learning with BI-RADS-Consistent Morphological Priors

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Jingru Zhang, Saed Moradi, Ashirbani Saha　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2511.15968)

------

arXiv:2511.15968v2 Announce Type: replace-cross

Abstract: External validation of breast ultrasound segmentation models remains limited because internal train--test splits do not capture domain shifts across imaging systems, acquisition protocols, and patient populations. We introduce a novel multi-task framework for breast ultrasound segmentation and malignancy classification. Its central methodological advance is a differentiable morphology-to-malignancy bridge: lesion area, boundary roughness, compactness, and texture are computed from the predicted soft segmentation mask, aggregated with learned weights into a morphology-based malignancy score, and constrained to agree with the image-level classifier. To our knowledge, this is the first breast ultrasound framework to use BI-RADS-inspired morphology derived from its own soft segmentation output as an end-to-end consistency target for malignancy classification. It is also the first 2D B-mode multi-task study to report every directed external transfer among four independent datasets: training on each dataset and testing on the other three yields 12 source--target pairs, assessed with single models and five-fold ensembles. In matched comparisons across all pairs, the proposed single-model configuration outperforms dedicated single-task baselines in segmentation (DC: 0.764 vs. 0.740) and malignancy classification (AUC: 0.818 vs. 0.791). The ensemble achieves a mean external DC of 0.786 and is competitive with SAM-based segmentation methods using an EfficientNet-B7 encoder while also predicting malignancy. The learned morphology weights retain the same ordering across all four datasets, with boundary roughness receiving the greatest weight. These results establish the first complete four-dataset directed benchmark for joint 2D breast ultrasound segmentation and malignancy classification and demonstrate that clinically grounded morphological consistency improves both tasks under domain shift.
