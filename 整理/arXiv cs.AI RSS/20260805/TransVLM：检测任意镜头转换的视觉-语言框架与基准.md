---
published: 2026-08-05
title: "TransVLM：检测任意镜头转换的视觉-语言框架与基准"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/TransVLM- A Vision-Language Framework and Benchmark for Detecting Any Shot Transitions.md"
source_note: "[[信息源/arXiv cs.AI RSS/TransVLM- A Vision-Language Framework and Benchmark for Detecting Any Shot Transitions]]"
source_sha256: 2e9f8a22a337707fc982d55c19fd276bf738368967dfd49f43cc78fa40e17974
original_url: "https://arxiv.org/abs/2604.27975"
processed: 2026-08-05
language: zh-CN
---

# TransVLM：检测任意镜头转换的视觉-语言框架与基准

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Ce Chen、Yi Ren、Yuanming Li 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2604.27975)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/TransVLM- A Vision-Language Framework and Benchmark for Detecting Any Shot Transitions|查看原始文件]]

## 摘要

- 通过把镜头转换检测（STD）任务形式化来应对传统镜头边界检测（SBD）的根本局限：SBD 围绕孤立切点表述任务，常产生损坏的视频镜头；STD 显式检测转换的连续时间段，而非搜索歧义点。
- 提出 TransVLM，用于 STD 的视觉-语言模型（VLM）框架：与主要依赖空间语义、难以处理细粒度镜头间动态的常规 VLM 不同，方法在输入阶段显式注入光流作为关键运动先验——通过简单有效的特征融合策略直接处理拼接的颜色与运动表示，显著增强时间意识，不增加语言骨干的视觉 token 开销。
- 设计可扩展数据引擎合成多样转换视频用于稳健训练（克服公开数据严重类别不平衡），并构建 STD 综合基准。
- 大量实验显示 TransVLM 取得更优整体性能，优于传统启发式方法、专门时空网络与顶级 VLM；项目页面：https://chence17.github.io/TransVLM/

## 正文

论文编号：arXiv:2604.27975v2（更新类型：replace-cross）。以下为摘要全文翻译。

传统镜头边界检测（SBD）通过把任务表述为围绕孤立切点，天然难以处理复杂转换，经常产生损坏的视频镜头。我们通过形式化镜头转换检测（STD）任务解决这一根本局限。STD 不是搜索歧义点，而是显式检测转换的连续时间段。为应对这一点，我们提出 TransVLM，一个用于 STD 的视觉-语言模型（VLM）框架。与主要依赖空间语义、难以处理细粒度镜头间动态的常规 VLM 不同，我们的方法在输入阶段显式注入光流作为关键运动先验。通过一个简单而有效的特征融合策略，TransVLM 直接处理拼接的颜色与运动表示，显著增强其时间意识，而不给语言骨干增加任何额外视觉 token 开销。为克服公开数据的严重类别不平衡，我们设计一个可扩展数据引擎合成多样转换视频用于稳健训练，并构建 STD 的综合基准。大量实验表明，TransVLM 取得更优的整体性能，优于传统启发式方法、专门时空网络与顶级 VLM。更多相关研究请访问 HeyGen Research（https://www.heygen.com/research）与 HeyGen Avatar-V（https://www.heygen.com/research/avatar-v-model）。项目页面：https://chence17.github.io/TransVLM/

## 关键词

#镜头检测 #视频理解 #视觉语言模型 #光流
