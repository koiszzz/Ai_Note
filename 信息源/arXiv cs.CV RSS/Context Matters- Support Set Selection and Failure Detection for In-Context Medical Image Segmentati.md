# Context Matters: Support Set Selection and Failure Detection for In-Context Medical Image Segmentation

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Youssef Gehad, Emmanuel Zerefa, Krish Kabra, Guha Balakrishnan　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05333)

------

arXiv:2608.05333v1 Announce Type: new

Abstract: In-context learning (ICL) adapts medical image segmentation models to unseen structures and modalities without retraining by conditioning on a task-specific support set of image-mask exemplars. Because this support set is the model's only task-specific signal, its composition directly influences segmentation performance. In this work, we investigate the support set as a controllable determinant of ICL reliability. First, we compare random sampling against similarity-based selection, where exemplars are retrieved based on their visual similarity to the query image. Second, we train a transformer-based classifier to predict, from the query and support images alone, whether a segmentation will fall below a specified Intersection-over-Union (IoU) threshold. Using MultiverSeg with DINOv3 embeddings across four benchmarks and three imaging modalities, we show that similarity-based selection consistently matches or outperforms random sampling, with the largest gains at the smallest support set sizes. Furthermore, our classifier predicts segmentation failure above chance on all four benchmarks. Ultimately, these results demonstrate that the reliability of in-context segmentation can be both improved via informed support selection and anticipated before use, providing practical mechanisms for safer clinical deployment.
