# Building the enterprise environment for agentic AI

> 数据源：MIT Technology Review AI
> RSS：[打开源文件](https://www.technologyreview.com/topic/artificial-intelligence/feed)

> 作者：Keegan Sheedy, Lucas Melo　|　发布时间：Mon, 27 Jul 2026 11:32:58 +0000　|　分类：Artificial intelligence　|　原文：[打开链接](https://www.technologyreview.com/2026/07/27/1140668/building-the-enterprise-environment-for-agentic-ai/)

------

For the enterprise, the promise of agentic AI is much more than just a better chatbot. It is software agents that execute business tasks end-to-end across people, business workflows, data, and systems. The platform best-suited to run agents is built with proper CPU capacity, resilient data access, policy-aware tool use, observability, memory management, and the ability to predictably plan and scale agents.

![图片](https://wp.technologyreview.com/wp-content/uploads/2026/07/Intel-image-contributed-article.png)

To better understand some of these dependencies, Intel performed thousands of agentic AI workload experiments. Our initial findings create and support five practical lessons for enterprise leaders:

- Agentic AI is a larger systems problem, not just one of inference.

- The majority of existing agentic AI harnesses are limited and do not measure overall system performance.

- Plan capacity is done using agents per virtual CPU (vCPU) density, not agent count.

- Monitor agent task latency, not just average CPU utilization.

- Default to scale-out for systems hosting agents. Reserve scale-up for workloads with heavier per-agent compute or architectural constraints.

### Beyond inference: Agents as workflow automation

Agentic AI is more than LLM inference. Its enterprise value depends on the full system, task orchestration, data access, tool execution, latency management, governance, and scalable infrastructure. An agent is a goal-driven automated enterprise workflow process: It plans a multi-step task, calls tools, reads results, and retries when something fails. Enterprise agents are therefore not just an inference problem; they are a systems problem.

Defining what good looks like

Most agentic AI metrics focus on evaluating the LLM used. Platform teams also need to know how long the tasks take, how many agents a fleet can support, what users experience at the end of the execution process, and how costs change as more agents work simultaneously.

A more useful enterprise view looks at six metrics:

- Task success rate

- Cost per task

- Time per task

- Task throughput

- Agent density (agents per vCPU)

- Latency

Together, these answer the questions enterprise AI operators care about: Is the system performing as expected? How many agents can the system sustain? How should it scale to support more agents?

### Building on solid foundations

To gain a deeper insight into agentic AI workload performance, Intel extended [Terminal-Bench](https://github.com/harbor-framework/terminal-bench), an open source benchmarking harness for evaluating AI agents with profiling, telemetry, and replay capabilities. This made it possible to understand where the agents spent time beyond LLM inference.

The benchmark extension used a deterministic record-replay of LLM responses to separate agent performance from LLM variability. LLM responses were recorded once and replayed identically across runs, reducing run-to-run variance and creating a more reliable basis for comparison.

The Terminal-Bench task mix used was intentionally broad. It included compilation, testing, database operations, Boolean logic, interpretation, ray tracing, compression, linear algebra, video transcoding, and machine learning training. That wide variety made the findings more relevant to real enterprise environments.

### Agentic AI in three dimensions

Deploying agentic AI should be approached in three phases:

Plan in terms of agent density, not agent count: The first sizing rule is to normalize agent count by available compute. Agent density, measured as agents per vCPU, is the leading signal for saturation. For example, 10 agents on an 8-vCPU system and 20 agents on a 16-vCPU system behave similarly if the density is the same. This gives architects a portable way to compare capacity across instance sizes and processor generations.

The right density also depends on the business goal. Interactive copilots and user-facing assistants should favor lower density because response time matters. Batch workloads such as IT workflows can often run at higher density. This gives teams a practical way to tune fleets around service-level objectives and total cost of ownership.

Agentic AI requires a new form of observability: Average compute (CPU) utilization is a weak primary performance monitoring signal for agentic workloads. Agents often alternate between waiting for model responses and then doing short bursts of compute-intensive work. Because of that “bursty” pattern, average utilization can look acceptable even when those bursts are creating queues and slowing down the user experience. Task latency (P95) is a better leading metric. It shows when workflows are starting to wait, even before average task duration meaningfully degrades. A practical operating model is to alert on P95 latency first, then confirm the issue by looking at sustained task duration.

Scale out by default: Scaling out adds more systems, increasing total agent capacity, while scaling up adds cores or memory to a single system for agents with heavier compute bursts.

Our testing data showed that scale-out is usually the better default. That aligns with the fact that agents are typically semi-independent and have modest per-agent bursts, it improves overall performance, supports high availability, often lowers cost, and makes it easier to preserve the target agents-per-vCPU ratio as the platform grows.

Scale up when agents require heavier parallel compute, shared state limits partitioning, memory locality matters, or licensing constraints apply.

Consider business implications: Where will agentic AI create business value first? The organizations getting production-grade results are wrapping an automation layer around workflows that already have codified rules and measurable service levels: code creation, regression test farms, ticket triaging, market analysis, and security review.

The ideal enterprise persona for agentic AI is therefore not the experimental user chasing novelty; it is the accountable leader who must improve cycle time and productivity, protect service quality, enforce policy, and scale adoption with cost in mind.

Agentic AI’s value comes from helping businesses complete real work across teams, systems, data, and processes. For enterprises, the priority is not just better model performance; it is creating a reliable environment where AI agents can support business workflows, improve productivity, operate within governance requirements, and scale as adoption grows.

In practice, success with agentic AI depends on the right foundation to deliver consistent outcomes, manage cost, maintain control, and move confidently from pilots to production.

This content was produced by Intel. It was not written by MIT Technology Review’s editorial staff.
