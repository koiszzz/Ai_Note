---
title: "JigShape：通过拼图游戏评估 VLM 的视觉-几何推理"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/JigShape- Evaluating Visual-Geometric Reasoning in VLMs through Jigsaw Puzzles.md"
source_note: "[[信息源/arXiv cs.AI RSS/JigShape- Evaluating Visual-Geometric Reasoning in VLMs through Jigsaw Puzzles]]"
source_sha256: 243f1ffd9feeba1234228d6f8ba0f3dffe9397eef33012761b602b384bbdc073
original_url: "https://arxiv.org/abs/2607.27670"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# JigShape：通过拼图游戏评估 VLM 的视觉-几何推理

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Shawn Li 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.27670)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/JigShape- Evaluating Visual-Geometric Reasoning in VLMs through Jigsaw Puzzles|查看原始文件]]

## 摘要

- 引入带榫卯互锁片的拼图基准：几何约束提供强局部兼容性要求，与视觉内容结合产生无歧义的真值；覆盖 4×4 至 16×16 四种网格密度的 95K 实例。
- 零样本 VLM 大多缺乏几何推理：五个前沿模型（GPT-5.5）中只有一个在 4×4 拼图上超过随机基线，其他全部处于偶然水平。
- 监督微调在 4×4 上达到 >97%，但所有模型在更大网格上坍缩：GPT-5.5 在 8×8 上从 70% 跌到接近随机，微调模型在 12×12 上也低于 5%。
- 这种“缩放悬崖”表明当前架构无法在片数增加时维持一致的约束满足，把可扩展几何推理确立为视觉-语言模型的开放挑战。

## 正文

论文编号：arXiv:2607.27670v2（更新类型：replace-cross）。以下为摘要全文翻译。

拼图求解需要联合推理视觉内容与几何约束，然而现有基准使用矩形切割，在纹理重复区域产生歧义真值。我们引入 JigShape，一个带榫卯互锁片的基准：几何约束提供强局部兼容性要求，与视觉内容结合产生无歧义的真值。在四种网格密度（4×4 到 16×16）的 95K 实例上，我们发现零样本 VLM 大多缺乏几何推理：五个前沿模型（GPT-5.5）中只有一个在 4×4 拼图上超过随机基线，其他全部处于偶然水平。虽然监督微调在 4×4 上达到 >97%，但所有模型在更大网格上坍缩：GPT-5.5 从 70% 跌到 8×8 上的接近随机，甚至微调模型在 12×12 上低于 5%。这种“缩放悬崖”表明当前架构无法在片数增加时维持一致的约束满足。JigShape 把可扩展几何推理确立为视觉-语言模型的开放挑战。

## 关键词

#拼图 #视觉几何推理 #VLM #缩放悬崖
