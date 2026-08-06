---
title: "当压缩分数无法决定时：组稳健 LLM 剪枝的信息边界"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/When Compression Scores Cannot Decide- Information Boundaries for Group-Robust LLM Pruning.md"
source_note: "[[信息源/arXiv cs.AI RSS/When Compression Scores Cannot Decide- Information Boundaries for Group-Robust LLM Pruning]]"
source_sha256: 1ce22b2c1e1a8c25ad2885e147c7f558df83a90d1a756f0515a07137d177a1c8
original_url: "https://arxiv.org/abs/2608.02940"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# 当压缩分数无法决定时：组稳健 LLM 剪枝的信息边界

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Andrew Zhang
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02940)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/When Compression Scores Cannot Decide- Information Boundaries for Group-Robust LLM Pruning|查看原始文件]]

## 摘要

- 可复现的压缩统计量仍可能选择错误候选：0.906 折半信度的稠密剪枝分数预测 16.1% 增益，其选端点比两个对照差 6.0% 与 7.7%；通过信息接口建模该差距（界定每个统计量支持的区分）。
- 等权重组下锥定律给出正线性固定候选损伤的精确池化代价（含对角与全 PSD 二阶矩）；三种双世界构造与精确观测纤维半径刻画池化矩、组局部矩与参考路径曲率未解决的内容；组解析对角线恢复广泛损伤次序（Spearman 0.9239），细次序仍弱。
- 相对平衡均匀分配，粗深度分配在三个稠密 LLM 上把最差组困惑度膨胀降低 12.6–20.9%；模型特定完整掩码端点选择相对这些参考改善 2.7–8.0%；OLMoE 中路由器轨迹预测单例方向（114/192 对最强重标记下 81/192）；一层有限菜单决策产生留出最差组 KL 降低 13.7% 与 7.2%。
- 局部测量构建候选；选择由完整候选端点或经验证均匀保证授权，不确定性对每个比较校准。

## 正文

论文编号：arXiv:2608.02940v1（更新类型：new）。以下为摘要全文翻译。

可复现的压缩统计量仍可能选择错误的候选。一个折半信度 0.906 的稠密剪枝分数预测 16.1% 的增益。其选择的端点比两个对照差 6.0% 与 7.7%。我们通过信息接口建模这一差距：界定每个统计量支持哪些区分。对等权重组，一个锥定律给出正线性固定候选损伤的精确池化代价，包括对角与全 PSD 二阶矩。三种双世界构造与一个精确观测纤维半径刻画池化矩、组局部矩与参考路径曲率留下未解决的内容。一个组解析对角线恢复广泛的损伤次序（Spearman 0.9239），而细粒度次序仍然弱。相对平衡均匀分配，粗深度分配在三个稠密 LLM 上把最差组困惑度膨胀降低 12.6–20.9%。模型特定的完整掩码端点选择相对这些参考改善 2.7–8.0%。在 OLMoE 中，路由器轨迹预测单例方向（114/192 对比最强重标记下的 81/192）。一层上的有限菜单决策产生留出最差组 KL 的 13.7% 与 7.2% 降低。局部测量构建候选。选择由完整候选端点或经验证的均匀保证授权，不确定性对每个比较校准。

## 关键词

#LLM剪枝 #组稳健 #信息边界 #压缩
