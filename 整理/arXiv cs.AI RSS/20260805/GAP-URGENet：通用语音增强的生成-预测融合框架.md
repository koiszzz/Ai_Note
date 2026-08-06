---
published: 2026-08-05
title: "GAP-URGENet：通用语音增强的生成-预测融合框架"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/GAP-URGENet- A Generative-Predictive Fusion Framework for Universal Speech Enhancement.md"
source_note: "[[信息源/arXiv cs.AI RSS/GAP-URGENet- A Generative-Predictive Fusion Framework for Universal Speech Enhancement]]"
source_sha256: 6632afd0e480db3f6f094e62ae4874ffa5b63a986f6c6f8e32ec47e3fee6fed6
original_url: "https://arxiv.org/abs/2604.01832"
processed: 2026-08-05
language: zh-CN
---

# GAP-URGENet：通用语音增强的生成-预测融合框架

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Xiaobin Rong、Yushi Wang、Zheng Wang 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2604.01832)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/GAP-URGENet- A Generative-Predictive Fusion Framework for Universal Speech Enhancement|查看原始文件]]

## 摘要

- 提出 GAP-URGENet，为 ICASSP 2026 URGENT 挑战赛 Track 1 开发的生成-预测融合框架。
- 生成分支在自监督表示域执行全栈语音修复，并经神经声码器重建波形；预测分支执行谱域增强，提供互补线索；后处理模块融合两分支输出并执行带宽扩展，生成 48 kHz 增强波形，随后下采样回原始采样率。
- 生成-预测融合提升鲁棒性与感知质量，在盲测阶段取得顶级性能，客观评估排名第一。
- 音频示例：https://xiaobin-rong.github.io/gap-urgenet_demo

## 正文

论文编号：arXiv:2604.01832v1（更新类型：cross）。以下为摘要全文翻译。

我们介绍 GAP-URGENet，一个为 ICASSP 2026 URGENT 挑战赛 Track 1 开发的生成-预测融合框架。该系统集成一个生成分支：在自监督表示域执行全栈语音修复，并通过神经声码器重建波形；以及一个预测分支：执行谱域增强，提供互补线索。两个分支的输出由后处理模块融合，该模块还执行带宽扩展，生成 48 kHz 的增强波形，随后下采样回原始采样率。这种生成-预测融合提升了鲁棒性与感知质量，在盲测阶段取得顶级性能，并在客观评估中排名第一。音频示例可在 https://xiaobin-rong.github.io/gap-urgenet_demo 获取。

## 关键词

#语音增强 #生成模型 #ICASSP挑战 #语音修复
