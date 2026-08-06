---
published: 2026-08-05
title: "图信号处理视角下 LLM 上下文学习中的数值序列表示"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/A Graph Signal Processing Perspective on Numerical Sequence Representations in LLM In-Context Learni.md"
source_note: "[[信息源/arXiv cs.LG RSS/A Graph Signal Processing Perspective on Numerical Sequence Representations in LLM In-Context Learni]]"
source_sha256: f25730dae2ee422a2a7b7b8bb8b454179cc781d04841afe7ee72b39fe817c948
original_url: "https://arxiv.org/abs/2608.03015"
processed: 2026-08-05
language: zh-CN
---

# 图信号处理视角下 LLM 上下文学习中的数值序列表示

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Jiajun Bao、Zihao Qi、Toni J. B. Liu 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03015)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/A Graph Signal Processing Perspective on Numerical Sequence Representations in LLM In-Context Learni|查看原始文件]]

## 摘要

- 采用图信号处理视角研究数值信息在 LLM 表示中的组织方式：注意力在 token 上诱导加权图，token 隐藏状态是图节点上的信号。
- 图谱诊断与 token 图可视化显示：随上下文长度增加，表示按输入动力学复杂度产生更清晰的区分；简单输入产生全局连通性更强、信号更平滑且频谱集中的注意力诱导 token 图；复杂输入产生更局部化的图与频谱支撑更宽、高频能量更高的信号。
- 预训练 LLM 已展现对序列化为文本的数值序列进行上下文学习（ICL）推理的能力；先前工作主要通过输出级评估（如预测误差）识别该数值推理，数值信息在 LLM 表示内部如何组织仍远未被理解。
- 结论指向与数值 ICL 相关、跨模型家族一致的系统性上下文依赖内部特征。

## 正文

论文编号：arXiv:2608.03015v1（更新类型：new）。以下为摘要全文翻译。

预训练的大语言模型（LLM）已展现出对序列化为文本的数值序列进行上下文学习（ICL）推理的能力。先前工作主要通过输出级评估（如预测误差）识别与刻画这种数值推理，但数值信息在 LLM 表示内部如何组织仍远未被理解。为研究这种内部组织，我们采用图信号处理视角：注意力在 token 之间诱导一个加权图，而 token 隐藏状态定义图节点上的信号。定量图谱诊断与定性 token 图可视化揭示：随着上下文长度增加，表示按输入动力学复杂度产生越来越清晰的区分。较简单的输入产生注意力诱导 token 图：全局连通性更强、隐藏状态信号更平滑且频谱集中；而较复杂的输入产生更局部化的图，隐藏状态信号频谱支撑更宽、高频能量更高。综合来看，这些发现表明存在与数值 ICL 相关、跨模型家族一致的系统性、上下文依赖的内部特征。

## 关键词

#上下文学习 #图信号处理 #数值推理 #内部表示
