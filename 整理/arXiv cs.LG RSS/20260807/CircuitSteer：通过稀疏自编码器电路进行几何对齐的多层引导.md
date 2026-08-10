---
published: 2026-08-07
title: "CircuitSteer：通过稀疏自编码器电路进行几何对齐的多层引导"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/CircuitSteer- Geometrically Aligned Multi-Layer Steering via Sparse Autoencoder Circuits.md"
source_note: "[[信息源/arXiv cs.LG RSS/CircuitSteer- Geometrically Aligned Multi-Layer Steering via Sparse Autoencoder Circuits]]"
source_sha256: 1b5734cd41d30142162b3abfa2af0ac65459874cfed6c7735854fc580e6a6061
original_url: "https://arxiv.org/abs/2608.05732"
processed: 2026-08-07
language: zh-CN
---

# CircuitSteer：通过稀疏自编码器电路进行几何对齐的多层引导

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Mehrshad Saadatinia, Parsa Razmara, Ardalan Aryashad, Ali Abbasi, Seyedarmin Azizi
> - **发布时间**：2026-08-07
> - **分类**：cs.LG
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05732)

## 摘要

- 提出 CircuitSteer：利用稀疏自编码器（SAE）识别并操纵分布于多层的连贯语义电路。
- 基于特征共激活与解码器方向的几何对齐构建特征流电路，隔离目标行为的多层子电路，再从稀疏特征合成密集引导向量进行多点干预。
- 在毒性、情绪强度、奉承与拒答等多样化任务、两个模型家族上评估；是所有方法中唯一一致产生保持流畅性干预的。
- 多层电路引导比静态单点干预产生严格更稳健有效的行为控制；代码公开。

## 正文

控制大语言模型（LLM）的行为仍是 AI 对齐的关键挑战。现有引导方法（如对比激活加法 CAA）通常依赖来自聚合激活差异的固定单层干预。这些方法对语义多样的输入施加单一干预，往往无法跨层维持一致的行为变化，限制引导效果。本文提出 CircuitSteer，一个利用稀疏自编码器（SAE）识别与操纵分布于多层的连贯语义电路的新框架。通过基于特征共激活与解码器方向几何对齐构建特征流电路，隔离负责目标行为的特定多层子电路；随后从这些稀疏特征合成密集引导向量，施加多点干预以引导模型内部语义轨迹。研究用对比示例在包括毒性、情绪强度、奉承与拒答的多样化任务、跨两个模型家族上评估 CircuitSteer。在所有模型与数据集上，CircuitSteer 是唯一一致产生保持流畅性干预的方法；竞争方法要么牺牲文本质量、要么缺乏覆盖，在奉承与拒答等复杂行为上完全失效。结果表明，通过强制所选特征间的几何对齐实现的多层电路引导，比静态单点干预产生严格更稳健、更有效的行为控制。代码见 https://github.com/mehrshad-sdtn/CircuitSteer。

## 关键词

AI 对齐、稀疏自编码器、引导向量、可解释性、多层干预
