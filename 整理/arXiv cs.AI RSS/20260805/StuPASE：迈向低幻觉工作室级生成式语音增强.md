---
published: 2026-08-05
title: "StuPASE：迈向低幻觉工作室级生成式语音增强"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/StuPASE- Towards Low-Hallucination Studio-Quality Generative Speech Enhancement.md"
source_note: "[[信息源/arXiv cs.AI RSS/StuPASE- Towards Low-Hallucination Studio-Quality Generative Speech Enhancement]]"
source_sha256: b617995f23b5912ac8e01c92d27697335666287801667b9f311ccb28f2ebc318
original_url: "https://arxiv.org/abs/2603.09234"
processed: 2026-08-05
language: zh-CN
---

# StuPASE：迈向低幻觉工作室级生成式语音增强

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Xiaobin Rong、Jun Gao、Zheng Wang 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2603.09234)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/StuPASE- Towards Low-Hallucination Studio-Quality Generative Speech Enhancement|查看原始文件]]

## 摘要

- 提出 StuPASE，构建于 PASE 之上：实现工作室级质量，同时保留其低幻觉特性——先用干目标（而非含模拟早期反射的目标）微调 PASE 大幅改善去混响；再用流匹配模块替代 PASE 中基于 GAN 的生成模块，即使在极具挑战性的条件下也能实现工作室级生成。
- 在生成式语音增强（SE）中，无幻觉地实现高感知质量仍是挑战；代表性方法 PASE 对幻觉稳健，但在不利条件下感知质量有限。
- 实验显示 StuPASE 一致产生感知高质量语音，同时保持低幻觉，优于最先进的 SE 方法。
- 音频演示：https://xiaobin-rong.github.io/stupase_demo/

## 正文

论文编号：arXiv:2603.09234v2（更新类型：cross）。以下为摘要全文翻译。

在生成式语音增强（SE）中，无幻觉地实现高感知质量仍是一个挑战。代表性方法 PASE 对幻觉稳健，但在不利条件下感知质量有限。我们提出 StuPASE，构建于 PASE 之上：实现工作室级质量，同时保留其低幻觉特性。第一，我们表明用干目标（而非含模拟早期反射的目标）微调 PASE 大幅改善去混响。第二，为应对强加性噪声下的性能局限，我们用流匹配模块替代 PASE 中基于 GAN 的生成模块，即使在极具挑战性的条件下也能实现工作室级生成。实验表明，StuPASE 一致产生感知高质量的语音，同时保持低幻觉，优于最先进的 SE 方法。音频演示可在 https://xiaobin-rong.github.io/stupase_demo/ 获取。

## 关键词

#语音增强 #流匹配 #低幻觉 #去混响
