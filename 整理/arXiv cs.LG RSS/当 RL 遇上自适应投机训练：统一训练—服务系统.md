---
title: "当 RL 遇上自适应投机训练：统一训练—服务系统"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/When RL Meets Adaptive Speculative Training- A Unified Training-Serving System.md"
source_note: "[[信息源/arXiv cs.LG RSS/When RL Meets Adaptive Speculative Training- A Unified Training-Serving System.]]"
source_sha256: c46d62ddd71c3e06ba4ea7a44a264de99cef1fe353e16056af3268e0192a9ac9
original_url: "https://arxiv.org/abs/2602.06932"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# 当 RL 遇上自适应投机训练：统一训练—服务系统

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Junxiong Wang、Fengxiang Bie、Jisen Li、Zhongzhu Zhou、Zelei Shao、Yubo Wang、Yinghui Liu、Qingyang Wu、Avner May、Sri Yanamandra、Ce Zhang、Tri Dao、Percy Liang、Ben Athiwaratkun、Shuaiwen Leon Song、Chenfeng Xu、Xiaoxia Wu
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2602.06932)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/When RL Meets Adaptive Speculative Training- A Unified Training-Serving System.|查看原始文件]]

## 摘要

- 投机解码可显著加速 LLM 服务，但如今多数部署把投机者训练与服务解耦，把投机者训练当作独立离线建模问题；表明这种解耦公式引入大量部署与适应滞后：(1) 高服务就绪时间——投机者必须在部署前离线训练相当长时间；(2) 延迟效用反馈——真实端到端解码加速只在训练后得知，且因模型架构与系统级开销无法仅从接受率可靠推断；(3) 领域漂移退化——目标模型被改用于新领域时投机者变陈旧、效果降低。
- 提出 Aurora，一个统一训练—服务系统：直接从在线推理轨迹持续学习投机者，闭合循环。
- Aurora 把在线投机者学习重构为异步强化学习问题：接受 token 提供正反馈，被拒投机提案提供隐式负反馈（利用其改善样本效率）。
- 设计整合基于 SGLang 的推理服务器与异步训练服务器，实现无需服务中断的热切换投机者更新。
- 关键地，Aurora 支持第零天部署：投机者可立即服务并快速适应在线流量，改善系统性能并提供即时效用反馈。
- 实验中 Aurora 在近期发布的前沿模型（如 MiniMax M2.1 229B 与 Qwen3-Coder-Next 80B）上取得 1.5 倍第零天加速；Aurora 还有效适应用户流量分布偏移，在广泛使用模型（如 Qwen3 与 Llama3）上比训练良好但静态的投机者额外提供 1.25 倍加速。

## 正文

论文编号：arXiv:2602.06932v5（更新类型：replace）。以下为摘要全文翻译。

投机解码可以显著加速 LLM 服务，然而如今大多数部署把投机者训练与服务解耦，把投机者训练当作一个独立的离线建模问题。我们表明这种解耦公式引入可观的部署与适应滞后：(1) 高服务就绪时间，因为投机者必须在部署前离线训练相当长的时间；(2) 延迟的效用反馈，因为真正的端到端解码加速只在训练后得知，且由于模型架构与系统级开销无法仅从接受率可靠推断；(3) 领域漂移退化，因为目标模型被改用于新领域，投机者变得陈旧、效果降低。为解决这些问题，我们提出 Aurora，一个统一训练—服务系统，通过直接从在线推理轨迹持续学习投机者来闭合循环。Aurora 把在线投机者学习重构为一个异步强化学习问题：接受的 token 提供正反馈，而被拒的投机提案提供我们利用的隐式负反馈以改善样本效率。我们的设计整合一个基于 SGLang 的推理服务器与一个异步训练服务器，实现无需服务中断的热切换投机者更新。关键的是，Aurora 支持第零天部署：投机者可以立即被服务并快速适应在线流量，改善系统性能，同时提供即时效用反馈。跨实验，Aurora 在近期发布的前沿模型（例如 MiniMax M2.1 229B 与 Qwen3-Coder-Next 80B）上取得 1.5 倍的第零天加速。Aurora 还有效适应用户流量的分布偏移，在广泛使用的模型（例如 Qwen3 与 Llama3）上比训练良好但静态的投机者额外提供 1.25 倍加速。

## 关键词

#投机解码 #训练服务统一 #强化学习 #LLM推理 #自适应
