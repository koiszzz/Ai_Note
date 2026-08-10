---
published: 2026-08-07
title: "全局天气预报的时间步条件化 transformer"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Timestep-Conditioned Transformers for Global Weather Forecasting.md"
source_note: "[[信息源/arXiv cs.LG RSS/Timestep-Conditioned Transformers for Global Weather Forecasting]]"
source_sha256: bb2394f4b1c1fe15fc115afd662bb1678c2fb87e093a952db2162cd8e9070795
original_url: "https://arxiv.org/abs/2608.06241"
processed: 2026-08-07
language: zh-CN
---

# 全局天气预报的时间步条件化 transformer

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Sam Levang, Fran Bartolic, Ty Dickinson, Chase Dwelle, Paulius Rauba, Viktor Cikojevic
> - **发布时间**：2026-08-07
> - **分类**：cs.LG
> - **原文**：[打开链接](https://arxiv.org/abs/2608.06241)

## 摘要

- 现有机器学习天气预报模型依赖预定且固定的自回归时间步；模型时间步选择涉及基本权衡：短时间步（1–6 小时）精细解析昼夜周期内的大气动力学，但增加给定预报视界的误差累积；长时间步（24 小时）减少误差累积，但限制短时预报可用性（亚日可预测性高）。
- 提出 GEM-3：概率全局天气模型，通过显式多时间步推理解决该权衡；单套训练权重下，推理时可配置模型时间步以在宽预报视界平衡可预测性与可用性。
- 发现混合时间步训练一致提升滚动稳定性（相对时间步专精模型）。
- 引擎下 GEM-3 是约 134M 参数的轻量邻域注意力 transformer，等距柱状网格，在其前身 GEM-2 之上有多项架构进展；结果是将近 SOTA 中期概率技能、稳定扩展范围滚动、高效训练与推理以及决策相关诊断结合的实用预报系统。

## 正文

现有机器学习天气预报模型依赖预定且固定的自回归时间步。模型时间步的选择涉及一个基本权衡：较短时间步（如 1 到 6 小时）在昼夜周期内精细解析大气动力学，但增加给定预报视界的误差累积；较长时间步（如 24 小时）减少误差累积，却限制亚日可预测性高的短时预报的可用性。本文呈现 GEM-3，一个概率全局天气模型，通过显式多时间步推理解决该权衡。凭借单套训练权重，模型时间步可在推理时配置，以在广阔预报视界上平衡可预测性与可用性。此外，研究发现混合时间步训练一致提升相对时间步专精模型的滚动稳定性。引擎层面，GEM-3 是一个约 134M 参数的轻量邻域注意力 transformer，使用等距柱状网格，并在其前身 GEM-2 之上有多项架构进展。结果是实用的预报系统：结合近 SOTA 的中期概率技能、稳定的扩展范围滚动、高效的训练与推理，以及决策相关的诊断。

## 关键词

天气预报、transformer、多时间步、概率预报、邻域注意力
