# AgentAntibody: An Adaptive Immune System for Defending LLM Agents against Prompt Injection

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Shihao Weng, Yang Feng, Xiaofei Xie, Jiongchi Yu　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CR　|　原文：[打开链接](https://arxiv.org/abs/2608.04053)

------

arXiv:2608.04053v1 Announce Type: cross

Abstract: Prompt injection remains a critical threat to LLM agents, yet existing defenses treat each task as a self-contained problem, independent of previous encounters. In practice, user requests are often underspecified: they describe the desired outcome without fully specifying acceptable behavior. An injection can exploit this ambiguity, causing the agent to complete the task in a way the user would reject. As the user's expectations become clearer through concrete cases, a defense should learn from each encounter and apply what it learns to the next. Inspired by adaptive immunity, we propose AgentAntibody, which equips LLM agents with a self-evolving immune system against prompt injection. AgentAntibody represents its evolving understanding of the user's security boundary as a persistent library of antibodies. At runtime, the library recognizes threats to this boundary and mounts corresponding immune responses. Across encounters, it evolves to strengthen the agent's immunity to future attacks. Extensive experiments across three benchmarks and four backbone LLMs show that, by learning the user's boundary through experience, AgentAntibody outperforms existing defenses in preventing harmful actions while preserving legitimate task completion, even when the harmful and legitimate actions are both compatible with the stated task.
