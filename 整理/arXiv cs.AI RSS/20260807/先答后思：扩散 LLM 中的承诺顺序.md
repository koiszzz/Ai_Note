---
published: 2026-08-07
title: "先答后思：扩散 LLM 中的承诺顺序"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Answer First, Reason Later- Commitment Order in Diffusion LLMs.md"
source_note: "[[信息源/arXiv cs.AI RSS/Answer First, Reason Later- Commitment Order in Diffusion LLMs]]"
source_sha256: 26aaaaca5f57b46b82303079c303c7afd3e4b10d8aee2af23ac48cf0df4e874c
original_url: "https://arxiv.org/abs/2608.05687"
processed: 2026-08-07
language: zh-CN
---

# 先答后思：扩散 LLM 中的承诺顺序

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Jewon Yeom, Jaewon Sok, Seonghyeon Park, Jeongjae Park, Hwiyeong Lee, Taesup Kim
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05687)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Answer First, Reason Later- Commitment Order in Diffusion LLMs|查看原始文件]]

## 摘要

- 掩码扩散语言模型（dLLM）可以任意顺序提交 token，这一自由被视为其相对于自回归解码的核心优势；论文证明在推理任务上这一自由恰恰是失败之轴。
- 记录 LLaDA-8B 在 GSM8K 上解码时的每次提交：无约束（纯）解码在轨迹进行到 15-24% 时就提交最终答案（此时推理区域仍有一半被掩码），且随着画布增大在高达 90% 的问题上坍缩为仅答案输出。
- 原因并非模型的终止信念（EOS"压力"在各解码器间几乎相同），而是可达性：采样器能否在远处位置作用于这些信念。
- 2×2 提示-解码器设计表明思维链只在有序承诺下有帮助（交互 +34.8 个百分点，95% CI [26.8, 42.8]；无推理文本时各解码器无法区分），这一交互被分解为坍缩通道与顺序通道，并在 Dream-7B 与 MATH-500 上复现。
- 单一旋钮干预——前沿门控承诺（frontier-gated commitment）——因果性地恢复全部差距（0.528 到 0.852），同时保留高达 4 倍并行解码；最优窗口从完全精炼时的 w=1 翻转到每步 8 token 时的无约束。结果将现有窗口式采样器（此前出于效率动机）重新框定为推理病理的最小修复。

## 正文

掩码扩散语言模型（dLLM）可以任意顺序提交 token——这一自由被宣传为其相对于自回归解码的核心优势。我们证明在推理任务上，这一自由恰恰是失败之轴。记录 LLaDA-8B 在 GSM8K 上解码过程中的每次提交，我们发现无约束（纯）解码在轨迹进行到 15-24% 时就提交最终答案（此时推理区域仍有一半被掩码），并随着画布增大在高达 90% 的问题上坍缩为仅答案输出。原因并非模型的终止信念——EOS"压力"在各解码器间几乎相同——而是可达性：采样器能否在远处位置作用于这些信念。一个 2×2 提示-解码器设计显示，思维链只在有序承诺下有帮助（交互 +34.8 个百分点，95% CI [26.8, 42.8]；没有推理文本时解码器无法区分），我们将这一交互分解为坍缩通道与顺序通道，并在 Dream-7B 与 MATH-500 上复现。单一旋钮干预——前沿门控承诺——因果性地恢复全部差距（0.528 到 0.852），同时保留高达 4 倍的并行解码，其测量的前沿最优窗口从完全精炼时的 w=1 翻转到每步 8 token 时的无约束。我们的结果将现有窗口式采样器（此前出于效率动机）重新框定为针对它们从未被设计处理过的推理病理的最小修复。

## 关键词

#扩散LLM #推理 #承诺顺序 #解码
