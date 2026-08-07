---
published: 20260806
title: "AI 安全的项目反应理论"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Item Response Theory for AI Safety.md"
source_note: "[[信息源/arXiv cs.AI RSS/Item Response Theory for AI Safety]]"
source_sha256: 5be1a7bf9eec06aca7ac97c837de1118a4da6b1b42496e415ea043dfa49985d8
original_url: "https://arxiv.org/abs/2608.05086"
processed: 2026-08-06
language: zh-CN

---

# AI 安全的项目反应理论

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Joshua Fonseca Rivera (Independent), Neil Shah (Independent), David Demitri Africa (UK AI Security Institute), Konstantinos Voudouris (UK AI Security Institute)
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05086)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Item Response Theory for AI Safety|查看原始文件]]

## 摘要

- 语言模型在安全行为上不同，这些差异由安全基准测量；但聚合基准分数难以信任和解释，因为基准相互重复、高度相关，且模型检测到评估时可能消极怠工。
- 本文借鉴项目反应理论（IRT），一个从具有推断心理测量属性的项目表现测量这些潜在特质的统计工具包：将 IRT 模型拟合到 192 个语言模型的八个安全基准，这是迄今对 LLM 安全评估最大规模的心理测量分析。
- 三个结果：三个可解释因素（拒绝严格度、真实性和情境危害）解释跨模型跨基准的大部分方差；心理测量选择项目以更低误差恢复完整基准分数，约十个自适应选择项目足以用于几个单独基准，将评估成本削减 97-99%；IRT 支持个体模型审计，可检测朴素消极怠工和 API 背后模型变化。

## 正文

语言模型在安全行为上不同，这些差异由安全基准测量。但聚合基准分数难以信任和解释，因为基准相互重复、高度相关，且模型检测到评估时可能消极怠工（sandbag）。为应对这些问题，我们借鉴项目反应理论（Item Response Theory，IRT），一个从具有推断心理测量属性的项目表现测量这些潜在特质的统计工具包。我们将 IRT 模型拟合到 192 个语言模型的八个安全基准，这是迄今对 LLM 安全评估最大规模的心理测量分析，并贡献三个结果。第一，我们发现拒绝严格度、真实性和情境危害这三个可解释因素解释跨模型跨基准的大部分方差。第二，心理测量选择项目以比同大小随机子集更低的误差恢复完整基准分数，且约十个自适应选择项目足以用于几个单独基准，将评估成本削减 97-99%。第三，IRT 支持个体模型审计，显示可用于检测朴素消极怠工和 API 背后模型变化。总体而言，我们表明 IRT 是阅读、缩减和审计安全基准的现成工具包，我们推荐前沿实验室和评估者采用。

## 关键词

#项目反应理论 #AI安全 #基准 #心理测量 #arXiv