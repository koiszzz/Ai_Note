---
published: 2026-08-07
title: "ConWriter：带轻量神经符号一致性控制的转移约束有状态长形式故事生成"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/ConWriter- Transition-Constrained Stateful Long-Form Story Generation with Lightweight Neuro-Symboli.md"
source_note: "[[信息源/arXiv cs.CL RSS/ConWriter- Transition-Constrained Stateful Long-Form Story Generation with Lightweight Neuro-Symboli]]"
source_sha256: 8faf2e321e0906d2c0e3a905736ea4e3592cff5b889405e9b2288c96d0bd01f3
original_url: "https://arxiv.org/abs/2608.05169"
processed: 2026-08-07
language: zh-CN
---

# ConWriter：带轻量神经符号一致性控制的转移约束有状态长形式故事生成

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Jindong Li, Yang Yang, Zihao Liu, Yutao Yue, Menglin Yang
> - **发布时间**：2026-08-07
> - **分类**：cs.CL
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05169)

## 摘要

- 长形式故事生成要求模型在扩展上下文保持叙事一致性，但现有基于提示的方法常随故事增长累积时间、事实、角色、常识与风格错误。
- 提出 ConWriter：一致性感知长故事生成的免训练框架；场景级增量写作，由静态故事要求、动态叙事记忆、符号状态推理与不确定性感知风险信号引导。
- 不将长故事生成视为单一自由形式解码过程，ConWriter 维护演化故事状态、检查新场景是否满足所需叙事转移、用不确定性感知风险信号优先验证与局部修复；实现生成期间一致性控制，在局部错误传播进后续场景前处理。
- ConStory-Bench 评估，覆盖四个长故事任务（续写、生成、扩展与完成）；因长形式生成与评估高成本，每任务用前五个案例，测试 3k、6k 与 12k 目标长度，跨 Qwen3.5-Plus、DeepSeek-V4-Flash 与 GPT-5 系列；实验遵循官方 ConStory-Bench 评估协议。

## 正文

长形式故事生成要求模型在扩展的上下文中保持叙事一致性，然而现有基于提示的方法常常随着故事增长累积时间、事实、角色、常识与风格错误。研究提出 ConWriter，一个用于一致性感知长故事生成的免训练框架。ConWriter 在场景级别增量写作故事，由静态故事要求、动态叙事记忆、符号状态推理与不确定性感知的风险信号引导。不将长故事生成视为一个单一的自由形式解码过程，ConWriter 维护演化的故事状态，检查新场景是否满足所需的叙事转移，并使用不确定性感知的风险信号来优先验证与局部修复。这使一致性控制能够在生成期间进行，在局部错误传播到后续场景之前处理它们。研究在 ConStory-Bench 上评估 ConWriter，覆盖四个长故事任务：续写、生成、扩展与完成。由于长形式生成与评估的高成本，研究使用每个任务的前五个案例，并跨 Qwen3.5-Plus、DeepSeek-V4-Flash 与 GPT-5 系列测试 3k、6k 与 12k 目标长度。实验遵循官方 ConStory-Bench 评估协议。

## 关键词

故事生成、一致性、神经符号、长形式、状态
