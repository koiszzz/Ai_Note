---
published: 2026-08-07
title: "THBKG：用于决策对齐临床进展预测的时间生物医学知识图谱"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/THBKG- A Temporal Biomedical Knowledge Graph for Decision-Aligned Clinical Advancement Prediction.md"
source_note: "[[信息源/arXiv cs.LG RSS/THBKG- A Temporal Biomedical Knowledge Graph for Decision-Aligned Clinical Advancement Prediction]]"
source_sha256: dde37d9c353bb07516ed96030bb851b1951a6e4f5daa05871093b447b3920f1a
original_url: "https://arxiv.org/abs/2608.05982"
processed: 2026-08-07
language: zh-CN
---

# THBKG：用于决策对齐临床进展预测的时间生物医学知识图谱

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Pui Chung Siu, Claudia Cabrera, Mani Mudaliar, Arkaitz Zubiaga
> - **发布时间**：2026-08-07
> - **分类**：cs.LG
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05982)

## 摘要

- 靶点-疾病关联不足占 II 期疗效失败的 40–50%，预判哪些项目会进展能让资助方支持最可能惠及患者的假说；项目可被评判的是其进入临床时支持关联的证据。
- 现有生物医学知识图谱都不允许按过去日期组装证据概况；提出时间异构生物医学知识图谱（THBKG）：通过时间描述与预测治疗靶点-疾病关联——110396 个实体、19 种关系类型的 1110 万条边，每条边携带其证据变化年份，可按决策到期时的状态恢复对概况。
- 定义决策对齐基准：预测进入 II 期的靶点-疾病对是否在可追溯至该决策前的证据上推进至 III 期；THBKG 上图传播在每个治疗领域前十对实现 4.3–4.5 相对成功，超越同协议评分下每个直接证据参考。
- 增益集中在决策点无直接靶点-疾病证据的 72.8% 对上（直接边模型无物可读）：编码器仍高出机会 5–6 倍，经中间生物学传播恢复信号；适配基于路径的解释器到决策时子图，将每个预测分解为假说背后的证据景观，实现可解释预测；发布 THBKG 作为持续更新的研究基质。

## 正文

不充分的靶点-疾病关联占 II 期疗效失败的 40–50%，因此预判哪些项目会推进，可让资助方支持最可能到达患者的假说。一个项目能被评判的依据是其进入临床时支持其关联的证据。现有生物医学知识图谱都不允许按过去日期组装该证据概况。研究呈现时间异构生物医学知识图谱（Temporal Heterogeneous Biomedical Knowledge Graph, THBKG）：通过时间描述与预测治疗靶点-疾病关联——110,396 个实体与跨 19 种关系类型的 1110 万条边，每条边携带其证据变化的年份，因此可恢复该对在其自身决策到期时立场的概况。在此图上，研究定义一个决策对齐基准：预测进入 II 期的靶点-疾病对，是否基于可追溯至该决策之前的证据推进到 III 期。THBKG 上的图传播在每个治疗领域前十对达到 4.3–4.5 的相对成功，超越在同一决策对齐协议下评分的每个直接证据参考。增益集中在 72.8% 的在决策点无直接靶点-疾病证据的对上——直接边模型在那里无物可读：编码器仍以机会水平五到六倍排序，经传播中间生物学恢复信号。研究将基于路径的解释器适配到决策时子图，将每个预测分解为假说背后的证据景观，实现可解释预测。研究发布 THBKG，作为经回顾性验证研究治疗靶点假说的持续更新基质。

## 关键词

生物医学知识图谱、时序、药物研发、进展预测、知识图谱传播
