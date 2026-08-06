# Lesion Detection in CT with Frozen Self-Distilled Features: SALT, a Spatially Adaptive Label-Guided Temperature

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Mahmut S. Gokmen, Evan W. Damron, Mitchell A. Klusty, Caroline N. Leach, Emily B. Collier, V. K. Cody Bumgardner　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05100)

------

arXiv:2608.05100v1 Announce Type: new

Abstract: Self-supervised pretraining objectives are spatially uniform: the teacher temperature and the per-patch loss weight are identical everywhere in the image, so a lesion a few patches wide contributes no more to the training signal than the surrounding parenchyma. Prior work biases the views toward annotated regions, which changes what the model sees but adds no pressure on the objective. We instead condition the targets of self-distillation, a method we call SALT (Spatially Adaptive Label-guided Temperature). Weak, box-derived labels, available only during pretraining, define a compact region on the encoder's patch grid, inside which the teacher's softmax temperature is sharpened and the masked-patch loss is up-weighted. The objectives, the masking policy and the centering statistics are otherwise unchanged, and at every downstream use the encoder is a plain feature extractor with no labels and no conditioning. We evaluate by freezing the encoder and training only a lightweight multi-depth CenterNet-style head, detecting lesions in 3D on four CT cohorts, and we isolate the mechanism against a backbone identical in architecture, pretraining data, schedule and label-guided cropping but with no target conditioning. We report patch-level separability, 3D detection stratified by cohort and by lesion size, box quality, and a detector-free probe in which a single frozen patch embedding re-identifies a lesion in a follow-up scan without registration, masks or fine-tuning. Because the conditioning is expressed through a spatial indicator rather than through label semantics, the formulation admits any weak spatial annotation; we instantiate and validate it for lesions.
