---
published: 2026-08-06
title: "LLM 内部知道什么是私密信息吗？探查与引导大语言模型表征中的情境隐私规范"
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/Do LLMs Know What Is Private Internally- Probing and Steering Contextual Privacy Norms in Large Lang.md
source_note: "[[信息源/arXiv cs.CL RSS/Do LLMs Know What Is Private Internally- Probing and Steering Contextual Privacy Norms in Large Lang]]"
source_sha256: 6472105d4cd7ad9d3d2d8cae9fbfc5a8a2bcd397c8081ecba5d35a646d40c653
original_url: https://arxiv.org/abs/2604.00209
processed: 2026-08-07
language: zh-CN
---

# LLM 内部知道什么是私密信息吗？探查与引导大语言模型表征中的情境隐私规范

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2604.00209)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/Do LLMs Know What Is Private Internally- Probing and Steering Contextual Privacy Norms in Large Lang|查看原始文件]]

## 摘要

- LLM 日益部署于高利害场景，却常在人类会谨慎行事的情境下泄露私密信息，引发根本之问：LLM 是否在内部编码了情境隐私规范？为何违规依然存在？
- 以情境完整性（CI）理论为基础，首次系统研究情境隐私作为 LLM 中结构化潜在表征；三个决定规范的 CI 参数（信息类型、接收者、传输原则）在激活空间中编码为线性可分且功能独立的方向
- 尽管存在内部结构，模型在实践中仍泄露私密信息，暴露出概念表征与模型行为之间的明显差距
- 提出 CI 参数化引导：沿每个 CI 维度独立干预，比整体式引导更有效、更可预测地减少隐私违规

## 正文

大语言模型（LLMs）正越来越多地部署在高利害场景中，然而它们经常违反情境隐私，在人类会谨慎行使判断力的情境下泄露私密信息。这引出了一个根本性问题：LLM 是否在内部编码了情境隐私规范？如果是，为什么违规行为依然存在？我们以情境完整性（contextual integrity, CI）理论为基础，首次对作为 LLM 中结构化潜在表征的情境隐私进行了系统性研究。通过探查多个模型，我们发现决定规范的三个 CI 参数——信息类型、接收者和传输原则——在激活空间中被编码为线性可分且功能独立的方向。尽管存在这种内部结构，模型在实践中仍然泄露私密信息，这揭示了概念表征与模型行为之间的明显差距。为弥合这一差距，我们引入了 CI 参数化引导（CI-parametric steering），它沿每个 CI 维度独立进行干预。这种结构化控制比整体式引导更有效、更可预测地减少了隐私违规。我们的结果表明，情境隐私失败源于表征与行为之间的错位，而非缺乏意识；利用 CI 的组合结构可以实现更可靠的情境隐私控制，也为改进 LLM 中的情境隐私理解指明了方向。

## 关键词

#情境隐私 #情境完整性 #大语言模型 #表征探测 #隐私引导
