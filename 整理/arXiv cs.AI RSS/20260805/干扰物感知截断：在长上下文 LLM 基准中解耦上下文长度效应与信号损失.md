---
published: 2026-08-05
title: "干扰物感知截断：在长上下文 LLM 基准中解耦上下文长度效应与信号损失"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Distractor-Aware Truncation- Disentangling Context-Length Effects from Signal Loss in Long-Context L.md"
source_note: "[[信息源/arXiv cs.AI RSS/Distractor-Aware Truncation- Disentangling Context-Length Effects from Signal Loss in Long-Context L]]"
source_sha256: 55ae24768d328a55561de101aeb1e8ff0707ab71c51e522b119ffb291140bb5d
original_url: "https://arxiv.org/abs/2608.03297"
processed: 2026-08-05
language: zh-CN
---

# 干扰物感知截断：在长上下文 LLM 基准中解耦上下文长度效应与信号损失

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Mohsen Arjmandi
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03297)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Distractor-Aware Truncation- Disentangling Context-Length Effects from Signal Loss in Long-Context L|查看原始文件]]

## 摘要

- 检验“保留相关信息时更短上下文更好”这一说法：在两种截断协议下，把 BABILong 与 GraphWalks（BFS）两个长上下文基准的每个样本在四种上下文保留比例（100%/75%/50%/25%）下运行。
- 朴素协议（丢弃提示中间内容）下分数单调崩坏；干扰物感知协议（识别任务相关内容并只丢弃其余部分）下性能保持或改善——较小的两个 Claude 模型在 BABILong 上有统计显著提升，较大模型（Opus 4.7 与 GPT-5.5）停留在其全上下文天花板。
- 在 25% 保留比例下，朴素协议中承载答案的内容在不到 1% 的样本中幸存；干扰物感知协议按构造保留它。朴素协议因此测的不是上下文窗口效应，而是“中间删除碰巧放过答案”的频率。
- 结论：未来研究上下文长度效应时必须说明如何区分信号与干扰物，否则至多在这两个相反假设之间保持歧义。

## 正文

论文编号：arXiv:2608.03297v1（更新类型：new）。以下为摘要全文翻译。

检索增强与记忆增强语言模型文献中的一个标准主张是：在相关信息得到保留时，更短的上下文更好。我们通过在两种截断协议下，把两个长上下文基准（BABILong 和 GraphWalks（BFS））的每个样本以四种上下文保留比例（100%、75%、50%、25%）运行来检验这一主张。第一种是许多先前工作隐式使用的朴素协议：从提示中间删除内容。第二种是干扰物感知的：识别每个样本的任务相关内容，只删除其余部分。我们评估 Claude 家族的三种规模（Haiku 4.5、Sonnet 4.6、Opus 4.7），并测试跨厂商通用性，评估来自不同厂商的 GPT-5.5；同样的协议也应用于另外两个基准（MRCR v2、Oolong）。在朴素截断下，分数单调崩坏（配对 Wilcoxon，Holm 校正 p_adj < 0.05，覆盖全部八个 BABILong 和 GraphWalks 单元）。在干扰物感知协议下（按构造保留信号），性能保持或改善：两个较小的 Claude 模型在 BABILong 上表现出统计显著提升，而较大的模型（Opus 4.7 与 GPT-5.5）处于其全上下文天花板。朴素崩坏及其干扰物感知恢复在 GPT-5.5 上复现，排除了单一厂商的假象。机制是直接的：在朴素协议下，承载答案的内容在 25% 保留比例时于不到 1% 的样本中幸存；在干扰物感知协议下它按构造得到保留。因此，朴素协议不是对上下文窗口效应的测量；它测量的是“中间删除碰巧放过答案”的频率。我们得出结论：未来研究上下文长度效应时，必须说明如何区分信号与干扰物，否则其结果至多在这两个相反的假设之间保持歧义。

## 关键词

#长上下文 #基准测试 #截断 #检索增强
