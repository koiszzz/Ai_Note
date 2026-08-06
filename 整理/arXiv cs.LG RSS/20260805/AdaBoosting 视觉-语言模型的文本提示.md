---
published: 2026-08-05
title: "AdaBoosting 视觉-语言模型的文本提示"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/AdaBoosting Text Prompts for Vision-Language Models.md"
source_note: "[[信息源/arXiv cs.LG RSS/AdaBoosting Text Prompts for Vision-Language Models]]"
source_sha256: 29f6ea3063fb3d58efa1acf99733fddcb01ab14362ca0249e345dc27d49449fd
original_url: "https://arxiv.org/abs/2607.00684"
processed: 2026-08-05
language: zh-CN
---

# AdaBoosting 视觉-语言模型的文本提示

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Seokhee Jin、Changhwan Sung、Sunung Mun 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.00684)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/AdaBoosting Text Prompts for Vision-Language Models|查看原始文件]]

## 摘要

- 提出文本提示提升（TPB），受 AdaBoost 启发的框架：把每个基于文本提示的分类器视为弱学习器，通过显式针对困难、误分类示例把它们顺序聚合成强集成。
- 预训练视觉-语言模型（VLM）的分类准确率依赖文本提示质量；手工模板与 LLM 生成描述不仅让预测更可解释，还支持跨异构 VLM 复用相同提示；近期工作用少量标注图像构建任务适配文本提示，但现有少样本文本提示方法在提示构建期间未显式聚焦误分类示例，即使更多样本可用也仅边际改善。
- 大量实验显示 TPB 在文本空间保留任务内在、模型无关线索，实现稳健跨模型迁移。
- 十一个分类基准上，TPB 提升源模型准确率，并在迁移到更大、更有能力 VLM 时保持样本驱动增益（现有方法难以维持此类改善）。

## 正文

论文编号：arXiv:2607.00684v2（更新类型：replace）。以下为摘要全文翻译。

预训练视觉-语言模型（VLM）的分类准确率依赖文本提示的质量。手工模板与 LLM 生成的描述不仅使预测更可解释，还支持在异构 VLM 间复用相同提示。近期工作用少量标注图像构建任务适配的文本提示。然而，现有少样本文本提示方法在提示构建期间没有显式聚焦误分类示例，导致即使更多样本可用也只带来边际改善。为充分利用少样本监督，我们提出文本提示提升（Text Prompt Boosting，TPB），一个受 AdaBoost 启发的框架：把每个基于文本提示的分类器视为弱学习器，通过显式针对困难、误分类的示例把它们顺序聚合成一个强集成。大量实验表明，TPB 在文本空间中保留任务内在、模型无关的线索，实现稳健的跨模型迁移。在十一个分类基准上，TPB 提升源模型的准确率，并在迁移到更大、更有能力的 VLM 时保持样本驱动的增益，而现有方法难以维持此类改善。

## 关键词

#视觉语言模型 #提示学习 #AdaBoost #少样本
