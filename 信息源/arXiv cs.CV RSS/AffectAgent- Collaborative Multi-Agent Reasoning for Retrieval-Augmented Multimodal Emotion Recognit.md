# AffectAgent: Collaborative Multi-Agent Reasoning for Retrieval-Augmented Multimodal Emotion Recognition

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Zeheng Wang, Zitong Yu, Yijie Zhu, Bo Zhao, Haochen Liang, Taorui Wang, Wei Xia, Jiayu Zhang, Zhishu Liu, Hui Ma, Fei Ma, Qi Tian　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2604.12735)

------

arXiv:2604.12735v2 Announce Type: replace

Abstract: LLM-based multimodal emotion recognition relies on static parametric memory and often hallucinates when interpreting nuanced affective states. In this paper, given that single-round retrieval-augmented generation is highly susceptible to modal ambiguity and therefore struggles to capture complex affective dependencies across modalities, we introduce AffectAgent, an affect-oriented multi-agent retrieval-augmented generation framework that leverages collaborative decision-making among agents for fine-grained affective understanding. Specifically, AffectAgent comprises three jointly optimized specialized agents, namely a query planner, an evidence filter, and an emotion generator, which collaboratively perform analytical reasoning to retrieve cross-modal samples, assess evidence, and generate predictions. These agents are optimized end-to-end using Multi-Agent Proximal Policy Optimization (MAPPO) with a shared affective reward to ensure consistent emotion understanding. Furthermore, we introduce Modality-Balancing Mixture of Experts (MB-MoE) and Retrieval-Augmented Adaptive Fusion (RAAF), where MB-MoE dynamically regulates the contributions of different modalities to mitigate representation mismatch caused by cross-modal heterogeneity, while RAAF enhances semantic completion under missing-modality conditions by incorporating retrieved audiovisual embeddings. Extensive experiments on MER-UniBench demonstrate that AffectAgent achieves superior performance across complex scenarios. Our code will be released at: https://github.com/Wz1h1NG/AffectAgent.
