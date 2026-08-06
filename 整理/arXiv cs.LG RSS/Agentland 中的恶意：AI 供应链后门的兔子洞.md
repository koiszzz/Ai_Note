---
title: "Agentland 中的恶意：AI 供应链后门的兔子洞"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Malice in Agentland- Down the Rabbit Hole of Backdoors in the AI Supply Chain.md"
source_note: "[[信息源/arXiv cs.LG RSS/Malice in Agentland- Down the Rabbit Hole of Backdoors in the AI Supply Chain.]]"
source_sha256: 18a55be84fced9ead7d940a4186b812c8654c9a0f8be7a4f399f46bd89e0b60d
original_url: "https://arxiv.org/abs/2510.05159"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# Agentland 中的恶意：AI 供应链后门的兔子洞

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Léo Boisvert、Abhay Puri、Chandra Kiran Reddy Evuru、Nazanin Sepahvand、Nicolas Chapados、Quentin Cappart、Jason Stanley、Alexandre Lacoste、Krishnamurthy Dj Dvijotham、Alexandre Drouin
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2510.05159)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Malice in Agentland- Down the Rabbit Hole of Backdoors in the AI Supply Chain.|查看原始文件]]

## 摘要

- 在交互数据（如网页浏览或工具使用）上微调 AI 智能体能提升其能力，但也给智能体 AI 供应链引入关键安全漏洞。
- 表明对手可以在数据采集流水线的多个阶段有效投毒，嵌入难以检测的后门，触发时导致不安全或恶意行为。
- 形式化三个跨供应链不同层级的现实威胁模型：微调数据的直接投毒、预后门化的基础模型，以及环境投毒——一个利用智能体训练流水线特有漏洞的新颖攻击向量。
- 在两个广泛采用的智能体基准上评估，三种威胁模型都被证明有效：仅投毒少量示范就足以嵌入一个后门，使智能体以超过 80% 的成功率泄露机密用户信息。

## 正文

论文编号：arXiv:2510.05159v5（更新类型：replace-cross）。以下为摘要全文翻译。

在交互数据（如网页浏览或工具使用）上微调 AI 智能体虽然能提升其能力，也在智能体 AI 供应链内引入关键的安全漏洞。我们表明，对手可以在数据采集流水线的多个阶段有效投毒，嵌入难以检测的后门，这些后门被触发时会引发不安全或恶意行为。我们形式化了跨供应链不同层级的三个现实威胁模型：微调数据的直接投毒、预后门化的基础模型，以及环境投毒——一个利用智能体训练流水线特有漏洞的新颖攻击向量。在两个广泛采用的智能体基准上评估，所有三种威胁模型都被证明有效：仅投毒少量示范就足以嵌入一个后门，使智能体以超过 80% 的成功率泄露机密用户信息。

## 关键词

#AI供应链 #后门攻击 #数据投毒 #智能体安全 #LLM
