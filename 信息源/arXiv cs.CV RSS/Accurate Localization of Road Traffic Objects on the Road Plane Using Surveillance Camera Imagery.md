# Accurate Localization of Road Traffic Objects on the Road Plane Using Surveillance Camera Imagery

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Jan Gawro\'nski, Witold Czajewski　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05840)

------

arXiv:2608.05840v1 Announce Type: new

Abstract: Accurate vehicle localization from monocular roadside surveillance cameras is important for intelligent transportation systems, traffic monitoring, and traffic conflict analysis. Standard approaches often estimate vehicle position from the center of the detector bounding box, which can produce large errors due to perspective distortion and parallax, especially for elevated cameras and large vehicles.

This paper proposes a two-stage geometry-aware localization pipeline that estimates the projection of the vehicle footprint onto the road plane. First, vehicles are detected using a YOLO26-based detector. Second, a dedicated ResNet34 regression network predicts four corner points corresponding to the projected vehicle base. The final position is computed as the geometric center of the predicted quadrilateral.

The method was trained on synthetic data generated in CARLA and fine-tuned on real-world roadside imagery from DAIR-V2X. Experiments on synthetic and real data showed clear improvements over naive bounding-box-center localization. On DAIR-V2X, the mean image-space localization error decreased from 31.77 px to 15.30 px, a 51.8% improvement, while the median error decreased to 4.29 px. Median ground-plane error for medium-range vehicles decreased from 5.52 m to 0.90 m, and for far-range vehicles from 8.67 m to 1.84 m.

The results also show that contextual information surrounding the detector bounding box is important for geometric localization. The largest gains were observed for distant vehicles and geometrically challenging cases affected by strong perspective distortion and parallax.
