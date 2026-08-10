---
published: 2026-08-07
title: "预算感知的 LLM 发现：成本校准的前沿效用"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Budget-Aware LLM Discovery via Cost-Calibrated Frontier Utility.md"
source_note: "[[信息源/arXiv cs.LG RSS/Budget-Aware LLM Discovery via Cost-Calibrated Frontier Utility]]"
source_sha256: 7bdf0c823675c61d5fa6d4fac0a6982a07360c5e94cfa550aab600a90186959c
original_url: "https://arxiv.org/abs/2607.26828"
processed: 2026-08-07
language: zh-CN
---

# 预算感知的 LLM 发现：成本校准的前沿效用

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Yansen Zhang, Yilu Liu, Tianyu Liu, Jiamin Chen, Xiaokun Zhang, Kai Xie, Xue Liu, Yiyan Qi, Chen Ma
> - **发布时间**：2026-08-07
> - **分类**：cs.LG
> - **原文**：[打开链接](https://arxiv.org/abs/2607.26828)

## 摘要

- 大语言模型通过推理时搜索支持科学与算法发现；现有自适应发现控制器仅基于分数进展分配信用，忽略提示长度、重试与引导调用造成的不同 token 成本。
- 证明成本盲信用在前沿倍增、成本分化时会放弃除消失部分外几乎所有可达质量。
- 提出 CostAda：成本校准自适应控制器，以成本校准前沿效用为核心，效用将前沿进展相对实际动作成本价值化，并将信用条件化于剩余预算。
- 在 16 对基准-骨干中的 12 对，用至多半预算达到最强基线全预算质量，并在 GLM-5 与 GPT-5.4 下于全部 8 个基准取得最强平均最终质量。

## 正文

大语言模型日益通过评估候选上的推理时搜索支持科学与算法发现。现有自适应发现控制器仅基于分数进展分配信用，尽管提示长度、重试与引导调用使搜索动作承担不同 token 成本。研究证明：随着前沿倍增、成本分化，成本盲信用会放弃除消失部分外几乎所有可达质量。在固定搜索侧 token 预算下，控制器必须在预算耗尽前决定哪个前沿在改进、其增益是否值得已发生的成本。研究提出 CostAda，一个围绕成本校准前沿效用构建的成本校准自适应控制器。效用将前沿进展相对实际动作成本价值化，并将信用条件化于剩余预算。CostAda 用该信号控制局部探索强度、前沿分配与预算化的策略干预，成本与剩余预算因此塑造搜索本身，而不只是充当记账变量或停止规则。在 16 对基准-骨干组合中的 12 对上，CostAda 用至多一半预算达到最强基线的全预算质量，并在 GLM-5 与 GPT-5.4 下于全部 8 个基准取得最强平均最终质量。

## 关键词

LLM 发现、推理时搜索、预算感知、成本校准、自适应控制
