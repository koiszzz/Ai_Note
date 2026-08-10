---
published: 2026-08-07
title: "IFlowNets：将生成式采样器扩展到不完全信息博弈中的策略学习"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/IFlowNets- Extending Generative Samplers to Learn Strategies in Incomplete Information Games.md"
source_note: "[[信息源/arXiv cs.LG RSS/IFlowNets- Extending Generative Samplers to Learn Strategies in Incomplete Information Games]]"
source_sha256: b075cc208a4d15dcfac25841413ca9d6c3a43f5ec56f66fccb02ee0197b1cc09
original_url: "https://arxiv.org/abs/2608.05422"
processed: 2026-08-07
language: zh-CN
---

# IFlowNets：将生成式采样器扩展到不完全信息博弈中的策略学习

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Conor M. Artman, Nicholas Di, Scott Perkins
> - **发布时间**：2026-08-07
> - **分类**：cs.LG
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05422)

## 摘要

- 许多算法将强化学习（RL）与反事实遗憾（CFR）方法结合以利用计算速度与性能权衡，但对不完全信息博弈中博弈论应用的生成式采样框架研究较少。
- 将对抗流网络（AFlowNets）生成流网络框架扩展到不完全信息博弈，称为信息流网络（IFNs）。
- 证明先前为完全信息博弈生成流网络确立的约束对获得有效密度（对应玩家策略）与有效训练目标是不可采用的；所提泛化 IFlowNets 缓解该问题并严格泛化 AFlowNets。
- 三个标准博弈环境的初步结果：IFlowNets 在性能与速度上表现与 Outcome Sampling Monte Carlo CFR（OSMCCFR）和标准 RL 方法相当或更好。

## 正文

虽然许多算法将强化学习（RL）与反事实遗憾（CFR）方法结合，以利用计算速度与性能的权衡，但对不完全信息博弈的博弈论应用中生成式采样框架的考察较少。研究将生成流网络框架——对抗流网络（Adversarial Flow Networks, AFlowNets）——扩展到不完全信息博弈，称为信息流网络（Information Flow Networks, IFNs）。研究证明先前为完全信息博弈生成流网络确立的约束对获得有效密度（对应玩家策略）与有效训练目标不可采用，而所提出的泛化 IFlowNets 缓解该问题并严格泛化 AFlowNets。在三个标准博弈环境的初步结果中，IFlowNets 在性能与速度上与 Outcome Sampling Monte Carlo 反事实遗憾（OSMCCFR）及标准 RL 方法相当或更优。

## 关键词

生成流网络、不完全信息博弈、反事实遗憾、策略学习、RL
