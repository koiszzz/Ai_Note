# LoRetta: A Foundation Model and Extensive Dataset for Global-Scale Remote Sensing Dense Image Matching

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Siwei Yu, Han Guo, Zhenwei Shi, Zhengxia Zou　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.04106)

------

arXiv:2608.04106v1 Announce Type: new

Abstract: Dense image matching establishes pixel-wise correspondences and underpins broad applications in computer vision and photogrammetry. However, extending dense matching to global-scale remote sensing remains challenging because image pairs may differ in acquisition time, season, viewpoint, spatial resolution, and land-cover state. The resulting large geometric offsets, partial overlap, and intrinsically unmatchable regions make direct dense correspondence prediction unreliable and inefficient. We thus reformulate dense matching as localization-and-registration: first localizing the matchable overlap and affine geometry, then refining dense residuals within the aligned frame. Based on this formulation, we propose LoRetta, a foundation model coupling matchability-aware affine localization with guided dense registration. We also introduce LEVIR-GM, a global-scale multi-temporal optical matching benchmark with dataset-native matchability labels (103K aligned, 827K augmented pairs, six continents, five years, 0.5-1024 m resolution). We further establish a unified evaluation protocol for sparse, semi-dense, and dense matchers. On LEVIR-GM, LoRetta achieves an area under the curve (AUC) of 83.3%, outperforming the strongest baseline RoMa v2 by 1.6 points, with larger percentage of correct keypoints (PCK) gains of 6.5 and 8.2 points at 1 and 2 pixels, while reducing inference latency by 47.8%. Astronaut-to-satellite and unmanned aerial vehicle (UAV)-to-satellite geolocalization experiments further demonstrate its transferability as a reusable geometric aligner.
