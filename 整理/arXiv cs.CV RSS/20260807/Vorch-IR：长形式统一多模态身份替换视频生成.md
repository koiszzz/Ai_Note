---
published: 2026-08-07
title: "Vorch-IR：长形式统一多模态身份替换视频生成"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/Vorch-IR- Long-Form Unified Multimodal Identity Replacement Video Generation.md"
source_note: "[[信息源/arXiv cs.CV RSS/Vorch-IR- Long-Form Unified Multimodal Identity Replacement Video Generation]]"
source_sha256: 59df303dd01ade61384c02a343b374412298d261df4f169d62825c679c99c276
original_url: "https://arxiv.org/abs/2608.05648"
processed: 2026-08-07
language: zh-CN
---

# Vorch-IR：长形式统一多模态身份替换视频生成

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Yaole Wang, Xiaoyu Chen, Xin Ma, Yang Ding, Gang Yue, Jingjing Chen, Lin Ma, Yaohui Wang
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05648)

## 摘要

- 视频身份替换旨在转移一个或多个主体的身份，同时保留驱动视频的运动、表情与时间结构；现有方法主要针对单人设定，常需掩码或姿态表征等任务特定结构控制，限制通用多模态编辑系统灵活性；多人替换进展进一步受配对训练数据稀缺约束。
- 呈现 Vorch-IR：统一框架，单模型支持单人、双人身份替换，可选背景替换。
- 构建于 LTX2，Vorch-IR 联合条件化驱动视频、索引参考图像与文本编辑指令；参考图像无需匹配驱动视频的姿态、布局或空间配置：其主体或背景参考角色经指令指定；稠密视觉条件经自注意力融合，视觉语言上下文经交叉注意力建立语义对应。
- 开发自动数据构建流水线：为全部四种编辑设定合成配对监督；自动指标与成对人工评估展示跨多样场景强身份保留、运动保真度与时间连贯性；时间重叠推理策略额外将短片段模型扩展到分钟级生成而无需自回归延续。

## 正文

视频身份替换寻求转移一个或多个主体的身份，同时保留驱动视频的运动、表情与时间结构。现有方法主要针对单人设定，并且常常需要掩码或姿态表征等任务特定的结构控制，限制了它们在通用多模态编辑系统中的灵活性。多人替换的进展进一步受配对训练数据稀缺的约束。研究呈现 Vorch-IR，一个统一框架：在单一模型中支持单人与双人身份替换，带可选的背景替换。构建于 LTX2，Vorch-IR 联合条件化于驱动视频、索引参考图像与文本编辑指令。参考图像无需匹配驱动视频的姿态、布局或空间配置：它们作为主体或背景参考的角色通过指令指定。稠密视觉条件经自注意力融合，而视觉语言上下文经交叉注意力建立语义对应。研究进一步开发一个自动数据构建流水线，为所有四种编辑设定合成配对监督。使用自动指标与成对人工评估的实验展示了跨多样场景的强身份保留、运动保真度与时间连贯性。一个时间重叠推理策略额外将短片段模型扩展到分钟级生成，无需自回归延续。

## 关键词

身份替换、视频生成、多模态、LTX2、编辑
