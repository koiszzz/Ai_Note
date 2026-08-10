---
published: 2026-08-07
title: "SCI-CLIP：带参考记忆的段中心推理用于免训练开放词汇分割"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/SCI-CLIP- Segment-Centric Inference with Reference Memory for Training-Free Open-Vocabulary Segmenta.md"
source_note: "[[信息源/arXiv cs.CV RSS/SCI-CLIP- Segment-Centric Inference with Reference Memory for Training-Free Open-Vocabulary Segmenta]]"
source_sha256: 1b58c24f2bbef31d3f73b2a287e5a5ae9e26d7239317072f1f6e52d94b8bcc3f
original_url: "https://arxiv.org/abs/2608.05627"
processed: 2026-08-07
language: zh-CN
---

# SCI-CLIP：带参考记忆的段中心推理用于免训练开放词汇分割

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Mohamad Zamini, Diksha Shukla
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05627)

## 摘要

- 免训练开放词汇分割仍受缺失推理抽象限制；冻结视觉语言特征在补丁级产生，而稠密预测需要同时支配特征交互、空间支撑、上下文恢复与基于检索修正的单元。
- 呈现 SCI-CLIP：段中心推理框架，围绕同一区域抽象应组织稠密开放词汇预测所有阶段的原则构建。
- SCI-CLIP 先在冻结视觉 token 上诱导区域一致交互图，再经该图传播值重建稠密特征，仅在局部证据不足处增补选择性跨窗口支撑；随后用同一段抽象构建并查询离线参考记忆，将示例检索与预测所基于的单元对齐。
- SCI-CLIP 无需任何训练即将冻结 CLIP 风格特征转为空间连贯、上下文感知、检索兼容的稠密预测；一致改进稠密预测结构质量、上下文推理稳健性与基于示例修正对齐，八个基准上取得更强开放词汇分割；项目代码公开。

## 正文

免训练的开放词汇分割仍然受限于缺失一个推理抽象。冻结的视觉语言特征在补丁级产生，然而稠密预测需要一个同时支配特征交互、空间支撑、上下文恢复与基于检索修正的单元。研究呈现 SCI-CLIP，一个段中心（segment-centric）推理框架，围绕"同一区域抽象应组织稠密开放词汇预测的所有阶段"这一原则构建。SCI-CLIP 首先在冻结的视觉 token 上诱导一个区域一致的交互图，然后通过在该图上传播值来重建稠密特征，仅在局部证据不足的地方增补选择性的跨窗口支撑。随后，同一段抽象被用于构建并查询一个离线参考记忆，将示例检索与预测所基于的单元对齐。SCI-CLIP 将冻结的 CLIP 风格特征转化为空间连贯、上下文感知且检索兼容的稠密预测，无需任何训练。SCI-CLIP 一致改进稠密预测的结构质量、上下文推理的稳健性以及基于示例修正的对齐，在八个基准上产生更强的开放词汇分割。项目代码见 https://github.com/mzamini92/SCICLIP。

## 关键词

开放词汇分割、CLIP、段中心、参考记忆、免训练
