# LoDA: A Level of Detection Aware Method and a Multimodal Sensing Benchmark for Object Level Change Detection

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Haitian Wang, Xinyu Wang, Sheldon Fung, Xian Zhang, Zichen Geng　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05356)

------

arXiv:2608.05356v1 Announce Type: new

Abstract: High-definition 3D LiDAR maps are important for autonomous driving and smart-city services, which require reliable detection of object-level changes in multi-temporal urban LiDAR to keep digital maps aligned with the physical world. Existing approaches from raster height differencing to depth image and point-cloud networks often remain tile-based and threshold-driven, yielding per-point scores without explicit detection limits or consistent object-level labels. We propose an object-level 3D change-detection pipeline that integrates detection-limit-aware registration, geometry-driven object proxies with rule-based semantic and instance segmentation, and displacement cues in height, volume, and surface-normal direction to assign five change labels with confidence. By decoupling registration, geometry, and semantics, the pipeline propagates pose uncertainty into spatially varying detection limits, stabilizes cross-epoch correspondences, and suppresses false changes caused by residual misalignment and density variation. We also present LoDA, a level-of-detection (LoD) aware benchmark for the Subiaco district with fused multi-temporal vehicle-LiDAR maps constructed with LiDAR, GNSS, and IMU support, semantic instances, and object-level annotations. On this benchmark, our method achieves 95.0% accuracy, 90.8% macro F1, and 83.0% macro IoU, exceeding the best baseline by 8.7 IoU points and 4.4 F1 points. On the public Urb3DCD-V2 benchmark evaluated under the official point-wise protocol, it reaches 96.81% mean accuracy and 89.52% mean change IoU, improving over the strongest reported baselines by 1.36 points in mAcc and 3.18 points in mIoUch.
