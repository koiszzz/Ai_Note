---
published: 2026-08-05
title: "Geo-Embed：迈向统一的多模态城市理解嵌入"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Geo-Embed- Towards Unified Multimodal Embeddings for Urban Understanding.md"
source_note: "[[信息源/arXiv cs.LG RSS/Geo-Embed- Towards Unified Multimodal Embeddings for Urban Understanding.]]"
source_sha256: f0142d109dd55345bd440684141cdc99a14cf38bfaba975a1b15385bd51f93bd
original_url: "https://arxiv.org/abs/2608.03826"
processed: 2026-08-05
language: zh-CN
---

# Geo-Embed：迈向统一的多模态城市理解嵌入

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Jiapeng Li、Yong Li、Junjie Zhou、Fan Zhang、Yu Liu
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03826)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Geo-Embed- Towards Unified Multimodal Embeddings for Urban Understanding.|查看原始文件]]

## 摘要

- 地理空间与城市应用日益要求模型跨街景图像、遥感观测、文本描述、区域提案与时序变化线索比较异构证据；但现有多模态嵌入模型与基准仍主要围绕通用图像—文本匹配设计与评估，统一嵌入空间能否支撑涉及空间关系、细粒度语义与时序变化的异构地理空间任务尚不清楚。
- 贡献一：引入 GeoMEB，一个大规模多模态嵌入基准，标准化 45 项城市评估任务（检索、视觉问答、变化检测、分类与视觉定位），配套含 132 万示例的训练集与 28.6 万条评估查询。
- 贡献二：提出 Geo-Embed，一个统一嵌入模型，将共享视觉—语言骨干适配为指令条件下的查询—目标匹配，覆盖异构地理空间输入（单图、多图、文本、区域与掩码）。
- 在 GeoMEB 上，Geo-Embed 在代表性多模态嵌入器中取得最强综合性能，相对最强基线有 15.3% 的相对提升。
- 这些结果鼓励未来的地理空间嵌入器围绕显式查询—目标关系（语义、跨视角、区域级与时序对应）组织训练与评估。

## 正文

论文编号：arXiv:2608.03826v1（更新类型：cross）。以下为摘要全文翻译。

地理空间与城市应用日益要求模型跨街景图像、遥感观测、文本描述、区域提案与时序变化线索比较异构证据。然而，现有多模态嵌入模型与基准在很大程度上仍围绕通用图像—文本匹配设计与评估，统一嵌入空间能否支撑涉及空间关系、细粒度语义与时序变化的异构地理空间任务尚不清楚。为填补这一空白，我们做出三项关键贡献。首先，我们引入 GeoMEB，一个大规模多模态嵌入基准，标准化跨检索、视觉问答、变化检测、分类与视觉定位的 45 项城市评估任务，并配套由 132 万条示例组成的训练集与 28.6 万条评估查询。其次，我们提出 Geo-Embed，一个统一嵌入模型，把共享的视觉—语言骨干适配为指令条件下的查询—目标匹配，处理异构地理空间输入，包括单图、多图、文本、区域与掩码。在 GeoMEB 上，Geo-Embed 在代表性多模态嵌入器中取得最强综合性能，相对最强基线有 15.3% 的相对提升。这些结果激励未来的地理空间嵌入器围绕显式查询—目标关系组织训练与评估，包括语义、跨视角、区域级与时序对应。

## 关键词

#地理空间 #多模态嵌入 #城市理解 #检索 #视觉问答
