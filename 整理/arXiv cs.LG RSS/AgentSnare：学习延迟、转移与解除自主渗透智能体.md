---
title: "AgentSnare：学习延迟、转移与解除自主渗透智能体"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/AgentSnare- Learning to Delay, Divert, and Defuse Autonomous Penetration Agents.md"
source_note: "[[信息源/arXiv cs.LG RSS/AgentSnare- Learning to Delay, Divert, and Defuse Autonomous Penetration Agents]]"
source_sha256: 62ecb2fc352393e94fd5c04d9d2ea6ed505c7589506e72de968e12b9394f6ee9
original_url: "https://arxiv.org/abs/2607.26998"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# AgentSnare：学习延迟、转移与解除自主渗透智能体

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Ruoyu Wang、Heng Zhao、Renjie Wu 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.26998)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/AgentSnare- Learning to Delay, Divert, and Defuse Autonomous Penetration Agents|查看原始文件]]

## 摘要

- 提出 AgentSnare，轨迹自适应欺骗系统：动态展开诱饵环境，持续引导渗透智能体远离真实目标——工件构建策略模型条件于智能体交互历史与诱饵状态构建候选工件；验证候选并把有效工件增量纳入事实一致的诱饵环境，从而吸收其工具调用以延迟攻击、在诱饵内转移其进入后轨迹、诱导基于诱饵证据的完成报告以解除攻击。
- 大语言模型（LLM）智能体通过观测-动作循环自动化渗透测试：基于工具返回的观测选择动作；该依赖使防御者能注入欺骗性观测误导智能体决策过程；现有防御高度依赖攻击前植入环境的静态、孤立工件——高级智能体可渐进识别并绕过，最终把利用尝试重新聚焦真实目标。
- 15 个 CVE-Bench 网络应用与三个攻击者模型下：AgentSnare 在诱饵中吸收智能体 46.8% 工具调用、保留 55.9% 进入后动作，90.0% 完成尝试接地于诱饵证据；全部 45 个攻击者-CVE 对中，pass@3 无真实目标被成功利用。

## 正文

论文编号：arXiv:2607.26998v2（更新类型：replace-cross）。以下为摘要全文翻译。

大语言模型（LLM）智能体通过观测-动作循环自动化渗透测试：基于工具返回的观测选择动作。这种依赖允许防御者注入欺骗性观测，误导智能体的决策过程。然而，现有防御高度依赖攻击前植入环境中的静态、孤立工件。高级智能体可以渐进识别并绕过这些工件，最终把利用尝试重新聚焦到真实目标。为解决这一问题，我们引入 AgentSnare，一个轨迹自适应欺骗系统：动态展开诱饵环境，持续引导渗透智能体远离真实目标。具体而言，AgentSnare 采用一个工件构建策略模型：条件于智能体的交互历史与诱饵状态构建候选工件。AgentSnare 随后验证这些候选，并把有效工件增量纳入一个事实一致的诱饵环境，从而通过吸收其工具调用延迟攻击、在诱饵内转移其进入后的轨迹，并通过诱导基于诱饵证据的完成报告来解除攻击。在 15 个 CVE-Bench 网络应用与三个攻击者模型上，AgentSnare 在诱饵中吸收智能体 46.8% 的工具调用，并在那里保留 55.9% 的进入后动作，而 90.0% 的完成尝试接地于诱饵证据；在全部 45 个攻击者-CVE 对中，pass@3 下没有真实目标被成功利用。

## 关键词

#渗透测试 #欺骗系统 #LLM智能体 #诱饵环境
