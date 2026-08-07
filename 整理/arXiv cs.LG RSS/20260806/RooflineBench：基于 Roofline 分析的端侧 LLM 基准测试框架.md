---
published: 2026-08-06
title: RooflineBench：基于 Roofline 分析的端侧 LLM 基准测试框架
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/RooflineBench- A Benchmarking Framework for On-Device LLMs via Roofline Analysis.md
source_note: "[[信息源/arXiv cs.LG RSS/RooflineBench- A Benchmarking Framework for On-Device LLMs via Roofline Analysis]]"
source_sha256: 697bc2c9c3d91b43bfbfaf06cfcbb139d230c91398def91972d2f886940eec2f
original_url: https://arxiv.org/abs/2602.11506
processed: 2026-08-07
language: zh-CN
---

# RooflineBench：基于 Roofline 分析的端侧 LLM 基准测试框架

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2602.11506)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/RooflineBench- A Benchmarking Framework for On-Device LLMs via Roofline Analysis|查看原始文件]]

## 摘要

- 小型语言模型（SLM）驱动的本地化智能趋势强化了对资源受限边缘硬件上进行严格性能刻画的需求；基于 Roofline 模型的系统框架通过运算强度（OI）统一架构原语与硬件约束。
- 定义推理潜力区域，引入相对推理潜力作为新指标，用于比较 LLM 在同一硬件基座上的效率差异；跨计算层级的大量实证分析显示性能与 OI 的差异显著受序列长度影响，并发现模型深度增加时 OI 的关键性退化。
- 揭示硬件异构性诱发的效率陷阱，并展示多头潜在注意力（MLA）等结构改进如何在各类硬件基座上释放潜在推理潜力，为端侧智能中的软硬件协同设计提供可行方向。

## 正文

通过小型语言模型（Small Language Models，SLM）迈向本地化智能的趋势，强化了在资源受限边缘硬件上进行严格性能刻画的需求。然而，客观衡量异构平台上多样化架构的理论性能上限仍是一项艰巨的挑战。

本工作中，作者提出一个基于 Roofline 模型的系统框架，通过运算强度（operational intensity，OI）的视角统一架构原语与硬件约束。通过定义推理潜力区域（inference-potential region），他们引入相对推理潜力（Relative Inference Potential）作为新指标，用于比较大型语言模型（LLM）在同一硬件基座上的效率差异。

跨多样化计算层级的广泛实证分析表明，性能与 OI 的差异显著受序列长度影响。作者进一步识别出模型深度增加时 OI 的关键性退化。此外，研究结果揭示了硬件异构性诱发的效率陷阱，并展示多头潜在注意力（Multi-head Latent Attention，MLA）等结构改进如何在各类硬件基座上有效释放潜在推理潜力。这些洞见为软硬件协同设计提供了可行方向，使神经结构与端侧智能中的物理约束对齐。已发布代码见附录 C。

## 关键词

#Roofline模型 #边缘计算 #大语言模型 #运算强度 #软硬件协同设计 #基准测试
