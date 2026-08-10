---
published: 2026-08-07
title: "NavTrust：具身导航可信度的基准测试"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/NavTrust- Benchmarking Trustworthiness for Embodied Navigation.md"
source_note: "[[信息源/arXiv cs.AI RSS/NavTrust- Benchmarking Trustworthiness for Embodied Navigation]]"
source_sha256: dbfba55a3401bc9461e6a6f166945a94ae785b29be8d02d739bba28df4268d2e
original_url: "https://arxiv.org/abs/2603.19229"
processed: 2026-08-07
language: zh-CN
---

# NavTrust：具身导航可信度的基准测试

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Huaide Jiang, Yash Chaudhary, Yuping Wang, Zehao Wang, Raghav Sharma, Manan Mehta, Yang Zhou, Lichao Sun, Zhiwen Fan, Zhengzhong Tu, Jiachen Li
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2603.19229)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/NavTrust- Benchmarking Trustworthiness for Embodied Navigation|查看原始文件]]

## 摘要

- 具身导航有两大类别：视觉-语言导航（VLN，智能体按自然语言指令导航）与目标目标导航（OGN，智能体导航到指定目标物体）；现有工作主要在名义条件下评估模型性能，忽视真实世界设置中出现的潜在损坏。
- 提出 NavTrust：统一基准，在现实场景中系统损坏输入模态（包括 RGB、深度与指令）并评估其对导航性能的影响；据其所知，NavTrust 是首个在统一框架中使具身导航智能体暴露于多样 RGB-深度损坏与指令变化的基准。
- 对七个最先进方法的广泛评估揭示现实损坏下的显著性能退化，凸显关键稳健性缺口，并为更可信具身导航系统提供路线图。
- 系统评估四种缓解策略增强对 RGB-深度与指令损坏的稳健性；基础模型包括 Uni-NaVid 与 ETPNav，将其部署于真实移动机器人，观察对损坏的稳健性提升；项目网站：https://navtrust.github.io/。

## 正文

具身导航有两大类别：视觉-语言导航（Vision-Language Navigation，VLN），智能体通过遵循自然语言指令导航；以及目标目标导航（Object-Goal Navigation，OGN），智能体导航到指定目标物体。然而，现有工作主要在名义条件下评估模型性能，忽视真实世界设置中出现的潜在损坏。为填补这一空白，我们提出 NavTrust，一个统一基准，在现实场景中系统损坏输入模态（包括 RGB、深度与指令），并评估其对导航性能的影响。据我们所知，NavTrust 是首个在统一框架中使具身导航智能体暴露于多样 RGB-深度损坏与指令变化的基准。我们对七个最先进方法的广泛评估揭示了现实损坏下的显著性能退化，凸显关键稳健性缺口，并为更可信的具身导航系统提供路线图。此外，我们系统评估四种不同的缓解策略，以增强对 RGB-深度与指令损坏的稳健性。我们的基础模型包括 Uni-NaVid 与 ETPNav。我们将它们部署在真实移动机器人上，并观察到对损坏的稳健性提升。项目网站：https://navtrust.github.io/。

## 关键词

#具身导航 #可信度 #鲁棒性 #基准测试
