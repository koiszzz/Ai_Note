---
published: 2026-08-07
title: "全象限有界裁剪 GRPO：闭合无界盲区实现稳定可泛化训练"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/All-Quadrant Bounded Clipping GRPO- Closing the Unbounded Blind Spot for Stable and Generalizable Tr.md"
source_note: "[[信息源/arXiv cs.LG RSS/All-Quadrant Bounded Clipping GRPO- Closing the Unbounded Blind Spot for Stable and Generalizable Tr]]"
source_sha256: ca3f855ecf1fa600ab30e96089e6985b243030ce2c0d6007112b58865ad9d01c
original_url: "https://arxiv.org/abs/2601.03895"
processed: 2026-08-07
language: zh-CN
---

# 全象限有界裁剪 GRPO：闭合无界盲区实现稳定可泛化训练

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Chi Liu, Xin Chen
> - **发布时间**：2026-08-07
> - **分类**：cs.LG
> - **原文**：[打开链接](https://arxiv.org/abs/2601.03895)

## 摘要

- 通过（似然比，优势）空间的四象限分析，指出 GRPO 继承 PPO 的 token 级裁剪却用单一序列级优势，导致 Q4 象限（负优势＋似然比增加）结构性无界，少数高比值 token 可获得巨大抑制更新，使熵坍缩。
- 提出 ABC-GRPO：通过符号相关边界在全部四象限应用无条件裁剪，在 Q2 加入信任区域下限、Q4 加上限。
- 在 Qwen3 基座模型数学推理上取得最高 Avg@64 与 Pass@64，统计上优于 GRPO、SAPO 与 dual-clip PPO，与最强基线 DAPO 相当，同时维持显著更高的熵。
- 增益迁移到 MATH-500 与域外代码（HumanEval）；消融确认 Q4 是主要盲区。

## 正文

组相对策略优化（GRPO）已成为大语言模型（LLM）强化学习的流行算法。然而，GRPO 继承了 PPO 的 token 级裁剪，却将 token 级优势替换为单一的序列级优势。通过对（似然比，优势）空间的四象限分析，研究表明这一组合使一个象限——负优势与似然比增加（Q4）——结构性地无界，少数高比值 token 可获得非常大的抑制更新，导致熵坍缩并收窄推理边界。为解决该问题，研究提出全象限有界裁剪 GRPO（ABC-GRPO），通过符号相关边界在全部四个象限施加无条件裁剪。ABC-GRPO 在乘以优势之前裁剪似然比，在 Q2 加入信任区域下限、在 Q4 加上限（其负优势分支与 dual-clip PPO 一致），从而在每一象限产生有界的每步策略位移。在 Qwen3 基座模型上的数学推理实验中，ABC-GRPO 取得最高 Avg@64 与 Pass@64：统计上优于 GRPO、SAPO 与 dual-clip PPO，与最强基线（DAPO）相当，同时保持显著更高的熵；增益迁移到 MATH-500 与域外代码（HumanEval）。消融研究确认 Q4 是主要盲区。

## 关键词

GRPO、强化学习、LLM、裁剪、策略优化
