# DoctorAgents: an agentic framework to iteratively refine AutoML pipeline for small clinical temporal data

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Ruilin Wang, Bo-Hong Wang, Elizabeth Kourbatski, Jun Bai, Hegang Chen, Ziyang Song, Gilles Boire, Marie Hudson, Yue Li　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.05375)

------

arXiv:2608.05375v1 Announce Type: new

Abstract: Clinical machine learning (ML) has the potential to support high-stakes medical decision-making, but reliable deployment is often constrained by scarce, heterogeneous, and temporal complexity. Developing effective ML pipelines for such data remains time-consuming and error-prone, while existing automated machine learning (AutoML) systems only partially address this challenge because they largely rely on brute-force search over predefined spaces and lack explicit reasoning and memory. We therefore reformulate AutoML for small clinical data from exhaustive search to reasoning-driven refinement. We propose DoctorAgents, an agentic AI framework that autonomously constructs and optimizes end-to-end ML pipelines through specialized large language model (LLM) agents for generation, validation, and refinement. DoctorAgents backpropagates natural-language feedback through textual gradient descent to perform targeted updates without exhaustive search. Experiments across diverse clinical tasks show that DoctorAgents consistently outperforms established AutoML baselines while producing more interpretable task-specific representations.
