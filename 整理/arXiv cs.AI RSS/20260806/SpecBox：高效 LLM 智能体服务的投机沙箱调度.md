---
published: 20260806
title: "SpecBox：高效 LLM 智能体服务的投机沙箱调度"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/SpecBox- Speculative Sandbox Scheduling for Efficient LLM Agent Serving.md"
source_note: "[[信息源/arXiv cs.AI RSS/SpecBox- Speculative Sandbox Scheduling for Efficient LLM Agent Serving]]"
source_sha256: a78bc9b0a25c29366839d838512985917963e92e0371cc961fda582866ef8a53
original_url: "https://arxiv.org/abs/2607.23933"
processed: 2026-08-06
language: zh-CN

---

# SpecBox：高效 LLM 智能体服务的投机沙箱调度

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Yihui Zhang (Beihang University), Tianyu Wo (Beihang University), Jinghao Wang (Beihang University), Xiaoyang Sun (University of Leeds), Menghao Zhang (Beihang University), Cangzhou Yuan (Beihang University), Li Li (Beihang University), Chunming Hu (Beihang University), Albert Y. Zomaya (The University of Sydney), Renyu Yang (Beihang University)
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.23933)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/SpecBox- Speculative Sandbox Scheduling for Efficient LLM Agent Serving|查看原始文件]]

## 摘要

- 随着 LLM 智能体日益依赖模型上下文协议（MCP）调用隔离外部沙箱，解聚沙箱部署在资源利用与交互尾部延迟之间引入根本张力：持久长生命周期沙箱预留大规模时产生过量内存开销，惰性按需实例化产生严重冷启动惩罚，在多租户多轮智能体工作负载下退化响应性能。
- 本文呈现 SpecBox，一个围绕为动态 LLM 智能体执行流水线定制的投机沙箱预分配的运行时：核心实现关键词匹配和流式语义嵌入，实现意图驱动沙箱预热，在 LLM token 生成中途识别待定工具执行需求，将沙箱引导与模型推理完全重叠。
- 用上下文感知随机预取扩展预热窗口，基于沙箱依赖图概率预测未来沙箱切换；补充语义结果缓存（剪枝冗余重复沙箱调用）和专用带外共享内存传输平面（旁路常规网络序列化，交付零拷贝工件传输）；高并发多轮智能体轨迹评估显示，SpecBox 相对按需沙箱基线将 P99 端到端延迟降低最多 2.9 倍，同时相对永久预留沙箱部署削减峰值内存消耗 45.9%。

## 正文

随着 LLM 智能体日益依赖模型上下文协议（MCP）调用隔离外部沙箱，解聚沙箱部署在资源利用与交互尾部延迟之间引入根本张力。持久长生命周期沙箱预留大规模时产生过量内存开销，而惰性按需实例化产生严重冷启动惩罚，在多租户多轮智能体工作负载下退化响应性能。为解决此困境，我们呈现 SpecBox，一个围绕为动态 LLM 智能体执行流水线定制的投机沙箱预分配（speculative sandbox preallocation）的运行时。其核心，SpecBox 实现关键词匹配和流式语义嵌入，实现意图驱动沙箱预热（intent-driven sandbox prewarming），在 LLM token 生成中途识别待定工具执行需求，并将沙箱引导与模型推理完全重叠。为跨顺序智能体步骤扩展预热窗口，框架在沙箱依赖图之上利用上下文感知随机预取，在执行前概率预测未来沙箱切换。我们用两个正交优化补充这些投机机制：剪枝冗余重复沙箱调用的语义结果缓存，以及旁路常规网络序列化以交付零拷贝工件传输的专用带外共享内存传输平面。在高并发多轮智能体轨迹上评估，我们的原型显示 SpecBox 相对按需沙箱基线将 P99 端到端延迟降低最多 2.9 倍，同时相对永久预留沙箱部署削减峰值内存消耗 45.9%。

## 关键词

#LLM智能体 #沙箱调度 #投机预取 #服务优化 #arXiv