---
published: 2026-08-07
title: "CrossHallu：幻觉信号能跨语言与领域泛化于大语言模型内部吗？"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/CrossHallu- Do Hallucination Signals Generalize Across Languages and Domains in Large Language Model.md"
source_note: "[[信息源/arXiv cs.CL RSS/CrossHallu- Do Hallucination Signals Generalize Across Languages and Domains in Large Language Model]]"
source_sha256: 0806c403fefb064c4b097bc7f0d00012f1a21128fe15f8680d4ea89350d693ad
original_url: "https://arxiv.org/abs/2607.04029"
processed: 2026-08-07
language: zh-CN
---

# CrossHallu：幻觉信号能跨语言与领域泛化于大语言模型内部吗？

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Aisha Alansari, Malak Alkhorasani, Hamzah Luqman
> - **发布时间**：2026-08-07
> - **分类**：cs.CL
> - **原文**：[打开链接](https://arxiv.org/abs/2607.04029)

## 摘要

- 近期 LLM 幻觉检测技术聚焦直接提取模型内部表征特征并训练分类器检测幻觉，显示有前景结果；但多数内部状态幻觉检测主要在英语探索，内部信号是否跨不同语言与领域泛化存疑。
- 呈现 CrossHallu：首个评估使用内部表征的幻觉检测跨语言与跨领域泛化的研究，六个 LLM 上生成问答任务。
- 用 TruthfulQA、TruthfulQA 阿拉伯语翻译版与 HalluScore 进行系统性阿拉伯语↔英语评估；涵盖单语训练与测试、跨语言迁移、跨领域迁移与跨语言跨领域组合迁移。
- 结果显示多数模型内部状态幻觉信号跨语言与领域迁移，跨语言性能高度依赖特征空间类可分性与语言对齐，阿拉伯语内跨领域迁移依幻觉检测器训练与测试数据集而异；代码公开。

## 正文

近期大语言模型（LLMs）中的幻觉检测技术聚焦直接从模型内部表征提取特征，并训练分类器检测幻觉，显示出有前景的结果。尽管有此进展，大多数内部状态幻觉检测技术主要在英语中探索，引发此类内部信号是否跨不同语言与领域泛化的问题。为弥合该差距，研究呈现 CrossHallu，第一个评估使用内部表征的幻觉检测跨语言与跨领域泛化的研究，在六个 LLM 上执行生成式问答任务。研究使用 TruthfulQA、TruthfulQA 的阿拉伯语翻译版与 HalluScore 进行系统的阿拉伯语↔英语评估。该评估涵盖单语训练与测试、跨语言迁移、跨领域迁移，以及跨语言与跨领域的组合迁移。结果显示，大多数模型的内部状态幻觉信号跨语言与领域迁移，跨语言性能高度依赖于特征空间中的类可分性与语言对齐，而阿拉伯语内的跨领域迁移依幻觉检测器训练与测试所用的数据集而异。代码公开于 https://github.com/aishaalansari57/CrossHal。

## 关键词

幻觉检测、跨语言、跨领域、内部表征、泛化
