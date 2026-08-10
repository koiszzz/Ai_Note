---
published: 2026-08-07
title: "DFM-VLA：经离散流匹配的机器人操作迭代动作精化"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/DFM-VLA- Iterative Action Refinement for Robot Manipulation via Discrete Flow Matching.md"
source_note: "[[信息源/arXiv cs.CV RSS/DFM-VLA- Iterative Action Refinement for Robot Manipulation via Discrete Flow Matching]]"
source_sha256: 7f1bd6ce6ccc3107f54438f4a5f53092776bab520160c2f10df4f972dcc37237
original_url: "https://arxiv.org/abs/2603.26320"
processed: 2026-08-07
language: zh-CN
---

# DFM-VLA：经离散流匹配的机器人操作迭代动作精化

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Jiayi Chen, Wenxuan Song, Jiaxin Fang, Ruiqing Yin, Jingbo Wang, Shuai Chen, Jieyuan Pei, Yikai Qin, Feifan Chen, Haodong Yan, Zhide Zhong, Wen Chen, Yan Wang, Yuxiang Gao, Haoang Li
> - **发布时间**：2026-08-07
> - **分类**：cs.RO
> - **原文**：[打开链接](https://arxiv.org/abs/2603.26320)

## 摘要

- 用离散 token 化方案编码动作的视觉语言动作（VLA）模型广泛用于机器人操作，但现有解码范式根本受限：无论自回归 VLA 顺序解码还是离散扩散 VLA 并行解码，token 一经生成通常固定，不能在后续迭代修订，早期 token 错误无法有效修正。
- 提出 DFM-VLA：迭代精化动作 token 的离散流匹配 VLA；建模 token 级概率速度场，跨精化迭代动态更新完整动作序列。
- 考察构建速度场的两种方法：辅助速度头形式化与嵌入引导形式化；引入指标对齐动作 tokenizer（MAAT）适配 DFM 粗到细本质，配合两阶段解码策略。
- CALVIN、LIBERO、LIBERO-Plus 与真实世界操作任务大量实验证明有效性；项目见 https://chris1220313648.github.io/DFM-VLA/。

## 正文

使用离散 token 化方案编码动作的视觉语言动作（Vision-Language-Action, VLA）模型已被广泛采用于机器人操作，但现有解码范式仍根本受限。无论动作是由自回归 VLA 顺序解码，还是由离散扩散 VLA 并行解码，token 一旦生成通常固定，无法在后续迭代中修订。因此，早期 token 错误无法在后期有效纠正。研究提出 DFM-VLA，一个迭代精化动作 token 的离散流匹配 VLA。DFM-VLA 建模一个 token 级概率速度场，跨精化迭代动态更新完整动作序列。研究考察构建速度场的两种方法：辅助速度头（auxiliary velocity-head）形式化与嵌入引导（embedding-guided）形式化。为进一步改进预测精度，研究引入一个针对 DFM 粗到细本质定制的指标对齐动作 tokenizer（metric-aligned action tokenizer, MAAT），配合两阶段解码策略。CALVIN、LIBERO、LIBERO-Plus 与真实世界操作任务上的大量实验证明了方法的有效性。项目见 https://chris1220313648.github.io/DFM-VLA/。

## 关键词

VLA、离散流匹配、动作 token、机器人操作、迭代精化
