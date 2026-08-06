# When Modalities Remember: Continual Learning for Multimodal Knowledge Graphs

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Linyu Li, Zhi Jin, Yichi Zhang, Dongming Jin, Yuanpeng He, Haoran Duan, Gadeng Luosang, Nyima Tashi　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2604.02778)

------

arXiv:2604.02778v2 Announce Type: replace

Abstract: Real-world multimodal knowledge graphs (MMKGs) are dynamic, with new entities, relations, and multimodal knowledge emerging over time. Existing continual knowledge graph reasoning (CKGR) methods focus on structural triples and cannot fully exploit multimodal signals from new entities. Existing multimodal knowledge graph reasoning (MMKGR) methods, however, usually assume static graphs and suffer catastrophic forgetting as graphs evolve. To address this gap, we present a systematic study of continual multimodal knowledge graph reasoning (CMMKGR). We construct several continual multimodal knowledge graph benchmarks from existing MMKG datasets and propose MRCKG, a new CMMKGR model. Specifically, MRCKG employs a multimodal-structural collaborative curriculum to schedule progressive learning based on the structural connectivity of new triples to the historical graph and their multimodal compatibility. It also introduces a cross-modal knowledge preservation mechanism to mitigate forgetting through entity representation stability, relational semantic consistency, and modality anchoring. In addition, a multimodal contrastive replay scheme with a two-stage optimization strategy reinforces learned knowledge via multimodal importance sampling and representation alignment. Experiments on multiple datasets show that MRCKG preserves previously learned multimodal knowledge while substantially improving the learning of new knowledge.
