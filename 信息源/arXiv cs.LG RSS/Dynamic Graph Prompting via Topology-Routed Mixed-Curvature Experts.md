# Dynamic Graph Prompting via Topology-Routed Mixed-Curvature Experts

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Quanxin Wang, Xuanting Xie, Bingheng Li, Xingtong Yu, Shuo Wang, Ruiyi Fang, Zhao Kang　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.06031)

------

arXiv:2608.06031v1 Announce Type: new

Abstract: Dynamic graph prompting freezes a pre-trained temporal backbone and adapts it to label-scarce downstream tasks using lightweight prompts. However, existing methods operate within a single, fixed embedding space. In this work, we reveal that temporal shifts in local clustering and degree heterogeneity actively reorganize the edge curvature spectrum---indicating that the optimal representation geometry dynamically evolves with local topology over time. We formalize this unaddressed mismatch as geometry under-adaptation. To overcome this limitation, we propose CurvPrompt, a topology-routed geometry prompting framework for dynamic graphs. Instead of relying on a single space, CurvPrompt maintains a bank of curvature-diverse Riemannian experts, each paired with a learnable prompt. A topology-aware gate dynamically routes each node--time instance to a sparse subset of experts, constructing a personalized mixed-curvature representation. To ensure parameter efficiency and training stability under extreme label scarcity, CurvPrompt employs soft routing during pre-training to build a continuous topology--geometry mapping, and transitions to hard Top-K routing with uniform weights during downstream adaptation. Extensive experiments across four benchmark datasets show that CurvPrompt significantly advances few-shot link prediction while delivering strong, consistent performance on node classification tasks, validating the necessity of geometry-adaptive prompting.
