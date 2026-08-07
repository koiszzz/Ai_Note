---
published: 20260806
title: "GUARD：扩散式 VLA 的接地不确定性与基于消融的风险检测"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/GUARD- Grounding Uncertainty and Ablation-Based Risk Detection for Diffusion-Based VLAs.md"
source_note: "[[信息源/arXiv cs.AI RSS/GUARD- Grounding Uncertainty and Ablation-Based Risk Detection for Diffusion-Based VLAs]]"
source_sha256: ae40d7260c3bb8f0c36e0573dfc3c7ba34d5181cc7da33e7397f5214e5a32efc
original_url: "https://arxiv.org/abs/2608.04510"
processed: 2026-08-06
language: zh-CN

---

# GUARD：扩散式 VLA 的接地不确定性与基于消融的风险检测

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Suhas Hegde, Jitendra Yasaswi Bharadwaj Katta
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04510)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/GUARD- Grounding Uncertainty and Ablation-Based Risk Detection for Diffusion-Based VLAs|查看原始文件]]

## 摘要

- 扩散式视觉-语言-动作（VLA）策略即使预测弱锚定于定义任务的视觉和语言证据时也能生成看似合理的动作；本文引入 GUARD，一个不修改预训练策略即测量此接地的测试时失败检测方法。
- GUARD 估计最终视觉-语言模型键值（KV）缓存中 token 索引条目的影响，通过消融显著 KV 条目构建反事实缓存，并比较其去噪响应与原始条件；据此推导 GUARD 诊断流，包括敏感性、注意力熵、模态偏差和接地效率，在线校准并由轻量时间分类器处理。
- 在五个策略基准设置（用 Pi0、SmolVLA 和 Alpamayo-1.5 于 LIBERO、SimplerEnv、MetaWorld 和 PhysicalAI-AV）任务保留分割下评估，GUARD 在五个未见任务设置中的四个达最佳 ROC-AUC，平均未见任务 ROC-AUC 比最强竞争运行时监控器高 5.73 个百分点。

## 正文

扩散式视觉-语言-动作（VLA）策略即使预测弱锚定于定义任务的视觉和语言证据时也能生成看似合理的动作。我们引入 GUARD，一个不修改预训练策略即测量此接地的测试时失败检测方法。GUARD 估计最终视觉-语言模型键值（KV）缓存中 token 索引条目的影响，通过消融显著 KV 条目构建反事实缓存，并比较其去噪响应与原始条件。基于比较，我们推导 GUARD 诊断流，包括敏感性、注意力熵、模态偏差和接地效率，这些在线校准并由轻量时间分类器处理。我们在任务保留分割下跨五个策略基准设置评估 GUARD，使用 Pi0、SmolVLA 和 Alpamayo-1.5 于 LIBERO、SimplerEnv、MetaWorld 和 PhysicalAI-AV。GUARD 在五个未见任务设置中的四个实现最佳 ROC-AUC，其余设置排名第二，平均未见任务 ROC-AUC 比最强竞争运行时监控器高 5.73 个百分点，同时保持在最佳已见任务平均值 0.19 点以内。这些结果表明，直接探测动作头对多模态证据的依赖提供跨策略、任务、形态和领域的可迁移失败信号。

## 关键词

#视觉语言动作 #失败检测 #接地 #测试时监控 #arXiv