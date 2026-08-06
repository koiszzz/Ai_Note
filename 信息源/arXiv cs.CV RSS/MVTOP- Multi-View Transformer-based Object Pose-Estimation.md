# MVTOP: Multi-View Transformer-based Object Pose-Estimation

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Lukas Ranftl, Felix Brendel, Bertram Drost, Carsten Steger　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2508.03243)

------

arXiv:2508.03243v2 Announce Type: replace

Abstract: We present MVTOP, a novel transformer-based method for multi-view rigid object pose estimation. Through an early fusion of the view-specific features, our method can resolve pose ambiguities that would be impossible to solve with a single view or with a post-processing of single-view poses. MVTOP models the multi-view geometry via lines of sight that emanate from the respective camera centers. While the method assumes the camera interior and relative orientations are known for a particular scene, they can vary for each inference. This makes the method versatile. The use of the lines of sight enables MVTOP to correctly predict the correct pose with the merged multi-view information. To show the model's capabilities, we provide a synthetic data set that can only be solved with such holistic multi-view approaches since the poses in the dataset cannot be solved with just one view. Our method outperforms single-view and all existing multi-view approaches on our dataset and achieves competitive results on the YCB-V dataset. To the best of our knowledge, no holistic multi-view method exists that can resolve such pose ambiguities reliably. Our model is end-to-end trainable and does not require any additional data, e.g., depth.
