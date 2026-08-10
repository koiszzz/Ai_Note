---
published: 2026-08-07
title: "EvoHarness-RL：为长时程 LLM 智能体学习自演化运行时外壳"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/EvoHarness-RL- Learning Self-Evolving Runtime Harness for Long-Horizon LLM Agents.md"
source_note: "[[信息源/arXiv cs.CL RSS/EvoHarness-RL- Learning Self-Evolving Runtime Harness for Long-Horizon LLM Agents]]"
source_sha256: 9d28aeba86767080420332000dd65b6dc8072df6204e365760efd79b0d1151d7
original_url: "https://arxiv.org/abs/2608.05446"
processed: 2026-08-07
language: zh-CN
---

# EvoHarness-RL：为长时程 LLM 智能体学习自演化运行时外壳

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Xuying Ning, Dongqi Fu, Tianxin Wei, Hanqing Zeng, Yuanchen Bei, Bingxuan Li, Zihao Li, Qifan Wang, Xiang Shen, Yifan Wu, Jiayi Liu, Hong Li, Yinglong Xia, Xiangjun Fan, Hanghang Tong, Jingrui He
> - **发布时间**：2026-08-07
> - **分类**：cs.LG
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05446)

## 摘要

- 长时程 LLM 智能体日益依赖外部执行支持维持状态、跟踪进度、调用工具、验证结果与跨交互复用经验；有效外壳使用带来两个耦合挑战：从噪声交互轨迹形成状态与对外部状态访问的运行时控制。
- 研究外壳策略学习：智能体离线学习外壳策略，运行时任务执行期间在线构建与更新外部外壳状态；引入 EvoHarness-RL，将信念、进度与经验（BPE）暴露为策略面对的外壳状态。
- 监督外壳微调教基座智能体外壳动作空间与如何构建有用外部状态；成本感知 GRPO 探索协调策略，在长时程交互中选择性读取、更新与整合状态。
- ALFWorld 上 Qwen3-8B 达 96.9% 成功率，揭示两个关键动态：外壳退火（训练将反复外壳使用模式内化为模型策略）与外壳演化（进度更新与经验整合将外壳精化为紧凑、任务自适应状态基质）。

## 正文

长时程 LLM 智能体日益依赖外部执行支持来维持状态、跟踪进度、调用工具、验证结果并跨交互复用经验。然而，有效的外壳使用带来两个耦合挑战：从噪声交互轨迹形成状态，以及对外部状态访问的运行时控制。现有智能体通常通过提示、启发式或领域特定约定处理两者，使外部工作空间及其使用策略被手工工程化。为解决该问题，研究外壳策略学习问题：智能体离线学习外壳策略，并在运行时任务执行期间在线部署以构建与更新外部外壳状态。研究引入 EvoHarness-RL，将信念（Belief）、进度（Progress）与经验（Experience）暴露为策略面对的外壳状态。监督外壳微调教基座智能体外壳动作空间以及如何构建有用的外部状态；成本感知 GRPO 探索协调策略，在长时程交互期间选择性读取、更新与整合该状态。在 ALFWorld 上用 Qwen3-8B 实例化，EvoHarness-RL 达到 96.9% 成功率，并揭示两个关键动态：外壳退火（harness annealing）——训练将反复出现的外壳使用模式内化为模型策略，使智能体从频繁外壳调用转向选择性外部状态访问；外壳演化（harness evolution）——进度更新与经验整合将外壳精化为紧凑、任务自适应的状态基质。这些结果表明，长时程智能体受益于可训练的构建与协调外部外壳工作空间的策略，而不仅仅是添加更强工具或更大记忆。

## 关键词

LLM 智能体、外壳策略、强化学习、外部状态、长时程任务
