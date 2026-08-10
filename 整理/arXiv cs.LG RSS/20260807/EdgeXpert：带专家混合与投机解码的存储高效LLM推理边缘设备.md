---
published: 2026-08-07
title: "EdgeXpert：带专家混合与投机解码的存储高效 LLM 推理边缘设备"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/EdgeXpert- An Edge Device for Memory-Efficient LLM Inference with Mixture-of-Experts and Speculative.md"
source_note: "[[信息源/arXiv cs.LG RSS/EdgeXpert- An Edge Device for Memory-Efficient LLM Inference with Mixture-of-Experts and Speculative]]"
source_sha256: a3155a696d052e17a428dea683c46cdb8fba98dedc277c04cd4c6c17288048f3
original_url: "https://arxiv.org/abs/2608.05303"
processed: 2026-08-07
language: zh-CN
---

# EdgeXpert：带专家混合与投机解码的存储高效 LLM 推理边缘设备

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Sangwoo Ha, Hyunwoo Seo, Yurim Jo, Youngjin Moon, Hoi-Jun Yoo
> - **发布时间**：2026-08-07
> - **分类**：cs.AR
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05303)

## 摘要

- 大语言模型设备端部署的主要瓶颈是前馈网络（FFN）层的外部内存访问（EMA）；投机解码与专家混合（MoE）是可行方案，但两者结合存在不兼容性。
- 提出 EdgeXpert：软硬件协同设计的 LLM 加速器。预填充阶段用提示级专家复用将路由重构为提示级专家复用而非逐 token 独立选择；解码阶段用深度感知专家合并利用同深度候选 token 的上下文相似性与互斥性。
- EdgeXpert 只加载关键通道并应用计算校准恢复精度，无需额外内存访问。
- 三星 28nm 800MHz 综合实现较先前工作延迟降低最高 56.3%、能耗降低 44.1%，同时保持接近基线精度。

## 正文

大语言模型（LLM）的设备端部署已成为个性化边缘应用的关键。主要瓶颈是前馈网络（FFN）层的外部内存访问（EMA）。投机解码与专家混合（MoE）是有前景的解决方案：投机解码通过每阶段生成多个 token 减少解码阶段数，MoE 通过稀疏专家激活最小化每阶段成本。然而，两种技术结合存在不兼容性。研究提出 EdgeXpert，一个软硬件协同设计的 LLM 加速器，解决该不兼容。预填充阶段，提示级专家复用（prompt-wise expert reuse）将路由重构为提示级专家复用，而非独立的逐 token 专家选择：用轻量编码器识别重要 token，从中构建共享专家集，并以减少的专家预算路由较不重要的 token，以降低专家 EMA。解码阶段，深度感知专家合并（depth-aware expert coalescing）利用同深度候选 token 的上下文相似性与互斥性：EdgeXpert 只加载关键通道，并应用计算校准恢复精度，无需额外内存访问。在三星 28nm 工艺、800 MHz 下综合，EdgeXpert 较先前工作实现高达 56.3% 的延迟降低与 44.1% 的能耗降低，同时保持接近基线精度。

## 关键词

LLM 推理、边缘加速器、MoE、投机解码、软硬件协同设计
