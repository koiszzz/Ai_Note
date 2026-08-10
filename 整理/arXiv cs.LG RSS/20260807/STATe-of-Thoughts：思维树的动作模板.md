---
published: 2026-08-07
title: "STATe-of-Thoughts：思维树的动作模板"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/STATe-of-Thoughts- Structured Action Templates for Tree-of-Thoughts.md"
source_note: "[[信息源/arXiv cs.LG RSS/STATe-of-Thoughts- Structured Action Templates for Tree-of-Thoughts]]"
source_sha256: 39e4e68d1d3be9efcb263b04314db02664091d95128b2bec863578ca40dde954
original_url: "https://arxiv.org/abs/2602.14265"
processed: 2026-08-07
language: zh-CN
---

# STATe-of-Thoughts：思维树的动作模板

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Zachary Bamberger, Till R. Saenger, Gilad Morad, Ofra Amir, Brandon M. Stewart, Amir Feder
> - **发布时间**：2026-08-07
> - **分类**：cs.CL
> - **原文**：[打开链接](https://arxiv.org/abs/2602.14265)

## 摘要

- Best-of-n 与思维树（ToT）等推理时计算（ITC）方法旨在产生高质量且多样的输出候选，但使用高温采样常无法实现有意义的输出多样性；现有 ITC 方法对如何进行推理的控制有限，限制可解释性。
- 提出 STATe-of-Thoughts（STATe）：可解释 ITC 方法，在高层推理模式上搜索；STATe 在离散、可解释的文本干预上分支，而非 token 级样本：控制器选择编码高层推理选择的动作，生成器在这些选择条件下产生推理步骤，评估器为引导搜索对候选评分。
- 三大优势：(1) 动作引导文本干预可靠影响 LLM 生成并产生比温度采样更大的响应多样性；(2) 论证生成案例研究中，STATe 显式动作序列捕捉对输出质量高度预测的可解释特征；(3) 估计性能与动作选择关联可识别有前景但未探索的动作空间区域并引导生成趋向它们。
- 任务允许多解、理解输出为何成功比是否成功更重要时 STATe 最有用；确立 STATe 作为多样可控文本生成的实用框架与理解驱动性能推理模式的工具。

## 正文

Best-of-n 与思维树（Tree-of-Thoughts）等推理时计算（Inference-Time-Compute, ITC）方法旨在产生高质量且多样的输出候选，但它们使用高温采样往往无法实现有意义的输出多样性。此外，现有 ITC 方法对如何进行推理的控制有限，进而限制其可解释性。研究提出 STATe-of-Thoughts（STATe），一个可解释的 ITC 方法，在高层推理模式上搜索。STATe 在离散、可解释的文本干预上分支，而非 token 级样本：控制器（controller）选择编码高层推理选择的动作；生成器（generator）在这些选择条件下产生推理步骤；评估器（evaluator）为引导搜索对候选评分。该结构化方法带来三大优势。第一，动作引导的文本干预可靠影响 LLM 生成，并产生比基于温度的采样更大的响应多样性。第二，在论证生成的案例研究中，STATe 的显式动作序列捕捉对输出质量高度可预测的可解释特征。第三，估计性能与动作选择之间的关联可识别有前景但尚未探索的动作空间区域，并引导生成趋向它们。当任务允许多个解、且理解输出为何成功比输出是否成功更重要时，STATe 最有用。综合而言，这些结果确立 STATe 既作为多样且可控文本生成的实用框架，也作为理解驱动性能的推理模式的工具。

## 关键词

推理时计算、思维树、可解释性、动作模板、文本生成
