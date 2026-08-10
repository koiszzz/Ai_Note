---
published: 2026-08-07
title: "OSReward：为跨平台计算机使用奖励模型建立标准化评估"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/OSReward- Instituting Standardized Evaluation for Cross-Platform Computer-Use Reward Models.md"
source_note: "[[信息源/arXiv cs.AI RSS/OSReward- Instituting Standardized Evaluation for Cross-Platform Computer-Use Reward Models]]"
source_sha256: b633c5fa63be0241f18b5ed0249b920b5c825cde537f12ebd646eb5f4d07c7bd
original_url: "https://arxiv.org/abs/2607.28609"
processed: 2026-08-07
language: zh-CN
---

# OSReward：为跨平台计算机使用奖励模型建立标准化评估

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Qiushi Sun, Kanzhi Cheng, Yian Wang, Bowen Yang, Hang Yan, Liheng Chen, Fangzhi Xu, Zichen Ding, Nuo Chen, Jialin Cao, Xingdong Gong, Zehao Li, Kaiming Jin, Xinfeng Yuan, Zhoumianze Liu, Jingyang Gong, Zhangyue Yin, Jiahui Gao, Zhiyong Wu, Tianbao Xie, Jianbing Zhang, Ben Kao, Lingpeng Kong
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.28609)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/OSReward- Instituting Standardized Evaluation for Cross-Platform Computer-Use Reward Models|查看原始文件]]

## 摘要

- 计算机使用智能体（CUA）在数字世界快速进步；CUA 轨迹记录智能体的动作、状态与推理，验证其是否完成任务指令对 CUA 评估、数据策展与强化学习至关重要。
- 人类编写的验证器与人类标注者都无法大规模提供此类验证，领域日益转向用视觉-语言模型（VLM）作为 CUA 轨迹裁判；但基本问题长期未被审视：这些 VLM 裁判足够可靠吗？
- 引入 OSReward：评估 VLM 裁判在 CUA 轨迹上表现的现实高质量基准——轨迹来自跨平台执行人类验证指令的多样智能体骨干，经多阶段人工标注严格标记真值判定；由此衍生 OSReward-Hard（集中真正困难案例的挑战集）与 OSReward-Multi（细粒度效率与对齐评分）。
- 迄今最全面的 VLM 裁判评估发现即使最先进模型也达不到理想裁判，共享系统性宽松偏差，将失败运行误标为成功；少数可靠到可信任的模型太贵无法规模化，而负担得起的开放模型远远落后。
- 构建并发布 OS-Shepherd-100K（带推理标注轨迹判定的开放语料），训练 OS-Shepherd（9B 与 35B）开放奖励模型，提供低成本、稳定、可靠奖励信号，以前沿模型 30-60 倍更低成本匹配商业裁判；代码、基准、数据集与模型检查点公开。

## 正文

计算机使用智能体（computer-using agents，CUAs）正跨数字世界快速进步。CUA 轨迹记录智能体的动作、状态与推理。验证其是否完成任务指令是 CUA 评估、数据策展与强化学习的核心。人类编写的验证器与人类标注者都无法大规模提供此类验证，因此该领域日益转向用视觉-语言模型（VLMs）作为 CUA 轨迹的裁判。但一个基本问题长期未被审视：这些 VLM 裁判足够可靠吗？为系统研究，我们引入 OSReward，一个评估 VLM 裁判在 CUA 轨迹上表现的真实、高质量基准。轨迹来自跨平台执行人类验证指令的多样智能体骨干，随后通过多阶段人工标注严格标记真值判定。在此基础上，我们衍生 OSReward-Hard，一个集中真正困难案例的挑战集，以及 OSReward-Multi，用于细粒度效率与对齐评分。迄今最全面的 VLM 裁判评估发现，即使最先进的模型也达不到理想裁判的标准，共享一个系统性宽松偏差，将失败运行误标为成功。少数足够可靠可信任的模型太昂贵无法规模化运行，而负担得起的开放模型远远落后。为弥合这一差距，我们构建并发布 OS-Shepherd-100K，一个面向 CUA 社区、带推理标注轨迹判定的开放语料。在其上我们训练 OS-Shepherd（9B 与 35B），开放奖励模型，提供低成本、稳定、可靠的奖励信号，以前沿模型 30-60 倍更低成本匹配商业裁判。大量分析进一步为大规模可靠 CUA 奖励的设计提供信息。代码、基准、数据集与模型检查点见 https://os-copilot.github.io/OSReward-Home/。

## 关键词

#计算机使用智能体 #奖励模型 #VLM裁判 #基准测试
