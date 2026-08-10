# MSA-DCNN: A Data-Efficient Multi-Scale Attention Deformable CNN for Medical Image Classification

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Hamza Hussaini, Shahana Bano, Eyad Elyan, Carlos Francisco Moreno-Garc\'ia　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2607.06083)

------

arXiv:2607.06083v2 Announce Type: replace

Abstract: Existing deep learning methods perform well in medical image classification but struggle with multi-scale morphology and limited annotations due to fixed sampling and data-hungry training. Existing approaches address these challenges in isolation: DCN-based models provide adaptive sampling but lack explicit multi-scale attention fusion and label-efficient regularisation; multi-scale architectures typically rely on static fusion; and semi-supervised methods target label scarcity without jointly modelling adaptive cross-scale representations. We propose MSA-DCNN, a scale-consistent deformable attention learning framework that introduces adaptive multi-scale sampling, within-scale saliency refinement, learned cross-scale fusion, and auxiliary self-distillation within a unified optimisation scheme, with potential to generalise to structurally heterogeneous anatomy. We evaluate on three public benchmarks and an external hold-out set for leukaemia. MSA-DCNN demonstrates competitive and often better performance against ViT baselines, CNN baselines, and a MICCAI semi-supervised baseline under distribution shift and label scarcity in accuracy, F1, and AUC (binary), while using fewer parameters. Ablations confirm complementary component contributions, supporting MSA-DCNN as a practical foundation for data-efficient medical image classification.
