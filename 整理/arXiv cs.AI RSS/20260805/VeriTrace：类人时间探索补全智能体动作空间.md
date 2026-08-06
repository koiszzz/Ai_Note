---
published: 2026-08-05
title: "VeriTrace：类人时间探索补全智能体动作空间"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/VeriTrace- Human-Like Temporal Exploration Completes Agentic Action Space.md"
source_note: "[[信息源/arXiv cs.AI RSS/VeriTrace- Human-Like Temporal Exploration Completes Agentic Action Space]]"
source_sha256: 55a0bcdbbb4cd4df7fdb5a14111458d62bde52d1a18789e48cbcff04ccfb0e94
original_url: "https://arxiv.org/abs/2608.02878"
processed: 2026-08-05
language: zh-CN
---

# VeriTrace：类人时间探索补全智能体动作空间

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Yu-Tung Liu、Cunxi Yu
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02878)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/VeriTrace- Human-Like Temporal Exploration Completes Agentic Action Space|查看原始文件]]

## 摘要

- 提出 VeriTrace，多智能体系统：其检查器（Inspector）智能体在完整调试动作空间上运作，对信号选择、时间窗口边界与迭代深度独立控制——称该能力为智能体时间探索（Agentic Temporal Exploration），使智能体能对失败原因形成假设、查询波形获取证据并迭代精化理解，镜像人类验证工程师的探索过程。
- 大语言模型在自动 Verilog RTL 生成上展现出前景，但最先进多智能体系统在标准基准上停滞在约 95% 准确率；把该天花板追溯到不完整调试动作空间：现有系统限制智能体可检查的信号、可查询的时间窗口或两者，把调试降级为对电路行为的窄、预定视图上的模式匹配，而非假设驱动的根因分析。
- VeriTrace 在 VerilogEval-V2 上实现 100% Pass@1，是该基准上首个达到完美功能正确性的系统。
- 共享 Claude Sonnet 4.0 骨干上，VeriTrace 超过最强复现基线 +5.1%，证明调试能动性弥合最终准确率差距。

## 正文

论文编号：arXiv:2608.02878v1（更新类型：new）。以下为摘要全文翻译。

大语言模型在自动 Verilog RTL 生成上展现出前景，然而最先进的多智能体系统在标准基准上停滞在约 95% 的准确率。我们把这个天花板追溯到不完整的调试动作空间：现有系统限制智能体可以检查的信号、可以查询的时间窗口，或两者兼有，把调试降级为对电路行为窄、预定视图的模式匹配，而非假设驱动的根因分析。我们提出 VeriTrace，一个多智能体系统：其检查器（Inspector）智能体在一个完整的调试动作空间上运作，对信号选择、时间窗口边界与迭代深度进行独立控制。我们称这一能力为智能体时间探索（Agentic Temporal Exploration）：它使智能体能够对失败原因形成假设、查询波形获取证据、并迭代精化其理解，镜像人类验证工程师的探索过程。VeriTrace 在 VerilogEval-V2 上实现 100% 的 Pass@1，是该基准上首个达到完美功能正确性的系统。在共享 Claude Sonnet 4.0 骨干上，VeriTrace 超过最强的复现基线 +5.1%，证明调试能动性弥合了最终的准确率差距。

## 关键词

#Verilog生成 #多智能体 #调试 #时间探索
