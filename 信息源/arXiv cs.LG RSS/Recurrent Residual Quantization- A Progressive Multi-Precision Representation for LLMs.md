# Recurrent Residual Quantization: A Progressive Multi-Precision Representation for LLMs

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Yu Luo, Bo Dong, Wenhua Cheng, Haihao Shen　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.04048)

------

arXiv:2608.04048v1 Announce Type: new

Abstract: Serving large language models (LLMs) under diverse deployment constraints requires flexible trade-offs between accuracy, memory footprint, and throughput. However, conventional quantization methods typically require a separate checkpoint for each target bit-width. We introduce Recurrent Residual Quantization (RRQ), a post-training quantization (PTQ) framework that represents weights as a low-bit quantized base together with a sequence of quantized residual corrections, enabling multiple effective precisions from a single checkpoint. Starting from a 2-bit model obtained via post-training quantization (PTQ) or round-to-nearest (RTN), RRQ progressively adds lightweight 2-bit residuals generated via RTN to construct 4-, 6-, and 8-bit representations. The method is calibration-free and avoids joint multi-bit optimization. In our Qwen3-8B setup, the full all-RTN 2-/4-/6-/8-bit package is constructed in 1,293 seconds, 3.3 times faster than the measured MatGPTQ construction. Experiments on six recent LLMs show competitive accuracy at 6 and 8 bits, with model-dependent behavior at 4 bits. The code will be made publicly available upon publication.
