---
title: "野外 LLM 服务：框架、方法与系统设计的实证研究"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/LLM Serving in the Wild- An Empirical Study of Frameworks, Methods, and System Designs.md"
source_note: "[[信息源/arXiv cs.LG RSS/LLM Serving in the Wild- An Empirical Study of Frameworks, Methods, and System Designs.]]"
source_sha256: 7e8eba537dcaf7904dd6197d78b85232c6a51a52a3d6eab59d23e7d7bec4753c
original_url: "https://arxiv.org/abs/2608.03036"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# 野外 LLM 服务：框架、方法与系统设计的实证研究

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Forough Majidi、Mohammad Mehdi Morovati、Foutse Khomh、Heng Li
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03036)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/LLM Serving in the Wild- An Empirical Study of Frameworks, Methods, and System Designs.|查看原始文件]]

## 摘要

- LLM 被集成进软件系统与 AI 服务，使高效 LLM 服务成为软件工程关注的议题；服务 LLM 有挑战性，因为推理需要计算、内存、GPU 资源与执行，同时要保持延迟与吞吐。
- 尽管先前研究提出 LLM 推理、优化与服务技术及框架，但它们在实践中如何被采用却鲜为人知。
- 研究开源软件系统中 LLM 服务框架与服务方法的使用：识别并分析五个 LLM 专用框架——vLLM、SGLang、TensorRT-LLM、LMDeploy 与 FlashInfer。
- 考察这些框架与技术如何单独及组合采用、采用如何随 LLM 类别变化、仓库在意图、焦点、用例与架构设计上的差异；结果显示 vLLM 在流行度与采用上最显眼，并行计算、内存管理与网络剪枝是最常用的服务方法类别。
- 多框架使用有限，表明开发者依赖单一服务框架；但组合框架跨服务栈连接互补能力。框架采用随模型家族、模态、模型规模、领域专门化与部署设置变化。
- 仓库级分析显示 LLM 服务框架支持的应用与架构包括基于强化学习（RL）的推理、多模态生成与理解、微服务与云基础设施；本研究对实践中 LLM 服务框架采用进行大规模实证刻画，为研究人员、框架维护者与 LLM 系统从业者提供洞见。

## 正文

论文编号：arXiv:2608.03036v1（更新类型：cross）。以下为摘要全文翻译。

大语言模型（LLM）被集成进软件系统与 AI 服务，使高效 LLM 服务成为软件工程的一个关注点。服务 LLM 具有挑战性，因为推理需要计算、内存、GPU 资源与执行，同时要保持延迟与吞吐。尽管先前研究提出了 LLM 推理、优化与服务的技术和框架，但它们在实践中的采用情况鲜为人知。在这项研究中，我们调查开源软件系统中 LLM 服务框架与服务方法的使用。我们识别并分析五个 LLM 专用框架：vLLM、SGLang、TensorRT-LLM、LMDeploy 与 FlashInfer。我们考察这些框架与技术如何单独及组合采用、采用如何随 LLM 类别变化、以及仓库在意图、焦点、用例与架构设计上的差异。结果显示，vLLM 在流行度与采用上最显眼，而并行计算、内存管理与网络剪枝是最常使用的服务方法类别。多框架使用有限，表明开发者依赖单一服务框架；然而组合框架会跨服务栈连接互补能力。框架采用随模型家族、模态、模型规模、领域专门化与部署设置而变化。仓库级分析表明，LLM 服务框架支持的应用与架构包括基于强化学习（RL）的推理、多模态生成与理解、微服务与云基础设施。总体而言，本研究对实践中 LLM 服务框架的采用进行了大规模实证刻画，为研究人员、框架维护者与从事 LLM 系统的从业者提供洞见。

## 关键词

#LLM服务 #vLLM #SGLang #推理优化 #开源软件
