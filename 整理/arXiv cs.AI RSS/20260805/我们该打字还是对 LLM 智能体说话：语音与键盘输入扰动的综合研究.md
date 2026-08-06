---
published: 2026-08-05
title: "我们该打字还是对 LLM 智能体说话：语音与键盘输入扰动的综合研究"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Should We Type or Talk to LLM Agents- A Comprehensive Study of Voice and Keyboard Input Perturbation.md"
source_note: "[[信息源/arXiv cs.AI RSS/Should We Type or Talk to LLM Agents- A Comprehensive Study of Voice and Keyboard Input Perturbation]]"
source_sha256: 265c48c30b9cfda4630de4b42174c2cb427b2c93006edc2e2291c7ef7ee00d0e
original_url: "https://arxiv.org/abs/2608.03970"
processed: 2026-08-05
language: zh-CN
---

# 我们该打字还是对 LLM 智能体说话：语音与键盘输入扰动的综合研究

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Zizhao Hu、Nathan Elijah Segura、Mohammad Rostami 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03970)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Should We Type or Talk to LLM Agents- A Comprehensive Study of Voice and Keyboard Input Perturbation|查看原始文件]]

## 摘要

- 提出 HIVE（人类输入变异引擎）：一套语音转录扰动与 QWERTY 键盘扰动，用于评估模型对扰动的鲁棒性。
- 七项发现：（i）语音转录扰动降低每个被测指令微调模型的准确率，代价来自转录结构而非填充词；（ii）QWERTY 键盘扰动代价较小，模型能吸收大量扰动；（iii）两者都追溯到一个原因：问题 token 有多少在扰动中幸存——破坏 token 才造成伤害，在旁边添加新 token 代价小；（iv）两通道差距只出现在必须构造或推断答案处，多项选择没有；（v）伤害不只来自测试集污染；（vi）无法用轻量适配训练消除；（vii）思考预算几乎完全恢复键盘通道，却让口语寄存器不受影响，压缩语音反而更糟。

## 正文

论文编号：arXiv:2608.03970v1（更新类型：new）。以下为摘要全文翻译。

人类输入通过打字或说话到达语言模型，每个通道留下独特印记：键盘是正字法噪声；语音则包括常规转录的言语不流畅与 AI 支持听写工具的重构。它们如何影响 LLM 的性能？在本文中，我们提出 HIVE（Human Input-Variation Engine，人类输入变异引擎），一套语音转录扰动与 QWERTY 键盘扰动。我们用 HIVE 评估模型对这些扰动的鲁棒性，并呈现七项发现。（i）语音转录扰动降低我们测试的每个指令微调模型的准确率，而代价来自转录的结构而非其填充词。（ii）QWERTY 键盘扰动代价较小，模型在准确率下降前能吸收很多扰动。（iii）两者都追溯到一个原因：问题的 token 有多少在扰动中幸存——破坏 token 才会造成伤害，而在其旁边添加新 token 代价很小。（iv）两个通道之间的差距只出现在必须构造或推断答案的地方；在多项选择上不存在。（v）伤害并不只来自测试集污染。（vi）它无法通过轻量适配训练消除。（vii）思考预算几乎完全恢复键盘通道，却让口语寄存器不受影响，而压缩语音在思考预算下更糟。

## 关键词

#语音输入 #键盘输入 #鲁棒性 #LLM智能体
