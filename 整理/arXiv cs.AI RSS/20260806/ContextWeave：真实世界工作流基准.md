---
published: 20260806
title: "ContextWeave：真实世界工作流基准"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/ContextWeave- A Real-World Workflow Benchmark.md"
source_note: "[[信息源/arXiv cs.AI RSS/ContextWeave- A Real-World Workflow Benchmark]]"
source_sha256: f049b129948007b36b1a14cfd3f4dbd61fd69d86ca711a9558e7c977820a1fe2
original_url: "https://arxiv.org/abs/2608.04830"
processed: 2026-08-06
language: zh-CN

---

# ContextWeave：真实世界工作流基准

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Bo Wang, Yuqian Yao, Enxi Wang, Luozhijie Jin, Yang Liu, Yiran Suo, Yuxuan Cai, Enyu Zhou, Yufei Gao, Honglin Guo, Tianyu Huai, Li Ji, Zhikai Lei, Bufan Li, Lizhi Lin, Jinxiu Liu, Jie Yang, Jiazheng Zhou, Maosen Zhou, Pengfang Qian, Shichun Liu, Guanshan Liu, Hao Zheng, Yunhao Yu, Hang Yan, Jihua Kang, Xinchi Chen, Xipeng Qiu
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04830)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/ContextWeave- A Real-World Workflow Benchmark|查看原始文件]]

## 摘要

- 记忆对语言智能体从孤立任务走向长时程、有状态工作流至关重要，但现有评估常将其简化为检索或问答；本文引入 ContextWeave，一个纵向基准，评估回忆经验是否改进真实办公室工作流中的下游智能体性能。
- ContextWeave 将 14 名参与者的隐私保护、多月工作流重建为 1,005 个可执行任务（含 568 个核心评估任务），带指令、容器化环境、轨迹和任务特定评分标准；测量工作空间质量和与参与者特定偏好的一致性。
- 固定模型下跨六个记忆组件，最强配置将工作空间分数从 68.08 提升到 78.20，偏好分数从 41.50 提升到 70.60；可操作、经验丰富的记忆比紧凑摘要更有效支持工作流延续和减少冗余探索，但也更易受误导回忆影响。

## 正文

记忆对语言智能体从孤立任务走向长时程、有状态工作流至关重要，然而现有评估常将其简化为检索或问答。我们引入 ContextWeave，一个纵向基准，评估回忆经验是否改进真实办公室工作流中的下游智能体性能。ContextWeave 将 14 名参与者的隐私保护、多月工作流重建为 1,005 个可执行任务，包括 568 个核心评估任务，带指令、容器化环境、轨迹和任务特定评分标准。它测量工作空间质量和与参与者特定偏好的一致性，辅以相关性、连续性、可解性和对误导回忆鲁棒性的诊断。固定模型下跨六个记忆组件，最强配置将工作空间分数从 68.08 提升到 78.20，偏好分数从 41.50 提升到 70.60。固定记忆组件下，回忆改进全部五个测试基础模型的两个结果，尽管收益差异显著。我们的分析表明，可操作、经验丰富的记忆比紧凑摘要更有效支持工作流延续和减少冗余探索，但也可能更容易受误导回忆影响。这些发现激励不仅优化检索相关性，还优化执行期间可靠使用的记忆系统。

## 关键词

#智能体记忆 #工作流 #基准 #回忆 #arXiv