---
title: "SparSEEty：通过确定性侧信道从利用稀疏性的 LLM 服务系统提取 token"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/SparSEEty- Extracting Tokens from Sparsity-Exploiting LLM Serving Systems via Deterministic Side Cha.md"
source_note: "[[信息源/arXiv cs.AI RSS/SparSEEty- Extracting Tokens from Sparsity-Exploiting LLM Serving Systems via Deterministic Side Cha]]"
source_sha256: 25d9780cd8f6f7fdb07d150d1b4274733605988061cccd8ad0ccb8c2bc001ec7
original_url: "https://arxiv.org/abs/2608.02995"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# SparSEEty：通过确定性侧信道从利用稀疏性的 LLM 服务系统提取 token

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Yongwan Jo、Jinyoung Park、Euihyun Lee 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02995)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/SparSEEty- Extracting Tokens from Sparsity-Exploiting LLM Serving Systems via Deterministic Side Cha|查看原始文件]]

## 摘要

- 提出 SparSEEty，利用稀疏性利用 LLM 服务系统引入的输入相关神经元权重访问的 token 提取攻击：先利用 LLM 推理期间的神经元权重访问侧信道构建神经元激活预言机，再反转激活轨迹重建输入 token，形成端到端 token 提取攻击。
- 现代 LLM 表现出激活稀疏性：给定输入 token 只有部分神经元被激活；研究者利用该性质通过省略非活跃神经元的权重访问与计算来优化服务系统，但此类优化创造输入相关的权重访问，可经侧信道泄露。
- 在受 Intel TDX 机密虚拟机（CVM）保护的 LLM 服务系统上实例化，应对三个关键挑战：（i）组合 CVM 暴露的侧信道构建神经元激活预言机；（ii）降低推理期间神经元激活监控开销以保持隐蔽；（iii）把部分二元激活轨迹准确反转回 token。
- 评估显示跨各种模型与数据集，提示与响应 token 重建 BLEU 分数一致高于 0.95，监控开销 3.7%–7.2%。

## 正文

论文编号：arXiv:2608.02995v1（更新类型：cross）。以下为摘要全文翻译。

现代大语言模型（LLM）表现出激活稀疏性：给定输入 token 只有一部分神经元被激活。研究者已利用这一性质优化 LLM 服务系统：省略与非活跃神经元相关的权重访问与计算。然而不幸的是，此类优化创造了输入相关的权重访问，这些访问可以通过侧信道泄露。我们提出 SparSEEty，一种利用稀疏性利用 LLM 服务系统引入的输入相关神经元权重访问的新 token 提取攻击。SparSEEty 首先在 LLM 推理期间利用神经元权重访问侧信道构建神经元激活预言机，然后把激活轨迹反转以重建输入 token，形成端到端的 token 提取攻击。我们在受 Intel TDX 机密虚拟机（CVM）保护的 LLM 服务系统上实例化 SparSEEty，应对三个关键挑战：（i）组合 CVM 暴露的侧信道构建神经元激活预言机；（ii）降低推理期间神经元激活监控的开销以保持隐蔽；（iii）把部分二元激活轨迹准确反转回 token。我们的评估表明，SparSEEty 跨各种模型与数据集一致以高 BLEU 分数（>0.95）重建提示与响应 token，监控开销为 3.7% 到 7.2%。

## 关键词

#侧信道 #token提取 #机密计算 #LLM服务
