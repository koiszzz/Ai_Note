---
published: 20260806
title: "训练后能否将 LLM 转变为因果推理者？"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Can Post-Training Transform LLMs into Causal Reasoners-.md"
source_note: "[[信息源/arXiv cs.AI RSS/Can Post-Training Transform LLMs into Causal Reasoners-]]"
source_sha256: fbf5956fa9afead43a4a9ab9569409cf5b4898c5a3e2de61b63acbc37991e011
original_url: "https://arxiv.org/abs/2602.06337"
processed: 2026-08-06
language: zh-CN

---

# 训练后能否将 LLM 转变为因果推理者？

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Junqi Chen, Sirui Chen, Chaochao Lu
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2602.06337)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Can Post-Training Transform LLMs into Causal Reasoners-|查看原始文件]]

## 摘要

- 因果推断对决策至关重要，但对非专家仍具挑战性；大语言模型（LLM）在此领域显示前景，但其精确因果估计能力仍有限，训练后对这些能力的影响尚未充分探索。
- 本文引入 CauGym，一个包含七个核心因果任务训练集和五个多样化测试集的综合数据集，系统评估五种训练后方法：SFT、DPO、KTO、PPO 和 GRPO。
- 实验表明适当的训练后使较小 LLM 能够进行竞争性因果推断，常超越大得多的模型：14B 参数模型在 CaLM 基准上达 93.5% 准确率，对比 OpenAI o3 的 55.4%；训练后 LLM 在分布偏移和噪声数据等真实世界条件下显示强泛化和鲁棒性。

## 正文

因果推断对决策至关重要，但对非专家仍具挑战性。虽然大语言模型（LLM）在此领域显示前景，其精确因果估计能力仍有限，训练后对这些能力的影响尚未充分探索。本文检验训练后能在多大程度上增强 LLM 的因果推断能力。我们引入 CauGym，一个包含七个核心因果任务训练集和五个多样化测试集的综合数据集。使用此数据集，我们系统评估五种训练后方法：SFT、DPO、KTO、PPO 和 GRPO。跨五个域内和四个现有基准，我们的实验表明，适当的训练后使较小 LLM 能够进行竞争性因果推断，常超越大得多的模型。我们的 14B 参数模型在 CaLM 基准上达 93.5% 准确率，对比 OpenAI o3 的 55.4%。此外，训练后 LLM 在分布偏移和噪声数据等真实世界条件下显示强泛化和鲁棒性。综合来看，这些发现提供了首个系统性证据：针对性训练后可产生可靠、鲁棒的基于 LLM 的因果推理者。我们的数据和 GRPO 模型可在此获取：https://github.com/OpenCausaLab/CauGym。

## 关键词

#因果推断 #训练后 #LLM #基准 #arXiv