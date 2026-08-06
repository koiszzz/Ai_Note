---
title: "ValueFormer：带阶段感知标签的半自主视觉-语言-动作策略的因果 Transformer 值函数"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/ValueFormer- A Causal Transformer Value Function with Stage-Aware Labels for Semi-Autonomous Vision-.md"
source_note: "[[信息源/arXiv cs.AI RSS/ValueFormer- A Causal Transformer Value Function with Stage-Aware Labels for Semi-Autonomous Vision-]]"
source_sha256: 6ebbc5390adaac8ee3911113349dd2314d4feab961af2fcf911be591e5548bbc
original_url: "https://arxiv.org/abs/2608.02958"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# ValueFormer：带阶段感知标签的半自主视觉-语言-动作策略的因果 Transformer 值函数

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Inkyu Sa、Konstantin Stulov、Rajat Bhageria
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02958)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/ValueFormer- A Causal Transformer Value Function with Stage-Aware Labels for Semi-Autonomous Vision-|查看原始文件]]

## 摘要

- 提出 ValueFormer，冻结 DINOv3 骨干上的紧凑策略无关因果 transformer：一次前向发出两个逐帧信号——用于优势估计的平滑蒙特卡洛值 V_mc 与用于在线错误检测的锐利二元值（目标按设计朝相反方向拉动）。
- 失败片段用阶段感知、成功-然后-衰减的回报标记，保留失败阶段前的成功曲线；检测从错误区间（而非单一失败时间）监督，因此策略恢复的错误也携带信号。
- 行为克隆训练的 VLA 策略悄然失败：仅从动作流看，坍缩 rollout 与干净推进看起来很像，因为模仿不提供进展概念；强化学习可提供，但此处不切实际（真实机器人经验昂贵且变形食物抗拒仿真）；廉价的终端成功/失败位原则上可学习，却太稀疏无法说明 rollout 何时出错——逐帧标签（而非架构）才是难点：必须密集、连续且形状正确。
- 真实机器人双臂三明治组装任务（1,427 集）上，评论者派生的逐帧训练权重把任务完成率从 70% 提升到 85%（n=20 噪声内）；批量 bf16 编码器把实时服务成本降低 3–5 倍，评论者在单 GPU 上以 2 Hz 与策略并行运行。

## 正文

论文编号：arXiv:2608.02958v1（更新类型：cross）。以下为摘要全文翻译。

行为克隆训练的视觉-语言-动作（VLA）策略悄然失败：仅从动作流看，坍缩的 rollout 与干净推进看起来很像，因为模仿不提供进展的概念。强化学习会提供进展概念，但在此不切实际：真实机器人经验昂贵，且变形食物抗拒仿真。廉价的替代——终端成功/失败位——原则上可学习，却过于稀疏，无法说明 rollout 何时出错。我们论证，逐帧标签（而非架构）才是难点：要发挥作用，它必须密集、连续且形状正确。我们提出 ValueFormer，一个冻结 DINOv3 骨干上的紧凑、策略无关的因果 transformer：一次前向发出两个逐帧信号——用于优势估计的平滑蒙特卡洛值 V_mc，与用于在线错误检测的锐利二元值，这两个目标按设计朝相反方向拉动。失败片段用阶段感知、成功-然后-衰减的回报标记，保留失败阶段之前的成功曲线；检测从错误区间（而非单一失败时间）监督，因此策略恢复的错误也携带信号。在一个真实机器人双臂三明治组装任务（1,427 集）上，评论者派生的逐帧训练权重把任务完成率从 70% 提升到 85%（n=20 噪声内），而批量 bf16 编码器把实时服务成本降低 3–5 倍，使评论者能在单 GPU 上以 2 Hz 与策略并行运行。

## 关键词

#VLA策略 #值函数 #错误检测 #机器人操作
