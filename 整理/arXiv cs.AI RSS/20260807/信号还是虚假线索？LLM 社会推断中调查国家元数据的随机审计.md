---
published: 2026-08-07
title: "信号还是虚假线索？LLM 社会推断中调查国家元数据的随机审计"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Signal or Spurious Cue- A Randomized Audit of Survey-Country Metadata in LLM Social Inference.md"
source_note: "[[信息源/arXiv cs.AI RSS/Signal or Spurious Cue- A Randomized Audit of Survey-Country Metadata in LLM Social Inference]]"
source_sha256: eca2200d94fd0bb71ded8bc01fbbe841e8b3bba2402d232d979c039aa4605800
original_url: "https://arxiv.org/abs/2608.06085"
processed: 2026-08-07
language: zh-CN
---

# 信号还是虚假线索？LLM 社会推断中调查国家元数据的随机审计

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Yifan Lyu, Xinran Li, Jiaqi Qiao, Xiujuan Xu
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.06085)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Signal or Spurious Cue- A Randomized Audit of Survey-Country Metadata in LLM Social Inference|查看原始文件]]

## 摘要

- 调查国家元数据在信息丰富时可改进 LLM 对个体响应的预测，但同一线索在随机分配时可能重定向预测；记录内审计测试披露随机标签均匀、与记录无关的起源是否减少其国家导向摄取，以及验证调查国家是否降低留出 Brier 损失。
- 独立人群锚点与记录人类答案在五个固定 API 模型、六个国家与七个开发选择目标上测量方向与后果；主要审后 72 记录面板中，不透明与披露随机标签各产生 0.214 的国家方向偏移，配对衰减 0.0003（95% CI [-0.0157, 0.0166]）；验证国家将 Brier 损失降低 0.040（95% CI [0.024, 0.056]），而随机标签遗憾包含零。
- 非重叠混合覆盖一致性面板保留正向披露随机移动与验证效用，而衰减仍不确定；在选定目标上，验证元数据在两个面板中有用，但披露未能可靠衰减随机标签摄取。
- PROV-FORECAST 包含来自修正面板的 14,400 个配对条目级概率分布。

## 正文

调查国家元数据在信息丰富时可以改进 LLM 对个体响应的预测，但同一线索在随机分配时可能重定向预测。一个记录内（within-record）审计测试披露随机标签均匀、与记录无关的起源是否减少其国家导向的摄取，以及验证调查国家是否降低留出的 Brier 损失。独立人群锚点与记录的人类答案在五个固定 API 模型、六个国家与七个开发选择目标上测量方向与后果。在主要审后 72 记录面板中，不透明与披露的随机标签各产生 0.214 的国家方向偏移。配对衰减为 0.0003（95% CI [-0.0157, 0.0166]）。验证国家将 Brier 损失降低 0.040（95% CI [0.024, 0.056]），而随机标签的遗憾包含零。一个非重叠的混合覆盖一致性面板保留正向的披露随机移动与验证效用，而衰减仍不确定。在选定的目标上，验证元数据在两个面板中都有用，但披露未能可靠衰减随机标签的摄取。PROV-FORECAST 包含来自修正面板的 14,400 个配对条目级概率分布。

## 关键词

#LLM推断 #元数据审计 #随机对照 #社会预测
