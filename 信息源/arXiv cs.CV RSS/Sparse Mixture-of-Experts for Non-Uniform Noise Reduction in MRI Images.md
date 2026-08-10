# Sparse Mixture-of-Experts for Non-Uniform Noise Reduction in MRI Images

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Zeyun Deng, Joseph Campbell　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：eess.IV　|　原文：[打开链接](https://arxiv.org/abs/2501.14198)

------

arXiv:2501.14198v3 Announce Type: replace-cross

Abstract: Magnetic Resonance Imaging (MRI) is an essential diagnostic tool in clinical settings, but its utility is often hindered by noise artifacts introduced during the imaging process. Effective denoising is critical for enhancing image quality while preserving anatomical structures. However, traditional denoising methods, which often assume uniform noise distributions, struggle to handle the non-uniform noise commonly present in MRI images. Building on prior multi-branch MRI denoising approaches, we introduce a fine-grained sparse mixture-of-experts framework for MRI image denoising. Our method decomposes each image into patch-based or segmentation-based regions, groups regions according to their learned feature similarity, and routes each region to a specialized denoising convolutional neural network. Our method demonstrates superior performance over state-of-the-art denoising techniques on both synthetic and real-world brain MRI datasets. Furthermore, we show that it generalizes effectively to unseen datasets, highlighting its robustness and adaptability.
