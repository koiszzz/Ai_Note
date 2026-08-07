---
published: 20260806
title: "CARGO-VL：视觉-语言模型的反事实仲裁与风险约束组优化"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/CARGO-VL- Counterfactual Arbitration with Risk-Constrained Group Optimization for Vision-Language Mo.md"
source_note: "[[信息源/arXiv cs.AI RSS/CARGO-VL- Counterfactual Arbitration with Risk-Constrained Group Optimization for Vision-Language Mo]]"
source_sha256: 582dc6174d8c4b2d599ec09bd40075207cc25a5a99945cef0230590ffc934f62
original_url: "https://arxiv.org/abs/2608.04509"
processed: 2026-08-06
language: zh-CN

---

# CARGO-VL：视觉-语言模型的反事实仲裁与风险约束组优化

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：De Jiang, Zhengyang Zhang, Kehong Yuan, Shaohua Ma
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04509)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/CARGO-VL- Counterfactual Arbitration with Risk-Constrained Group Optimization for Vision-Language Mo|查看原始文件]]

## 摘要

- 视觉-语言系统结合图像与检索文本，但这些来源可能不一致或共同无法支持答案；可靠模型必须识别可信来源并在两者都不足时弃权，现有训练后目标独立评分实例，不强制反事实证据变化下的连贯行为。
- 本文引入 CARGO-VL，一个组相对框架，将覆盖对齐、图像正确、文本正确和双错（A/V/T/N）证据状态的匹配变体作为一个捆绑优化：目标耦合条件正确性与答案不变性、来源等变性和答案到弃权切换的转换奖励，原始-对偶控制器平衡不安全答案与过度延迟。
- 贡献 XMC（扩展模态冲突）四条件冲突训练资源，并在 CMC-Bench 和 Modality-Bias 上评估迁移；CARGO-VL 在冲突处理、不支持答案避免和模态平衡上优于逐点基线。

## 正文

视觉-语言系统结合图像与检索文本，但这些来源可能不一致或共同无法支持答案。可靠模型必须识别可信来源，并在两者都不足时弃权。现有训练后目标独立评分实例，因此不强制反事实证据变化下的连贯行为。我们引入 CARGO-VL，一个组相对框架，将覆盖对齐、图像正确、文本正确和双错（A/V/T/N）证据状态的匹配变体作为一个捆绑优化。其目标将条件正确性与答案不变性、来源等变性以及答案到弃权切换的转换奖励耦合，而原始-对偶控制器平衡不安全答案与过度延迟。我们还贡献 XMC（eXtended Modal Conflict，扩展模态冲突），一个四条件冲突训练资源，并在 CMC-Bench 和 Modality-Bias 上评估迁移。跨多个种子，CARGO-VL 在冲突处理、不支持答案避免和模态平衡上优于逐点基线。消融识别关系转换信号和自适应风险控制的互补收益，支持反事实一致性作为可靠多模态证据仲裁的实用目标。

## 关键词

#视觉语言模型 #反事实 #多模态仲裁 #风险控制 #arXiv