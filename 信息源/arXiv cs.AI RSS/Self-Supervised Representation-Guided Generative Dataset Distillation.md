# Self-Supervised Representation-Guided Generative Dataset Distillation

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Mingzhuo Li, Guang Li, Linfeng Ye, Jiafeng Mao, Takahiro Ogawa, Konstantinos N. Plataniotis, Miki Haseyama　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.03218)

------

arXiv:2608.03218v1 Announce Type: cross

Abstract: Dataset distillation compresses a large training set into a compact synthetic set while retaining its downstream utility. Most existing methods target randomly initialized networks, whereas modern vision systems often adapt frozen pretrained encoders with lightweight modules. Distilled samples should therefore preserve the discriminative geometry of the pretrained representation space, which existing generative objectives do not explicitly consider. We propose self-supervised representation-guided generative dataset distillation (SRG), a framework that translates the SSL geometry into diffusion guidance. Specifically, SRG constructs class-wise prototypes from real-image SSL representations and performs guidance through three SSL-space objectives for prototype alignment, inter-class discrimination, and intra-class assignment. During diffusion sampling, it adopts a stage-wise guidance strategy: early denoising is anchored to the latent of the real image whose SSL representation is nearest to the assigned prototype, whereas later denoising is guided by the SSL-space objectives. This division preserves the visual realism provided by the generative prior while progressively steering samples toward representative and class-discriminative regions of the SSL representation space. SRG consistently outperforms the evaluated generative baselines across multiple datasets and IPC settings. A cross-encoder evaluation further indicates transfer across pretrained representation spaces. These results demonstrate the effectiveness of representation-guided generation for dataset distillation with pretrained SSL models.
