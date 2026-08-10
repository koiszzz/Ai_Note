---
published: 2026-08-07
title: "HunyuanOCR-1.5：让轻量 OCR VLM 更快更好"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/HunyuanOCR-1.5- Making Lightweight OCR VLMs Faster and Better.md"
source_note: "[[信息源/arXiv cs.CV RSS/HunyuanOCR-1.5- Making Lightweight OCR VLMs Faster and Better]]"
source_sha256: 1d723b8ae2f9f561d1406a84fc1e7be9bc4c0629f146b44d8bd6f58f79f07db5
original_url: "https://arxiv.org/abs/2607.04884"
processed: 2026-08-07
language: zh-CN
---

# HunyuanOCR-1.5：让轻量 OCR VLM 更快更好

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Gengluo Li, Xingyu Wan, Shangpin Peng, Weinong Wang, Hao Feng, Yongkun Du, Binghong Wu, Zheng Ruan, Zhiqiong Lu, Liang Wu, Pengyuan Lyu, Huawen Shen, Zibin Lin, Shijing Hu, Jieneng Yang, Hongbing Wen, Guanghua Yu, Hong Liu, Bochao Wang, Can Ma, Han Hu, Chengquan Zhang, Yu Zhou
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2607.04884)

## 摘要

- 呈现 HunyuanOCR-1.5：轻量端到端 OCR 专用视觉语言模型；在单一端到端 VLM 中统一文档解析、文本定位、信息提取、文本图像翻译与多图像文档理解。
- 基于 HunyuanOCR-1.0 轻量架构，不重新设计骨干，系统性改进效率与能力：效率上将 DFlash 适配到 OCR 解码，显著降低密集文档、表格与公式等长结构化输出延迟同时保留输出分布；DFlash 驱动下实现 6.37 倍 Transformer 推理加速、vLLM 下 2.14 倍，轻量 OCR VLM 中推理最快。
- 能力上提出智能体数据流（Agentic Data Flow）：智能体驱动数据构建系统，将模型弱点转为可执行数据需求，自主执行材料搜索、质量验证与流水线开发；大幅改进古文字 OCR、细粒度图表与表格解析、多图像文本中心 QA、低资源多语言解析与文档幻觉评估等长尾能力。
- OmniDocBench v1.6 上位居顶级端到端 OCR 方案，并在这些长尾任务取得新性能里程碑；升级预训练与训练后方案扩展高分辨率、长上下文与多任务场景能力；将发布模型权重与训练代码。

## 正文

研究呈现 HunyuanOCR-1.5，一个轻量端到端 OCR 专用视觉语言模型。HunyuanOCR 在单一端到端 VLM 中统一文档解析、文本定位（text spotting）、信息提取、文本图像翻译与多图像文档理解。基于 HunyuanOCR-1.0 的轻量架构，HunyuanOCR-1.5 不重新设计骨干，而是系统性改进效率与能力。对效率，研究将 DFlash 适配到 OCR 解码，显著降低密集文档、表格与公式等长结构化输出的延迟，同时保留输出分布。由 DFlash 驱动，HunyuanOCR-1.5 实现 6.37 倍 Transformer 推理加速与 vLLM 下 2.14 倍加速，在轻量 OCR VLM 中提供最快推理。对能力，研究提出智能体数据流（Agentic Data Flow），一个智能体驱动的数据构建系统：将模型弱点转化为可执行的数据需求，并自主执行材料搜索、质量验证与流水线开发。它大幅改进古文字 OCR、细粒度图表与表格解析、多图像文本中心 QA、低资源多语言解析与文档幻觉评估等长尾能力。HunyuanOCR-1.5 在 OmniDocBench v1.6 上位居顶级端到端 OCR 方案之列，同时在这些长尾任务上实现新的性能里程碑。结合升级的预训练与训练后方案，HunyuanOCR-1.5 进一步扩展其在高分辨率、长上下文与多任务场景的能力。实验证明更快的推理、更广的 OCR 能力覆盖与轻量端到端模型的部署优势。研究将发布模型权重与训练代码，以支持未来研究与真实 OCR 应用。

## 关键词

OCR、VLM、文档解析、智能体数据、推理加速
