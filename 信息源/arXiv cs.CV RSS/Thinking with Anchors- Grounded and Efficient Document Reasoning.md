# Thinking with Anchors: Grounded and Efficient Document Reasoning

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Sichen Zhu, Yuchen Zhu, Wenzhuo Xu, Jason Kuen, Wanrong Zhu, Jing Shi, Xuan Shen, Quanyi Wang, Yiwei Wang, Yujun Cai, Bing Shuai, Qin Zhang, Yongxin Chen, Shilong Liu, Molei Tao, Jiuxiang Gu　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.04424)

------

arXiv:2608.04424v1 Announce Type: new

Abstract: Existing document understanding benchmarks have largely focused on locating page elements, yet real-world document intelligence requires models to reason jointly about region semantics, spatial relations, and visual structure. We present ADOPD 2026, a reasoning-oriented extension of ADOPD that turns page decomposition into spatially grounded document understanding. ADOPD 2026 enriches page anchors inherited from ADOPD 2024 dataset with human-cleaned captions, semantic tags, and generated chain-of-thought (CoT) traces grounded to document regions. Instead of treating boxes, masks, and tags as independent supervision signals, we cast text blocks, visual entities, semantic labels, bounding boxes, and polygon masks as a shared vocabulary of visual anchors. This representation supports three connected capabilities. First, region-level semantic tagging asks models to identify document element types from both page context and local appearance, revealing long-tail semantic failures that standard layout benchmarks often hide. Second, unified vision-language grounding generates text regions and visual entities together with coordinates or polygonal outlines, transforming detection and segmentation outputs into structured anchors that can be reused by downstream reasoning systems. Third, current state-of-the-art models still struggle with dense counting tasks evaluated on DocCount, a benchmark derived from ADOPD 2026, highlighting the need for the Thinking-with-Anchors pipeline in document semantic understanding. By connecting page decomposition to verifiable visual-anchor reasoning, ADOPD 2026 provides a task framework that moves document understanding beyond localization toward anchor-grounded document intelligence.
