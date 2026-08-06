# Generative Optimization for Incentivized Advertising with Global Level Constraints

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Gege Chen, Ning Luo, Hao Jiang, Da Li, Wenzheng Shu, Teng Sha, Yanxiang Zeng, Wenxin Tai, Fan Zhou, Xialong Liu　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.04421)

------

arXiv:2608.04421v1 Announce Type: new

Abstract: Incentivized advertising allocates monetary or virtual rewards to drive user engagement, where a key challenge is optimizing continuous incentive magnitudes under strict global constraints. This problem is complicated by high-frequency interactions, delayed feedback, and non-Markovian user dynamics such as fatigue, which limit the effectiveness of existing uplift modeling and constrained reinforcement learning approaches. To address these challenges, we propose GOAL, a constraint-aware generative framework that formulates incentive allocation as a conditional sequence generation problem. GOAL directly generates incentive magnitudes conditioned on user histories and system-level global pressure, and integrates a hierarchical causal state encoder to capture both local behavioral dynamics and long-range dependencies. To enable flexible constraint control, we introduce \textbf{S}afe \textbf{C}onstrained \textbf{P}olicy \textbf{O}ptimization (SCPO), which learns a single generative policy that generalizes across a spectrum of ROI constraints without retraining. Experiments on large-scale real-world data and a synthetic fatigue-aware environment show that GOAL improves long-term revenue and user retention while substantially reducing ROI violation rates compared to strong baselines.
