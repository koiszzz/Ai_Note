---
published: 2026-08-07
title: "nnMIL：计算病理学可泛化的多示例学习框架"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/nnMIL- A generalizable multiple instance learning framework for computational pathology.md"
source_note: "[[信息源/arXiv cs.CV RSS/nnMIL- A generalizable multiple instance learning framework for computational pathology]]"
source_sha256: 6f7481f0152307e8fce0ea900d6ebf4d70e4e53fb8a488a75f26d4ad32977d2e
original_url: "https://arxiv.org/abs/2511.14907"
processed: 2026-08-07
language: zh-CN
---

# nnMIL：计算病理学可泛化的多示例学习框架

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Xiangde Luo, Jinxi Xiang, Yuanfeng Ji, Ruijiang Li
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2511.14907)

## 摘要

- 计算病理学对改进诊断与指导治疗决策有重大潜力；近期病理基础模型能从大规模全切片图像（WSI）提取丰富补丁级表征，但当前将这些特征聚合为切片级预测的方法受设计局限约束，阻碍可泛化性与可靠性。
- 呈现 nnMIL：简单但广泛适用的多示例学习框架，将补丁级基础模型连接到稳健的切片级临床预测。
- nnMIL 在补丁与特征两级引入随机采样，实现大批优化、任务感知采样策略与跨数据集与模型架构的高效可扩展训练；轻量聚合器执行滑动窗口推理生成集成切片级预测，支持原则性不确定性估计。
- 覆盖 35 个临床任务与四个病理基础模型的 40000 个 WSI 上，nnMIL 在疾病诊断、组织学亚型、分子生物标志物检测与泛癌预后预测上一致优于现有 MIL 方法；进一步展示强跨模型泛化、可靠不确定性量化与多个外部队列稳健生存分层；为将病理基础模型转化为临床有意义预测提供实用可泛化方案。

## 正文

计算病理学对改进诊断与指导治疗决策具有重大潜力。近期病理基础模型能够从大规模全切片图像（whole-slide images, WSIs）提取丰富的补丁级表征，但当前将这些特征聚合为切片级预测的方法仍受设计局限约束，阻碍可泛化性与可靠性。研究呈现 nnMIL，一个简单但广泛适用的多示例学习框架：将补丁级基础模型连接到稳健的切片级临床预测。nnMIL 在补丁与特征两个级别引入随机采样，实现大批优化、任务感知采样策略，以及跨数据集与模型架构的高效可扩展训练。一个轻量聚合器执行滑动窗口推理，生成集成的切片级预测，并支持原则性的不确定性估计。在覆盖 35 个临床任务与四个病理基础模型的 40,000 个 WSI 上，nnMIL 在疾病诊断、组织学亚型、分子生物标志物检测与泛癌预后预测方面一致优于现有 MIL 方法。它还展示了强跨模型泛化、可靠的不确定性量化，以及多个外部队列中的稳健生存分层。总之，nnMIL 为将病理基础模型转化为临床有意义的预测提供了一种实用且可泛化的解决方案，推进了真实世界环境中可靠 AI 系统的开发与部署。

## 关键词

计算病理学、多示例学习、全切片图像、基础模型、临床预测
