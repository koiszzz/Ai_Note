---
title: "华为开源 505B 参数 MoE 大模型 openPangu-2.0-Pro"
source: "Horizon Daily（中文摘要）"
source_category: "科技新闻"
original_file: "信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-07-31 (ZH).md"
source_note: "[[信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-07-31 (ZH)]]"
source_fragment: "华为开源 505B 参数 MoE 大模型 openPangu-2.0-Pro"
source_sha256: 898af1afa623dd8dc1fc38ee05167c63aca85eabf865591f7a539b16f4b2e1ae
original_url: "https://huggingface.co/openpangu/openPangu-2.0-Pro"
published: 2026-07-31
processed: 2026-08-05
language: zh-CN
---

# 华为开源 505B 参数 MoE 大模型 openPangu-2.0-Pro

> [!info] 来源信息
> - 数据源：Horizon Daily（中文摘要）
> - 所属分类：科技新闻
> - 发布时间：2026-07-31
> - 原文链接：[打开原文](https://huggingface.co/openpangu/openPangu-2.0-Pro)
> - Vault 原文件：[[信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-07-31 (ZH)|查看原始日报]]

## 摘要

- 华为在 Hugging Face 开源了 openPangu-2.0-Pro，这是一个基于升腾 NPU 训练的大规模混合专家（MoE）模型，总参数约 505B，每个 token 激活约 18B 参数，支持 512k 上下文长度，训练数据约 34T tokens。模型采用 MLA 注意力及 DSA+SWA 分层混合设计，并配备 3 头 MTP 自投机模块；后训练阶段进行了快慢合一微调与多专项强化学习。Thinking 版本在 AIME 2026 数学测评中得分 95.4，GPQ……

## 正文

华为在 Hugging Face 开源了 openPangu-2.0-Pro，这是一个基于升腾 NPU 训练的大规模混合专家（MoE）模型，总参数约 505B，每个 token 激活约 18B 参数，支持 512k 上下文长度，训练数据约 34T tokens。模型采用 MLA 注意力及 DSA+SWA 分层混合设计，并配备 3 头 MTP 自投机模块；后训练阶段进行了快慢合一微调与多专项强化学习。Thinking 版本在 AIME 2026 数学测评中得分 95.4，GPQA-Diamond 为 87.9。这次开源对行业有重要意义，展示了华为在超大规模模型和升腾生态上的进展。

telegram · zaihuapd · 7月31日 06:50

「背景」： 混合专家（Mixture of Experts, MoE）是一种将模型划分为多个专家子网络、每次只激活部分专家来降低计算成本的设计，使超大参数模型可用可行。升腾 NPU 是华为推出的 AI 芯片，与英伟达 GPU 竞争，华为一直在推广其训练与推理生态。512k 上下文意味着模型能一次处理极长文本，适合长文档和复杂推理任务。开源此类超大 MoE 模型有利于研究者和开发者进一步实验和部署。

标签: #MoE, #Huawei, #open-source, #large language model, #NPU

## 关键词

#MoE #Huawei #open-source #large-language-model #NPU #科技新闻
