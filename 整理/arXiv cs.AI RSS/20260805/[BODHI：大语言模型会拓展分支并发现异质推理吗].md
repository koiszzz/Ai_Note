---
published: 2026-08-05
title: "BODHI：大语言模型会拓展分支并发现异质推理吗"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/BODHI- Do LLMs Branch Out and Discover Heterogeneous Inferences-.md"
source_note: "[[信息源/arXiv cs.AI RSS/BODHI- Do LLMs Branch Out and Discover Heterogeneous Inferences-]]"
source_sha256: 79d928d00bd7c255279b6f1bcc6275db000e6bbb47366f4ebb9ae9e456ffa310
original_url: "https://arxiv.org/abs/2608.02867"
processed: 2026-08-05
language: zh-CN
---

# BODHI：大语言模型会拓展分支并发现异质推理吗

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02867)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/BODHI- Do LLMs Branch Out and Discover Heterogeneous Inferences-|查看原始文件]]

## 摘要

- 尽管带可验证奖励的强化学习（RLVR）提升了大语言模型在多种推理任务上的表现，但 RLVR 究竟拓展了推理能力边界，还是仅仅改善了采样效率，仍存在较大争议。
- 论文通过受控迷宫求解实验研究经过 RLVR 训练的模型在测试时的探索，并根据数学推理轨迹中的语义等价关系提取树结构，形成 BODHI-Trees。
- 这种方法帮助研究者区分由文体变化产生的熵与真正推理分支产生的熵。
- 结果显示，RLVR 模型中的策略熵坍缩并不只是句法层面的现象，同时伴随着语义分支熵的显著下降。
- RLVR 提高了模型遵守环境约束和回溯的能力，但也压缩了后续延续的空间。证据表明，这可能是 RLVR 获得样本效率提升的原因之一，但代价是真实 rollout 多样性下降。

## 正文

带可验证奖励的强化学习（RLVR）已经提升了大语言模型在多种推理任务上的性能，但 RLVR 是否真正拓展了模型的推理能力边界，还是只改善了采样效率，仍然存在重要争论。

本文研究经过 RLVR 训练的大语言模型在测试时的探索性质。作者采用受控的迷宫求解实验，并根据数学推理轨迹中的语义等价关系提取树结构，构建 BODHI-Trees。该方法能够区分两类熵：由表达风格变化产生的熵，以及由真实推理分支产生的熵。

研究发现，RLVR 模型观察到的策略熵坍缩并不只是句法现象，而是同时伴随着语义分支熵的显著下降。RLVR 确实提升了模型遵守环境约束和执行回溯的能力，但也收窄了后续延续的空间。

论文给出的证据表明，延续空间收窄可能正是 RLVR 获得样本效率提升的原因之一；不过，这种收益付出了真实 rollout 多样性下降的代价。

## 关键词

#强化学习 #可验证奖励 #推理探索 #策略熵 #语义分支 #大语言模型
