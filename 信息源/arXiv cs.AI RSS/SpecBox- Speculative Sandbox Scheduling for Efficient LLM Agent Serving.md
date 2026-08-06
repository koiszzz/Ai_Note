# SpecBox: Speculative Sandbox Scheduling for Efficient LLM Agent Serving

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Yihui Zhang (Beihang University), Tianyu Wo (Beihang University), Jinghao Wang (Beihang University), Xiaoyang Sun (University of Leeds), Menghao Zhang (Beihang University), Cangzhou Yuan (Beihang University), Li Li (Beihang University), Chunming Hu (Beihang University), Albert Y. Zomaya (The University of Sydney), Renyu Yang (Beihang University)　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.DC　|　原文：[打开链接](https://arxiv.org/abs/2607.23933)

------

arXiv:2607.23933v2 Announce Type: replace-cross

Abstract: As LLM agents increasingly rely on the Model Context Protocol (MCP) to invoke isolated external sandboxes, disaggregated sandbox deployment introduces a fundamental tension between resource utilization and interactive tail latency. Persistent long-lived sandbox reservations incur excessive memory overhead at scale, while lazy on-demand instantiation generates severe cold-start penalties that degrade response performance under multi-tenant, multi-turn agent workloads. To resolve this dilemma, we present SpecBox, a runtime built around speculative sandbox preallocation tailored for dynamic LLM agent execution pipelines.

At its core, SpecBox implements keyword matching and streaming semantic embedding to enable intent-driven sandbox prewarming, which identifies pending tool execution demands mid-LLM token generation and fully overlaps sandbox bootstrapping with model inference. To extend prewarming windows across sequential agent steps, the framework leverages context-aware stochastic prefetching atop a sandbox dependency graph to probabilistically forecast future sandbox switches ahead of execution. We complement these speculative mechanisms with two orthogonal optimizations: a semantic result cache that prunes redundant repeated sandbox invocations, and a dedicated out-of-band shared-memory transport plane that bypasses conventional network serialization to deliver zero-copy artifact transfers. Evaluated on high-concurrency multi-turn agent traces, our prototype demonstrates that SpecBox cuts P99 end-to-end latency by up to $2.9\times$ relative to the on-demand sandbox baseline, while slashing peak memory consumption by $45.9\%$ compared to permanently reserved sandbox deployments.
