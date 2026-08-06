# FlowForm: Synergizing Fluid Physics with Topological Consistency for Satellite Flood Synthesis

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Zhang Weihui, Wang Ruizhi, Xu Hongye, Wang Huiqiong, Sun Li, Song Mingli　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.03822)

------

arXiv:2608.03822v1 Announce Type: cross

Abstract: Developing robust flood assessment models requires high-quality paired satellite imagery, yet such data remain scarce for flood-specific image generation. Although generative models provide a promising means of data augmentation, existing methods often yield implausible spatial layouts of flooded regions and distort scene structures. We propose FlowForm, a framework for satellite flood synthesis that integrates SWE-inspired latent regularization with structure-aware conditioning. The Flood Descriptor Module (FDM) imposes differentiable penalties on residuals of the steady-state Shallow Water Equation in auxiliary latent fields at the diffusion bottleneck. The Terrain Anchor Adapter (TAA) injects depth, semantic, and edge features at four encoder scales of the U-Net. We further curate FloodScape, a large-scale, high-resolution dataset comprising paired satellite images acquired before and after disasters. In addition to standard image-generation metrics, we evaluate the consistency of flooded regions, zero-shot generalization to a geographically held-out flood event, and sensitivity to individual components. Across all reported comparisons, FlowForm achieves higher visual fidelity, greater similarity between paired images, and stronger consistency of flooded regions.
