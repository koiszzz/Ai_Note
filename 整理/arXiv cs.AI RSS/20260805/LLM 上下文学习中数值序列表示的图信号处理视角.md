---
published: 20260805
title: "LLM 上下文学习中数值序列表示的图信号处理视角"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/A Graph Signal Processing Perspective on Numerical Sequence Representations in LLM In-Context Learni.md"
source_note: "[[信息源/arXiv cs.AI RSS/A Graph Signal Processing Perspective on Numerical Sequence Representations in LLM In-Context Learni]]"
source_sha256: 4bb1379c485717e51eecc6122e2c4e870f26782bafea8b991cacb7e03aec1692
original_url: "https://arxiv.org/abs/2608.03015"
processed: 2026-08-06
language: zh-CN

---

# LLM 上下文学习中数值序列表示的图信号处理视角

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Jiajun Bao, Zihao Qi, Toni J. B. Liu, Gurbir Arora, Rapha\"el Sarfati, Nicolas Boull\'e, Christopher J. Earls
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03015)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/A Graph Signal Processing Perspective on Numerical Sequence Representations in LLM In-Context Learni|查看原始文件]]

## 摘要

- 预训练 LLM 已展示对序列化为文本的数值序列进行推理的上下文学习（ICL）能力，先前工作主要通过预测误差等输出级评估来刻画。
- 本文采用图信号处理视角：注意力在 token 上诱导加权图，token 隐藏状态定义节点上的信号；定量图谱诊断和定性 token 图可视化显示，随上下文长度增加，表示按输入动力学复杂度更清晰地区分。
- 简单输入产生全局连通性更强的注意力 token 图和平滑、谱集中的隐藏状态信号，复杂输入产生更局部的图与更宽频谱支持的信号。

## 正文

预训练的大语言模型（LLM）已展示出对序列化为文本的序列进行数值推理的上下文学习（ICL）能力。先前工作主要通过预测误差等输出级评估来识别和刻画这种数值推理形式。然而，数值信息在 LLM 表示中如何组织仍远未被理解。为研究这种内部组织，我们采用图信号处理视角：注意力在 token 上诱导一个加权图，而 token 隐藏状态定义其节点上的信号。定量图谱诊断和定性 token 图可视化揭示，随着上下文长度增加，表示按输入动力学复杂度变得区分更清晰。较简单的输入产生全局连通性更强的注意力诱导 token 图，以及更平滑、谱集中的隐藏状态信号；而较复杂的输入产生更局部的图，以及频谱支持更广、高频能量更多的隐藏状态信号。这些发现共同指向与数值 ICL 相关的、跨模型家族保守的系统性、上下文相关的内部特征。

## 关键词

#图信号处理 #上下文学习 #LLM #表示 #arXiv