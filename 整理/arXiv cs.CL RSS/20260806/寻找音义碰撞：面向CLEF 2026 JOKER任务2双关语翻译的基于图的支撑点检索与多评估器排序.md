---
published: 2026-08-06
title: 寻找音义碰撞：面向CLEF 2026 JOKER任务2双关语翻译的基于图的支撑点检索与多评估器排序
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/Searching for Sound-Meaning Collisions- Graph-Based Affordance Retrieval and Multi-Evaluator Ranking.md
source_note: "[[信息源/arXiv cs.CL RSS/Searching for Sound-Meaning Collisions- Graph-Based Affordance Retrieval and Multi-Evaluator Ranking]]"
source_sha256: 3db420ba140245c70499b6727a4dfc23b20cb17b1f9c8825932eef507edb9db0
original_url: https://arxiv.org/abs/2608.04299
processed: 2026-08-07
language: zh-CN
---

# 寻找音义碰撞：面向CLEF 2026 JOKER任务2双关语翻译的基于图的支撑点检索与多评估器排序

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04299)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/Searching for Sound-Meaning Collisions- Graph-Based Affordance Retrieval and Multi-Evaluator Ranking|查看原始文件]]

## 摘要

- 十五年前 Low 提出：双关语译者应停止搜索等价的词，转而寻找声音与意义之间新的接触点；本文对这一思想进行计算化探索。
- 将双关语翻译建模为发现、探索、选择的过程：检索系统搜索目标语言的语义与语音邻域以获得"支撑点"（affordances，可支撑新文字游戏的音义桥梁）；多个语言模型生成竞争性译稿进行探索；多视角"生成-排序"架构从中选择。
- 除系统开发外，主要贡献是分析检索到的支撑点如何贯穿翻译过程传播：生成器主动利用检索到的机会，评估器逐步集中在更强的音义桥梁上，精确的语音碰撞在可用时以异常高的比例被选中。
- 同时，许多双关语仍无法产出可用支撑点，表明检索仍是计算双关语翻译的核心瓶颈。
- 成功的双关语翻译不是源自保留源语言词汇，而是源自发现目标语言中声音与意义发生碰撞的新位置——这与 Low 设想的过程惊人地接近。

## 正文

本文编号：arXiv:2608.04299v1（公告类型：new），以下为摘要全文翻译。

十五年前，Low 提出双关语译者应停止搜索等价的词，转而寻找声音与意义之间新的接触点。在本文中，我们从计算上研究这一思想。我们把双关语翻译建模为发现、探索和选择的过程。一个检索系统搜索目标语言的语义邻域和语音邻域，寻找"支撑点"（affordances）——可能支撑新文字游戏的音义桥梁。随后多个语言模型通过生成竞争性译稿来探索这些机会，而一个多视角的"生成-排序"（generate-and-rank）架构在它们之间进行选择。除了系统开发之外，我们的主要贡献是对检索到的支撑点如何贯穿翻译过程传播的分析。我们发现，生成器主动利用检索到的机会，评估器逐渐集中在更强的音义桥梁上，而精确的语音碰撞（exact phonological collisions）在可用时以异常高的比例被选中。与此同时，许多双关语仍然无法产出可用的支撑点，这表明检索仍是计算双关语翻译的核心瓶颈。最终图景与 Low 设想的过程惊人地接近：成功的双关语翻译不是源自保留源语言词汇，而是源自发现目标语言中声音与意义发生碰撞的新位置。

## 关键词

#双关语翻译 #检索 #音义碰撞 #文字游戏 #生成排序 #机器翻译
