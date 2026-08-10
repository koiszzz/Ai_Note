---
published: 2026-08-07
title: "全象限有界裁剪 GRPO：填补无界盲区实现稳定可泛化训练"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/All-Quadrant Bounded Clipping GRPO- Closing the Unbounded Blind Spot for Stable and Generalizable Tr.md"
source_note: "[[信息源/arXiv cs.AI RSS/All-Quadrant Bounded Clipping GRPO- Closing the Unbounded Blind Spot for Stable and Generalizable Tr]]"
source_sha256: 22be59d8cd998afed7d0b1759e87f520e39ad0bf445247ce5cf497f20cc003cf
original_url: "https://arxiv.org/abs/2601.03895"
processed: 2026-08-07
language: zh-CN
---

# 全象限有界裁剪 GRPO：填补无界盲区实现稳定可泛化训练

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Chi Liu, Xin Chen
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2601.03895)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/All-Quadrant Bounded Clipping GRPO- Closing the Unbounded Blind Spot for Stable and Generalizable Tr|查看原始文件]]

## 摘要

- 群体相对策略优化（GRPO）已成为 LLM 强化学习的流行算法，但它在用单一序列级优势替代 token 级优势的同时继承了 PPO 的 token 级裁剪。
- 通过对（似然比，优势）空间的四象限分析，论文证明这一组合留下一个结构上无界的象限——负优势与增大的似然比（Q4）组合，少数高比值 token 可能收到极大的抑制更新，导致熵坍缩并收窄推理边界。
- 提出全象限有界裁剪 GRPO（ABC-GRPO）：通过符号依赖边界在全部四个象限应用无条件裁剪——在乘以优势前裁剪似然比，在 Q2 增加信任域下限、在 Q4 增加上限（其负优势分支与双裁剪 PPO 一致），使每个象限的每步策略位移有界。
- 在 Qwen3 基础模型的数学推理上，ABC-GRPO 取得最高 Avg@64 与 Pass@64：统计上优于 GRPO、SAPO 与双裁剪 PPO，与最强基线（DAPO）相当，同时保持显著更高的熵；增益迁移到 MATH-500 与域外代码（HumanEval）；消融确认 Q4 是主导盲区。

## 正文

群体相对策略优化（GRPO）已成为大语言模型（LLM）强化学习的流行算法。然而，GRPO 在继承 PPO 的 token 级裁剪的同时，用单一序列级优势替代 token 级优势。通过对（似然比，优势）空间的四象限分析，我们证明这一组合留下一个象限在结构上无界——负优势与增大的似然比组合（Q4）——使得少数高比值 token 可以收到非常大的抑制更新，从而坍缩熵并收窄推理边界。为解决这一问题，我们提出全象限有界裁剪 GRPO（All-Quadrant Bounded Clipping GRPO，ABC-GRPO），通过符号依赖边界在全部四个象限应用无条件裁剪。ABC-GRPO 在乘以优势之前裁剪似然比，在 Q2 增加信任域下限、在 Q4 增加上限——其负优势分支与双裁剪 PPO 一致——从而在每个象限实现有界的每步策略位移。在 Qwen3 基础模型的数学推理上，ABC-GRPO 取得最高的 Avg@64 与 Pass@64：它统计上优于 GRPO、SAPO 与双裁剪 PPO，与最强基线（DAPO）相当，同时维持显著更高的熵；增益可迁移到 MATH-500 与域外代码（HumanEval）。消融研究将 Q4 确定为主导盲区。

## 关键词

#GRPO #强化学习 #LLM #策略优化
