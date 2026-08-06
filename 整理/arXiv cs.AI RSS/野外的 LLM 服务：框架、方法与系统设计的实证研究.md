---
title: "野外的 LLM 服务：框架、方法与系统设计的实证研究"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/LLM Serving in the Wild- An Empirical Study of Frameworks, Methods, and System Designs.md"
source_note: "[[信息源/arXiv cs.AI RSS/LLM Serving in the Wild- An Empirical Study of Frameworks, Methods, and System Designs]]"
source_sha256: 3e5bd7ef898e4f64fafe800704c7d948b8fcc242ee3969f02248747f24b0b20b
original_url: "https://arxiv.org/abs/2608.03036"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# 野外的 LLM 服务：框架、方法与系统设计的实证研究

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Forough Majidi、Mohammad Mehdi Morovati、Foutse Khomh 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03036)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/LLM Serving in the Wild- An Empirical Study of Frameworks, Methods, and System Designs|查看原始文件]]

## 摘要

- 研究开源软件系统中 LLM 服务框架与服务方法的使用：识别并分析五个 LLM 特定框架（vLLM、SGLang、TensorRT-LLM、LMDeploy 与 FlashInfer）。
- vLLM 在流行度与采用上最显眼；并行计算、内存管理与网络剪枝是最常用的服务方法类别；多框架使用有限，开发者依赖单一服务框架，但组合框架连接服务栈的互补能力。
- 框架采用随模型家族、模态、模型大小、领域专业化与部署设置而异。
- 仓库级分析显示 LLM 服务框架支持多种应用与架构，包括基于强化学习的推理、多模态生成与理解、微服务与云基础设施；为研究者、框架维护者与从业者提供大规模实证刻画与洞察。

## 正文

论文编号：arXiv:2608.03036v1（更新类型：cross）。以下为摘要全文翻译。

大语言模型（LLM）被集成到软件系统与 AI 服务中，使高效 LLM 服务成为软件工程关注的问题。服务 LLM 具有挑战性，因为推理需要计算、内存、GPU 资源与执行，同时要保持延迟与吞吐。虽然先前研究提出了 LLM 推理、优化与服务技术与框架，但它们在实践中的采用情况鲜为人知。在本研究中，我们调查开源软件系统中 LLM 服务框架与服务方法的使用。我们识别并分析五个 LLM 特定框架：vLLM、SGLang、TensorRT-LLM、LMDeploy 与 FlashInfer。我们考察这些框架与技术如何被单独与组合采用、采用如何随 LLM 类别变化，以及仓库在意向、重点、用例与架构设计上如何不同。结果显示，vLLM 在流行度与采用上是最显眼的框架，而并行计算、内存管理与网络剪枝是最常用的服务方法类别。多框架使用有限，表明开发者依赖单一服务框架；然而，组合框架连接服务栈中的互补能力。框架采用随模型家族、模态、模型大小、领域专业化与部署设置而变化。仓库级分析表明，LLM 服务框架支持多种应用与架构，包括基于强化学习（RL）的推理、多模态生成与理解、微服务与云基础设施。总体而言，本研究提供了 LLM 服务框架在实践中采用的大规模实证刻画，并为研究 LLM 系统的研究者、框架维护者与从业者提供洞察。

## 关键词

#LLM服务 #vLLM #SGLang #实证研究
