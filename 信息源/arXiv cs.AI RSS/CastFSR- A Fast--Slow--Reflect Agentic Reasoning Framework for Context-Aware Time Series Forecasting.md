# CastFSR: A Fast--Slow--Reflect Agentic Reasoning Framework for Context-Aware Time Series Forecasting

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Xiaoyu Tao, Mingyue Cheng, Bokai Pan, Chuang Jiang, Huanjian Zhang, Tian Gao, Yaguo Liu, Qi Liu, Enhong Chen　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.03031)

------

arXiv:2608.03031v1 Announce Type: new

Abstract: Time series forecasting is fundamental to decision-making in complex systems, where future dynamics are influenced not only by historical observations but also by evolving contextual features. Recent advances in large language models (LLMs) have extended forecasting beyond numerical extrapolation toward context-aware reasoning. However, existing approaches often lack explicit mechanisms to identify relevant contexts, reason about their impacts, and validate forecasts against temporal and domain constraints. In this work, we propose CastFSR, an agentic framework that formulates context-aware forecasting as a Fast--Slow--Reflect workflow. In fast thinking, CastFSR profiles observations and selects lightweight forecasters to construct a data-driven forecast prior. In slow deliberation, it retrieves contextual evidence, adaptively determines informative look-back windows, and reasons about how contexts reshape future dynamics. In reflection, it iteratively refines forecasts to ensure temporal, contextual, and domain consistency. CastFSR supports both training-free inference with off-the-shelf LLMs and efficient deployment through a two-stage SFT and reinforcement learning strategy that transfers its orchestration capability to compact LLMs. Extensive experiments on public datasets demonstrate that CastFSR consistently outperforms representative baselines. Our code is available at https://github.com/Xiaoyu-Tao/CastFSR.
