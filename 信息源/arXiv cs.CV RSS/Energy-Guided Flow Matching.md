# Energy-Guided Flow Matching

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Haoyang Tong (MAIS & NLPR, CASIA, JD.com), Yu He (JD.com), Fang Li (JD.com), Lichen Ma (JD.com, Xi'an Jiaotong University), Jingling Fu (JD.com), Dong Chen (JD.com), Zhen Chen (JD.com), Junshi Huang (JD.com), Jie Cao (MAIS & NLPR, CASIA)　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05811)

------

arXiv:2608.05811v1 Announce Type: new

Abstract: Pixel-space generative models bypass lossy latent compression, yet necessitate joint learning of global structure and fine-grained details in a high-dimensional space. Standard flow matching interpolates noise toward a fixed clean-image endpoint, leaving the spectral evolution to be learned implicitly. In this paper, we introduce Energy-Guided Flow Matching(EG-FM) that explicitly models a coarse-to-fine generative trajectory by moving endpoint. Specifically, EG-FM replaces the fixed endpoint with a heat-kernel-filtered endpoint that evolves smoothly from low-frequency image to clean image.The fraction of high-frequency signal in moving endpoint is released by an image-specific energy-guided scheduling, leading to the re-targeting of velocity in flow matching.Our framework requires no adaptation of the backbone and training data, bringing negligible cost on the training and inference stages. In our experiment, EG-FM consistently achieves lower FID on the ImageNet class-conditional image generation task at $256 \times 256$ with fewer epochs, reaching an FID of 1.55 at 200 epochs and 1.45 at 600 epochs. We continue training the generation task on the setting of $512 \times 512$ resolution, yielding a FID of 1.58 after only 40 high-resolution adaptation epochs.Furthermore, we transfer EG-FM on text-to-image generation and achieve 0.85 on GenEval score and 83.9 on DPG-Bench. Code is available at https://github.com/ysng123/EG-FM.
