# MalariAI: A Label-Resilient Decoupled Framework for Annotation-Agnostic Cell Segmentation and Explainable Stage Classification in Dense Malaria Blood Smears

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Kaysarul Anas Apurba, Md Hasibul Hasan, Mohammed Ali, Tanzilur Rahman　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：eess.IV　|　原文：[打开链接](https://arxiv.org/abs/2607.00385)

------

arXiv:2607.00385v2 Announce Type: replace-cross

Abstract: Automated malaria diagnosis from blood smear microscopy is a critical global health AI challenge; expert scarcity remains the primary diagnostic bottleneck. Existing deep learning systems face three compounding failures: end-to-end detectors treat unannotated cells as background, skewing recall by annotation completeness rather than true cell recovery; Non-Maximum Suppression suppresses valid detections in dense smears; and pipelines lack per-cell spatial evidence for clinical audit. We present MalariAI, a two-stage decoupled framework addressing all three. Stage 1 applies an annotation-agnostic watershed algorithm to isolate every cell in a full 1600x1200 image, recovering 75.95% of ground-truth cells without any ground-truth input. End-to-end, the pipeline reaches a binary parasitized AP@0.5 of 29.10% - the clinically relevant metric for flagging any infected cell - while the stricter multi-class mAP@0.5 of 8.67% mainly reflects watershed's organic region boundaries being penalized against axis-aligned ground-truth boxes, not a localisation failure. Stage 2 fine-tunes EfficientNet-B0 with Focal Loss on ground-truth crops, achieving 98.36% classification accuracy - an oracle upper bound once a cell is correctly localised - with 87.5% and 75.0% accuracy on the rare schizont and gametocyte stages, versus 38.45% and 57.27% AP for a modern YOLOv8s detector evaluated end-to-end on the same classes. Grad-CAM++ heatmaps generated per detected cell provide instance-level spatial evidence for clinical audit; a quantitative energy-in-box analysis confirms this activation is concentrated on the annotated cell body significantly above a geometric chance baseline (+0.0485, paired p = 1.4 x 10^-33), letting microscopists verify predictions at the individual parasite level without sacrificing classification performance.
