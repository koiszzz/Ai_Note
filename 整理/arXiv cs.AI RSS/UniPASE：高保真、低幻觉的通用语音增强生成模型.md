---
title: "UniPASE：高保真、低幻觉的通用语音增强生成模型"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/UniPASE- A Generative Model for Universal Speech Enhancement with High Fidelity and Low Hallucinatio.md"
source_note: "[[信息源/arXiv cs.AI RSS/UniPASE- A Generative Model for Universal Speech Enhancement with High Fidelity and Low Hallucinatio]]"
source_sha256: d7ab2b1379cc0587fcac1f8325e39751eff13cc7cee5f5087daee0c6e609a541
original_url: "https://arxiv.org/abs/2604.14606"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# UniPASE：高保真、低幻觉的通用语音增强生成模型

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Xiaobin Rong、Zheng Wang、Yushi Wang 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2604.14606)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/UniPASE- A Generative Model for Universal Speech Enhancement with High Fidelity and Low Hallucinatio|查看原始文件]]

## 摘要

- 提出 UniPASE，低幻觉 PASE 框架面向 USE 的扩展：核心是 DeWavLM-Omni，从 WavLM 在大规模监督多失真数据集上经知识蒸馏微调的统一表示级增强模块——直接把退化波形转换为干净、语言忠实的音系表示，实现稳健增强并最小化语言幻觉。
- 基于这些增强音系表示，适配器生成含丰富声学细节的增强声学表示，神经声码器用它重建对应高保真 16 kHz 波形；PostNet 随后把波形转换到 48 kHz，再重采样回原始速率，支持多种采样率输入输出的无缝处理。
- 通用语音增强（USE）旨在从跨多种采样率的多样失真中恢复语音信号。
- 覆盖子任务与完整任务的多个评估数据集上的实验结果显示 UniPASE 相对现有最先进模型取得更优或竞争性能；该模型还作为 URGENT 2026 挑战赛提交的骨干，在客观评估中获第一名；源码与音频演示：https://github.com/xiaobin-rong/unipase/

## 正文

论文编号：arXiv:2604.14606v2（更新类型：cross）。以下为摘要全文翻译。

通用语音增强（USE）旨在从跨多种采样率的多样失真中恢复语音信号。我们提出 UniPASE，低幻觉 PASE 框架面向 USE 的扩展。其核心是 DeWavLM-Omni：从 WavLM 在大规模监督多失真数据集上经知识蒸馏微调的统一表示级增强模块。该模块直接把退化波形转换为干净、语言忠实的音系表示，确保稳健增强并最小化语言幻觉。基于这些增强的音系表示，适配器生成含丰富声学细节的增强声学表示，神经声码器用其重建相应的高保真 16 kHz 波形。PostNet 随后把波形转换到 48 kHz，再重采样回原始速率，实现多采样率输入与输出的无缝处理。覆盖子任务与完整任务的多个评估数据集上的实验结果表明，UniPASE 相对现有最先进模型取得更优或竞争性能。所提模型还作为我们 URGENT 2026 挑战赛提交的骨干，在客观评估中获第一名。源代码与音频演示可在 https://github.com/xiaobin-rong/unipase/ 获取。

## 关键词

#通用语音增强 #低幻觉 #多采样率 #语音修复
