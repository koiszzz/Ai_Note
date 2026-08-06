---
title: "VIBE：LLM 输出实体中心情感画像的 VAD 知情基准"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/VIBE- A VAD-Informed Benchmark for Entity-Centered Affective Profiling of Large Language Model Outpu.md"
source_note: "[[信息源/arXiv cs.AI RSS/VIBE- A VAD-Informed Benchmark for Entity-Centered Affective Profiling of Large Language Model Outpu]]"
source_sha256: 7400c10e38d2555102c9047740ae11353555d266c92d1829ddcfc5a6b47bd10f
original_url: "https://arxiv.org/abs/2608.03810"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# VIBE：LLM 输出实体中心情感画像的 VAD 知情基准

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Andrei Chetvergov 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03810)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/VIBE- A VAD-Informed Benchmark for Entity-Centered Affective Profiling of Large Language Model Outpu|查看原始文件]]

## 摘要

- 引入 VIBE，LLM 输出在效价-唤醒-支配（VAD）空间中实体中心情感画像的基准：核心贡献是测量契约——VIBE 把生成与外部评分分离、区分标量好感度、响应级 VAD 与目标指向 VAD，并通过情感护照（Affective Passport）报告画像。
- 三个经验层支持该契约：H1 显示标量好感度不包含唤醒与支配（效价发现交叉验证 rV=0.944 评判者-人类、rV=0.954 评分者间；唤醒与支配是单评分者方向估计而非点精确，与这些轴已知的标注者间难度一致 rA=0.495、rD=0.702）；H2 显示整响应与目标指向 VAD 是不同契约（同一文本可整体带一种情感基调而代表命名目标不同）；H3 是协议漂移诊断（诱导条件改变画像，促使每个情感报告带上下文元数据）。
- 大语言模型常规描述社会显著目标（政治人物、国家、宗教、组织、历史事件与社会群体），在事实内容旁编码情感框架：目标可能显得有利或威胁、平静或冲突、强大或脆弱；现有工作经情感、好感度与情绪基准捕获该空间的部分，但没有一个结合目标指向 VAD 归因、显式评分者契约与护照报告格式。
- 结果促使把实体中心情感画像作为文档化实践：画像应随评分者身份、覆盖、协议与解释限制发布。

## 正文

论文编号：arXiv:2608.03810v1（更新类型：cross）。以下为摘要全文翻译。

大语言模型常规描述社会显著目标，包括政治人物、国家、宗教、组织、历史事件与社会群体，在事实内容旁编码情感框架：一个目标可能显得有利或威胁、平静或冲突、强大或脆弱。现有工作通过情感、好感度与情绪基准捕获该空间的部分，但没有一个结合目标指向的 VAD 归因、显式评分者契约与护照报告格式。我们引入 VIBE，一个在效价-唤醒-支配（Valence-Arousal-Dominance，VAD）空间中 LLM 输出实体中心情感画像的基准。其核心贡献是一个测量契约：VIBE 把生成与外部评分分离，区分标量好感度、响应级 VAD 与目标指向 VAD，并通过情感护照（Affective Passport）报告画像。三个经验层支持该契约。H1 显示标量好感度不包含唤醒与支配：效价发现交叉验证（评判者-人类 rV=0.944，评分者间 rV=0.954）；唤醒与支配是单评分者方向估计而非点精确，与这些轴已知的标注者间难度一致（人类标注者间 rA=0.495、rD=0.702）。H2 显示整响应与目标指向 VAD 是不同的契约：同一文本可以整体带一种情感基调，却以不同方式代表命名目标。H3 是一个协议漂移诊断：诱导条件改变画像，促使每个情感报告都带上下文元数据。这些结果促使把实体中心情感画像作为文档化实践：画像应随评分者身份、覆盖、协议与解释限制发布。

## 关键词

#情感画像 #VAD #LLM输出 #评估基准
