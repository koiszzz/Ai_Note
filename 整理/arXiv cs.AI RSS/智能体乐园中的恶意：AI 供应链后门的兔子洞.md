---
title: "智能体乐园中的恶意：AI 供应链后门的兔子洞"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Malice in Agentland- Down the Rabbit Hole of Backdoors in the AI Supply Chain.md"
source_note: "[[信息源/arXiv cs.AI RSS/Malice in Agentland- Down the Rabbit Hole of Backdoors in the AI Supply Chain]]"
source_sha256: e2e8e605601804e6826efa54c644e4c42de9954aa4d27139613a981ebb3e0cfa
original_url: "https://arxiv.org/abs/2510.05159"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# 智能体乐园中的恶意：AI 供应链后门的兔子洞

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Léo Boisvert 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2510.05159)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Malice in Agentland- Down the Rabbit Hole of Backdoors in the AI Supply Chain|查看原始文件]]

## 摘要

- 在交互数据（如网页浏览或工具使用）上微调 AI 智能体虽提升能力，也在智能体 AI 供应链中引入关键安全漏洞：对手可在数据收集流水线的多个阶段投毒，嵌入难以检测的后门，触发时造成不安全或恶意行为。
- 形式化供应链不同层的三个现实威胁模型：微调数据直接投毒、预后门基础模型，以及环境投毒（利用智能体训练流水线特定漏洞的新攻击向量）。
- 在两个广泛采用的智能体基准上评估：三个威胁模型都有效——只需投毒少量演示即可嵌入后门，使智能体以超过 80% 的成功率泄露机密用户信息。

## 正文

论文编号：arXiv:2510.05159v5（更新类型：replace-cross）。以下为摘要全文翻译。

在交互数据（如网页浏览或工具使用）上微调 AI 智能体虽提升其能力，也在智能体 AI 供应链内引入关键安全漏洞。我们表明，对手可以有效投毒数据收集流水线的多个阶段，嵌入难以检测的后门，触发时导致不安全或恶意行为。我们形式化供应链不同层的三个现实威胁模型：微调数据的直接投毒、预后门基础模型，以及环境投毒——一种利用智能体训练流水线特定漏洞的新攻击向量。在两个广泛采用的智能体基准上评估，三个威胁模型都被证明有效：只需投毒少量演示即可嵌入后门，使智能体以超过 80% 的成功率泄露机密用户信息。

## 关键词

#供应链安全 #后门攻击 #AI智能体 #投毒
