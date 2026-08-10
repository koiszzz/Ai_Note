---
published: 2026-08-07
title: "SODA：LLM 的半在策略黑盒蒸馏"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/SODA- Semi On-Policy Black-Box Distillation for Large Language Models.md"
source_note: "[[信息源/arXiv cs.CL RSS/SODA- Semi On-Policy Black-Box Distillation for Large Language Models]]"
source_sha256: e8447837c4abe3e68f293db283753deaeb0e53206f27c7b1bccdeebd5de5e95a
original_url: "https://arxiv.org/abs/2604.03873"
processed: 2026-08-07
language: zh-CN
---

# SODA：LLM 的半在策略黑盒蒸馏

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Xiwen Chen, Jingjing Wang, Wenhui Zhu, Peijie Qiu, Xuanzhao Dong, Yueyue Deng, Hejian Sang, Zhipeng Wang, Alborz Geramifard, Feng Luo
> - **发布时间**：2026-08-07
> - **分类**：cs.LG
> - **原文**：[打开链接](https://arxiv.org/abs/2604.03873)

## 摘要

- LLM 的黑盒知识蒸馏呈现严格的权衡：简单离策略方法（如序列级知识蒸馏）难以纠正学生的固有错误；完全在策略方法（如生成对抗蒸馏）通过对抗训练解决该问题，但引入众所周知的训练不稳定与沉重的计算开销。
- 为应对该两难，研究提出 SODA（半在策略蒸馏与对齐，Semi On-policy Distillation with Alignment），一个受前沿教师与更小基座模型之间固有能力差距启发的高效替代。由于紧凑学生模型的自然、零样本响应几乎严格劣于强大教师的目标，仅将教师的最优响应与学生输出的一次性静态快照配对，即可构造一个高效的对比信号。这证明让小型学生暴露于自身的静态劣质行为足以实现高质量分布对齐，消除了对昂贵动态 rollout 与脆弱对抗平衡的需求。
- 跨四个紧凑 Qwen2.5 与 Llama-3 模型的广泛评估验证了该半在策略范式：SODA 在 16 个基准结果的 15 个上匹配或超越最先进方法。更重要的是，它在训练快 10 倍、峰值 GPU 内存消耗低 27% 的情况下实现这一更优蒸馏质量，并完全消除对抗不稳定。

## 正文

LLM 的黑盒知识蒸馏呈现严格的权衡。简单离策略方法（如序列级知识蒸馏）难以纠正学生的固有错误。完全在策略方法（如生成对抗蒸馏）通过对抗训练解决该问题，但引入众所周知的训练不稳定与沉重的计算开销。为应对该两难，研究提出 SODA（半在策略蒸馏与对齐，Semi On-policy Distillation with Alignment），一个受前沿教师与更小基座模型之间固有能力差距启发的高效替代。由于紧凑学生模型的自然、零样本响应几乎严格劣于强大教师的目标，仅将教师的最优响应与学生输出的一次性静态快照配对，即可构造一个高效的对比信号。这证明让小型学生暴露于自身的静态劣质行为足以实现高质量分布对齐，消除了对昂贵动态 rollout 与脆弱对抗平衡的需求。跨四个紧凑 Qwen2.5 与 Llama-3 模型的广泛评估验证了该半在策略范式：SODA 在 16 个基准结果的 15 个上匹配或超越最先进方法。更重要的是，它在训练快 10 倍、峰值 GPU 内存消耗低 27% 的情况下实现这一更优蒸馏质量，并完全消除对抗不稳定。

## 关键词

知识蒸馏、黑盒、在策略、LLM、对比信号
