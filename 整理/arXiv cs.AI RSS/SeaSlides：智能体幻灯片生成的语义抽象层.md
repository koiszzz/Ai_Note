---
title: "SeaSlides：智能体幻灯片生成的语义抽象层"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/SeaSlides- Semantic Abstraction Layer for Agentic Slide Generation.md"
source_note: "[[信息源/arXiv cs.AI RSS/SeaSlides- Semantic Abstraction Layer for Agentic Slide Generation]]"
source_sha256: 23b261fbd511d9193617cdc18d1d8b6d7a702d8f5ddaf67d6355e452b664b4c5
original_url: "https://arxiv.org/abs/2608.03298"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# SeaSlides：智能体幻灯片生成的语义抽象层

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Shengjun Fang、Chenyang Wu、Zongzhang Zhang
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03298)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/SeaSlides- Semantic Abstraction Layer for Agentic Slide Generation|查看原始文件]]

## 摘要

- 提出 SeaSlides，围绕语义抽象层构建的智能体幻灯片生成框架：模型通过可复用组件与能力模块编写结构化幻灯片内容，模板拥有布局、样式与渲染；分别用 HTML 与 Typst 实例化——SeaSlides-HTML 用模板定义的 DOM 组件，SeaSlides-Typst 用模板函数与包支撑模块。
- 能力模块把方程、代码与图表路由到专用渲染器，三个反馈阶段在导出前定位构建错误、项目约束违反与视觉缺陷；两系统保留后端特定语法与契约，同时共享相同编写边界。
- 智能体演示生成必须保留源内容、维持连贯视觉设计、渲染特殊对象并产生可用工件；现有系统只满足部分要求：模板保留规律性但限制适配，自由形式 HTML 或 SVG 以低层渲染决策为代价给模型灵活性。
- 用 128 任务 UltraPresent 验证设置与新的 32 任务 SeaSlidesBench-Rich 基准评估（强调数学、代码、伪代码、表格、图表与示意图）：跨四个生成模型，两个 SeaSlides 后端都产生比 SVG 重生成更可读、内容导向的源；一个 SeaSlides 后端在四个模型中的三个下取得最高丰富内容宏平均，同时保持有竞争力的整体定性性能——支持语义抽象作为跨演示后端的实用编写原则。

## 正文

论文编号：arXiv:2608.03298v1（更新类型：new）。以下为摘要全文翻译。

智能体演示生成必须保留源内容、维持连贯的视觉设计、渲染特殊对象并产生可用工件。现有系统只满足部分要求：模板保留规律性但限制适配，而自由形式的 HTML 或 SVG 以低层渲染决策为代价给模型灵活性。这种错配使长技术演示文稿脆弱，尤其当幻灯片包含公式、代码或数据图形时。我们提出 SeaSlides，一个围绕语义抽象层构建的智能体幻灯片生成框架。模型不编写坐标、内联样式或原始 SVG 几何，而是通过可复用组件与能力模块编写结构化幻灯片内容，而模板拥有布局、样式与渲染。我们分别在 HTML 与 Typst 中实例化这一原则：SeaSlides-HTML 使用模板定义的 DOM 组件，而 SeaSlides-Typst 使用模板函数与包支撑模块。能力模块把方程、代码与图表路由到专用渲染器，三个反馈阶段在导出前定位构建错误、项目约束违反与视觉缺陷。两个系统保留后端特定的语法与契约，同时共享相同的编写边界。为进行评估，我们把 128 任务 UltraPresent 验证设置与 SeaSlidesBench-Rich 结合：一个新的 32 任务基准，强调数学、代码、伪代码、表格、图表与示意图。跨四个生成模型，两个 SeaSlides 后端都产生比 SVG 重生成更可读、内容导向的源。一个 SeaSlides 后端在四个模型中的三个下取得最高丰富内容宏平均，同时保持有竞争力的整体定性性能。这些结果支持语义抽象作为跨演示后端的实用编写原则。

## 关键词

#幻灯片生成 #智能体 #语义抽象 #演示文稿
