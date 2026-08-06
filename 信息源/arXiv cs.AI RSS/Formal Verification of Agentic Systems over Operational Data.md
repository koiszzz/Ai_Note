# Formal Verification of Agentic Systems over Operational Data

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Alejandro J. Mercado, Alessio Lomuscio　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.03609)

------

arXiv:2608.03609v1 Announce Type: new

Abstract: Agentic systems driven by large language models (LLMs) are increasingly deployed in real-world workflows where they act on persistent operational data. Before deployment, these systems need to be verified against business requirements that govern workflow execution and data evolution. However, existing approaches do not provide such system-level guarantees, as they mainly constrain or analyse behaviour at the agent's interface level. We study here the verification of agentic systems comprising a single LLM and a tool orchestration harness over relational operational data. We formalise them as Stateful Tool-Enabled Agentic Deployments (STEADs), give their semantics, define the problem of verifying them against First-Order Computation Tree Logic (FO-CTL) specifications, and show that it is undecidable. We identify sufficient conditions for exact preservation of FO-CTL specifications under a finite-domain restriction, over which verification is PSPACE-complete. The key requirement is that renaming opaque identifiers in the data must correspondingly rename the selected tool calls. We show that LLM-driven agents can violate this condition and introduce a canonical deployment wrapper that guarantees it for arbitrary base agents while preserving already-equivariant behaviour. We prove that computing canonical representations required by this construction is graph-isomorphism-hard. Finally, we illustrate our framework on an LLM agent orchestrating a case-management workflow.
