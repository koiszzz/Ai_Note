---
published: 2026-08-06
title: K-EXAONE 2.0 技术报告
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/K-EXAONE 2.0 Technical Report.md
source_note: "[[信息源/arXiv cs.CL RSS/K-EXAONE 2.0 Technical Report|查看原始文件]]"
source_sha256: e5feac8caf4bc3ea2729b4de76913d45c5b421334943b4bc050c3dfeeedf0a30
original_url: https://arxiv.org/abs/2608.04505
processed: 2026-08-07
language: zh-CN
---

# K-EXAONE 2.0 技术报告

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04505)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/K-EXAONE 2.0 Technical Report|查看原始文件]]

## 摘要

- 本技术报告介绍 K-EXAONE 2.0，一个由 LG AI Research 开发的开放权重多语言基础模型，是迈向全球前沿规模基础模型目标的一步。
- 采用升级（upcycle）路线而非从头训练：扩展 K-EXAONE 的架构，得到总参数 750B、每个 token 约激活 37B 参数的混合专家（MoE）模型，容量超过前代三倍以上。
- 支持最长 256K token 的上下文长度，多语言覆盖从六种扩展到十种语言。
- 训练流水线结合持续预训练、难度聚焦的中期训练和后训练，以增强推理、智能体编码、多语言能力和植根于韩国社会文化语境的安全。
- 在九个反映实际使用条件的评估类别中，K-EXAONE 2.0 相对 K-EXAONE 全面提升，并与开放权重模型保持竞争力，在智能体编码和长上下文理解上增益最大，在长上下文检索和安全上优势最明显；以 Apache 2.0 许可发布，标志着迈向全球前沿这一挑战的开始而非终点。

## 正文

本技术报告介绍 K-EXAONE 2.0，这是 LG AI Research 开发的开放权重多语言基础模型，是我们在迈向全球前沿规模基础模型努力中的一步。我们不是从头训练，而是对 K-EXAONE 进行升级（upcycle）并扩展其架构，得到一个总参数 750B、每 token 约激活 37B 参数的混合专家（Mixture-of-Experts, MoE）模型——容量是其前代的三倍以上。K-EXAONE 2.0 支持最长 256K token 的上下文长度，并将多语言覆盖从六种语言扩展到十种。其训练流水线结合持续预训练、难度聚焦的中期训练和后训练，以强化推理、智能体编码、多语言能力以及植根于韩国社会文化语境的安全。在九个为反映实际使用条件而挑选的评估类别中，K-EXAONE 2.0 相对 K-EXAONE 有所提升，并与开放权重模型保持竞争力，其中在智能体编码和长上下文理解上增益最大，在长上下文检索和安全上优势最为明显。K-EXAONE 2.0 以 Apache 2.0 许可证发布，使更广泛的 AI 生态能够评估、部署、适配并在此基础上构建，同时也标志着我们对全球前沿发起挑战的开始——而非终点。

## 关键词

#K-EXAONE #混合专家 #基础模型 #多语言 #技术报告
