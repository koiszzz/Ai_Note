# Domain-Grounded Candidate Selection for Agentic Image Editing: A Shadow Removal Case

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Shilin Hu, Jingyi Xu, Dimitris Samaras, Hieu Le　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.06075)

------

arXiv:2608.06075v1 Announce Type: new

Abstract: Commercial vision-language models are reshaping computer vision, with visual priors broad enough to rival task-specific systems. This raises a natural question: do they reduce the need for classic, physics-informed low-level vision? We study this through shadow removal, a problem shaped by scene geometry, illumination, materials, and occluders, where paired shadow and shadow-free data are hard to collect at scale. We find that a commercial generative editor, used directly, can produce clean shadow-free edits that preserve surface texture and local appearance. However, this comes with a new failure mode: the same editor can regenerate scene content, hallucinate objects, or misread a shadow as material or geometry, producing plausible but physically wrong edits. We address this with an agentic candidate-selection pipeline: the editor generates a guided probe, an evaluator screens for major failures, retries when needed, samples multiple candidates, filters them, and selects a final result balancing shadow removal against scene preservation. Grounding this process in shadow-formation physics makes it more reliable: prompting the generator and evaluator to treat shadows as illumination effects caused by light occlusion, not material or object structure, measurably improves quality and consistency. On the ShadowRemovalRefine benchmark, our physics-oriented pipeline achieves a CDD of 0.0075, reducing CDD by at least 47% over the strongest prior method. These results suggest that commercial vision-language models do not replace classic low-level vision priors; instead, such priors remain useful for constraining and steering physically underconstrained generation.
