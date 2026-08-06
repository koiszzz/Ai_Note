# Modality Agreement- and Conflict-Aware Prototype Hypergraph Learning for Multimodal Intent Understanding

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Mohnish Raj, Suraj Kumar, Soumi Chattopadhayay, Chandranath Adak, Ayan Dutta　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.MM　|　原文：[打开链接](https://arxiv.org/abs/2608.04054)

------

arXiv:2608.04054v1 Announce Type: cross

Abstract: Multimodal intent recognition requires understanding not only what textual, acoustic, and visual signals share, but also how they disagree. Such disagreement is frequently class-informative; for example, lexical positivity accompanied by incongruent vocal or facial behavior may indicate sarcasm or taunting, yet most fusion methods either encourage modality alignment or treat inconsistency as uncertainty to be suppressed. We propose MACH (Modality Agreement- and Conflict-aware prototype Hypergraph), a hierarchical prototype-hypergraph framework that represents multimodal agreement and conflict as distinct, recurring relational structures. MACH progressively composes unimodal representations into bimodal and trimodal abstractions. At each applicable level, modality-composition anchors activate sparse agreement prototype hypergraphs that capture reusable consensus patterns, while a separate conflict pathway maps cross-modal discrepancies to dedicated conflict prototype hypergraphs. The two pathways are combined through a feature-wise, sample-adaptive arbitration mechanism, enabling the model to preserve informative disagreement while suppressing incidental modality noise. A progressive optimization strategy stabilizes the interdependent hierarchy before joint agreement-conflict learning. Experiments on benchmark datasets demonstrate the effectiveness of the proposed formulation, while component and robustness analyses validate the distinct roles of hierarchical composition, prototype-mediated semantic refinement, and agreement-conflict arbitration.
