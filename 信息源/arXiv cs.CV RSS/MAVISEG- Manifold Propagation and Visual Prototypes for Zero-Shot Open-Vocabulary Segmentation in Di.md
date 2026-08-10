# MAVISEG: Manifold Propagation and Visual Prototypes for Zero-Shot Open-Vocabulary Segmentation in Diffusion Transformers

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Rajatsubhra Chakraborty, Xujun Che, Ritabrata Chakraborty, Xi Niu, Depeng Xu　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05878)

------

arXiv:2608.05878v1 Announce Type: new

Abstract: Text-to-image diffusion transformers learn about objects and scenes by learning to generate them, making them strong candidates for training-free zero-shot open-vocabulary semantic segmentation. State-of-the-art attribution methods score each pixel independently, comparing its features against a fixed text-derived class representation, whether as an output-space similarity or as a cross-attention weight. This discards structured signals the model itself exposes: the temporal structure of the generative trajectory, the visual appearance statistics of each concept, and the image's own pairwise feature geometry. We present MAVISEG, a training-free refinement layer that recovers these signals. Because its operators consume only a pixel-by-concept score field and a pixel feature space, MAVISEG is capture-agnostic rather than tied to one attribution method. Across six benchmarks it achieves the strongest overall results among training-free methods, including the best mIoU on every benchmark. Interestingly, gains are largest where the initial capture is weakest, and individual operators contribute depending on the noise in the field they refine. Our results indicate that diffusion transformers carry more concept-level information than current attribution methods recover, and that much of it is lost on the way to the mask rather than absent from the model.
