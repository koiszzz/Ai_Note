# RegisterBridgeMM: A Register-Centric Framework for RGB-Infrared Object Detection

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Zian Wang, Hangchuan Liang, Yuehua Chen, Changchun Li, Chaoyi Guo, Mingzhe Liu, Fangming Gu　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.04833)

------

arXiv:2608.04833v1 Announce Type: new

Abstract: RGB-infrared (RGB-IR) object detection benefits from complementary visible and thermal cues, but effective fusion remains challenging under illumination changes, weather variation, and cluttered scenes. Existing RGB-IR fusion methods often trade expressive patch-level interaction for lighter but more constrained adaptation mechanisms. We empirically observe that pretrained register tokens contain both modality-shared and modality-specific information on paired RGB-IR inputs, suggesting that they can serve as a compact substrate for cross-modal communication. Building on this observation, we propose RegisterBridgeMM, a register-mediated fusion framework organized as a three-stage register lifecycle. Aggregate preserves per-modality register summarization inherited from pretraining; Bridge performs bidirectional register-to-patch reading with consensus-residual regulation; and Project translates the resulting register summary into spatially adaptive calibration of patch features. This register pathway avoids dense patch-to-patch cross-modal interaction while preserving the pretrained patch representation. With both backbone streams frozen, RegisterBridgeMM achieves the highest mAP50-95 among the evaluated methods on all four benchmarks: LLVIP, M3FD, DroneVehicle, and FLIR-Aligned.
