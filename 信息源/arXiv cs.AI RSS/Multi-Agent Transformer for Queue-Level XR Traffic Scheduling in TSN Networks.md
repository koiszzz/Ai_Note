# Multi-Agent Transformer for Queue-Level XR Traffic Scheduling in TSN Networks

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Marcos Carvalho, Fatih Temiz, Shavbo Salehi, Melike Erol-Kantarci, Daniel F. Macedo　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.NI　|　原文：[打开链接](https://arxiv.org/abs/2608.05340)

------

arXiv:2608.05340v1 Announce Type: cross

Abstract: Time-Sensitive Networking (TSN) and Mobile Edge Computing (MEC) hold strong potential for enabling ultra-reliable low-latency communication for time-sensitive applications, such as eXtended Reality (XR). However, the widespread adoption of XR introduces significant challenges due to co-located services in MEC environments, leading to contention for shared network resources. Moreover, XR traffic types have distinct characteristics and criticality in terms of timing requirements, further increasing the complexity and dynamics of such environments. Although reinforcement learning has shown promise for TSN scheduling optimization in dynamic network scenarios, existing approaches rely on centralized or high-level multi-agent designs and are typically tailored to periodic and predictable industrial traffic, limiting their applicability to XR workloads. As a result, these approaches suffer from (i) limited ability to capture inter-queue dependencies due to coarse-grained control, and (ii) poor adaptability to highly dynamic and heterogeneous XR traffic. To address these gaps, we propose a multi-agent reinforcement learning approach for queue-level XR traffic scheduling. We adopt the multi-agent transformer (MAT) to model inter-queue dependencies via attention over agents' observations and actions, enabling implicit coordination across heterogeneous co-located XR applications. Our simulation results show that the proposed method outperforms baselines, achieving up to 71.42% latency reduction and up to 83.2% reduction in failure rate, while consistently achieving high reliability across all queues.
