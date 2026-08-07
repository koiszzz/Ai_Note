---
published: 20260806
title: "Argus：面向长时程推理的通用智能体运行时"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Argus- A General-Purpose Agentic Runtime for Long-Horizon Reasoning.md"
source_note: "[[信息源/arXiv cs.AI RSS/Argus- A General-Purpose Agentic Runtime for Long-Horizon Reasoning]]"
source_sha256: a444d10f65a7c9e251541d1e28726241955132a72959edb6d76ea44d6fb9c23e
original_url: "https://arxiv.org/abs/2608.05144"
processed: 2026-08-06
language: zh-CN

---

# Argus：面向长时程推理的通用智能体运行时

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Boxiu Li, Zimo Wen, Yijia Fan, Junxiang Lei, Sufeng Guo, Jiaao Wu, Ruize Tang, Mukai Li, Yifei Shen, Xiaoyu Chen, Wanbo Zhang, Runjing Gu, Yifei Gao, Yuheng Wu, Xuyao Huang, Zelong Zhao, Jiachen Zhang, Shibo Hu, Hangxi Guo, Yilin Chen, Yuzhe Zhang, Fan Yang, Chuan Wen, Xian Zhang, Xuanhe Zhou, Zhijie Deng
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05144)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Argus- A General-Purpose Agentic Runtime for Long-Horizon Reasoning|查看原始文件]]

## 摘要

- 长时程推理需要智能体运行时在证据支持当前方法时持续，在测量揭示失败、隐藏约束或目标指定错误时转向；本文提出 Argus，一个持久、自我进化的运行时，其中 Manager、Planner、Engineer 和 Reviewer 在持久项目状态上执行有界任务。
- Argus 将稳定用户意图与运营目标、约束和验证标准分离，仅在角色拥有审查和任务原生验证后接纳记忆、技能、程序、验证器、路由决策和拒绝路由；模型权重保持固定，自我进化通过持久运行时状态和控制策略发生。
- 在七个 GPT-5.5 基准竞技场上，Argus 在 SWE-Bench Pro 上约 78%（对比 Direct Copilot 的 59%），同时使用 1.41 倍聚合 token；验证门控自我进化后，成熟波次每任务使用少 21% 的求解输入 token 和少 15% 的活跃工作流时间。

## 正文

长时程推理需要智能体运行时在证据支持当前方法时持续，在测量揭示失败、隐藏约束或目标指定错误时转向。我们提出 Argus，一个持久、自我进化的运行时，其中 Manager、Planner、Engineer 和 Reviewer 在持久项目状态上执行有界任务。Argus 将稳定用户意图与运营目标、约束和验证标准分离，并仅在角色拥有审查和（可用时）任务原生验证后接纳记忆、技能、程序、验证器、路由决策和拒绝路由。模型权重保持固定；自我进化通过持久运行时状态和控制策略发生，在操作者拥有的升级点之间自主执行。在七个 GPT-5.5 基准竞技场上，Argus 在 SWE-Bench Pro 上约 78%，对比 Direct Copilot 的 59%，同时使用 1.41 倍聚合 token。验证门控自我进化后，成熟 SWE-Bench 波次每任务使用比启动波次少 21% 的求解输入 token 和少 15% 的活跃工作流时间，同时记录 34 次验证器恢复和 22 次严格审查循环救援。Argus 还在 AARRI-Bench 上达 76.8%，数学数据合成差距 28.0 点，GPU 内核和语言模型训练结果具竞争力。除基准外，一个优化的 RWKV6 内核已上游合并；一个多日数学活动保留证伪路由和证明支持的前沿更新；六条论文流水线完成 254 个任务，16 次阶段回滚。这些结果表明，固定权重、自我进化的 harness 可以修订、恢复和积累验证方法，同时为未来监督和强化学习产生结构化轨迹。

## 关键词

#智能体运行时 #长时程推理 #自我进化 #LLM #arXiv