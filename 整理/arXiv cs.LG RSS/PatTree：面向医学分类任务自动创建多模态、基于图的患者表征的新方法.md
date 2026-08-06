---
title: "PatTree：面向医学分类任务自动创建多模态、基于图的患者表征的新方法"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/PatTree- a novel approach for automated creation of multimodal, graph-based patient representations .md"
source_note: "[[信息源/arXiv cs.LG RSS/PatTree- a novel approach for automated creation of multimodal, graph-based patient representations .]]"
source_sha256: 6a8eeac6671096d482e252803f348286940833af8f38e8bcb62d95d76d9c0a97
original_url: "https://arxiv.org/abs/2608.02692"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# PatTree：面向医学分类任务自动创建多模态、基于图的患者表征的新方法

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Julia Gehrmann、Lars Quakulinski、Hamza Naseem、Oya Beyan
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02692)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/PatTree- a novel approach for automated creation of multimodal, graph-based patient representations .|查看原始文件]]

## 摘要

- 相比使用单一模态或数据源，获得整体、多模态数据能提升 AI 在医学分类任务中的性能；但临床真实数据的固有异质性与复杂性对结构化数据分析与 AI 应用构成重大挑战（缺失值、多个时间点、多样模态、不一致的格式与语义）。
- 集成前的数据协调应对这一挑战，但资源密集且易错，限制整体、AI 驱动的临床真实数据决策支持的可扩展性与可复现性。
- 提出 PatTree，一个基于图的整体患者表征，可通过多模态临床数据的自动结构化从真实临床数据推导；PatTree 无需预标准化输入即可实现早期数据集成。
- 在统一知识图内表示异构临床数据的同时，PatTree 保留跨模态与数据源的数据元素语义关系，促进互操作性与机器可解释的数据访问。
- 用 ADNI-1 队列子集（n=763）演示：直接在 PatTree 上分类患者即可取得最先进分类性能——区分阿尔茨海默病、轻度认知障碍与认知正常者的三分类任务中，留出测试集上达到 98.5% 的平衡准确率与 0.987 的 F1 分数。
- 结果表明：无假设的多模态医学数据自动结构化可作为临床 AI 流水线的可扩展基础，绕开繁琐的数据准备与标准化。

## 正文

论文编号：arXiv:2608.02692v1（更新类型：new）。以下为摘要全文翻译。

访问整体、多模态数据与使用单一模态或数据源相比，能提升人工智能（AI）在医学分类任务中的性能。然而，临床真实数据的固有异质性与复杂性对结构化数据分析和 AI 应用构成重大挑战。这种异质性包括缺失值、多个时间点、多样模态，以及不一致的格式与语义。数据集成之前的数据协调可以应对这一挑战，但资源密集且易出错，限制了整体、AI 驱动的临床真实数据决策支持的可扩展性与可复现性。因此，我们提出 PatTree，一个基于图的整体患者表征，可通过多模态临床数据的自动结构化从真实临床数据推导。PatTree 无需依赖预标准化的输入即可实现早期数据集成。在统一知识图内表示异构临床数据的同时，PatTree 保留跨模态与数据源的数据元素之间的语义关系，促进互操作性与机器可解释的数据访问。使用 ADNI-1 队列的一个子集（n = 763），我们演示直接在 PatTree 上对患者分类即可达到最先进的分类性能。在区分阿尔茨海默病、轻度认知障碍与认知正常个体的三分类任务中，我们在留出测试集上取得 98.5% 的平衡准确率与 0.987 的 F1 分数。我们的结果表明，无假设、自动化的多模态医学数据结构化可以作为临床 AI 流水线的可扩展基础，绕过繁琐的数据准备与标准化。

## 关键词

#患者表征 #知识图谱 #多模态 #医学分类 #ADNI
