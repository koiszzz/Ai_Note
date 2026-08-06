---
title: "你的智能体 LLM 秘密编码间接提示注入暴露的潜信号"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Your Agentic LLMs Secretly Encode Latent Signals of Indirect Prompt-Injection Exposure.md"
source_note: "[[信息源/arXiv cs.AI RSS/Your Agentic LLMs Secretly Encode Latent Signals of Indirect Prompt-Injection Exposure]]"
source_sha256: 791cdc3194dca82f387a543b88353f4383c19c21e1e2eb008f964b9039b15b32
original_url: "https://arxiv.org/abs/2608.02657"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# 你的智能体 LLM 秘密编码间接提示注入暴露的潜信号

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Jianshuo Dong、Yiming Liu、Maosen Zhang 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02657)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Your Agentic LLMs Secretly Encode Latent Signals of Indirect Prompt-Injection Exposure|查看原始文件]]

## 摘要

- 探测：跨六个模型（含 7530 亿参数 GLM-5.2），在生成前隐藏状态上训练的简单线性探针可预测 LLM 的 IPI 暴露——这些探针在未见攻击、智能体指令与任务套件上达 90%+ AUROC，在自适应攻击与跨语言设置下高度稳健。
- 防御：CoT 测量揭示识别-行动差距：模型虽编码此类信号，却常无法转化为安全行动；引入 AGRI，探针门控的基于推理的防御——按需前置抗注入推理；困难 AgentDojo 设置下大幅降低攻击成功率（Qwen3.5-27B 从 34.6% 到 0%），同时大体保持干净任务效用。
- 解释：引入分析框架识别与探针捕获信号最强相关的自然语言解释；所得画像因模型而异：潜信号可与直接 IPI 暴露主张或间接操作线索对齐。
- 智能体 LLM 易受间接提示注入（IPI）攻击（如隐藏在外来工具结果中的恶意侧任务）；许多努力试图应对威胁，但智能体 LLM 暴露于 IPI 攻击时的内部（称 IPI 暴露条件）鲜为人知；代码：https://github.com/jianshuod/IPI-exposure-signal

## 正文

论文编号：arXiv:2608.02657v1（更新类型：cross）。以下为摘要全文翻译。

智能体 LLM 易受间接提示注入（IPI）攻击，例如隐藏在外来工具结果中的恶意侧任务。虽然许多努力试图应对这些威胁，但智能体 LLM 暴露于 IPI 攻击时的内部情况（我们称为 IPI 暴露）鲜为人知。在本文中，我们从三个方面深入研究这一问题。（1）探测：跨六个模型（包括巨大的 753B 参数 GLM-5.2），在生成前隐藏状态上训练的简单线性探针可以预测 LLM 的 IPI 暴露。这些探针在未见攻击、智能体指令与任务套件上达到 90%+ 的 AUROC；它们在自适应攻击与跨语言设置下表现出高鲁棒性。（2）防御：我们的 CoT 测量揭示一个识别-行动差距：虽然模型编码此类信号，它们往往无法把它们转化为安全行动。我们随后引入 AGRI，一个探针门控的基于推理的防御：按需前置抗注入推理。在困难的 AgentDojo 设置中，AGRI 大幅降低攻击成功率，例如 Qwen3.5-27B 从 34.6% 到 0%，同时大体保持干净任务效用。（3）解释：我们引入一个分析框架，识别与探针捕获信号最强相关的自然语言解释。所得画像因模型而异：潜信号可以与直接 IPI 暴露主张或间接操作线索对齐。代码可在 https://github.com/jianshuod/IPI-exposure-signal 获取。

## 关键词

#间接提示注入 #智能体LLM #潜信号 #防御
