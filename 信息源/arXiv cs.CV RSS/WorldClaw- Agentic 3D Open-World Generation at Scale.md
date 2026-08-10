# WorldClaw: Agentic 3D Open-World Generation at Scale

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Chunchao Guo, Jinpeng Li, Yang Li, Zilong Huang　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.05248)

------

arXiv:2608.05248v1 Announce Type: cross

Abstract: Generating large-scale, freely explorable 3D worlds from open-ended text remains challenging because a system must jointly maintain global spatial coherence, rich local content, and explicit assets suitable for downstream editing and reuse. We present WorldClaw, a fully agentic, coarse-to-fine framework for open-world 3D scene generation. Planning agents translate a text prompt into a structured specification of regions, terrain, assets, materials, and spatial relations. WorldClaw then builds a globally coherent terrain foundation from semantic layouts, reusable assets, generative or procedural materials, and a region-aware height field. For detail-demanding regions, it generates terrain-conditioned compositions, reconstructs editable textured meshes, and recovers their placement on the terrain; render-based agents further refine terrain, objects, appearance, and contacts. Across diverse open-world prompts, WorldClaw produces large-scale scenes with coherent spatial organization, visually compelling local content, and editable instance-level assets while preserving a consistent global terrain structure.
