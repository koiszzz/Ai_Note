---
published: 2026-08-06
title: 面向全自动铁路运营的 GitOps 驱动标注目录
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/A GitOps-Driven Annotation Catalog for Fully Automatic Railway Operations.md
source_note: "[[信息源/arXiv cs.CV RSS/A GitOps-Driven Annotation Catalog for Fully Automatic Railway Operations|查看原始文件]]"
source_sha256: 9feb18e3096dc47aad2a3648d3f8e6b7cab98b8ed635f2f4b44c0715e8401e2b
original_url: https://arxiv.org/abs/2608.04724
processed: 2026-08-07
language: zh-CN
---

# 面向全自动铁路运营的 GitOps 驱动标注目录

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04724)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/A GitOps-Driven Annotation Catalog for Fully Automatic Railway Operations|查看原始文件]]

## 摘要

- GoA3–GoA4 自动列车运行（ATO）需要鲁棒的基于 AI 的感知系统，在真实条件下可靠检测障碍物与铁路特定物体
- 大规模、高质量、高动态的标注数据集是此类现代 AI 方法的关键，但元数据管理、溯源维护与迭代演化带来巨大的基础设施与监管要求
- 现有单体数据目录存在运营开销大、与开发者工作流集成差、文档严重漂移等问题
- 提出基于 GitOps 的轻量级元数据管理架构，利用 Data-as-Code、CI/CD 流水线与 SSG 建立开发者友好的无缝工作流

## 正文

自动化等级 3 及以上（GoA3–GoA4）的自动列车运行（ATO）需要鲁棒的基于 AI 的感知系统，能够在真实世界条件下可靠地检测障碍物和铁路特定物体。这些现代人工智能方法的有效性高度依赖于大规模、高质量、高度动态的标注数据集。然而，管理元数据、维护溯源以及跟踪这些标注的迭代演化，带来了巨大的基础设施和监管要求。

现有的单体数据目录往往遭受巨大的运营开销、与开发者工作流集成不佳以及严重的文档漂移等问题。本文介绍了一种创新的、轻量级的基于 GitOps 的元数据管理架构。通过利用数据即代码（Data-as-Code）原则、持续集成/持续部署（CI/CD）流水线和静态站点生成（SSG），所提出的方法建立了一个无缝的、以开发者为中心的工作流。这保证了可追溯性，强制满足严格的监管合规要求，并自动生成性能优异的数据集概览。

## 关键词

#GitOps #自动列车运行 #数据目录 #元数据管理 #CI/CD
