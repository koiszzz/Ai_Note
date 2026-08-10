# C$^3$PO: Evaluating Cross-Modal Composition and Counterfactual Performance in Omnimodal Models

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Swapnanil Mukherjee, Agyeya Negi, Tanuja Ganu, Ponnurangam Kumaraguru　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.05381)

------

arXiv:2608.05381v1 Announce Type: new

Abstract: Current Multimodal Large Language Models (MLLMs) can process diverse sensory inputs, yet their reasoning remains heavily biased toward a dominant modality, resulting in brittle cross-modal reasoning. We introduce C$^3$PO, a benchmark of 3,404 samples spanning video, audio, image, and text, evaluating two abilities: information composition (fusing dispersed evidence) and counterfactual conflict (resolving deliberate contradictions). C$^3$PO's paired IC/CC structure and four-tier design enable targeted diagnosis of when and why cross-modal reasoning fails. Built through a fully automatic pipeline using 25 logically grounded templates, C$^3$PO reveals that while humans achieve 88.64% accuracy, the best model (Gemini-3.1-Pro) reaches only 73.17%, with open-source models collapsing under conflict. Through attention probes, we find 86-95% of failures stem from modality dominance: models commit to one modality while ignoring contradictory evidence, concentrating 87-95% of attention on text. Mid-layer attention entropy predicts correctness-sustained exploration succeeds, premature collapse fails. The 56-point accuracy gap between equally complex templates reveals that performance depends on modalities' structural roles in conflict resolution, not combinations. These findings show multimodal perception does not guarantee robust reasoning; architectures must enable sustained cross-modal attention to avoid premature
