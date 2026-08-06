---
published: 2026-08-05
title: "DHRCL：用密集分层奖励与课程学习训练代码 LLM"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/DHRCL-Training Code LLMs with Dense Hierarchical Rewards and Curriculum Learning.md"
source_note: "[[信息源/arXiv cs.LG RSS/DHRCL-Training Code LLMs with Dense Hierarchical Rewards and Curriculum Learning]]"
source_sha256: 8818143f519402ba83b660a9bbf85ab0b2b77b786128e803e48614a4a818b320
original_url: "https://arxiv.org/abs/2607.26457"
processed: 2026-08-05
language: zh-CN
---

# DHRCL：用密集分层奖励与课程学习训练代码 LLM

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Shuhang Wang、Ziming Li、Hui Cheng
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.26457)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/DHRCL-Training Code LLMs with Dense Hierarchical Rewards and Curriculum Learning|查看原始文件]]

## 摘要

- 提出 DHRCL，带密集分层奖励与课程学习的强化学习框架：反馈分解为语法验证、执行成功、单元测试通过率与基于 AST 的结构相似性，并通过三阶段语法、执行、通过&结构课程组织这些信号；阶段时长根据近期验证趋势自动确定，而非手动指定能力阈值。
- 强化学习是面向代码的大语言模型自然训练后范式，因生成程序可经解析、执行、单元测试与结构分析评估；但现有方法常依赖稀疏结果奖励或静态组合异构密集信号，尽管语法有效性、可执行性、功能正确性与结构组织描述不同且渐进依赖的编程能力。
- 引入阶段感知基于概率的 token 信用再分配：遵循巩固到精化原则——语法导向优化强调已确立 token 模式、非局部执行反馈用均匀传播、最终功能优化对较少确立的 token 决策分配更多信用或责任。
- 统一 Qwen3-8B 与 KodCode 协议下对比二元、通过率、基于奖励模型与可验证密集奖励基线；跨 Qwen3-4B、Qwen3-8B 与 Qwen3-14B 骨干评估，优势随模型容量增加保持一致。

## 正文

论文编号：arXiv:2607.26457v2（更新类型：replace）。以下为摘要全文翻译。

强化学习是面向代码的大语言模型（LLM）自然的训练后范式，因为生成的程序可以通过解析、执行、单元测试与结构分析评估。然而，现有方法往往依赖稀疏的结果奖励，或静态组合异构的密集信号，尽管语法有效性、可执行性、功能正确性与结构组织描述的是不同且渐进依赖的编程能力。我们提出 DHRCL，一个带密集分层奖励与课程学习的强化学习框架。DHRCL 把反馈分解为语法验证、执行成功、单元测试通过率与基于 AST 的结构相似性，并通过一个三阶段的语法、执行、通过&结构课程组织这些信号。阶段时长由近期验证趋势自动确定，而非手动指定的能力阈值。我们进一步引入阶段感知的基于概率的 token 信用再分配。该机制遵循巩固到精化原则：在语法导向优化期间强调已确立的 token 模式，对非局部执行反馈应用均匀传播，并在最终功能优化期间对较不确立的 token 决策分配更多信用或责任。在统一 Qwen3-8B 与 KodCode 协议下，实验把 DHRCL 与二元、通过率、基于奖励模型与可验证密集奖励基线比较。我们进一步跨 Qwen3-4B、Qwen3-8B 与 Qwen3-14B 骨干评估 DHRCL，表明其优势随模型容量增加保持一致。

## 关键词

#代码LLM #强化学习 #分层奖励 #课程学习
