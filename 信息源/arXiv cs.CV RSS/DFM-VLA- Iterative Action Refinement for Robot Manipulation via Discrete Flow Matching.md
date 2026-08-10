# DFM-VLA: Iterative Action Refinement for Robot Manipulation via Discrete Flow Matching

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Jiayi Chen, Wenxuan Song, Jiaxin Fang, Ruiqing Yin, Jingbo Wang, Shuai Chen, Jieyuan Pei, Yikai Qin, Feifan Chen, Haodong Yan, Zhide Zhong, Wen Chen, Yan Wang, Yuxiang Gao, Haoang Li　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.RO　|　原文：[打开链接](https://arxiv.org/abs/2603.26320)

------

arXiv:2603.26320v4 Announce Type: replace-cross

Abstract: Vision-Language-Action (VLA) models that encode actions using a discrete tokenization scheme have been widely adopted for robotic manipulation, but existing decoding paradigms remain fundamentally limited. Whether actions are decoded sequentially by autoregressive VLAs or in parallel by discrete diffusion VLAs, once a token is generated, it is typically fixed and cannot be revised in subsequent iterations. Consequently, early token errors cannot be effectively corrected later. We propose DFM-VLA, a discrete flow matching VLA that iteratively refines action tokens. DFM-VLA models a token-level probability velocity field that dynamically updates the full action sequence across refinement iterations. We investigate two approaches to constructing the velocity field: an auxiliary velocity-head formulation and an embedding-guided formulation. To further improve prediction accuracy, we introduce a metric-aligned action tokenizer (MAAT) tailored to the coarse-to-fine nature of DFM, together with a two-stage decoding strategy. Extensive experiments on CALVIN, LIBERO, LIBERO-Plus, and real-world manipulation tasks demonstrate the effectiveness of our approach. Our project is available at https://chris1220313648.github.io/DFM-VLA/.
