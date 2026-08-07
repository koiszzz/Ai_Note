---
published: 2026-08-06
title: MathDebugger：检测与诊断合成数学数据中的错误
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/MathDebugger- Detecting and Diagnosing Errors in Synthetic Mathematical Data.md
source_note: "[[信息源/arXiv cs.CL RSS/MathDebugger- Detecting and Diagnosing Errors in Synthetic Mathematical Data|查看原始文件]]"
source_sha256: 8db1cd5918a170671201cdee1515437a0b1822b2cb876f5da84b56e47b7c205b
original_url: https://arxiv.org/abs/2502.19058
processed: 2026-08-07
language: zh-CN
---

# MathDebugger：检测与诊断合成数学数据中的错误

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2502.19058)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/MathDebugger- Detecting and Diagnosing Errors in Synthetic Mathematical Data|查看原始文件]]

## 摘要

- 合成数学数据已成为扩展大语言模型推理能力的重要资源，但生成题目与解答中的错误会大幅削弱其价值。
- 本文提出 MathDebugger，一个类型感知的基准，用于评估模型能否检测并诊断合成数学数据中的错误。
- MathDebugger 包含 2,000 道正确题目、2,000 道在四种错误类型间均衡分布的含错题目，以及 2,000 份带标注解答（其中 610 份含错解答，覆盖三种错误类型）；每个实例都经人工核验并标注正确性，含错实例还标注细粒度错误类别。
- 人类标注达到较高到近乎完美的信度，各类别 Fleiss kappa 介于 0.69 至 0.91；评估了 14 个有代表性的大语言模型和 3 个过程奖励模型。
- 结果显示，即使是强推理模型也远未在 MathDebugger 上饱和，尤其是在识别细粒度错误类型时；还存在一致的"解答-验证差距"，且显式错误类型信息能为修正错误提供可操作的指导。

## 正文

合成数学数据已成为扩展大语言模型推理能力的重要资源，然而生成题目与解答中的错误会严重损害其价值。我们提出 MathDebugger，一个类型感知的基准，用于评估模型能否检测并诊断合成数学数据中的错误。

MathDebugger 包含 2,000 道正确题目、2,000 道在四种错误类型间均衡分布的含错题目，以及 2,000 份带标注的解答，其中包括 610 份覆盖三种错误类型的含错解答。每个实例都经过人工核验并标注其正确性，含错实例还进一步被赋予细粒度的错误类别。人类标注达到了从较高到近乎完美的信度，各类别的 Fleiss kappa 介于 0.69 到 0.91 之间。

我们评估了 14 个有代表性的大语言模型和 3 个过程奖励模型。结果表明，即使是强大的推理模型，在 MathDebugger 上也远未饱和，尤其是在识别细粒度错误类型时。我们还发现了一致的"解答-验证差距"（solving-verification gap）：专门为数学推理或长形式推理优化的模型，在审计数学数据时并不一定优于通用模型。

最后，我们证明显式的错误类型信息能够为修正错误题目和解答提供可操作的指导，带来一致且统计显著的改进。MathDebugger 为开发更可靠的数学数据合成与质量控制流水线提供了一个实用基准。

## 关键词

#合成数据 #数学推理 #基准测试 #错误检测 #arXiv
