---
published: 20260806
title: "SciCode-Verified：基准缺陷如何低估语言模型的科学编码能力"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/SciCode-Verified- How Benchmark Defects Underestimated the Scientific-Coding Ability of Language Mod.md"
source_note: "[[信息源/arXiv cs.AI RSS/SciCode-Verified- How Benchmark Defects Underestimated the Scientific-Coding Ability of Language Mod]]"
source_sha256: 13642d05017f7ab714a8154dfa700a3d18742a7c384b5e463043e8a0769cb555
original_url: "https://arxiv.org/abs/2608.04975"
processed: 2026-08-06
language: zh-CN

---

# SciCode-Verified：基准缺陷如何低估语言模型的科学编码能力

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Sihan Hu, Lyuhan Huang, Youjin Deng, Kun Chen
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04975)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/SciCode-Verified- How Benchmark Defects Underestimated the Scientific-Coding Ability of Language Mod|查看原始文件]]

## 摘要

- SciCode 是语言模型科学编码能力的标准度量：研究级问题，要求前沿科学理论及其作为可用数值代码的实现；它是 Artificial Analysis Intelligence Index 的组件和政府与国家实验室套件的常设评估，但分数近期停滞：2026 年最强模型紧密聚集在约 60% 子问题准确率。
- 本文将停滞追溯到基准本身缺陷：全部 65 个测试问题的逐问题领域专家审计发现 263 个缺陷，其中 192 个（散布 91% 主问题）导致正确、遵循指令的解决方案被错误拒绝——通过不可复现金答案、过紧容差或自相矛盾规格。
- 纠正每个可确认缺陷产生 SciCode-Verified：十二个前沿模型快照重新评估显示子问题准确率从 45-60% 升至 84-98%，主问题准确率从 9-27% 升至 69-92%；最先进模型科学编码熟练度远超 SciCode 所示——瓶颈不是模型能力，而是评估工具质量。

## 正文

SciCode 是语言模型科学编码能力的标准度量：研究级问题，要求前沿科学理论及其作为可用数值代码的实现。它是 Artificial Analysis Intelligence Index 的组件，也是政府和国家实验室套件的常设评估。然而其分数近期停滞：2026 年最强模型紧密聚集在约 60% 子问题准确率，继任模型与其前任持平。我们将此停滞追溯到基准本身的缺陷。全部 65 个测试问题的逐问题、领域专家审计发现 263 个缺陷；其中 192 个（散布 91% 主问题）导致正确、遵循指令的解决方案被错误拒绝——通过不可复现金答案、过紧容差或自相矛盾规格。关键的是，这些抑制分数的缺陷中 78% 需要专门物理或数学知识检测，而非纯文书校对。我们纠正每个可确认缺陷产生 SciCode-Verified。纠正仅添加良定义问题所需规格、修复评分并收紧过宽测试；每个变更记录其理由并由第二位领域专家独立重新检查。我们在纠正基准上重新评估十二个前沿模型快照，发现显著恢复：子问题准确率从 45-60% 升至 84-98%，主问题准确率从 9-27% 升至 69-92%。最先进模型在科学编码上的熟练度远超 SciCode 所示——瓶颈不是模型能力，而是评估工具的质量。我们发布 SciCode-Verified 及其完整审计轨迹，作为纠正后的公开标准。

## 关键词

#科学编码 #基准缺陷 #审计 #语言模型 #arXiv