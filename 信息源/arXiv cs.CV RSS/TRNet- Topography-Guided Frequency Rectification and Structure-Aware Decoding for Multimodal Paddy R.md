# TRNet: Topography-Guided Frequency Rectification and Structure-Aware Decoding for Multimodal Paddy Rice Segmentation

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Kaiwen Xiao, Chunlong Fu, Liping Zheng, Yanfeng Su　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.04154)

------

arXiv:2608.04154v1 Announce Type: new

Abstract: Mapping paddy rice from very-high-resolution imagery in mountainous and hilly regions is difficult because terrain alters optical appearance and increases confusion with visually similar vegetation. We present TRNet for 0.5-m GaoJing-1 red--green--blue (RGB) imagery, a 5-m TanDEM-X digital elevation model (DEM), and derived slope. Separate visual and terrain encoders preserve modality-specific features. At an early encoder stage, Topographic Energy-Spectral Rectification applies terrain-conditioned low-frequency modulation and asymmetric high-frequency regulation to suppress steep-slope clutter and conditionally enhance compatible low-slope rice cues. The Topography-guided Paddy Structure Decoder combines semantic, rice--background boundary, and interior cues, using coarse terrain as context. Experiments used an Area A internal test set and held-out Area B, which had steeper terrain and lower rice prevalence. TRNet achieved rice intersection-over-union (IoU) values of 85.10\% and 80.68\%, exceeding the original Dual-Encoder U-Net by 9.15 and 18.83 percentage points, respectively. Ablation and slope-stratified results linked these gains to frequency rectification, structure learning, and fewer steep-terrain false positives. The results support coarse topography as a contextual prior for very-high-resolution paddy rice mapping.
