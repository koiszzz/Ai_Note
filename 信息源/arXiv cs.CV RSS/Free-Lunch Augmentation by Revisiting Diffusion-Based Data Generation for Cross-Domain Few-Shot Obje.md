# Free-Lunch Augmentation by Revisiting Diffusion-Based Data Generation for Cross-Domain Few-Shot Object Detection

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Zijian Zhuang, Yixiong Zou, Yuhua Li, Ruixuan Li　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.04394)

------

arXiv:2608.04394v1 Announce Type: new

Abstract: Cross-Domain Few-Shot Object Detection (CDFSOD) aims to transfer knowledge from data-rich upstream generic domains to downstream expert domains using scarce training data, where the significant domain gap and data scarcity make it an unsolved challenge. To address this problem, we revisit a natural yet underexplored approach in CDFSOD: data augmentation, by directly synthesizing data through diffusion models to supplement limited training samples. However, due to large domain gaps, we find that current diffusion methods cannot produce good results, leading to performance even lower than using the original images. To address these limitations, we divide the domain gaps into visual gaps and semantic gaps for separate analysis. For the visual gap, we find that the diffusion model cannot distinguish noise from useful information on expert domains, which can be mitigated by adding weakened noise. For the semantic gap, we find that the background semantics shows much smaller gaps between domains than foreground semantics, and we can bridge this gap by background inpainting. Based on the above analysis, we propose a method (Selective Inpainting with Tailored Noise, SITN) to dynamically take different strategies for downstream data synthesis based on their different gaps from the general domain, including a Generation Module for adding tailored noise and a Selection Module to dynamically select the inpainting regions. Extensive experiments on 6 datasets of CDFSOD and 4 datasets of cross-domain few-shot segmentation (CDFSS) validate that we can synthesize helpful data, achieving new state-of-the-art performance. Our codes is available at https://github.com/zzzzj311-droid/Free-Lunch-SITN
