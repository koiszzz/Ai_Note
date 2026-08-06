---
published: 2026-08-05
title: "MDArena：在真实分子动力学工作流上评估编码智能体"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/MDArena- Evaluating Coding Agents on Realistic Molecular Dynamics Workflows.md"
source_note: "[[信息源/arXiv cs.AI RSS/MDArena- Evaluating Coding Agents on Realistic Molecular Dynamics Workflows]]"
source_sha256: a60654b694efa5204436c16750264ea94b03033be98e9d54832295fad1c485c4
original_url: "https://arxiv.org/abs/2608.02642"
processed: 2026-08-05
language: zh-CN
---

# MDArena：在真实分子动力学工作流上评估编码智能体

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Nithishwer Mouroug Anand 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02642)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/MDArena- Evaluating Coding Agents on Realistic Molecular Dynamics Workflows|查看原始文件]]

## 摘要

- 引入 MDArena，从活跃生物分子模拟项目提取的 50 个容器化任务基准，覆盖 29 个分子系统与 14 个广泛研究协议（轨迹分析、复杂系统准备、自由能协议与增强采样）。
- 评估跨 Codex 与 OpenCode 的六种模型/框架配置：Codex GPT-5.5 超高推理强度表现最佳（24/50 严格 Pass@1，48%），随后是 Codex GPT-5.5 Medium（21/50）与 OpenCode Gemini Flash 3.5（20/50）。
- 平均正确性与过程奖励在所有配置中都显著高于严格成功率，表明智能体经常取得有意义的局部进展，但在可复现科学工作流所需的细粒度细节上失败。
- 困难任务大多未解决，尤其膜蛋白系统准备与炼金自由能设置；MDArena 暴露编码智能体作为受监督助手与其作为自主 MD 研究者的可靠性之间的巨大差距，并提供可复现、可扩展的平台跟踪弥合进展。

## 正文

论文编号：arXiv:2608.02642v1（更新类型：cross）。以下为摘要全文翻译。

加速科学发现是 AI 最具影响力的应用之一，而计算生物分子模拟在这一更广泛努力中尤为突出。编码智能体有望自动化该工作流的重要部分，但它们在真实分子动力学（MD）任务上的可靠性仍未得到充分刻画。为解决这一问题，我们引入 MDArena，一个从活跃生物分子模拟项目提取的 50 个容器化任务基准，覆盖 29 个分子系统与 14 个广泛研究协议，包括轨迹分析、复杂系统准备、自由能协议与增强采样。我们评估跨 Codex 与 OpenCode 的六种模型/框架配置。在被评估配置中，超高推理强度的 Codex GPT-5.5 表现最佳，达到 24/50 的严格 Pass@1 成功率（48%），随后是 Codex GPT-5.5 Medium（21/50）与 OpenCode Gemini Flash 3.5（20/50）。平均正确性与过程奖励在所有配置中都显著高于严格成功率，表明智能体经常取得有意义的局部进展，但在可复现科学工作流所需的细粒度细节上失败。困难任务大多未解决，尤其膜蛋白系统准备与炼金自由能设置，两者都被每个评估配置未解决或接近未解决。因此，MDArena 暴露了编码智能体作为受监督助手的有用性与它们作为自主 MD 研究者的可靠性之间的巨大差距，同时提供一个可复现、可扩展的平台来跟踪弥合这一差距的进展。

## 关键词

#分子动力学 #编码智能体 #基准测试 #科学计算
