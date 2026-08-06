---
published: 2026-08-05
title: "DRIFT：用对抗补丁攻击使流匹配 VLA 去噪轨迹脱轨"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/DRIFT- Derailing Denoising Trajectories of Flow-Matching VLAs with Adversarial Patch Attack.md"
source_note: "[[信息源/arXiv cs.LG RSS/DRIFT- Derailing Denoising Trajectories of Flow-Matching VLAs with Adversarial Patch Attack]]"
source_sha256: 418e1b334f52af56d5693a1dca659c529cb750cbab2f7148a48613820042755b
original_url: "https://arxiv.org/abs/2608.03207"
processed: 2026-08-05
language: zh-CN
---

# DRIFT：用对抗补丁攻击使流匹配 VLA 去噪轨迹脱轨

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Hoseong Tae、Jong-Seok Lee
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03207)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/DRIFT- Derailing Denoising Trajectories of Flow-Matching VLAs with Adversarial Patch Attack|查看原始文件]]

## 摘要

- 表明该鲁棒性在很大程度上是错觉：源于先前攻击忽视多步去噪 ODE——引入 DRIFT（经输入扰动的流匹配轨迹去噪重定向），放在机器人夹爪上的测试时通用对抗补丁，攻击现成策略的去噪速度场。
- 流匹配视觉-语言-动作（VLA）模型（如 pi0）通过积分学习去噪速度场生成机器人动作，且据报告可抵抗轻易愚弄自回归 VLA 的对抗扰动。
- 核心发现反直觉：只攻击第一步去噪比攻击更宽步窗更强且更便宜——通过输入空间优化特有的梯度冲突解释，与训练时后门机制完全相反。
- pi0 与 pi0.5 四个 LIBERO 套件上，DRIFT 用小的单补丁破坏几乎所有原本可解任务，远超动作与嵌入空间攻击基线。

## 正文

论文编号：arXiv:2608.03207v1（更新类型：cross）。以下为摘要全文翻译。

流匹配视觉-语言-动作（VLA）模型（如 pi0）通过积分一个学习到的去噪速度场生成机器人动作，并且据报告能抵抗轻易愚弄自回归 VLA 的对抗扰动。我们表明，这种鲁棒性在很大程度上是错觉：它源于先前的攻击忽视了多步去噪 ODE。我们引入 DRIFT（Denoising Redirection via Input perturbation of the Flow-matching Trajectory，经输入扰动的流匹配轨迹去噪重定向）：一个放在机器人夹爪上的测试时通用对抗补丁，攻击现成策略的去噪速度场。我们的核心发现是反直觉的：只攻击第一步去噪既比攻击更宽的步窗更强，也更便宜，我们通过输入空间优化特有的梯度冲突解释这一点，它与训练时的后门机制完全相反。在 pi0 与 pi0.5 的四个 LIBERO 套件上，DRIFT 用一个小的单补丁破坏了几乎所有原本可解的任务，远超动作与嵌入空间的攻击基线。

## 关键词

#VLA模型 #对抗补丁 #流匹配 #机器人安全
