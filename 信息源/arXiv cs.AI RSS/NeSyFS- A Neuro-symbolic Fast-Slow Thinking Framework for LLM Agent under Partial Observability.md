# NeSyFS: A Neuro-symbolic Fast-Slow Thinking Framework for LLM Agent under Partial Observability

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Duo Xu, Faramarz Fekri　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2607.28942)

------

arXiv:2607.28942v2 Announce Type: replace

Abstract: Recently Large Language Models (LLMs) have been increasingly deployed as autonomous agents in applications such as self-reflection, retrieval-augmented generation, and scientific discovery. In these settings, agents must act based on limited observations rather than full environmental states, leading to partial observability. This introduces several key challenges: belief state inference, task objective misalignment, and planning under uncertainty. Prior approaches typically condition actions on full or summarized action-observation histories whose redundant and irrelevant information can mislead the decision making of LLM agent. Inspired by human cognition, we propose a novel neuro-symbolic fast-slow thinking (NeSyFS) framework for LLM agent, addressing the challenges introduced by partial observability in a unified approach. We use a knowledge graph (KG) to represent the belief state, providing triplets as context for every module of NeSyFS. The fast-thinking module performs reactive action, while slow-thinking conducts a new uncertainty-aware planning by following the high-level structure of twisted sequential Monte Carlo (TSMC) algorithm. To mitigate the misalignment of task objective, a reflection module is used to reflect fast-thinking actions, and also switches to the slow-thinking module whenever reactive actions repeatedly fail. Experiments on three representative benchmarks, i.e. ALFWorld, Webshop, and ScienceWorld, demonstrate significant advantages over previous methods.
