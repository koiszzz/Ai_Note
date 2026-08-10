---
published: 2026-08-07
title: "OSReward：为跨平台计算机使用奖励模型建立标准化评估"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/OSReward- Instituting Standardized Evaluation for Cross-Platform Computer-Use Reward Models.md"
source_note: "[[信息源/arXiv cs.CV RSS/OSReward- Instituting Standardized Evaluation for Cross-Platform Computer-Use Reward Models]]"
source_sha256: 330367e7ea5f485d96ac5d483146733a3ddcfc1afecddbefc56d438407fd18b6
original_url: "https://arxiv.org/abs/2607.28609"
processed: 2026-08-07
language: zh-CN
---

# OSReward：为跨平台计算机使用奖励模型建立标准化评估

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Qiushi Sun, Kanzhi Cheng, Yian Wang, Bowen Yang, Hang Yan, Liheng Chen, Fangzhi Xu, Zichen Ding, Nuo Chen, Jialin Cao, Xingdong Gong, Zehao Li, Kaiming Jin, Xinfeng Yuan, Zhoumianze Liu, Jingyang Gong, Zhangyue Yin, Jiahui Gao, Zhiyong Wu, Tianbao Xie, Jianbing Zhang, Ben Kao, Lingpeng Kong
> - **发布时间**：2026-08-07
> - **分类**：cs.AI
> - **原文**：[打开链接](https://arxiv.org/abs/2607.28609)

## 摘要

- 计算机使用智能体（CUAs）正跨数字世界快速发展；CUA 轨迹记录智能体的动作、状态与推理；验证其是否完成任务指令是 CUA 评估、数据策展与强化学习的核心。
- 人工编写验证器与人类标注者都无法规模化提供此类验证，领域日益转向用视觉语言模型（VLM）作为 CUA 轨迹评审者；但根本问题长期未受检验：这些 VLM 评审者足够可靠吗？
- 系统研究：引入 OSReward，评估 CUA 轨迹上 VLM 评审者的现实、高质量基准；轨迹来自跨平台执行人工验证指令的多样智能体骨干，经多阶段人工标注严格标注真值裁决；构建 OSReward-Hard（聚焦真正困难案例的挑战集）与 OSReward-Multi（细粒度效率与对齐评分）。
- 迄今最全面 VLM 评审者评估发现即使 SOTA 模型也距理想评审者有差距，共享系统性宽容偏误：将失败运行误标为成功；可信任的少数模型规模化运行太贵，经济开源模型远落后；构建并发布 OS-Shepherd-100K 开源推理标注轨迹判断语料；训练 OS-Shepherd（9B 与 35B）开源奖励模型：提供低成本、稳定、可靠奖励信号，以比前沿低 30–60 倍成本匹配商业评审者。

## 正文

计算机使用智能体（computer-using agents, CUAs）正跨数字世界快速发展。一条 CUA 轨迹记录智能体的动作、状态与推理。验证它是否完成了任务指令，是 CUA 评估、数据策展与强化学习的核心。人工编写的验证器与人工标注者都无法规模化提供此类验证，因此该领域日益转向使用视觉语言模型（VLMs）作为 CUA 轨迹的评审者。但一个根本问题长期未受检验：这些 VLM 评审者足够可靠吗？为系统研究它，研究引入 OSReward，一个评估 CUA 轨迹上 VLM 评审者的现实、高质量基准。轨迹来自跨平台执行人工验证指令的多样智能体骨干，随后通过多阶段人工标注严格标注真值裁决。在此基础上，研究推导 OSReward-Hard，一个聚焦真正困难案例的挑战集，以及 OSReward-Multi，用于细粒度的效率与对齐评分。迄今最全面的 VLM 评审者评估发现，即使最先进的模型也达不到理想评审者的水平，共享一个系统性的宽容偏误（leniency bias），将失败运行误标为成功。少数足够可靠可信任的模型规模化运行成本过高，而经济的开源模型远远落后。为弥合该差距，研究构建并发布 OS-Shepherd-100K，一个用于 CUA 社区的推理标注轨迹判断开源语料。在其上训练 OS-Shepherd（9B 与 35B），开源奖励模型：以比前沿低 30–60 倍的成本提供低成本的稳定可靠奖励信号，匹配商业评审者。广泛的进一步分析为规模化可靠 CUA 奖励的设计提供信息。代码、基准、数据集与模型检查点见 https://os-copilot.github.io/OSReward-Home/。

## 关键词

计算机使用智能体、奖励模型、VLM 评审、基准、评估
