---
published: 2026-08-06
title: SpecBox：面向高效LLM智能体服务的投机性沙箱调度
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/SpecBox- Speculative Sandbox Scheduling for Efficient LLM Agent Serving.md
source_note: "[[信息源/arXiv cs.LG RSS/SpecBox- Speculative Sandbox Scheduling for Efficient LLM Agent Serving]]"
source_sha256: a0faf157773266feb523ba5f3cce3e836c0036da0b363a68d88573fe08ef8296
original_url: https://arxiv.org/abs/2607.23933
processed: 2026-08-07
language: zh-CN
---

# SpecBox：面向高效LLM智能体服务的投机性沙箱调度

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.23933)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/SpecBox- Speculative Sandbox Scheduling for Efficient LLM Agent Serving|查看原始文件]]

## 摘要

- SpecBox 是一个围绕投机性沙箱预分配构建的运行时，解决分离式沙箱部署中资源利用与交互尾延迟之间的两难。
- 通过关键词匹配与流式语义嵌入实现意图驱动的沙箱预热，并在沙箱依赖图上进行上下文感知随机预取以扩展预热窗口。
- 辅以语义结果缓存与带外共享内存零拷贝传输；相对按需基线 P99 端到端延迟降低最高 2.9 倍，峰值内存较永久预留削减 45.9%。

## 正文

随着 LLM 智能体日益依赖模型上下文协议（MCP）调用隔离的外部沙箱，分离式沙箱部署在资源利用率与交互尾延迟之间引入了根本性张力。持久性的长生命周期沙箱预留在大规模下会带来过高的内存开销，而按需的懒实例化则产生严重的冷启动代价，在多租户、多轮智能体工作负载下损害响应性能。为解决这一两难问题，我们提出 SpecBox，一个围绕面向动态 LLM 智能体执行流水线量身定制的投机性沙箱预分配构建的运行时。

其核心是，SpecBox 实现关键词匹配与流式语义嵌入，以实现意图驱动的沙箱预热，在 LLM 令牌生成中途识别即将发生的工具执行需求，并将沙箱引导过程与模型推理完全重叠。为将预热窗口扩展到连续的智能体步骤，该框架在沙箱依赖图之上利用上下文感知的随机预取，在执行之前概率性地预测未来的沙箱切换。我们用两种正交优化补充这些投机机制：一个语义结果缓存，用于裁剪冗余的重复沙箱调用；以及一个专用的带外共享内存传输平面，绕过常规网络序列化以实现零拷贝工件传输。在高并发多轮智能体轨迹上的评估表明，与按需沙箱基线相比，SpecBox 将 P99 端到端延迟降低最高 2.9 倍，同时与永久预留沙箱部署相比，将峰值内存消耗削减 45.9%。

## 关键词

#LLM智能体 #沙箱 #投机调度 #MCP #低延迟
