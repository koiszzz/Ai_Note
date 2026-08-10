---
published: 2026-08-07
title: "Vorch-Omni：视听多任务编排"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/Vorch-Omni- Multi-Task Orchestration of Sight and Sound.md"
source_note: "[[信息源/arXiv cs.CV RSS/Vorch-Omni- Multi-Task Orchestration of Sight and Sound]]"
source_sha256: df672eb583afcc4a7d5b698802b359201cefe624eb0d303adce69b8e983ff54b
original_url: "https://arxiv.org/abs/2608.05803"
processed: 2026-08-07
language: zh-CN
---

# Vorch-Omni：视听多任务编排

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Vorch Team, Xiaoyu Chen, Yang Ding, Cong Han, Menglin Han, Yuxin Hong, Jiebo Hou, Zequn Jie, Xiang Li, Jing Liu, Qi Liu, Yulei Lu, Siyuan Luo, Lin Ma, Xin Ma, Yinlong Qian, Peng Shi, Fang Wan, Siqi Wang, Yaohui Wang, Yaole Wang, Yidi Wu, Siqian Yang, Mingyu Yin, Haoran Yu, Gang Yue, Lisai Zhang, Yuting Zhang
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05803)

## 摘要

- 生成式视频建模近期进展使能多样生成、参考基合成、扩展与编辑，但现有方法常依赖碎片化任务特定模型；通用模型必须区分异构目标、源与参考信号，确定生成、保留或用作引导什么，同时减少任务间干扰；联合视听生成经引入跨模态多样条件与输出配置进一步增加该挑战。
- 呈现 Vorch-Omni：基于任意条件到任意输出形式化的统一视听合成多任务框架；灵活将视频与音频信号作为条件输入或生成目标。
- token 级条件掩码与任务标识符区分目标、源内容与参考，位置类型分离时间上下文与独立条件；为捕捉语义与结构信息，采用互补视觉条件通路：视觉语言模型经文本指令解读采样帧，视频 VAE 将条件编码为潜 token 提供直接引导。
- 构建分布式数据流水线策展多样时间对齐视听片段、生成结构化字幕与元数据、平衡异构任务分布；构建于单一流匹配扩散 transformer，无需任务特定架构变化，Vorch-Omni 支持超 10 个任务（文本到视频、文本到音视频、图像与参考条件生成、时间扩展、音频驱动生成、视频变换与视听编辑）；为通用视听生成与操纵提供可扩展基础。

## 正文

生成式视频建模的近期进展已经实现了多样生成、参考基合成、扩展与编辑，但现有方法往往依赖碎片化的任务特定模型。一个通用模型必须区分异构的目标、源与参考信号，确定要生成、保留或用作引导的内容，同时减少任务间的干扰。联合视听生成通过引入跨模态的多样条件与输出配置进一步增加该挑战。研究呈现 Vorch-Omni，一个基于任意条件到任意输出（arbitrary-condition-to-arbitrary-output）形式化的统一视听合成多任务框架。它灵活地将视频与音频信号视为条件输入或生成目标。token 级条件掩码与任务标识符区分目标、源内容与参考，而位置类型分离时间上下文与独立条件。为捕捉语义与结构信息，Vorch-Omni 采用互补的视觉条件通路：一个视觉语言模型用文本指令解读采样帧，一个视频 VAE 将条件编码为潜 token 提供直接引导。研究进一步构建一个分布式数据流水线：策展多样、时间对齐的视听片段，生成结构化字幕与元数据，并平衡异构任务分布。构建于单一流匹配扩散 transformer，无需任务特定架构变化，Vorch-Omni 支持超过 10 个任务，包括文本到视频、文本到音视频、图像与参考条件化生成、时间扩展、音频驱动生成、视频变换与视听编辑。该统一框架为通用视听生成与操纵提供了可扩展的基础。

## 关键词

视听生成、多任务、统一框架、流匹配、扩散 transformer
