---
published: 2026-08-07
title: "胸部 X 光报告生成的阳性-未标记偏好优化"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Positive-Unlabeled Preference Optimization For Chest X-ray Report Generation.md"
source_note: "[[信息源/arXiv cs.LG RSS/Positive-Unlabeled Preference Optimization For Chest X-ray Report Generation]]"
source_sha256: 6f3dcbdfcabd06502782e7cc9dbc7af94425310ad7057a962a891d6de597b708
original_url: "https://arxiv.org/abs/2608.05341"
processed: 2026-08-07
language: zh-CN
---

# 胸部 X 光报告生成的阳性-未标记偏好优化

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Yuta Kobayashi, Pradyun Ramesh, Muhammad Ahmed Chaudhry, Vincent Jeanselme, Judy Wawira Gichoya, Sanmi Koyejo, Kathleen Capaccione, Shalmali Joshi
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05341)

## 摘要

- 放射学报告生成的视觉语言模型（VLM）通常在回顾性临床报告上训练，其遭受遗漏噪声：临床存在的发现因细微发现被省略而未被报告；例如心脏肥大可能在影像请求聚焦监测支持装置放置时被 ICU 胸片报告遗漏。
- 标准方法训练的模型继承这些遗漏，学会自我少报发现；提出 PU-DPO：防止遗漏噪声污染偏好信号的偏好优化框架。
- 在阳性-未标记（PU）学习框架下重构目标：将缺失提及视为未标记而非真阴性；用构造对比对提供偏好监督——通过对模型响应进行编辑生成明确提及或省略特定发现的变体——提及发现的生成响应在视觉证据上下文中自然更受偏好。
- 半合成实验与可用裁定标签的真实胸部 X 光基准分析中，PU-DPO 在多病理检测率与隐藏阳性恢复上取得一致增益，且比先前方法对遗漏噪声更稳健。

## 正文

用于放射学报告生成的视觉语言模型（VLM）通常在回顾性临床报告上训练，这些报告遭受遗漏噪声（omission noise）：临床存在的发现因细微发现被省略而未被报告。例如，先前研究表明，当影像请求聚焦监测支持装置放置时，心脏肥大可能被 ICU 胸部 X 光报告遗漏。结果，用标准方法训练的模型继承这些遗漏，学会自我少报发现。研究提出 PU-DPO，一个防止遗漏噪声污染偏好信号的偏好优化框架。研究在阳性-未标记（positive-unlabeled, PU）学习框架下重构目标：将缺失提及视为未标记而非真正阴性。框架使用构造的对比对提供偏好监督，这些对比对通过对模型响应进行编辑生成，产生明确提及或省略特定发现的变体。提及发现的生成响应在视觉证据的上下文中自然更受偏好。在可获裁定标签的真实胸部 X 光基准的半合成实验与分析中，PU-DPO 在多种病理的检测率与隐藏阳性恢复上取得一致增益，并且比先前方法对遗漏噪声更稳健。

## 关键词

医学影像、报告生成、PU 学习、偏好优化、遗漏噪声
