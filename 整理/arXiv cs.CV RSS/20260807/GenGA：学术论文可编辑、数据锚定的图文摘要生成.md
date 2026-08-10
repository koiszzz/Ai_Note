---
published: 2026-08-07
title: "GenGA：学术论文可编辑、数据锚定的图文摘要生成"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/GenGA- Editable and Data-Grounded Graphical Abstract Generation for Academic Papers.md"
source_note: "[[信息源/arXiv cs.CV RSS/GenGA- Editable and Data-Grounded Graphical Abstract Generation for Academic Papers]]"
source_sha256: 7f9df4617c2616291e13cac3cfc0def7511a0414b638bba8073e16220b9a62db
original_url: "https://arxiv.org/abs/2608.05478"
processed: 2026-08-07
language: zh-CN
---

# GenGA：学术论文可编辑、数据锚定的图文摘要生成

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Takuro Kawada, Shunsuke Kitada, Hitoshi Iyatomi
> - **发布时间**：2026-08-07
> - **分类**：cs.GR
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05478)

## 摘要

- 图文摘要（GA）直观总结论文关键发现；视觉语言模型与图像生成模型进展使基于论文内容自动生成科学图形成为可能，但多数方法输出栅格图形，事后编辑（文本修改、布局调整）困难，不适合论文写作与同行评审的迭代修订。
- 定义从论文内容生成可编辑 GA 的新任务，提出 GenGA：直接产出矢量格式图形的新框架，图形作为带层级结构的矢量元素集合生成，可无缝导入现有绘图工具进行直观的元素级编辑。
- 引入结构独立性系数（SIC）量化图形编辑简易性：基于局部修改向其他元素传播的程度。
- 实验显示 GenGA 编辑简易性优于常规方法，简洁性与语义对齐甚至超过人工 GA；SIC 是有效的与手动编辑成本相关的指标。

## 正文

图文摘要（Graphical Abstract, GA）以视觉方式总结学术论文的关键发现，在促进研究内容理解中起关键作用。近期，视觉语言模型与图像生成模型的进展使基于论文内容自动生成科学图形成为可能。然而，多数常规方法将生成结果输出为栅格图形，使事后编辑（如文本修改与布局调整）极为困难。这构成重大挑战，因为它们不适合论文写作与同行评审固有的迭代图形修订流程。为应对这些挑战，研究定义从论文内容生成可编辑 GA 的新任务，并提出 GenGA，一个直接产出矢量格式图形的新 GA 生成框架。通过将图形生成为带层级结构的矢量元素集合，GenGA 产出的输出可无缝导入现有绘图工具进行直观的元素级编辑。此外，研究引入结构独立性系数（Structural Independence Coefficient, SIC），一个基于局部修改向其他元素传播程度量化图形编辑简易性的指标。实验结果显示 GenGA 相对常规方法取得更优的编辑简易性，甚至在简洁性与语义对齐上超越人工创作的 GA。研究还验证 SIC 是有效的、与手动编辑成本相关的指标。该研究从根本上将 GA 生成重新定义为锚定于研究者实际工作流的可编辑矢量图形生成问题，显著促进有效科学交流。

## 关键词

图文摘要、矢量图形、生成、可编辑性、科学交流
