# In-Context Collapse in Vision-Language Models and How to Mitigate it?

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Mohammad Rostami　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.02830)

------

arXiv:2608.02830v1 Announce Type: cross

Abstract: Many-shot in-context learning (ICL) lets vision-language models (VLMs) adapt from image--label demonstrations without weight updates, and is widely assumed to improve as more demonstrations are supplied. We show the opposite: as demonstrations accumulate, a subset of VLMs undergo an \emph{in-context collapse}, a sharp, sometimes catastrophic accuracy drop spanning synthetic classification, natural-image classification, and VQA benchmarks, in some models falling below chance while outputs remain well-formed. Across an open VLM panel ($0.5$B--$11$B) and a frontier model (Claude Sonnet 4.5), the collapse is graded. Two capabilities turn out to be dissociable: robustness to accumulating demonstrations and the ability to learn a novel rule in context, their combinations yield three reproducible regimes. A parameter-matched lesion-and-rescue causally localizes the collapse to the vision-language integration pathway: an adapter on the connector and early/mid layers restores genuine learning (remap accuracy $0.39!\rightarrow!0.91$ at 16 shots), while an equal-capacity adapter on the late readout does not. We propose \textsc{CircA}, whose core is a one-time integration vaccine: trained once on one synthetic task, it transfers collapse-resistance to unseen task families (chance$\rightarrow$$0.71$/$0.60$ on CIFAR/Fashion). The layers best for in-context integration are not the layers best for weight-based consolidation, the late readout achieves higher accuracy and less forgetting at fewer parameters. The collapse is an integration failure at the vision--language interface, correctable by a lightweight, transferable intervention.
