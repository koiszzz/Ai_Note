---
published: 2026-08-07
title: "OmniMech：3D 重建的一体化多模态机械基准"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/OmniMech- All-in-one Multimodal Mechanical Benchmark for 3D Reconstruction.md"
source_note: "[[信息源/arXiv cs.CV RSS/OmniMech- All-in-one Multimodal Mechanical Benchmark for 3D Reconstruction]]"
source_sha256: e8cb488e634cf0014baa8c92250276e2e17af00c764e269f3d2a67470dfe1e6b
original_url: "https://arxiv.org/abs/2608.05539"
processed: 2026-08-07
language: zh-CN
---

# OmniMech：3D 重建的一体化多模态机械基准

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Taiting Lu, Runze Liu, Ziwei Dong, Sisong Bei, Jingying Zeng, Mingjia Wang, Zhenghao Li, Kaiyuan Lin, Yi-Shan Wu, Yangshoudu Zheng, Hongxing Pan, Kai Zhang, Guoliang Shi, Ling Ma, Yifan Yang, Jiaying Lu, Qi He, Sung-Liang Chen, Yi-Chao Chen, Yincheng Jin, Mahanth Gowda
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05539)

## 摘要

- 近期视觉语言模型（VLM）可从图像生成可执行 CAD 程序，但现有方法主要针对粗略、通用 3D 对象，很少处理工业机械设计所需的细粒度几何与毫米级公差。
- 引入 OmniMech：第一个评估 VLM 从工业制造数据生成可执行 CAD 的百万级基准。
- 含超 251000 个全尺寸与公差 2D 正交图纸，配对原生 CAD 模型、多视图渲染、网格、STEP 与 B-rep 表征及丰富语义标注；四个任务：(1) 从工程图纸的参数化 CAD 程序合成；(2) 几何与结构一致重建的图纸到 3D 推理；(3) 尺寸、符号、特征标注与制造约束的标注锚定推理；(4) 用可视化、测量、CAD 执行与验证工具的工具增强智能体推理。
- 实验显示当前 VLM 与 CAD 专用模型仍难应对可执行程序合成、细粒度 3D 重建与尺寸公差可靠执行；将发布基准数据、评估代码与工具接口。

## 正文

近期视觉语言模型（VLMs）能够从图像生成可执行的 CAD 程序，但现有方法主要针对粗略、通用目的的 3D 对象，很少处理工业机械设计中要求的细粒度几何与毫米级公差。研究引入 OmniMech，第一个用于评估 VLM 从工业制造数据生成可执行 CAD 的百万级基准。OmniMech 包含超过 251,000 个全尺寸标注与公差的 2D 正交图纸，配对原生 CAD 模型、多视图渲染、网格、STEP 与 B-rep 表征，以及丰富的语义标注。该基准包含四个任务：(1) 从工程图纸进行参数化 CAD 程序合成；(2) 用于几何与结构一致重建的图纸到 3D 推理；(3) 对尺寸、符号、特征标注与制造约束的标注锚定推理；(4) 使用可视化、测量、CAD 执行与验证工具的工具增强智能体推理。实验表明，当前 VLM 与 CAD 专用模型在可执行程序合成、细粒度 3D 重建以及尺寸与公差的可靠执行方面仍然困难。研究将发布基准数据、评估代码与工具接口，以支持未来研究。

## 关键词

CAD 生成、机械设计、VLM、3D 重建、基准
