---
published: 2026-08-07
title: "TruthLens：LVLM 中经自评估真值分数的对象幻觉检测"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/TruthLens- Object Hallucination Detection via Self-Evaluating Truthfulness Scores in LVLMs.md"
source_note: "[[信息源/arXiv cs.CV RSS/TruthLens- Object Hallucination Detection via Self-Evaluating Truthfulness Scores in LVLMs]]"
source_sha256: 256caff7274a89f962bdc29419e1c52e7f573c4c2e1638185a1fec23b013f51f
original_url: "https://arxiv.org/abs/2608.05616"
processed: 2026-08-07
language: zh-CN
---

# TruthLens：LVLM 中经自评估真值分数的对象幻觉检测

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Yanqi Wu, Runhe Lai, Xinhua Lu, Qichao Chen, Zhiping Zhou, Jia-Xin Zhuang, Weijiang Yu, Ruixuan Wang
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05616)

## 摘要

- 大视觉语言模型（LVLM）取得显著进展，但对象幻觉仍是阻碍可信部署的根本挑战；关键发现驱动研究：真实与幻觉对象 token 在隐藏表征中清晰可分，但这种可分性在语言建模（LM）头处基本丢失。
- 提出 TruthLens：自评估框架，教 LM 头暴露逐对象真值信号，无需辅助模型或额外推理成本。
- 具体地，重用少用特殊 token 作为参考 token；对每个对象 token 位置，提取 LM 头分配给该特殊 token 的对数概率，将其与预定义常数的差定义为真值分数；模型用 MSE 目标微调，将真实对象分数推向 1、幻觉对象推向 0，同时发散约束保留原始生成能力。
- 尽管仅在有限对象类别集上训练，TruthLens 有效泛化到标签空间大得多的基准；多个 LVLM 大量实验显示 SOTA 性能；Qwen2.5-VL-7B 上 TruthLens 在 MS-COCO 上相对先前最佳方法 AUROC 提升超 17%；代码公开。

## 正文

尽管大视觉语言模型（large vision language models, LVLMs）取得显著进展，对象幻觉仍是阻碍其可信部署的根本挑战。一个关键发现驱动了研究工作：真实与幻觉的对象 token 在隐藏表征中清晰可分，然而这种可分性在语言建模（LM）头处基本丢失。研究提出 TruthLens，一个自评估框架：教 LM 头暴露一个逐对象（per-object）的真值信号，无需辅助模型或额外推理成本。具体地，一个很少使用的特殊 token 被重新用作参考 token。对每个对象 token 位置，研究提取 LM 头分配给该特殊 token 的对数概率，并将其与一个预定义常数的差定义为真值分数。随后用 MSE 目标微调模型，将真实对象的分数推向 1、幻觉对象的分数推向 0，同时一个发散约束保留原始生成能力。尽管仅在有限的对象类别集上训练，TruthLens 有效泛化到标签空间显著更大的基准。跨多个 LVLM 的大量实验展示了最先进性能；值得注意的是，在 Qwen2.5-VL-7B 上，TruthLens 在 MS-COCO 上相对先前最佳方法 AUROC 提升超过 17%。代码见 https://github.com/wyqstan/TruthLens。

## 关键词

对象幻觉、LVLM、真值分数、自评估、检测
