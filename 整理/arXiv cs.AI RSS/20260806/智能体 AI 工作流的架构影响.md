---
published: 20260806
title: "智能体 AI 工作流的架构影响"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Architectural Implications of Agentic AI Workflows.md"
source_note: "[[信息源/arXiv cs.AI RSS/Architectural Implications of Agentic AI Workflows]]"
source_sha256: f2347571956b3f1d80cebeffe57eaa081ffb59542f7d46149d8035dedd05c509
original_url: "https://arxiv.org/abs/2608.04458"
processed: 2026-08-06
language: zh-CN

---

# 智能体 AI 工作流的架构影响

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Jirong Yang, Peizhe Liu, Chaojie Zhang, Jovan Stojkovic
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04458)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Architectural Implications of Agentic AI Workflows|查看原始文件]]

## 摘要

- 智能体 AI 正在数据中心兴起，但其架构影响仍未探索；本文以分类法组织智能体工作流，并通过 Microsoft Azure 的生产研究和开源框架受控研究呈现其首次架构表征。
- 展示智能体执行碎片化且异构：请求扩展为 LLM 推理、工具调用和编排决策的工作流，反复跨越 CPU-GPU 边界；编排和工具在主机运行使 CPU 处于关键路径，执行结构设定随时间变化的负载（低且突增）。
- 这些特征暴露传统统一服务器的架构不匹配；提出 Agora 原型：动态收获空闲 CPU 核用于共置吞吐量工作、保护智能体尾部延迟免受工具突增、按角色池化核并应用亲和感知调度恢复局部性，改进利用率和服务吞吐量同时保持智能体尾部延迟。

## 正文

智能体 AI 正在数据中心兴起，但其架构影响仍未探索。我们以分类法组织智能体工作流，并通过 Microsoft Azure 的生产研究和开源框架的受控研究呈现其首次架构表征。我们展示智能体执行碎片化且异构。请求扩展为 LLM 推理、工具调用和编排决策的工作流，反复跨越 CPU-GPU 边界。我们的分类法解释这种碎片化如何转化为资源需求。由于编排和工具在主机上运行，CPU 处于关键路径。执行结构设定随时间变化的负载，保持低位但突然尖峰。模型组合设定工作流使用 GPU 的均匀程度。任务和工具的多样性进一步扩大这一范围。这些特征暴露传统统一服务器的架构不匹配。碎片化执行在突发需求下闲置 CPU 和 GPU 容量。不同软件角色使同质 CPU 供给低效。最后，将许多智能体复用共享核降低微架构局部性。受我们的发现指导，我们推导智能体服务器的含义，并通过我们的商用服务器原型 Agora 检验它们。Agora 动态收获空闲 CPU 核用于共置吞吐量工作，同时保护智能体尾部延迟免受工具尖峰影响。它通过在每个 GPU 放置更多智能体过度订阅 GPU 内存，预取下一个智能体状态以隐藏交换延迟。为将机器匹配到异构角色，Agora 按角色池化核并应用亲和感知调度恢复局部性。它自动将机制调优到工作负载。Agora 改进利用率和服务器吞吐量，同时保持智能体尾部延迟。我们的洞察还为智能体 AI 的未来服务器架构确定关键方向。

## 关键词

#智能体AI #数据中心 #架构 #服务器设计 #arXiv