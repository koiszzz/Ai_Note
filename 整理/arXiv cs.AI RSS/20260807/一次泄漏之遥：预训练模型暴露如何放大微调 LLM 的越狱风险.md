---
published: 2026-08-07
title: "一次泄漏之遥：预训练模型暴露如何放大微调 LLM 的越狱风险"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/One Leak Away- How Pretrained Model Exposure Amplifies Jailbreak Risks in Finetuned LLMs.md"
source_note: "[[信息源/arXiv cs.AI RSS/One Leak Away- How Pretrained Model Exposure Amplifies Jailbreak Risks in Finetuned LLMs]]"
source_sha256: 4f157402b691a628341f62ef8f13d7e6896f73f9513d4dd616cb37f8c5601928
original_url: "https://arxiv.org/abs/2512.14751"
processed: 2026-08-07
language: zh-CN
---

# 一次泄漏之遥：预训练模型暴露如何放大微调 LLM 的越狱风险

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Yixin Tan, Zhe Yu, Rui Wen, Jun Sakuma
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2512.14751)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/One Leak Away- How Pretrained Model Exposure Amplifies Jailbreak Risks in Finetuned LLMs|查看原始文件]]

## 摘要

- 微调预训练大语言模型（LLM）已成为开发下游应用的标准范式；但其安全影响仍不清楚，尤其微调 LLM 是否从预训练来源继承越狱漏洞。
- 在现实预训练到微调威胁模型中研究该问题：攻击者对已发布预训练 LLM 有完全访问权，但无法访问其专有微调衍生品。
- 实证分析表明，在预训练模型上优化的对抗提示最有效地迁移到其微调变体，揭示从预训练到微调 LLM 的继承漏洞。
- 进行表示级探测：可迁移提示在预训练隐藏状态中线性可分，表明可迁移性相关结构已编码在预训练表示中；基于该洞见，提出探针引导投影（PGP）攻击：将优化引向可迁移性相关方向。
- 跨多个 LLM 家族与多样微调任务的实验确认 PGP 强迁移成功，凸显预训练到微调范式的固有安全风险；最后证明相同表示级洞见还启用轻量防御，缓解预训练到微调越狱迁移同时保留下游效用。

## 正文

微调预训练大语言模型（LLMs）已成为开发下游应用的标准范式。然而，其安全影响仍不清楚，尤其微调 LLM 是否从预训练来源继承越狱漏洞。我们在一个现实的预训练到微调威胁模型中研究该问题，其中攻击者对已发布预训练 LLM 有完全访问权，但无法访问其专有微调衍生品。实证分析表明，在预训练模型上优化的对抗提示最有效地迁移到其微调变体，揭示从预训练到微调 LLM 的继承漏洞。为进一步检验这种继承，我们进行表示级探测，显示可迁移提示在预训练隐藏状态中线性可分，表明可迁移性相关结构已编码在预训练表示中。基于该洞见，我们提出探针引导投影（Probe-Guided Projection，PGP）攻击，将优化引向可迁移性相关方向。跨多个 LLM 家族与多样微调任务的实验确认 PGP 的强迁移成功，凸显预训练到微调范式的固有安全风险。最后，我们证明相同的表示级洞见也启用一个轻量防御，缓解预训练到微调越狱迁移，同时保留下游效用。

## 关键词

#越狱攻击 #微调安全 #预训练模型 #表示探测
