---
published: 2026-08-07
title: "RIG-RoPE：带时长感知时间坐标的关系与实例门控旋转位置编码"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/RIG-RoPE- Relation- and Instance-Gated Rotary Positional Encoding with Duration-Aware Temporal Coord.md"
source_note: "[[信息源/arXiv cs.CV RSS/RIG-RoPE- Relation- and Instance-Gated Rotary Positional Encoding with Duration-Aware Temporal Coord]]"
source_sha256: 551b13e7b5ae80e55819abb81d6ff085844fdc065e63b02a5f58c6a833d0eafb
original_url: "https://arxiv.org/abs/2608.05154"
processed: 2026-08-07
language: zh-CN
---

# RIG-RoPE：带时长感知时间坐标的关系与实例门控旋转位置编码

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Donggen Li
> - **发布时间**：2026-08-07
> - **分类**：cs.CL
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05154)

## 摘要

- 旋转位置编码（RoPE）是现代语言模型的核心组件，已通过多模态 RoPE（M-RoPE）等多维变体扩展到多模态 LLM：将位置通道拆分为时间、高度与宽度子空间。
- 报告识别交错多模态情境中静态多维位置分配的两个局限：高度/宽度旋转可能应用于空间位移不是良定义几何对象的 token 对，产生跨模态与跨实例空间干扰；时间坐标常被视为等步计数器，文本 token、图像块与视频段可推进可比时间相位，尽管信息密度不同。
- 提出 RIG-RoPE：关系与实例门控 RoPE 机制，带时长感知时间坐标；为每个 token 增补模态指示符、视觉实例标识符与标量信息时长坐标；仅对来自同一视觉实例的查询-键对启用 H/W 旋转，否则将未知空间位移边缘化而非设零；时间旋转使用插值累积块时长：文本 token 消耗单位时长、图像用维度感知对数空间尺度、视频在有效帧上进一步应用对数时间扩展。
- 提供避免普通跨实例空间旋转的规范不变论证、共享 H/W 子空间下静态 ID 的不可能结果、反对等步多模态时间的时长一致性论证；RIG-RoPE 不添加学习参数，可在平铺注意力内核内实现，每 token 恒定附加元数据；本初步报告确立形式化与验证路径，不声称实证优越性。

## 正文

旋转位置编码（Rotary positional encoding, RoPE）是现代语言模型的核心组件，并已通过多模态 RoPE（M-RoPE）等多维变体扩展到多模态 LLM：将位置通道拆分为时间、高度与宽度子空间。本报告识别交错多模态情境中静态多维位置分配的两个局限。第一，高度/宽度旋转可能应用于空间位移不是良定义几何对象的 token 对，产生跨模态与跨实例的空间干扰。第二，时间坐标常被视为等步计数器，因此文本 token、图像块与视频段可推进可比的时间相位，尽管信息密度不同。研究提出 RIG-RoPE，一种关系与实例门控的 RoPE 机制，带时长感知的时间坐标。RIG-RoPE 为每个 token 增补一个模态指示符、一个视觉实例标识符与一个标量信息时长坐标。它仅对来自同一视觉实例的查询-键对启用 H/W 旋转；否则，未知的空间位移被边缘化而非设为零。时间旋转使用插值的累积块时长：文本 token 消耗单位时长，图像使用维度感知的对数空间尺度，视频在有效帧上进一步应用对数时间扩展。研究提供避免普通跨实例空间旋转的规范不变（gauge-invariance）论证、共享 H/W 子空间下静态 ID 的不可能结果，以及反对等步多模态时间的时长一致性论证。RIG-RoPE 不添加学习参数，可在平铺注意力内核内实现，每个 token 恒定附加元数据。本初步报告确立形式化与验证路径，不声称实证优越性。

## 关键词

RoPE、位置编码、多模态、时间坐标、门控
