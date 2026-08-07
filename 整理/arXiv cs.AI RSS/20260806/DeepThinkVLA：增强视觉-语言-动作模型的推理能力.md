---
published: 20260806
title: "DeepThinkVLA：增强视觉-语言-动作模型的推理能力"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/DeepThinkVLA- Enhancing Reasoning Capability of Vision-Language-Action Models.md"
source_note: "[[信息源/arXiv cs.AI RSS/DeepThinkVLA- Enhancing Reasoning Capability of Vision-Language-Action Models]]"
source_sha256: e28ecefa02f48526670bd153be840eaa0554067a9cedb38a1195cb2ec07326fe
original_url: "https://arxiv.org/abs/2511.15669"
processed: 2026-08-06
language: zh-CN

---

# DeepThinkVLA：增强视觉-语言-动作模型的推理能力

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Cheng Yin, Yankai Lin, Wang Xu, Sikyuen Tam, Xiangrui Zeng, Zhiyuan Liu, Zhouping Yin
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2511.15669)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/DeepThinkVLA- Enhancing Reasoning Capability of Vision-Language-Action Models|查看原始文件]]

## 摘要

- 思维链（CoT）推理是否真正改进视觉-语言-动作（VLA）模型，还是仅增加开销？现有 CoT-VLA 系统报告有限且不一致的收益，先前工作未严格诊断 CoT 何时及为何帮助机器人行动。
- 通过系统实验识别 CoT 在 VLA 中有效必须同时满足的两个必要条件：解码对齐（CoT 和动作必须用模态适当机制生成，单自回归解码器强制两者不仅次优且有害，性能下降 4.2 个百分点）和因果对齐（CoT 必须通过基于结果的优化与任务成功因果关联）。
- 构建 DeepThinkVLA：混合注意力解码器（语言用因果注意力，动作用双向注意力并行解码）满足条件 1，两阶段 SFT-then-RL 流水线满足条件 2；在 LIBERO 上达 97.0% 成功率，LIBERO-Plus 鲁棒性 79.0%（对比 π0-FAST 的 61.6%），RoboTwin 2.0 上 59.3%，超最强基线 21.7 点。

## 正文

思维链（CoT）推理是否真正改进视觉-语言-动作（VLA）模型，还是仅增加开销？现有 CoT-VLA 系统报告有限且不一致的收益，然而先前工作未严格诊断 CoT 何时及为何帮助机器人行动。通过系统实验，我们识别 CoT 在 VLA 中有效必须同时满足的两个必要条件：（1）解码对齐：CoT 和动作必须用模态适当的机制生成；通过单一自回归解码器强制两者不仅次优而且有害，性能下降 4.2 个百分点。（2）因果对齐：CoT 必须通过基于结果的优化与任务成功因果关联；没有它，监督 CoT 在动作执行敏感动力学偏移下与无推理不可区分，表现出 32.0 个百分点的性能下降，几乎与无推理基线的 31.6 个百分点相同。受这些发现指导，我们构建 DeepThinkVLA：混合注意力解码器通过为语言配对因果注意力、为并行动作解码配对双向注意力满足条件 1，而两阶段 SFT-then-RL 流水线通过将完整推理：动作链与稀疏任务成功奖励对齐满足条件 2。DeepThinkVLA 在 LIBERO 上达 97.0% 成功率，LIBERO-Plus 上 79.0% 鲁棒性（对比 π0-FAST 的 61.6%），RoboTwin 2.0 上 59.3% 成功率，超最强基线 21.7 点。此外，真实机器人实验为我们的 CoT 数据构建和混合架构的物理适用性提供初步证据。我们的代码可在此获取：https://github.com/OpenBMB/DeepThinkVLA。

## 关键词

#视觉语言动作模型 #思维链 #机器人 #强化学习 #arXiv