# Dual-domain U-Nets with embedded back projection operators for motion-resolved 4D CBCT reconstruction

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Ivo Herzig, Pascal Paysan, Daniel Barco, Marc Andr\'e Stadelmann, Frank-Peter Schilling, Igor Peterlik, Michal Walczak, Lijin Aryananda, Woo Sang Ahn, Rudolf Marcel F\"uchslin, Lukas Lichtensteiger　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.03430)

------

arXiv:2608.03430v1 Announce Type: cross

Abstract: Four-dimensional cone beam CT (4D CBCT) is important for image-guided radiation therapy of thoracic cancers, but its use is limited by long scan times, causing high patient dose and motion/sparse-sampling artifacts.

We propose a deep learning method for motion-resolved 4D CBCT reconstruction from conventional free-breathing scans, without a respiratory signal or explicit projection binning. Our CNN takes free-breathing 3D CBCT projections as input and predicts a static volume at maximum inhalation plus ten displacement vector fields (DVFs) spanning a breathing cycle.

The network extends U-Net: the encoder acts on filtered projection stacks, the decoder acts in the volume domain, and skip connections are replaced with non-trainable back-projection functions at multiple resolutions to transfer features between domains. The model is trained on simulated CBCT scans and evaluated on 11 unseen simulated patients and 13 clinical free-breathing scans. Two additional models (60 s and 6 s scans) were evaluated by clinical experts on three and two scans, comparing single phases of our 4D reconstruction to reference 3D SART-TV images for tumor and esophagus visibility.

Experts preferred our method for tumor visibility (59% vs. 36% no preference, 5% reference) and esophagus visibility (47% vs. 42%, 11%). On simulated data, image quality matched SART-TV (mean RMSE: -1.19 HU, PSNR: +0.09 dB, SSIM: -0.009) while enabling 4D reconstruction. On clinical scans, our method showed sharper dynamic structures (e.g., diaphragm) and fewer motion streak artifacts than traditional reconstruction.

This non-patient-specific CNN predicts static volumes and full 4D respiratory motion models from a single free-breathing scan, without a respiratory surrogate or projection binning, reducing motion artifacts while adding motion-modeling capability.
