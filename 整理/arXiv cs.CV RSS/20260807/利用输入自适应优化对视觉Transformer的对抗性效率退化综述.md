---
published: 2026-08-07
title: "利用输入自适应优化对视觉 Transformer 的对抗性效率退化综述"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/A Survey of Adversarial Efficiency Degradation for Vision Transformer by Exploiting Input-adaptive O.md"
source_note: "[[信息源/arXiv cs.CV RSS/A Survey of Adversarial Efficiency Degradation for Vision Transformer by Exploiting Input-adaptive O]]"
source_sha256: 94da6bb9b759c82e2dc3190cb376d5040536f4d48749a344d63998105ada8024
original_url: "https://arxiv.org/abs/2608.05217"
processed: 2026-08-07
language: zh-CN
---

# 利用输入自适应优化对视觉 Transformer 的对抗性效率退化综述

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Anadi Goyal, Nandish Chattopadhyay, Anupam Chattopadhyay, Chandan Karfa
> - **发布时间**：2026-08-07
> - **分类**：cs.CR
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05217)

## 摘要

- 视觉 Transformer（ViT）日益依赖 token 剪枝与提前停止等输入自适应推理以满足能耗与延迟预算；综述考察针对这些机制、以增加计算量（不必然降低准确率）为目标的对抗性效率退化攻击类别。
- 统一并比较两种代表性攻击：SlowFormer（普适对抗补丁）与 DeSparsify（逐图像扰动），跨三个流行 token 剪枝框架：A-ViT、ATS 与 AdaViT。
- 用 GFLOPs、准确率损失与攻击成功（AS）度量标准化报告（AS 度量攻击夺走模型计算节省多少）。
- 聚焦三个问题：输入自适应优化（token 剪枝、提前停止）如何为效率退化创造攻击面；此类攻击实践中如何运作、哪些优化最脆弱；现有防御及能否在攻击下有意义恢复效率；理解攻击对设计既缓解风险又保持轻量的对策至关重要（部署常在移动或嵌入式等低功耗环境）。

## 正文

视觉 Transformer（Vision Transformers, ViTs）日益依赖 token 剪枝与提前停止等输入自适应推理，以满足能耗与延迟预算。本综述考察近期一类针对这些机制、旨在增加计算量而不必然降低准确率的对抗性效率退化攻击。研究统一并比较两种代表性攻击——SlowFormer（普适对抗补丁）与 DeSparsify（逐图像扰动）——跨三个流行 token 剪枝框架：A-ViT、ATS 与 AdaViT。研究用 GFLOPs、准确率损失与攻击成功（Attack Success, AS）度量标准化报告，其中 AS 度量攻击夺走模型计算节省的多少。理解这些攻击对设计不仅缓解风险、而且保持轻量的对策至关重要，因为部署常在移动或嵌入式等低功耗环境进行。为组织分析，研究聚焦三个问题：输入自适应优化（如 token 剪枝与提前停止）如何为效率退化创造攻击面；此类攻击在实践中如何运作、哪些优化最脆弱；以及今天存在哪些防御、它们能否在攻击下有意义地恢复效率。

## 关键词

视觉 Transformer、对抗攻击、效率退化、token 剪枝、计算节省
