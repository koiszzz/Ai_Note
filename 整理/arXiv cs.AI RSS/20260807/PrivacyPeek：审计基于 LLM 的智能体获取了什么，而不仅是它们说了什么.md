---
published: 2026-08-07
title: "PrivacyPeek：审计基于 LLM 的智能体获取了什么，而不仅是它们说了什么"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/PrivacyPeek- Auditing What LLM-Based Agents Acquire, Not Just What They Say.md"
source_note: "[[信息源/arXiv cs.AI RSS/PrivacyPeek- Auditing What LLM-Based Agents Acquire, Not Just What They Say]]"
source_sha256: b1603faabf24449edfbc9ec9d1e44445b75d63731a6bb43bf7453fd5d7086e19
original_url: "https://arxiv.org/abs/2606.00152"
processed: 2026-08-07
language: zh-CN
---

# PrivacyPeek：审计基于 LLM 的智能体获取了什么，而不仅是它们说了什么

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Mingxuan Zhang, Jiahui Han, Dadi Guo, Songze Li, Guanchu Wang, Na Zou, Dongrui Liu, Xia Hu
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2606.00152)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/PrivacyPeek- Auditing What LLM-Based Agents Acquire, Not Just What They Say|查看原始文件]]

## 摘要

- 基于 LLM 的智能体快速进步，自主调用外部工具为用户完成多步任务；但智能体常获取比任务所需更多的敏感信息。
- 现有隐私基准审计智能体响应或对外动作披露什么，但忽视数据首次进入智能体上下文时的获取阶段；过度获取的信息距离彻底泄漏仅一步之遥（一次疏忽动作或一次攻击）。
- 评估其普遍性，引入 PrivacyPeek：评估基于 LLM 智能体获取阶段隐私泄漏的基准，含 7 种获取行为与 16 个应用领域的 1,182 个案例——获取检查检查智能体的工具调用轨迹（调用的工具与接收的数据），检测何时获取超出任务范围的敏感信息；探针引出随后发出后续探针，测量攻击者能多容易引出智能体获取但未披露的敏感信息。
- 对 4 个模型家族 10 个基于 LLM 智能体的实验显示，不必要的敏感信息获取普遍存在；还观察到任务完成能力与获取阶段泄漏之间的相关；提示级防御仅减少一小部分获取阶段泄漏，留下大部分未缓解；结果使审计获取阶段隐私既紧迫又必要；数据集与代码公开。

## 正文

基于 LLM 的智能体正在快速进步，自主调用外部工具为用户完成多步任务。然而，智能体往往获取比任务所需更多的敏感信息。现有隐私基准审计智能体的响应或对外动作披露了什么，但忽视获取阶段（acquisition stage），即数据首次进入智能体上下文的地方。过度获取的信息距离彻底泄漏只有一次疏忽动作或一次攻击之遥。为评估其普遍性，我们引入 PrivacyPeek，一个评估基于 LLM 智能体获取阶段隐私泄漏的基准，含 7 种获取行为与 16 个应用领域的 1,182 个案例。具体而言，获取检查（Acquisition Inspection）检查智能体的工具调用轨迹——它调用的工具与接收的数据——以检测何时获取超出任务范围的敏感信息。探针引出（Probe Elicitation）随后发出后续探针，测量攻击者能多容易引出智能体获取但未披露的敏感信息。我们对 4 个模型家族 10 个基于 LLM 智能体的实验表明，不必要地获取敏感信息是普遍的。此外，我们观察到任务完成能力与获取阶段泄漏之间的相关性。提示级防御仅减少一小部分获取阶段泄漏，留下大多数未缓解。这些结果使审计获取阶段隐私既紧迫又必要。数据集与代码见 https://github.com/Xuan269/PrivacyPeek-Resource。

## 关键词

#隐私审计 #LLM智能体 #获取阶段 #数据泄漏
