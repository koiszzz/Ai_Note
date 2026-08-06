---
published: 2026-08-05
title: "当正确解重复时：GRPO 的稀有感知信用再分配"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/When Correct Solutions Repeat- Rarity-Aware Credit Redistribution for GRPO.md"
source_note: "[[信息源/arXiv cs.AI RSS/When Correct Solutions Repeat- Rarity-Aware Credit Redistribution for GRPO]]"
source_sha256: 7daebeffaee2068a717fae3fea2e3d6ce83d5c2d175a1be343bafc15bb50d1b6
original_url: "https://arxiv.org/abs/2608.03467"
processed: 2026-08-05
language: zh-CN
---

# 当正确解重复时：GRPO 的稀有感知信用再分配

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Zhe Cao、Miaowen Wen、Fangjiong Chen
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03467)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/When Correct Solutions Repeat- Rarity-Aware Credit Redistribution for GRPO|查看原始文件]]

## 摘要

- 形式化完成级均匀性造成的结构级偏差：重复出现的正确解形式按采样频率成比例累积正系数质量，而稀有形式获得有限信用——称为多重性诱导的结构级信用集中；引入分区条件规则，按簇稀有性再分配正优势。
- 可验证奖励强化学习（RLVR）通常把每个正确完成作为独立学习信号优化；GRPO 中该完成级均匀性创造结构级倾斜。
- Cue-GRPO 无辅助模型推理实例化该规则：用确定性策略线索构造验证正确轨迹的 rollout 局部划分；Qwen2.5-Math-7B 与 Llama-3.1-8B-Instruct 上，Cue-GRPO 改善 AIME 重复采样性能，高采样预算下增益最大；评判者划分（JP）下的信用再分配（CR）进一步表明所提机制可与评判者派生划分运作。
- Cue-GRPO 相对 GRPO 仅增加 6% 墙钟训练开销——支持结构级信用再分配作为 RLVR 的实用设计轴，策略线索为竞赛数学提供低开销实现；代码：https://github.com/CzZ12/When-Correct-Solutions-Repeat-Rarity-Aware-Credit-Redistribution-for-GRPO

## 正文

论文编号：arXiv:2608.03467v1（更新类型：new）。以下为摘要全文翻译。

可验证奖励强化学习（RLVR）通常把每个正确完成作为独立学习信号优化。在 GRPO 中，这种完成级均匀性创造结构级倾斜：反复出现的正确解形式按被采样频率成比例累积正系数质量，而稀有形式获得有限信用。我们形式化这一行为为多重性诱导的结构级信用集中（multiplicity-induced structure-level credit concentration），并引入一个分区条件规则：根据簇稀有性再分配正优势。Cue-GRPO 无辅助模型推理实例化该规则：使用确定性策略线索构造验证正确轨迹的 rollout 局部划分。在 Qwen2.5-Math-7B 与 Llama-3.1-8B-Instruct 上，Cue-GRPO 改善 AIME 重复采样性能，最大增益出现在高采样预算下。评判者划分（Judge Partitions，JP）下的信用再分配（Credit Redistribution，CR）进一步表明，所提再分配机制可以与评判者派生的划分运作。Cue-GRPO 相对 GRPO 只增加 6% 的墙钟训练开销。这些结果支持结构级信用再分配作为 RLVR 的实用设计轴，而策略线索（Strategy Cues）为竞赛数学提供低开销实现。代码可在 https://github.com/CzZ12/When-Correct-Solutions-Repeat-Rarity-Aware-Credit-Redistribution-for-GRPO 获取。

## 关键词

#GRPO #信用分配 #稀有感知 #RLVR
