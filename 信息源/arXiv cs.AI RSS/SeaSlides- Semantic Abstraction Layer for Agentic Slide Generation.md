# SeaSlides: Semantic Abstraction Layer for Agentic Slide Generation

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Shengjun Fang, Chenyang Wu, Zongzhang Zhang　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.03298)

------

arXiv:2608.03298v1 Announce Type: new

Abstract: Agentic presentation generation must preserve source content, maintain coherent visual design, render specialized objects, and produce usable artifacts. Existing systems meet only part of this requirement: templates preserve regularity but restrict adaptation, whereas free-form HTML or SVG gives models flexibility at the cost of low-level rendering decisions. This mismatch makes long technical decks brittle, especially when slides contain formulas, code, or data graphics. We present SeaSlides, an agentic slide-generation framework built around a semantic abstraction layer. Rather than authoring coordinates, inline styles, or raw SVG geometry, the model writes structured slide content through reusable components and capability modules, while templates own layout, style, and rendering. We instantiate this principle separately in HTML and Typst: SeaSlides-HTML uses template-defined DOM components, whereas SeaSlides-Typst uses template functions and package-backed modules. Capability modules route equations, code, and charts to dedicated renderers, and three feedback stages localize build errors, project-constraint violations, and visual defects before export. The two systems retain backend-specific syntax and contracts while sharing the same authoring boundary. For evaluation, we combine the 128-task UltraPresent validation setting with SeaSlidesBench-Rich, a new 32-task benchmark stressing mathematics, code, pseudocode, tables, charts, and diagrams. Across four generation models, both SeaSlides backends produce more readable, content-oriented source than SVG-heavy generation. A SeaSlides backend attains the highest rich-content macro-average under three of the four models while maintaining competitive overall qualitative performance. These results support semantic abstraction as a practical authoring principle across presentation backends.
