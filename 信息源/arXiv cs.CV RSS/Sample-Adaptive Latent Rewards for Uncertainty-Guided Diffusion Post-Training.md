# Sample-Adaptive Latent Rewards for Uncertainty-Guided Diffusion Post-Training

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Rui Li, Yuanzhi Liang, Ke Hao, Ziqiao Weng, Haibin Huang, Chi Zhang, XueLong Li　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.06125)

------

arXiv:2608.06125v1 Announce Type: new

Abstract: Latent reward models can supervise visual diffusion models without decoding intermediate states into pixel space. This makes alignment with human preferences more efficient. However, existing latent reward models output only scalar scores. They do not estimate the uncertainty of each prediction. The generator therefore cannot determine which feedback is reliable. This can drive optimization in the wrong direction and lead to reward hacking. We propose \textsc{SURE}, a unified latent-space framework for image and video diffusion models. It learns reward distributions and directly uses their reliability to guide dense post-training. First, we propose sample-adaptive latent reward model (\textsc{SURE-LRM}). It predicts a Gaussian utility for each noisy latent. Its mean predicts the reward score. Its variance reflect the uncertainty of prediction without human annotation. The learned distribution then guides post-training through uncertainty-guided reward feedback learning (\textsc{SURE-REFL}). This method provides uncertainty-guided dense feedback along the denoising trajectory. At selected transitions, \textsc{SURE-REFL} queries the frozen \textsc{SURE-LRM}. It converts detached variance into reliability weights for samples at the same transition. Each weighted reward is backpropagated only through its local transition. The entire process remains in latent space and requires neither pixel-space decoding nor the full denoising graph. Experiments show that \textsc{SURE-LRM} improves preference prediction over strong baselines. \textsc{SURE-REFL} achieves the sota performance among various metrics and further improves optimization stability. It also achieves the highest VBench quality, semantic, and total scores among the evaluated methods.
