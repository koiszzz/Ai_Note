---
published: 2026-08-06
title: 后训练能否将 LLM 转变为因果推理者？
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/Can Post-Training Transform LLMs into Causal Reasoners-.md
source_note: "[[信息源/arXiv cs.CL RSS/Can Post-Training Transform LLMs into Causal Reasoners-]]"
source_sha256: 62471b8480596f7bf9d2bf2116a044514d80d7b4c1199369510086ca7741b96d
original_url: https://arxiv.org/abs/2602.06337
processed: 2026-08-07
language: zh-CN
---

# 后训练能否将 LLM 转变为因果推理者？

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2602.06337)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/Can Post-Training Transform LLMs into Causal Reasoners-|查看原始文件]]

## 摘要

- 引入 CauGym 综合数据集：七个核心因果任务用于训练，五个多样化测试集用于评估
- 系统评估 SFT、DPO、KTO、PPO、GRPO 五种后训练方法，证明适当的后训练使较小 LLM 的因果推断具有竞争力
- 14B 参数模型在 CaLM 基准上达到 93.5% 准确率，而 OpenAI o3 为 55.4%
- 后训练 LLM 在分布偏移和噪声数据等真实条件下表现出强泛化与鲁棒性，提供首个系统性证据

## 正文

因果推断对于决策至关重要，但对非专家而言仍具挑战。虽然大语言模型（LLM）在该领域显示出前景，但其精确因果估计能力仍然有限，且后训练对这些能力的影响尚未得到充分探索。本文考察后训练在多大程度上能增强 LLM 的因果推断能力。

我们引入 CauGym，一个包含七个核心因果任务训练集和五个多样化测试集的综合数据集。利用该数据集，我们系统评估了五种后训练方法：SFT、DPO、KTO、PPO 和 GRPO。在五个域内基准和四个现有基准上，我们的实验表明，适当的后训练能使较小的 LLM 具备有竞争力的因果推断能力，往往超越大得多的模型。我们的 14B 参数模型在 CaLM 基准上达到 93.5% 的准确率，而 OpenAI o3 为 55.4%。

此外，后训练的 LLM 在分布偏移和噪声数据等真实世界条件下表现出强大的泛化能力和鲁棒性。总之，这些发现首次提供了系统性证据，表明有针对性的后训练可以产生可靠且稳健的基于 LLM 的因果推理者。我们的数据和 GRPO 模型可在 https://github.com/OpenCausaLab/CauGym 获取。

## 关键词

#因果推理 #后训练 #LLM #CauGym #arXiv
