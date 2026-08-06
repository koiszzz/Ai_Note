# Advancing Utility Pole and Sign Detection Through Deep Learning

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Carl Dickinson, Gaetano Di Caterina　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.04061)

------

arXiv:2608.04061v1 Announce Type: new

Abstract: Utility poles are an essential part of the infrastructure used to support power distribution systems and other critical public services. Their regular inspection is crucial to ensure the stability and safety of the electrical grid. A deep learning framework is presented for the automated detection, segmentation and lean angle estimation of wooden utility poles, and classification of attached electrical warning signs, using ground-level imagery. The system is trained on a custom dataset of 4,570 annotated images extracted from Google Street View, featuring challenging real-world scenes with visually ambiguous wooden poles lacking distinctive features. The proposed model is based on the Detection Transformer (DETR), suitably modified and trained on the custom dataset. The model outperforms standard object detectors (RetinaNet, Faster R-CNN, YOLOv3-Tiny), achieving a mean average precision of 90.43% for pole detection and 88.26% for sign detection. Extending this model with a segmentation head enables per-instance mask generation, which is then used to estimate pole lean angle. The model accurately estimates lean for 1,367 out of 1,433 test-set poles, with a mean absolute error of 1.01 degrees. Moreover, the custom dataset created in this work is also made publicly available to be used as a benchmark.
