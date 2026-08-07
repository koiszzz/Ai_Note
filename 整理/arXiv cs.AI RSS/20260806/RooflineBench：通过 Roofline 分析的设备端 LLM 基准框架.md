---
published: 20260806
title: "RooflineBench：通过 Roofline 分析的设备端 LLM 基准框架"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/RooflineBench- A Benchmarking Framework for On-Device LLMs via Roofline Analysis.md"
source_note: "[[信息源/arXiv cs.AI RSS/RooflineBench- A Benchmarking Framework for On-Device LLMs via Roofline Analysis]]"
source_sha256: e31914b738721594228e7dd5fa65fded3694a7d08b7e646203809956b319996d
original_url: "https://arxiv.org/abs/2602.11506"
processed: 2026-08-06
language: zh-CN

---

# RooflineBench：通过 Roofline 分析的设备端 LLM 基准框架

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Zhen Bi, Xueshu Chen, Luoyang Sun, Yuhang Yao, Qing Shen, Jungang Lou, Cheng Deng
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2602.11506)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/RooflineBench- A Benchmarking Framework for On-Device LLMs via Roofline Analysis|查看原始文件]]

## 摘要

- 通过小语言模型（SLM）走向本地智能的转变加强了对资源受限边缘硬件严格性能表征的需求，但客观测量异构平台上多样架构的理论性能上限仍是艰巨挑战。
- 本文提出基于 Roofline 模型的系统框架，通过运营强度（OI）视角统一架构原语和硬件约束：通过定义推理潜力区域，引入相对推理潜力作为新指标，比较同一硬件基座上大语言模型（LLM）之间的效率差异。
- 跨多样计算层级广泛实证分析显示性能和 OI 变化显著受序列长度影响，识别模型深度增加时 OI 的关键回归；突出硬件异构性诱导的效率陷阱，展示多头潜在注意力（MLA）等结构精炼可有效解锁各种硬件基座的潜在推理潜力。

## 正文

通过小语言模型（SLM）走向本地智能的转变加强了对资源受限边缘硬件严格性能表征的需求。然而，客观测量异构平台上多样架构的理论性能上限仍是艰巨挑战。在本工作中，我们提出基于 Roofline 模型的系统框架，通过运营强度（operational intensity，OI）视角统一架构原语和硬件约束。通过定义推理潜力区域，我们引入相对推理潜力（Relative Inference Potential）作为新指标，比较同一硬件基座上大语言模型（LLM）之间的效率差异。跨多样计算层级的广泛实证分析显示，性能和 OI 变化显著受序列长度影响。我们进一步识别模型深度增加时 OI 的关键回归。此外，我们的发现突出硬件异构性诱导的效率陷阱，并展示多头潜在注意力（MLA）等结构精炼如何有效解锁各种硬件基座的潜在推理潜力。这些洞察为硬件-软件协同设计提供可操作方向，将神经结构与设备端智能的物理约束对齐。发布的代码见附录 C。

## 关键词

#设备端LLM #Roofline模型 #运营强度 #基准 #arXiv