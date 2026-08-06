---
published: 2026-08-05
title: "OliveGemma：用于识别地中海与欧洲饮食的 30 亿参数视觉语言模型"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/OliveGemma- A 3 Billion Visual Language Model for Recognising the Mediterranean & European Diet.md"
source_note: "[[信息源/arXiv cs.AI RSS/OliveGemma- A 3 Billion Visual Language Model for Recognising the Mediterranean & European Diet]]"
source_sha256: ecab20981b9a80a7fce2a7e660d9c2cae1d61b80a27637b55c8435bd813820db
original_url: "https://arxiv.org/abs/2608.03428"
processed: 2026-08-05
language: zh-CN
---

# OliveGemma：用于识别地中海与欧洲饮食的 30 亿参数视觉语言模型

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Dimitrios I. Zaridis 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03428)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/OliveGemma- A 3 Billion Visual Language Model for Recognising the Mediterranean & European Diet|查看原始文件]]

## 摘要

- 提出 OliveGemma，用于识别与推理地中海与欧洲菜系的视觉语言模型：基于开放权重 PaliGemma-2-3B 架构，用 LoRA 在统一语料（来自 MedGR、ODIN 与 VIPPSTAR 三个欧洲研究项目数据集的 17,340 张图像，调和为 216 个组合菜品类别，配 102,642 条指令式问答项，覆盖菜品识别、可能成分与可见成分、类别边界区分、视觉证据与整体视觉食物理解）上微调。
- 三折交叉验证下 top-1 准确率 92.96%±0.91%，超过最强 CNN 基线（DenseNet-121）7.31%，并以精确指令与有界类别超越零样本前沿模型（Gemini Flash 3 与 3.5、GPT-5.4 Mini、Claude Haiku 4.6 分别高 8%、46% 与 64%）。
- Top-3 与 Top-5 准确率上具有竞争力（第二好，仅次于 DenseNet-121）；可能成分的 Exact-Set 90.79%±1.3%。
- 表明小 VLM 的 PEFT 适配能在专门食物识别上超越大幅更大的专有模型；模型：https://huggingface.co/JamesZar/OliveGemma-3B

## 正文

论文编号：arXiv:2608.03428v1（更新类型：cross）。以下为摘要全文翻译。

基于图像的饮食评估为自我报告的食物日记提供了可扩展替代方案，然而细粒度食物识别因高类内变异与视觉相似的菜品仍具挑战性。本研究提出 OliveGemma，一个用于识别与推理地中海与欧洲菜系的视觉语言模型。基于开放权重 PaliGemma-2-3B 架构，OliveGemma 用 LoRA 在一个统一语料上微调：来自三个欧洲研究项目数据集（MedGR、ODIN 与 VIPPSTAR）的 17,340 张图像，调和为 216 个组合菜品类别，并配 102,642 条指令式问答项，覆盖菜品识别、可能成分与可见成分、类别边界区分、视觉证据与整体视觉食物理解。在三折交叉验证方案下，OliveGemma 取得 92.96%±0.91% 的 top-1 准确率，超过最强 CNN 基线（DenseNet-121）7.31%，并以精确指令与有界类别超越零样本前沿模型——Gemini Flash 3 与 3.5、GPT-5.4 Mini 与 Claude Haiku 4.6 分别高出 8%、46% 与 64%。此外，OliveGemma 在 Top-3 与 Top-5 准确率上表现具有竞争力，在 CNN 与前沿模型中排名第二，仅被 DenseNet-121 超越。此外，OliveGemma 在食物类别可能成分上取得 90.79%±1.3% 的 Exact-Set。这些结果表明，小 VLM 的 PEFT 适配可以在专门食物识别上超越大幅更大的专有模型。模型公开于 https://huggingface.co/JamesZar/OliveGemma-3B，实验与结果见 https://github.com/tsiokris/OliveGemma。

## 关键词

#视觉语言模型 #食物识别 #地中海饮食 #PEFT
