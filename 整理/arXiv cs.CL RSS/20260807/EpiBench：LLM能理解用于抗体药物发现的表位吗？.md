---
published: 2026-08-07
title: "EpiBench：LLM 能理解用于抗体药物发现的表位吗？"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/EpiBench- Can LLMs Understand Epitopes for Antibody Drug Discovery-.md"
source_note: "[[信息源/arXiv cs.CL RSS/EpiBench- Can LLMs Understand Epitopes for Antibody Drug Discovery-]]"
source_sha256: 2e2f898d0810b44fdd98e52c551c76722cd5d3b56e8199b385f611c4a34ba628
original_url: "https://arxiv.org/abs/2608.06022"
processed: 2026-08-07
language: zh-CN
---

# EpiBench：LLM 能理解用于抗体药物发现的表位吗？

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Zirui Wang, Jiaqi Wang, Qinghan Wang, Yuzhi Xu, Gang Du, Tingjun Hou, Odin Zhang
> - **发布时间**：2026-08-07
> - **分类**：cs.CL
> - **原文**：[打开链接](https://arxiv.org/abs/2608.06022)

## 摘要

- 表位决定抗体何处结合抗原并塑造功能阻断与逃逸抗性等下游治疗性质，使表位理解成为抗体药物发现核心；LLM 虽显示强生物医学推理能力，能否直接从抗原与抗体序列推断表位信息仍不清楚。
- 现有表位资源通常聚焦孤立预测任务或依赖专门结构设定，通用蛋白基准不评估抗体开发工作流中的表位中心决策。
- 引入 EpiBench：闭卷、基于序列、自动评分的 LLM 表位推理评估基准；1609 个策展样本，锚定于结构抗体-抗原接触、策展功能 B 细胞分析与深度突变扫描逃逸测量；五个连接任务：可靶向区域发现、抗体条件化表位识别、表位分箱、功能表位评估与抗体逃逸评估，受控采样减少捷径评估伪影。
- 评估九个通用 LLM 并经任务特定基线、抗原长度分层、显式推理比较与失败模式检查分析行为；结果显示当前 LLM 捕捉部分表位相关信号，但在抗体特定序列锚定、长上下文残基定位与生物锚定推理仍受限；EpiBench 为测量与改进序列感知生物医学 LLM 提供诊断测试台。

## 正文

表位（epitopes）决定抗体在何处结合抗原，并塑造功能阻断与逃逸抗性等下游治疗性质，使表位理解成为抗体药物发现的核心。虽然大语言模型（LLMs）显示出强的生物医学推理能力，它们能否直接从抗原与抗体序列推断表位信息仍不清楚。现有表位资源通常聚焦孤立的预测任务或依赖专门的蛋白质结构设定，而通用蛋白质基准不评估抗体开发工作流中的表位中心决策。为弥合该差距，研究引入 EpiBench，一个用于评估 LLM 表位推理的闭卷、基于序列、自动可评分的基准。EpiBench 包含 1,609 个策展样本，锚定于结构抗体-抗原接触、策展的功能 B 细胞分析与深度突变扫描逃逸测量。它覆盖五个连接的任务：可靶向区域发现、抗体条件化表位识别、表位分箱（epitope binning）、功能表位评估与抗体逃逸评估，并采用受控采样减少基于捷径的评估伪影。研究评估九个通用 LLM，并通过任务特定基线、抗原长度分层、显式推理比较与失败模式检查分析它们的行为。结果表明，当前 LLM 捕捉部分表位相关信号，但在抗体特定序列锚定、长上下文残基定位与生物学锚定推理方面仍然受限。因此，EpiBench 为测量与改进序列感知生物医学 LLM、迈向可靠的 LLM 辅助抗体发现提供了一个诊断测试台。

## 关键词

表位、抗体、药物发现、LLM、基准
