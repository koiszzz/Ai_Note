# SAT-Edge-Agent: Hardware-in-the-Loop Edge-Agent Orchestration for Onboard Satellite Intelligence

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Longji He, Jeto Xu　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.03728)

------

arXiv:2608.03728v1 Announce Type: new

Abstract: Onboard satellite intelligence requires a task layer that translates mission intent into local tool calls, exposes execution state, and returns machine-consumable artifacts under communication and power constraints. We present SAT-Edge-Agent, a hardware-in-the-loop (HIL) edge-agent system deployed on a commercial off-the-shelf ARM-based heterogeneous edge system-on-chip. A browser workspace and FastAPI agent coordinate a local OpenAI-compatible language service with a project-internal YOLO-style oriented-object-detection endpoint that returns FAIR1M metadata-backed structured results. Two fixed FAIR1M workloads, one single-image and one serial two-image request, were repeated 20 times each and completed 20/20 attempts. Mean Full-Agent latency was 29.353 s and 60.937 s, with empirical P95 values of 31.166 s and 66.882 s. Mean detector time was 861.386 ms and 1510.920 ms, only 2.93% and 2.48% of the corresponding Full-Agent means. Profiling indicates that most visible latency occurs outside detector execution. Mean CPU utilization was 20.761% and 20.482%. A 200-ms NPU-load field averaged 100% for both workloads, but it represents a shared-accelerator software field rather than detector-only occupancy or calibrated utilization. The public evidence package provides sanitized request-level records, redacted JSON, normalized SSE examples, and scripts reproducing the reported statistics. These results establish a reproducible HIL boundary for observable satellite edge-agent orchestration, but do not establish detector accuracy, a new geolocation method, calibrated energy efficiency, or flight readiness.
