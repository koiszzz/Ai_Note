# UniVVT: A Unified End-to-End Framework for High-Fidelity Video Virtual Try-on

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Yushe Cao, Shikun Feng, Fei Shen, Haikuo Peng, Jianqiang Xia, Yiheng Zhu, Dianxi Shi, Chun Yu　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05745)

------

arXiv:2608.05745v1 Announce Type: new

Abstract: Video Virtual Try-On (VVT) synthesizes a video of a person wearing a target garment while preserving identity, motion, and scene dynamics. Dominant approaches cast VVT as mask-conditioned video inpainting and rely on separate modules for human parsing, pose estimation, and garment warping. This multi-stage design complicates deployment and, more critically, allows errors in explicit geometric priors to propagate irreversibly into the generated video. We present UniVVT, a unified end-to-end framework that reframes VVT as semantically conditioned video generation, eliminating mask, pose, and warping modules at inference. At its core, a scene-task perceiver built on a Multimodal Large Language Model jointly encodes the source video, target garment, and task instruction into compact, task-aware latent tokens, implicitly capturing what to transfer and where and how to transfer it. A lightweight semantic bridge then aligns these tokens with the conditioning space of a diffusion-based video generator, enabling coherent garment transfer. To robustly couple the heterogeneous components, we devise a three-stage progressive training strategy comprising semantic alignment, joint task adaptation, and flexible-resolution refinement. Extensive experiments demonstrate that UniVVT achieves state-of-the-art performance across multiple benchmarks, validating implicit semantic guidance as a simple and effective alternative to fragile geometric preprocessing for end-to-end virtual try-on.
