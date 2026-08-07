---
published: 20260806
title: "Place-it-R1：释放 MLLM 视频物体插入的环境感知推理潜力"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Place-it-R1- Unlocking Environment-aware Reasoning Potential of MLLM for Video Object Insertion.md"
source_note: "[[信息源/arXiv cs.AI RSS/Place-it-R1- Unlocking Environment-aware Reasoning Potential of MLLM for Video Object Insertion]]"
source_sha256: e7c9d923df48062a70e390abc90da9d675e264bb2dff5f0b171187310ab6c1e5
original_url: "https://arxiv.org/abs/2603.06140"
processed: 2026-08-06
language: zh-CN

---

# Place-it-R1：释放 MLLM 视频物体插入的环境感知推理潜力

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Bohai Gu, Taiyi Wu, Dazhao Du, Jian Liu, Shuai Yang, Xiaotong Zhao, Alan Zhao, Song Guo
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2603.06140)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Place-it-R1- Unlocking Environment-aware Reasoning Potential of MLLM for Video Object Insertion|查看原始文件]]

## 摘要

- 视频物体插入是视频编辑的基础，但现有扩散方法常产生视觉上看似合理但物理不一致的结果；本文呈现 Place-it-R1，一个由环境感知 MLLM 推理驱动的物理合理视频物体插入端到端框架。
- 不将推理视为通用文本提示，Place-it-R1 用 MLLM 分析目标环境、推断物体-场景交互并确定插入物理有效的位置；所得推理转化为视频扩散的两种互补指导形式：描述预期物理交互的语义指导，和提供每帧有效插入区域的空间指导。
- 引入空间直接偏好优化，用 MLLM 排名生成候选，并引入区域感知偏好目标显式将物理违规惩罚定位到插入物体区域；Place-it-R1 进一步提供灵活和标准模式以权衡环境适应与场景保留；广泛实验显示比最先进方法产生更物理连贯、视觉自然的插入。

## 正文

视频物体插入是视频编辑的基础，然而现有扩散方法常产生视觉上看似合理但物理不一致的结果。我们呈现 Place-it-R1，一个由环境感知 MLLM 推理驱动的物理合理视频物体插入端到端框架。不将推理视为通用文本提示，Place-it-R1 用 MLLM 分析目标环境、推断物体-场景交互，并确定插入物理有效的位置。所得推理转化为视频扩散的两种互补指导形式：描述预期物理交互的语义指导，和提供每帧有效插入区域的空间指导。为进一步将生成与局部物理现实对齐，我们引入空间直接偏好优化（Spatial Direct Preference Optimization），利用 MLLM 排名生成候选，并引入区域感知偏好目标，显式将物理违规惩罚定位到插入物体区域。Place-it-R1 进一步提供灵活和标准模式，权衡环境适应与场景保留。广泛实验表明，Place-it-R1 比最先进方法产生更物理连贯、视觉自然的插入，并对商业系统实现竞争结果。

## 关键词

#视频编辑 #物体插入 #MLLM推理 #物理一致性 #arXiv