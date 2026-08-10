---
published: 2026-08-07
title: "BenHalluEval：孟加拉语大语言模型的多任务幻觉评估框架"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/BenHalluEval- A Multi-Task Hallucination Evaluation Framework for Large Language Models on Bengali.md"
source_note: "[[信息源/arXiv cs.AI RSS/BenHalluEval- A Multi-Task Hallucination Evaluation Framework for Large Language Models on Bengali]]"
source_sha256: 936f78a5f10fb8599cfa378dd21b9829eb743c18b0215c3f6eb5a4f9494cc436
original_url: "https://arxiv.org/abs/2605.31483"
processed: 2026-08-07
language: zh-CN
---

# BenHalluEval：孟加拉语大语言模型的多任务幻觉评估框架

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Shefayat E Shams Adib, Ahmed Alfey Sani, Ekramul Alam Esham, Ajwad Abrar, Ishmam Tashdeed, Md Taukir Azam Chowdhury
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2605.31483)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/BenHalluEval- A Multi-Task Hallucination Evaluation Framework for Large Language Models on Bengali|查看原始文件]]

## 摘要

- 尽管孟加拉语是世界第六大语言，此前没有工作系统评估 LLM 在孟加拉语中的幻觉。
- 引入 BenHalluEval：孟加拉语细粒度幻觉评估框架，覆盖四项任务——生成式问答（GQA）、孟英代码混合问答、摘要与推理。
- 使用 GPT-5.4 在十二种任务特定幻觉类型中构建 12,000 个幻觉候选（源自三个现有孟加拉语数据集），并在双轨协议下评估七个 LLM（覆盖推理导向、多语言与孟加拉语中心类别），独立测量真实实例上的假阳性率（A 轨）与幻觉候选上的幻觉检出率（B 轨）。
- 提出 BenHalluScore 双轨校准指标（跨模型与任务从 7.72% 到 55.42%），揭示幻觉校准的显著差异；作为缓解策略的思维链提示会改变响应分布却不一致改善幻觉判别。该框架建立首个孟加拉语专用幻觉基准，凸显低资源语言设置中单轨与仅提示评估方法的不足。

## 正文

尽管孟加拉语是世界第六大使用语言，此前没有工作系统评估过大语言模型（LLM）在孟加拉语中的幻觉。我们引入 BenHalluEval，一个覆盖四项任务的孟加拉语细粒度幻觉评估框架：生成式问答（GQA）、孟加拉语-英语代码混合问答、摘要与推理。我们使用 GPT-5.4 在十二种任务特定幻觉类型中构建了 12,000 个幻觉候选，取自三个现有孟加拉语数据集，并在双轨协议下评估七个 LLM（涵盖推理导向、多语言与孟加拉语中心类别），该协议独立测量真实实例上的假阳性率（A 轨）与幻觉候选上的幻觉检出率（B 轨）。为同时惩罚两种失败模式并防止统一响应偏差造成虚高分数，我们提出 BenHalluScore，一个双轨校准指标，跨模型与任务从 7.72% 到 55.42%，揭示幻觉校准的巨大差异。作为缓解策略应用的思维链提示会改变响应分布，却不一致地改善幻觉判别。BenHalluEval 建立了孟加拉语首个专用幻觉基准，并凸显低资源语言设置中单轨与仅提示评估方法的不足。数据集与代码可在 https://anonymous.4open.science/r/BanglaHalluEval-EB77 获取。

## 关键词

#幻觉评估 #孟加拉语 #低资源语言 #LLM基准
