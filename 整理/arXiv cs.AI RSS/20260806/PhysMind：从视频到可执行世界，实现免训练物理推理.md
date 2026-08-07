---
published: 20260806
title: "PhysMind：从视频到可执行世界，实现免训练物理推理"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/PhysMind- From Video to Executable Worlds for Training-Free Physical Reasoning.md"
source_note: "[[信息源/arXiv cs.AI RSS/PhysMind- From Video to Executable Worlds for Training-Free Physical Reasoning]]"
source_sha256: a13a6f571d21401694e39a901f2b6130c3eaa72b51962b7986b40ec24dc0e95d
original_url: "https://arxiv.org/abs/2608.04575"
processed: 2026-08-06
language: zh-CN

---

# PhysMind：从视频到可执行世界，实现免训练物理推理

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Chen Yang, Shenxiang Zeng, Haoyang Zhao, Zhouyuan Xu, Youquan He, Haoyu Li, Mingyi Deng, Jiansheng Fan, Chen Wang
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04575)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/PhysMind- From Video to Executable Worlds for Training-Free Physical Reasoning|查看原始文件]]

## 摘要

- 从视频进行可靠物理推理需要理解物体如何移动、交互和响应干预；现有视觉-语言模型（VLM）常难以解释这些动态并可靠推理未来和反事实结果。
- 本文引入 PhysMind，一个免训练智能体框架，为每个视频构建一个可复用、问题无关的可执行世界：通过物体分割、网格重建和 6D 姿态跟踪恢复时间一致动态场景，然后在不展开时间步模拟器的情况下拟合解析连续时间动力学和潜在物理参数。
- 给定问题，检查、继续或编辑世界并从所得轨迹和交互回答；相对同 VLM 直接思维链（CoT）推理，PhysMind 在 CLEVRER 改进准确率 38.23 点，Physion++ 8.08 点；反事实问题上超最强评估 VLM 基线 GPT-5.5 19.25 点。

## 正文

从视频进行可靠物理推理需要理解物体如何移动、交互和响应干预。现有视觉-语言模型（VLM）常难以解释这些动态并可靠推理未来和反事实结果。我们引入 PhysMind，一个免训练智能体框架，为每个视频构建一个可复用、问题无关的可执行世界。PhysMind 通过物体分割、网格重建和 6D 姿态跟踪恢复时间一致动态场景，然后在不展开时间步模拟器的情况下拟合解析连续时间动力学和潜在物理参数。给定问题，它检查、继续或编辑世界，并从所得轨迹和交互回答。相对使用相同 VLM 的直接思维链（CoT）推理，PhysMind 在 CLEVRER 改进准确率 38.23 点，Physion++ 8.08 点。在反事实问题上，它超过最强评估 VLM 基线 GPT-5.5 19.25 点。

## 关键词

#物理推理 #视频理解 #世界模型 #反事实 #arXiv