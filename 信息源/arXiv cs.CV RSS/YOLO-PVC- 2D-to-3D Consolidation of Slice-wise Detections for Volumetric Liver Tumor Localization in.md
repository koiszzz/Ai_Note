# YOLO-PVC: 2D-to-3D Consolidation of Slice-wise Detections for Volumetric Liver Tumor Localization in MRI

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Talha Waqas, Mounir Lahlouh, Kawther Taibouni, Mahnoor Waqas, Salar Ahmed, S\'ebastien Mul\'e, Yasmina Leroul-Chenoune　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.04642)

------

arXiv:2608.04642v1 Announce Type: new

Abstract: Slice-wise 2D object detectors are increasingly applied to volumetric data due to their computational efficiency and scalability, yet they often yield fragmented and unstable predictions along the depth axis. We propose YOLO-PVC, a lightweight and model-agnostic framework for 2D-to-3D consolidation of slice-wise detections. The method enforces depth continuity, aggregates bounding box coordinates using robust percentile statistics, and further refines axial extent through a lightweight MLP-based calibration module. Unlike na\"ive stacking or averaging strategies, YOLO-PVC explicitly addresses missing detections and outlier slices along the depth dimension. Experiments on 3D liver MRI volumes across three tumor categories demonstrate consistent improvements over multiple aggregation baselines. The heuristic PVC achieves an overall $\mathrm{IoU}_{3D}$ of $0.665$, while the calibrated variant further improves performance to $0.710$, with high planar overlap ($\mathrm{BEV\ IoU} \approx 0.78$). These results demonstrate that structured geometric consolidation provides an effective and practical solution for volumetric liver tumor localization in clinical MRI.
