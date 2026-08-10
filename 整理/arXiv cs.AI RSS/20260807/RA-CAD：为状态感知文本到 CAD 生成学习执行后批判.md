---
published: 2026-08-07
title: "RA-CAD：为状态感知文本到 CAD 生成学习执行后批判"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/RA-CAD- Learning Post-Execution Critique for State-Aware Text-to-CAD Generation.md"
source_note: "[[信息源/arXiv cs.AI RSS/RA-CAD- Learning Post-Execution Critique for State-Aware Text-to-CAD Generation]]"
source_sha256: a5ad88a82c77f0cb02bdbf1954e37c7b1c39a3113a52585f6db0f64c44498c92
original_url: "https://arxiv.org/abs/2608.05714"
processed: 2026-08-07
language: zh-CN
---

# RA-CAD：为状态感知文本到 CAD 生成学习执行后批判

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Shuhao Yan, Changhao He, Xi Peng, Peng Hu
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05714)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/RA-CAD- Learning Post-Execution Critique for State-Aware Text-to-CAD Generation|查看原始文件]]

## 摘要

- 文本到 CAD 生成将自然语言设计意图转化为可编辑、可执行的参数化计算机辅助设计（CAD）代码，减少手工建模所需的专业知识与工作量。
- 现有方法纳入固定、外部提供、提示诱导或单独优化的批判机制以优化生成过程，但不一定优化反馈在生成过程中如何被解释并转化为有效纠正动作。
- 提出 RA-CAD（ReAct Agent for CAD）：状态感知智能体，通过生成-执行-批判-重写循环与 CAD 环境交互——每次迭代执行当前代码并观察结果；条件于设计指令、当前代码与执行反馈，智能体生成显式执行后批判作为中间策略动作，该批判要么验证当前结果终止，要么提供条件化下一次重写的修订导向指导。
- CAD 代码引导（CCB）先通过监督微调建立基础参数化 CAD 编码能力；反馈驱动智能体优化（FAO）随后对策略生成代码与批判序列应用轨迹级群体相对策略优化，将终端 F1 与 Chamfer 距离奖励分配给完整交互轨迹——使批判成为结果对齐、可学习的策略决策而非未优化的辅助输出。
- CADFusion 与 Text2CAD 实验表明 RA-CAD 相对现有方法与强专有语言模型取得最优执行有效性与几何质量，展示所提状态感知文本到 CAD 智能体的有效性。

## 正文

文本到 CAD 生成将自然语言设计意图转化为可编辑、可执行的参数化计算机辅助设计（CAD）代码，减少手工建模所需的专业知识与工作量。现有方法纳入固定、外部提供、提示诱导或单独优化的批判机制来优化生成过程，但它们不一定优化反馈在生成过程中如何被解释并转化为有效纠正动作。为弥合这一反馈利用差距，我们呈现 RA-CAD（ReAct Agent for CAD），一个通过生成-执行-批判-重写循环与 CAD 环境交互的状态感知智能体。每次迭代，RA-CAD 执行当前代码并观察其结果。条件于设计指令、当前代码与执行反馈，智能体随后生成一个显式执行后批判（post-execution critique）作为中间策略动作。该批判要么验证当前结果以终止，要么提供条件化下一次重写的修订导向指导。CAD 代码引导（CAD Code Bootstrapping，CCB）首先通过监督微调建立基础参数化 CAD 编码能力。反馈驱动智能体优化（Feedback-Driven Agent Optimization，FAO）随后对策略生成的代码与批判序列应用轨迹级群体相对策略优化，将终端 F1 与 Chamfer 距离奖励分配给完整交互轨迹。这种表述使批判成为结果对齐、可学习的策略决策，而非未优化的辅助输出。在 CADFusion 与 Text2CAD 上的实验表明，RA-CAD 相对现有方法与强专有语言模型取得最优的执行有效性与几何质量，展示所提状态感知文本到 CAD 智能体的有效性。

## 关键词

#文本到CAD #智能体 #执行后批判 #强化学习
