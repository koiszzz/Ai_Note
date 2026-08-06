---
title: "当正确解重复时：GRPO 的稀有感知信用再分配"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/When Correct Solutions Repeat- Rarity-Aware Credit Redistribution for GRPO.md"
source_note: "[[信息源/arXiv cs.LG RSS/When Correct Solutions Repeat- Rarity-Aware Credit Redistribution for GRPO.]]"
source_sha256: 06289fd3a62e0592f7bd15f59b99c9469e540bd7800d988a9cab57272d4cd701
original_url: "https://arxiv.org/abs/2608.03467"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# 当正确解重复时：GRPO 的稀有感知信用再分配

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Zhe Cao、Miaowen Wen、Fangjiong Chen
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03467)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/When Correct Solutions Repeat- Rarity-Aware Credit Redistribution for GRPO.|查看原始文件]]

## 摘要

- 带可验证奖励的强化学习（RLVR）通常把每个正确完成优化为独立学习信号；GRPO 中这种完成级均匀性造成结构级倾斜：反复出现的正确解形式按采样频率成比例积累正系数质量，而稀有形式只收到有限信用。
- 把该行为形式化为多重性诱导的结构级信用集中，引入分区条件规则：按簇稀有性再分配正优势。
- Cue-GRPO 无需辅助模型推理即实例化该规则：用确定性策略提示构造已验证正确轨迹的 rollout 局部划分。
- Qwen2.5-Math-7B 与 Llama-3.1-8B-Instruct 上，Cue-GRPO 改善 AIME 重复采样性能，高采样预算下增益最大。
- 评判者分区（JP）下的信用再分配（CR）进一步表明所提再分配机制可用评判者派生分区运作。
- Cue-GRPO 相对 GRPO 只增加 6% 墙钟训练开销；结果支持结构级信用再分配作为 RLVR 的实用设计轴，策略提示为竞赛数学提供低开销实现。
- 代码：https://github.com/CzZ12/When-Correct-Solutions-Repeat-Rarity-Aware-Credit-Redistribution-for-GRPO

## 正文

论文编号：arXiv:2608.03467v1（更新类型：cross）。以下为摘要全文翻译。

带可验证奖励的强化学习（RLVR）通常把每个正确的完成作为独立的学习信号优化。在 GRPO 中，这种完成级的均匀性产生结构级的倾斜：反复出现的正确解形式按它们被采样的频率成比例地积累正系数质量，而稀有形式收到有限的信用。我们把这一行为形式化为多重性诱导的结构级信用集中，并引入一个分区条件规则，按簇稀有性再分配正优势。Cue-GRPO 无需辅助模型推理即可实例化该规则，它使用确定性策略提示构建已验证正确轨迹的 rollout 局部划分。在 Qwen2.5-Math-7B 与 Llama-3.1-8B-Instruct 上，Cue-GRPO 改善 AIME 的重复采样性能，高采样预算下增益最大。评判者分区（Judge Partitions，JP）下的信用再分配（Credit Redistribution，CR）进一步表明，所提出的再分配机制可以用评判者派生的分区运作。Cue-GRPO 相对 GRPO 只增加 6% 的墙钟训练开销。这些结果支持结构级信用再分配作为 RLVR 的一个实用设计轴，策略提示（Strategy Cues）为竞赛数学提供低开销的实现。代码可在 https://github.com/CzZ12/When-Correct-Solutions-Repeat-Rarity-Aware-Credit-Redistribution-for-GRPO 获取。

## 关键词

#GRPO #RLVR #信用分配 #稀有感知 #竞赛数学
