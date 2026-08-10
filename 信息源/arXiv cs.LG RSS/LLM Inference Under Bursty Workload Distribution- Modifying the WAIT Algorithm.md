# LLM Inference Under Bursty Workload Distribution: Modifying the WAIT Algorithm

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Anjali Gangadhar Katageria, Shobha Rani, Raghu Nandan Sengupta　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.06135)

------

arXiv:2608.06135v1 Announce Type: new

Abstract: Large Language Models (LLMs) such as ChatGPT and Claude are widely used for information retrieval and problem-solving. Recent work has focused on improving scheduling algorithms to boost throughput while maintaining low latency. However, these approaches often assume Poisson request arrivals with constant rates - an assumption that fails to reflect the inherently bursty and dynamic nature of real-world traffic. We propose a lightweight extension to the state-of-the-art WAIT algorithm [1], which adapts to time-varying arrival rates without prior traffic knowledge. The proposed algorithm performs online estimation of request intensity based on observed interarrival times. Using Markov Modulated Poisson Process (MMPP)-based synthetic workloads with diverse request types, we conduct a simulation-based evaluation demonstrating that the proposed method achieves higher throughput than Sarathi-Serve [2], ORCA [3], and vLLM [4] in the evaluated low arrival-rate shift scenarios while maintaining comparable latency.
