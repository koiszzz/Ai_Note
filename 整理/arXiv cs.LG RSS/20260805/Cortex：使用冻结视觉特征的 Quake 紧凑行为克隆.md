---
published: 2026-08-05
title: "Cortex：使用冻结视觉特征的 Quake 紧凑行为克隆"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Cortex- Compact Behavior Cloning for Quake with Frozen Visual Features.md"
source_note: "[[信息源/arXiv cs.LG RSS/Cortex- Compact Behavior Cloning for Quake with Frozen Visual Features]]"
source_sha256: 369caed054fe78dfa4c4144a335556247e7d060ffd945dce210062c7484fca1f
original_url: "https://arxiv.org/abs/2607.22739"
processed: 2026-08-05
language: zh-CN
---

# Cortex：使用冻结视觉特征的 Quake 紧凑行为克隆

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Dzmitry Malyshau
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.22739)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Cortex- Compact Behavior Cloning for Quake with Frozen Visual Features|查看原始文件]]

## 摘要

- 研究刻意简单的行为克隆策略在视觉丰富第一人称游戏中、在加入强化学习或显式记忆前能达到多远：Cortex 是冻结 DINOv3 编码器之上的六层 Transformer、1,098 万可训练参数的紧凑 Quake 策略。
- 在公开 Pixels2Play 语料 Quake 子集训练：6,849 段录音（约 474.7 小时），表示为 1,709 万帧带键盘鼠标动作的缓存决策帧；一个采样训练轮次用 517,048 个四帧窗口，单张 RTX 5080 上策略头优化 3.3 分钟（不计一次性特征提取）。
- 评估：Quake E1M1 上两个独立 20 集随机 120 秒批次——未完成关卡，但每集都到达入口门、按钮房间与闸门下降；每批 19/20 集至少一次击杀；时间受控框架下 P2P-150M 与 NitroGen 检查点在匹配时长的各五集中进展更浅（受小参考样本与不同原生接口限制）。
- 消融：更密集视觉 token 改善战斗与生存；更长优化与朴素动作历史改善离线指标却未一致改善实际表现；剩余失败与协变偏移一致，提示针对性纠正数据；开放策略实现、检查点与代表性 rollout。

## 正文

论文编号：arXiv:2607.22739v2（更新类型：replace-cross）。以下为摘要全文翻译。

我们研究一种刻意简单的行为克隆策略，在视觉丰富的第一人称游戏中、在加入强化学习或显式记忆之前能走多远。Cortex 是一个紧凑的 Quake 策略：冻结 DINOv3 编码器之上的六层 Transformer，1,098 万可训练参数。它在公开 Pixels2Play 语料的 Quake 子集上训练：6,849 段录音（约 474.7 小时），表示为带键盘与鼠标动作的 1,709 万帧缓存决策帧。一个采样的训练轮次使用 517,048 个四帧窗口，在单张 RTX 5080 上（不计一次性特征提取）策略头优化耗时 3.3 分钟。我们在 Quake E1M1 上评估两个独立的 20 集随机 120 秒批次。Cortex 没有完成关卡，但每一集都到达了入口门、按钮房间与闸门下降处；每批 19/20 集记录到至少一次击杀。在同一时间受控框架下，已发布的 P2P-150M 与 NitroGen 检查点在匹配时长的各五集中进展更浅。这些比较受限于较小的参考样本与不同的原生接口。消融表明：更密集的视觉 token 改善战斗与生存；更长的优化与朴素的动作历史改善了离线指标，却未一致改善实际游戏表现。剩余失败与协变偏移一致，并提示需要针对性的纠正数据。我们发布策略实现、检查点与一次代表性 rollout。

## 关键词

#行为克隆 #游戏AI #视觉编码器 #强化学习
