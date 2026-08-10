---
published: 2026-08-07
title: "DOME-HDR：经 SDR 融合与增益图逆色调映射的双输出多曝光 HDR 重建"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/Dual-Output Multi-Exposure HDR Reconstruction via SDR Fusion and Gain Map Inverse Tone Mapping.md"
source_note: "[[信息源/arXiv cs.CV RSS/Dual-Output Multi-Exposure HDR Reconstruction via SDR Fusion and Gain Map Inverse Tone Mapping]]"
source_sha256: 28d218f7ed99a84a2739e0386cfaf4c26d46f6d70693ab794946ffd91ce9ac67
original_url: "https://arxiv.org/abs/2608.05626"
processed: 2026-08-07
language: zh-CN
---

# DOME-HDR：经 SDR 融合与增益图逆色调映射的双输出多曝光 HDR 重建

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Jinho Kim, Jinwoo Kim, Seon Joo Kim
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05626)

## 摘要

- 提出 DOME-HDR：双输出多曝光 HDR 重建框架，经增益图逆色调映射联合产生感知平衡 SDR 图像与一致 HDR 图像。
- 给定三个包围曝光 LDR 输入，DOME-HDR 先用 LoRA 适配潜在扩散模型合成基础 SDR；双交叉注意力融合模块注入欠曝与过曝图像的互补结构与颜色线索，同时锚定中间曝光保证稳定性。
- 合成 SDR 引导 HPGM（HDR 先验引导增益图网络）预测空间变化增益图，实现可靠动态范围扩展。
- Kalantari、Tel 与 Challenge123 上用全参考与无参考指标评估：DOME-HDR 实现 SOTA HDR 重建质量；消融确认双交叉注意力与 SDR 引导增益图估计有效性。

## 正文

研究提出 DOME-HDR，一个双输出多曝光 HDR 重建框架：经增益图逆色调映射（gain map inverse tone mapping）联合产生感知平衡的 SDR 图像与一致的 HDR 图像。给定三个包围曝光 LDR 输入，DOME-HDR 首先使用 LoRA 适配的潜在扩散模型合成基础 SDR。一个双交叉注意力融合模块从欠曝与过曝图像注入互补的结构与颜色线索，同时锚定中间曝光以保证稳定性。合成的 SDR 随后引导 HPGM——研究者的 HDR 先验引导增益图网络（HDR Prior-guided Gain Map network）——预测空间变化的增益图，实现可靠的动态范围扩展。研究在 Kalantari、Tel 与 Challenge123 上使用全参考与无参考指标评估，其中 DOME-HDR 实现最先进的 HDR 重建质量；消融进一步确认双交叉注意力与 SDR 引导增益图估计的有效性。

## 关键词

HDR 重建、多曝光、潜在扩散、增益图、色调映射
