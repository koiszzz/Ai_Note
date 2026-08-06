# SimulRAG: Simulator-based RAG for Grounding LLMs in Long-form Scientific QA

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Haozhou Xu, Dongxia Wu, Matteo Chinazzi, Ruijia Niu, Rose Yu, Yi-An Ma　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2509.25459)

------

arXiv:2509.25459v2 Announce Type: replace-cross

Abstract: Large Language Models (LLMs) show promise in generating long-form scientific explanations that synthesize evidence and connect multiple factors. However, in long-form scientific question answering, LLMs often hallucinate, producing unsupported or inconsistent claims. Retrieval-Augmented Generation (RAG) improves trustworthiness by grounding generation in external sources; scientific simulators are valuable because they can validate quantitative hypotheses and capture evolving dynamics. Yet simulation-based RAG is non-trivial due to two challenges: how to retrieve from scientific simulators, and how to efficiently verify and update long-form answers. To overcome these challenges, we propose SimulRAG, a simulator-based RAG framework with a generalized retrieval interface that translates between text and simulator parameters/outputs. SimulRAG further introduces claim-level generation with uncertainty estimation and simulator boundary assessment (UE+SBA) to selectively verify and update claims. Unlike tool-first or holistic answer revision, it first elicits diverse answers without retrieval and then grounds uncertain, simulator-verifiable atomic claims with simulator evidence. We also release a long-form scientific QA benchmark spanning climate science, epidemiology, and urban planning, with ground truth verified by simulations and human annotators. Experiments show SimulRAG improves informativeness by 30.4% and factuality by 16.3% over the strongest adapted RAG baselines, while UE+SBA enhances claim-level efficiency and quality.
