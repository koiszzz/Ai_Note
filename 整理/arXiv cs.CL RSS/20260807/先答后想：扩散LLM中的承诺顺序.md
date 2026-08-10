---
published: 2026-08-07
title: "先答后想：扩散 LLM 中的承诺顺序"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/Answer First, Reason Later- Commitment Order in Diffusion LLMs.md"
source_note: "[[信息源/arXiv cs.CL RSS/Answer First, Reason Later- Commitment Order in Diffusion LLMs]]"
source_sha256: d0551ec62cb8a789ca36f5b25d856b31bf2057747af5e8359dd5aaac4e93ca01
original_url: "https://arxiv.org/abs/2608.05687"
processed: 2026-08-07
language: zh-CN
---

# 先答后想：扩散 LLM 中的承诺顺序

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Jewon Yeom, Jaewon Sok, Seonghyeon Park, Jeongjae Park, Hwiyeong Lee, Taesup Kim
> - **发布时间**：2026-08-07
> - **分类**：cs.CL
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05687)

## 摘要

- 掩码扩散语言模型（dLLM）可按任意顺序承诺 token——该自由被营销为其相对自回归解码的核心优势；显示推理任务上该自由反而是失败轴。
- 记录 LLaDA-8B 在 GSM8K 解码期间每次承诺：无约束（纯）解码在轨迹 15–24% 处承诺最终答案而一半推理区域仍掩码，画布增大时最多 90% 问题坍缩为仅答案输出。
- 原因不是模型终止信念——EOS"压力"跨解码器几乎相同——而是可达性：采样器能否在远处位置依据这些信念行动；2×2 提示-解码器设计显示思维链仅在有序承诺下有用（交互 +34.8 个百分点，95% CI [26.8, 42.8]；无推理文本时解码器不可区分），该交互分解为坍缩通道与顺序通道并在 Dream-7B 与 MATH-500 复现。
- 单旋钮干预（前沿门控承诺）因果恢复完整差距（0.528 至 0.852），同时保留最多 4 倍并行解码，沿测量前沿最优窗口从全精化 w=1 翻转为 8 token/步无约束；结果将先前以效率为动机的窗口式采样器重构为针对它们从未设计处理的推理病理的最小修复。

## 正文

掩码扩散语言模型（masked diffusion language models, dLLMs）可以按任意顺序承诺 token——这种自由被营销为它们相对自回归解码的核心优势。研究表明，在推理任务上，这种自由反而是失败之轴。记录 LLaDA-8B 在 GSM8K 上解码期间的每次承诺，研究发现无约束（纯）解码在轨迹的 15–24% 处承诺最终答案，而此时一半推理区域仍被掩码，并且随着画布增大，最多 90% 的问题坍缩为仅答案输出。原因不是模型的终止信念——EOS"压力"跨解码器几乎相同——而是可达性（reachability）：采样器能否在远处位置依据这些信念行动。一个 2×2 提示-解码器设计表明，思维链仅在有序承诺下有用（交互 +34.8 个百分点，95% CI [26.8, 42.8]；没有推理文本时解码器不可区分），这个交互被分解为坍缩通道与顺序通道，并在 Dream-7B 与 MATH-500 上复现。一个单旋钮干预——前沿门控承诺（frontier-gated commitment）——因果性地恢复完整差距（0.528 到 0.852），同时保留最多 4 倍并行解码，其测量前沿的最优窗口从全精化时的 w=1 翻转为 8 token/步时的无约束。研究结果将现有以效率为动机的窗口式采样器重构为针对它们从未设计处理的推理病理的最小修复。

## 关键词

扩散 LLM、承诺顺序、推理、思维链、解码
