---
published: 2026-08-07
title: "VideoArgus：视频生成与编辑的智能体准则锚定统一评估"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/VideoArgus- Agentic Rubric-Grounded Unified Evaluation for Video Generation and Editing.md"
source_note: "[[信息源/arXiv cs.CV RSS/VideoArgus- Agentic Rubric-Grounded Unified Evaluation for Video Generation and Editing]]"
source_sha256: 736afd70be9f1108168719372433ccab2eeb2c5839c153d722c421c8e53334cf
original_url: "https://arxiv.org/abs/2608.05485"
processed: 2026-08-07
language: zh-CN
---

# VideoArgus：视频生成与编辑的智能体准则锚定统一评估

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Ziyun Zeng, Zixuan Wang, Yongsheng Yu, Hang Hua, Jiebo Luo
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05485)

## 摘要

- 评估生成视频仍具挑战：现有基准依赖固定评估内容、只覆盖生成与编辑设定子集、为分数提供有限证据。
- 引入 VideoArgus：统一准则锚定框架，覆盖五个视频生成与编辑设定；对每个输入实例，VideoArgus 生成一次输出盲、样本特定准则并复用于评估所有对应候选视频。
- 准则定义具体标准、评分规则、失败模式与证据计划，引导准则特定 VLM QA 与视觉工具产生证据锚定的准则分数、理由与诊断报告。
- 构建 VideoArgus-Bench：1026 个策展输入实例（653 张高质量图像与 416 个高质量视频构建），所有基准准则预生成、冻结并发布；独立 1260 视频人类对齐集上，VideoArgus 在全部五个任务相对对应基准特定评估器取得更高输入内 Spearman 与 Kendall 人类判断相关；模型排名跨不同准则生成与评估 VLM 骨干大体一致；代码与数据发布。

## 正文

评估生成的视频仍具挑战，因为现有基准依赖固定的评估内容，只覆盖生成与编辑设定的一小部分，并为分数提供有限的证据。研究引入 VideoArgus，一个统一的准则锚定（rubric-grounded）框架，覆盖五个视频生成与编辑设定。对每个输入实例，VideoArgus 生成一次输出盲（output-blind）、样本特定的准则，并复用它评估所有对应的候选视频。该准则定义具体的标准、评分规则、失败模式与证据计划，引导准则特定的 VLM QA 与视觉工具产生证据锚定的准则分数、理由与诊断报告。研究进一步构建 VideoArgus-Bench，包含 1,026 个策展输入实例（由 653 张高质量图像与 416 个高质量视频构建），所有基准准则预生成、冻结并发布。在一个独立的 1,260 视频人类对齐集上，VideoArgus 在全部五个任务中相对对应的基准特定评估器，实现与人类判断更高的输入内 Spearman 与 Kendall 相关。模型排名跨不同的准则生成与评估 VLM 骨干也大体保持一致。所有代码与数据已发布。项目页：https://zzzmyyzeng.github.io/VideoArgus。

## 关键词

视频评估、准则、智能体、VLM、基准
