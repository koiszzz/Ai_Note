# OPOD: On-Policy Omni Distillation

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Tong Zhao, Yuyang Hu, Yutao Zhu, Reed Li, Haijin Liang, Haibo Shi, Yu Lu, Zhicheng Dou　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2607.20918)

------

arXiv:2607.20918v3 Announce Type: replace

Abstract: Omni-modal models provide a unified interface for text, images, and audio. However, improving these abilities together remains difficult, as post-training on pooled multimodal data often fails to preserve the strengths of modality teachers. On-policy distillation (OPD) has recently become popular in model post-training. It samples responses from the current student and compares the teacher's and student's next-token distributions along those responses, yielding dense supervision while reducing the mismatch between training and inference. Despite these advantages, standard OPD does not readily extend to several modality teachers. Their guidance may favor conflicting changes to the shared model, while matching each teacher's next-token distribution can prevent the student from moving beyond that teacher. To address these challenges, we propose On-Policy Omni Distillation (OPOD), which consolidates text, image, and audio teachers into one omni model. OPOD routes each response to the corresponding teacher, controls the teachers independently, and applies guidance only when the teacher assigns a higher probability to the generated token. The selected teacher also evaluates answer confidence and whether the reasoning increases support for the answer. Extensive experiments on twelve benchmarks show that OPOD achieves the best average at three model scales, reaching 70.8, 51.7, and 46.2 and outperforming the strongest comparator by 2.1, 1.8, and 1.7 points. At 30B, it surpasses the base model and pooled RL training on all twelve benchmarks, and ranks first or second on eleven even when the teachers are included. Only the student is retained for deployment.
