# Abstract Event Causal Rules: Induction and Application

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Ziwei Zheng, Peiqiong Chen, Bang Wang　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.05205)

------

arXiv:2608.05205v1 Announce Type: new

Abstract: Event-centric intelligent analytical systems heavily depend on explicit causal event knowledge for risk early warning, decision-making support and narrative comprehension. Nevertheless, existing instance-level causal pairs suffer severe generalization deficits on low-frequency long-tail and unseen event combinations. To address this limitation, this work proposes Abstract Event Causal Rule (AECR), a novel relation-level causal abstraction paradigm that transforms concrete cause-effect pairs into generalized abstract causal logic while retaining their intrinsic causal relationships. We design a multi-agent Concrete-to-Abstract Causal Induction (CACI) system coupled with similarity-constrained clustering to distill trustworthy AECRs from noisy raw causal data, based on which two complete AECR knowledge bases are built. To validate the practical utility of abstract causal knowledge, we propose an Abstract Rule-Guided Causal Attention Encoder (AR-GCAE), which injects the retrieved AECRs into the causality Graph Event Prediction (CGEP) benchmark task via rule-guided attention layers and gated representation fusion. Quantitative experimental results reveal that applying AECRs substantially strengthens the generalization capacity of event causal reasoning and brings consistent performance improvements to event prediction, with the most prominent gains observed on rare and unseen event samples.
