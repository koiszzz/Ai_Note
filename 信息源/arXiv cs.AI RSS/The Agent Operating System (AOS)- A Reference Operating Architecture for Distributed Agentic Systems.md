# The Agent Operating System (AOS): A Reference Operating Architecture for Distributed Agentic Systems

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Ankur Sharma, Deep Shah　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.03214)

------

arXiv:2608.03214v1 Announce Type: new

Abstract: Large language models have transformed artificial intelligence from isolated prediction services into components of long-running, distributed systems that reason, invoke tools, retrieve external state, delegate tasks, and act on behalf of users and organizations. The surrounding ecosystem has responded with agent frameworks, workflow engines, model-serving platforms, memory systems, communication protocols, and observability tools. These technologies improve execution, but they do not provide a stable, implementation-independent operating architecture for governing intent, selecting capabilities, preserving authority across delegation, controlling uncertainty, coordinating runtime behavior, and reconstructing why consequential actions occurred. This paper proposes the Agent Operating System (AOS), a vendor-neutral reference operating architecture for distributed agentic systems. AOS contains two internal planes: a Control & Governance Plane responsible for intent, policy, trust, authority, confidence, auditability, observability, and human oversight; and a Runtime & Coordination Plane responsible for agent lifecycle, workflow coordination, model and tool routing, context and memory coordination, scheduling, traffic management, and runtime assurance. Platform services, Linux or Windows, container runtimes, and physical infrastructure remain outside the AOS boundary and are integrated through explicit interfaces. The paper specifies AOS concepts, invariants, interface objects, optimization objectives, deployment profiles, and reliability responsibilities. It also identifies tradeoffs and unresolved research questions. AOS is not presented as a replacement for existing frameworks or infrastructure; it is proposed as the operating architecture through which heterogeneous components can be composed into governable, reliable, observable, and interoperable agentic systems.
