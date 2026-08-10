# Robust-WAM: Bridging Generative Pretraining and Semantic Foresight in World-Action Models

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Haodong Yan, Junfeng Li, Junjie He, Zhide Zhong, MingMing Yu, Wenxuan Song, Jiaguan Zhu, Yangyang Zheng, Yuqiao Du, Jiadi You, Yingjie Cai, Xu Yan, Guanyi Zhao, Bingbing Liu, Haoang Li　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05903)

------

arXiv:2608.05903v1 Announce Type: new

Abstract: Mainstream World-Action Models (WAMs) adapt pretrained video generation models (VGMs) for robot control, transferring their learned dynamics prior for action prediction. These VGMs are typically trained in a variational autoencoder (VAE) latent space. However, the VAE latent space is optimized for pixel reconstruction, which rewards fine appearance detail and leaves the action prediction fragile under visual shifts. Recent works build WAMs in semantic latent space, which are more robust to appearance shifts. However, these models cannot leverage the large-scale VGM pretraining that exists only in VAE space. To overcome this dilemma, we propose Robust-WAM, a general post-training method for video-generation-based WAMs that preserves the VAE-based generative path and adds a lightweight semantic foresight alignment objective on the action stream. This retains the large-scale VGM pretraining while grounding actions in appearance-invariant dynamics that stay reliable under illumination shifts and other visual out-of-distribution conditions. Specifically, we employ learnable query tokens to bring future-scene semantics into the action stream by aligning their output hidden states with the semantic foresight of future ground-truth frames. To establish the temporal correspondence between each query and the future step it describes, we give it the positional encoding of the matching action tokens. Experiments on out-of-distribution generalization simulation benchmarks and a real-robot setup show that our Robust-WAM consistently improves the success rates of multiple WAM baselines without sacrificing in-distribution performance.
