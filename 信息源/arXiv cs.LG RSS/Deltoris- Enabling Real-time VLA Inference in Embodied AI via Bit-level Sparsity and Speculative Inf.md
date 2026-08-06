# Deltoris: Enabling Real-time VLA Inference in Embodied AI via Bit-level Sparsity and Speculative Inference

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Zheng Liu, Zeyu Guo, Zihan Liu, Anbang Wu, Han Zhao, Fangxin Liu, Zhezhi He, Yinhe Han, Jingwen Leng, Minyi Guo, Yiming Gan, Yu Feng　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.AR　|　原文：[打开链接](https://arxiv.org/abs/2608.04428)

------

arXiv:2608.04428v1 Announce Type: cross

Abstract: Vision-language-action (VLA) models have emerged as a key component in embodied AI. Among existing approaches, diffusion-based VLA models achieve superior motion quality and generalization. However, diffusion-based VLA models are compute-intensive and must run at high control frequency, e.g., 50-200 Hz. Thus, it imposes strict latency and energy constraints on edge devices.

In this work, we present Deltoris, an algorithm-hardware co-design framework for efficient diffusion-based VLA inference. First, we exploit the temporal similarity of consecutive inputs and propose a \textit{temporal-aware bit-sparsity} algorithm that computes only the differences between consecutive inputs, eliminating redundant bit-level operations. To further address the extra off-chip traffic introduced by our algorithm, we propose a \textit{speculative inference} technique, which amortizes data loading across multiple control steps. Lastly, to support these techniques, we co-design a dedicated accelerator with customized 1D systolic bit-serial PE arrays that eliminate PE workload imbalance. Our evaluation shows that Deltoris achieves up to 34.2$\times$ speedup over mobile GPUs and 6.1$\times$ over prior accelerators, while maintaining comparable accuracy.
