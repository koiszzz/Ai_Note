---
published: 2026-08-07
title: "SAGA：低资源北欧语言模型的分数加权自适应生成对齐"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/SAGA- Score-Weighted Adaptive Generation Alignment for Low-Resource Nordic Language Models.md"
source_note: "[[信息源/arXiv cs.LG RSS/SAGA- Score-Weighted Adaptive Generation Alignment for Low-Resource Nordic Language Models]]"
source_sha256: ca170955ca8129c70943ac11c8a21acad0e31272b44502512c5f704bbc6ea98b
original_url: "https://arxiv.org/abs/2608.06179"
processed: 2026-08-07
language: zh-CN
---

# SAGA：低资源北欧语言模型的分数加权自适应生成对齐

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Hoda Fakharzadehjahromy, Emil Wiman, Andreas Bueff, Hafsteinn Einarsson, Fredrik Heintz
> - **发布时间**：2026-08-07
> - **分类**：cs.LG
> - **原文**：[打开链接](https://arxiv.org/abs/2608.06179)

## 摘要

- 偏好优化已证明可有效改进 LLM，但通常依赖昂贵的人工偏好标注；扩展到形态丰富、低资源语言仍具挑战，因为此类标注稀缺。
- 提出 SAGA（分数加权自适应生成对齐）：解析器引导的偏好优化框架，用依赖解析器监督替代人工标签。
- SAGA 将解析器判断转为 delta-DPO 的偏好对、在复合奖励中结合解析器质量与词汇多样性、用奖励差距准则过滤低信息对，并监控奖励黑客以维持可靠监督。
- 丹麦语、冰岛语与挪威博克马尔语上用 GPT-SW3-1.3B，SAGA 一致提升语法质量且无需人工偏好标签：丹麦语解析成功率从 69.0% 升至 93.8%，冰岛语独立 Stanza 评估 +4.5 个百分点（三次均值 +3.3），母语者 80% 成对比较偏好 SAGA 输出，挪威博克马尔语 +28 个百分点。

## 正文

偏好优化已证明可有效改进大语言模型，但通常依赖昂贵的人工偏好标注。将这些方法扩展到形态丰富、低资源语言仍具挑战，因为此类标注稀缺。研究提出 SAGA（分数加权自适应生成对齐，Score-weighted Adaptive Generation Alignment），一个解析器引导的偏好优化框架，用依赖解析器监督替代人工标签。SAGA 将解析器判断转换为 delta-DPO 的偏好对，在复合奖励中结合解析器质量与词汇多样性，用奖励差距准则过滤低信息对，并监控奖励黑客以维持可靠监督。在丹麦语、冰岛语与挪威博克马尔语上用 GPT-SW3-1.3B，SAGA 一致提升语法质量，无需人工偏好标签：丹麦语解析成功率从 69.0% 提升到 93.8%；冰岛语在独立 Stanza 评估上取得 +4.5 个百分点（三次运行均值 +3.3 个百分点），母语者在 80% 的成对比较中偏好 SAGA 输出；挪威博克马尔语提升 +28 个百分点。这些结果表明，在可获得高质量依赖解析器的低资源语言中，解析器派生监督是人工偏好标注用于语法对齐的实用替代。

## 关键词

偏好优化、低资源语言、依赖解析、北欧语言、语法对齐
