# URNet: A Unified Reparameterized Network for Efficient RGB-D Semantic Segmentation

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Guoan Xu, Zhengxue Wang, Yang Xiao, Ligeng Chen, Guangwei Gao, Dongchen Zhu　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05671)

------

arXiv:2608.05671v1 Announce Type: new

Abstract: Previous RGB-D semantic segmentation methods commonly employ dual encoders to separately process RGB and depth inputs, followed by dedicated modules for cross-modal feature fusion. However, such designs often inadequately capture depth representations and consequently limit effective cross-modal interaction, while the additional encoder branch introduces redundant computation that hinders lightweight execution. To tackle these challenges, we propose URNet, a Unified Reparameterized RGB-D Network that performs simultaneous multi-modal feature extraction and cross-modal fusion within a single encoder. Specifically, we adopt a reparameterization strategy to compact the network architecture and facilitate fast inference. Within each Reparameterized Block (RepBlock), a Linear Gated Attention (LGA) module is introduced to fully exploit complementary RGB and depth cues across different feature scales. Furthermore, considering that decoder design has been relatively underexplored in existing RGB-D segmentation models, we develop a concise yet effective universal decoder, termed the Pyramid Merging Decoder (PMD). Extensive experiments on multiple RGB-D segmentation benchmarks demonstrate that URNet achieves state-of-the-art performance while maintaining high efficiency. Code will be available at https://github.com/Wild-Stephen/URNet.
