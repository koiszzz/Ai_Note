# DSeq-JEPA: Discriminative Sequential Joint-Embedding Predictive Architecture

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Xiangteng He, Shunsuke Sakai, Shivam Chandhok, Sara Beery, Kun Yuan, Nicolas Padoy, Tatsuhito Hasegawa, Leonid Sigal　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2511.17354)

------

arXiv:2511.17354v4 Announce Type: replace

Abstract: Recent advances in self-supervised visual representation learning have demonstrated the effectiveness of predictive latent-space objectives for learning transferable features. In particular, Image-based Joint-Embedding Predictive Architecture (I-JEPA) learns representations by predicting latent embeddings of masked target regions from visible context. However, it predicts target regions in parallel and all at once, lacking ability to order predictions meaningfully. Inspired by human visual perception, which attends selectively and progressively from primary to secondary cues, we propose Dseq-JEPA, a Discriminative Sequential Joint-Embedding Predictive Architecture that bridges latent predictive and autoregressive self-supervised learning. Specifically, Dseq-JEPA integrates a discriminatively ordered sequential process with JEPA-style learning objective. This is achieved by (i) identifying primary discriminative regions using an attention-derived saliency map that serves as a proxy for visual importance, and (ii) predicting subsequent regions in discriminative order, inducing a curriculum-like semantic progression from primary to secondary cues in pre-training. Extensive experiments across tasks -- image classification (ImageNet), fine-grained visual categorization (iNaturalist21, CUB, Stanford Cars), detection/segmentation (MS-COCO, ADE20K), and low-level reasoning (CLEVR) -- show that Dseq-JEPA consistently learns more discriminative and generalizable representations compared to I-JEPA variants.
