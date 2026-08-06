# A Security-Oriented Lifecycle Model for Large Language Model Systems

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Eleftherios Batzolis, George Drosatos, Vassilis Katsouros, Konstantinos Rantos　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CR　|　原文：[打开链接](https://arxiv.org/abs/2608.03626)

------

arXiv:2608.03626v1 Announce Type: cross

Abstract: Large language models are being integrated into critical infrastructure and enterprise workflows at unprecedented scale,yet the lifecycle frameworks governing their development and operations were designed for operational efficiency rather than security analysis. As a result, security-relevant activities such as data provenance verification, artifact signing, agentic permission control, and decommissioning are often left implicit or assumed to receive due care. Governance frameworks, in turn, organise requirements around risk levels or management processes without clearly linking them to the lifecycle stages where they apply. This paper addresses both deficiencies. We propose a lifecycle model for LLM systems that supports security analysis by structuring it around security-relevant boundaries rather than workflow optimisation. The model comprises 32 stages across four core pipeline layers (Data, Model, Distribution, Application), supported by a 12-stage LLMOps pillar and a 9-category governance pillar. Thirteen stages are introduced here as separate units because they expose distinct security concerns that existing frameworks do not clearly distinguish. A governance mapping synthesising the NIST AI RMF, the EU AI Act, and ISO/IEC 42001 reveals a structural property of the current regulatory landscape: governance evidence concentrates at deployment-facing stages, where systems are visible to regulators, while the most consequential decisions, data selection, alignment strategy, and capability boundaries, are made at development-facing stages, where regulatory visibility is lowest.
