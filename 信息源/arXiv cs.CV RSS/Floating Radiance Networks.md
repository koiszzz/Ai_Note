# Floating Radiance Networks

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Krzysztof Byrski, Rafa{\l} Tobiasz, Grzegorz Wilczy\'nski, Miko{\l}aj Zieli\'nski, Dawid Baran, Dominik Belter, Jacek Tabor, Przemys{\l}aw Spurek　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05920)

------

arXiv:2608.05920v1 Announce Type: new

Abstract: Recent advances in neural scene representations enable photorealistic novel-view synthesis, yet most methods remain tightly coupled to a single rendering paradigm, limiting their versatility and integration with conventional graphics workflows. We introduce Floating Radiance Networks (FlaRe), a neural scene representation combining explicit ray-traceable geometry with continuous neural radiance functions. A scene is represented by floating planar generalized Gaussian primitives, each carrying a compact latent descriptor of a local radiance field. A lightweight decoder shared across the scene maps this descriptor, local surface coordinates, and viewing direction to color and opacity. This formulation preserves the expressiveness of neural fields while providing an explicitly addressable structure that can be efficiently queried and manipulated. Hardware-accelerated primitive intersections enable interactive rendering and recursive ray-tracing, including reflections, refractions, transparency, and shadows. The same representation further supports primitive-level deformation, mesh extraction, and appearance stylization directly in its learned descriptor space. Experiments across standard reconstruction benchmarks demonstrate competitive rendering quality while using a compact set of primitives. Together, these results establish FlaRe as a versatile representation that brings high-fidelity neural rendering, ray-tracing, geometric manipulation, and appearance editing into a unified scene model. Source code is available online. Source code can be found at: https://github.com/KByrski/FlaRe
