---
published: 2026-08-07
title: "预算感知的 LLM 发现：通过成本校准的前沿效用"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Budget-Aware LLM Discovery via Cost-Calibrated Frontier Utility.md"
source_note: "[[信息源/arXiv cs.AI RSS/Budget-Aware LLM Discovery via Cost-Calibrated Frontier Utility]]"
source_sha256: d9c73da9a688652c8115836dd4f7616d2ece3f0014e4d4480cda09751f756bbd
original_url: "https://arxiv.org/abs/2607.26828"
processed: 2026-08-07
language: zh-CN
---

# 预算感知的 LLM 发现：通过成本校准的前沿效用

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Yansen Zhang, Yilu Liu, Tianyu Liu, Jiamin Chen, Xiaokun Zhang, Kai Xie, Xue Liu, Yiyan Qi, Chen Ma
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.26828)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Budget-Aware LLM Discovery via Cost-Calibrated Frontier Utility|查看原始文件]]

## 摘要

- 大语言模型日益通过推理时对已评估候选的搜索支持科学与算法发现；现有自适应发现控制器只基于分数进展分配信用，而提示长度、重试与引导调用使搜索动作产生不同 token 成本。
- 论文证明无视成本的信用在前沿倍增且成本分化时可能放弃除可忽略部分外的全部可达质量；在固定搜索侧 token 预算下，控制器必须在预算耗尽前决定哪个前沿在改进、其增益是否值得已实现成本。
- 引入 CostAda：围绕成本校准前沿效用（cost-calibrated frontier utility）构建的成本校准自适应控制器——效用将前沿进展相对已实现动作成本估值，并将信用条件化于剩余预算；CostAda 用该信号控制局部探索强度、前沿分配与预算化战术干预，使成本与剩余预算塑造搜索而非仅作为会计变量或停止规则。
- 在十六个基准-骨干组合中的十二个上，CostAda 以至多一半预算达到最强基线的全预算质量，并在 GLM-5 与 GPT-5.4 下的全部八个基准上取得最强平均最终质量。

## 正文

大语言模型日益通过推理时对已评估候选的搜索来支持科学与算法发现。现有自适应发现控制器只基于分数进展分配信用，尽管提示长度、重试与引导调用使搜索动作产生不同的 token 成本。我们证明，随着前沿倍增且成本分化，无视成本的信用可能放弃除可忽略部分之外的全部可达质量。在固定搜索侧 token 预算下，控制器必须在预算耗尽前决定哪个前沿在改进，以及其增益是否值得已实现成本。我们引入 CostAda，一个围绕成本校准前沿效用（cost-calibrated frontier utility）构建的成本校准自适应控制器。该效用将前沿进展相对于已实现动作成本估值，并将信用条件化于剩余预算。CostAda 使用该信号控制局部探索强度、前沿分配与预算化战术干预。因此，成本与剩余预算塑造搜索，而非仅作为会计变量或停止规则。在十六个基准-骨干组合中的十二个上，CostAda 以至多一半的预算达到最强基线的全预算质量，同时在 GLM-5 与 GPT-5.4 下于全部八个基准上取得最强的平均最终质量。

## 关键词

#LLM搜索 #预算感知 #自适应控制器 #成本校准
