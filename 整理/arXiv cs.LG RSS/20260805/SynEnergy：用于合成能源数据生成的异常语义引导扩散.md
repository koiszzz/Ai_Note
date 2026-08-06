---
published: 2026-08-05
title: "SynEnergy：用于合成能源数据生成的异常语义引导扩散"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/SynEnergy- Anomaly Semantic-Guided Diffusion for Synthetic Energy Data Generation.md"
source_note: "[[信息源/arXiv cs.LG RSS/SynEnergy- Anomaly Semantic-Guided Diffusion for Synthetic Energy Data Generation.]]"
source_sha256: 3963e533988b4afa56c055a9bdf5b9bd365b5bba18eeb1eb6c821d682d4f2e4b
original_url: "https://arxiv.org/abs/2608.03087"
processed: 2026-08-05
language: zh-CN
---

# SynEnergy：用于合成能源数据生成的异常语义引导扩散

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Lin Jiang、Dahai Yu、Ravikumar Gelli、Guang Wang
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03087)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/SynEnergy- Anomaly Semantic-Guided Diffusion for Synthetic Energy Data Generation.|查看原始文件]]

## 摘要

- 细粒度能源消费数据对需求预测、需求响应规划与电网可靠性评估等应用至关重要；但此类数据获取常受隐私关注与数据共享约束限制，推动对合成能源数据生成的日益兴趣。
- 现有方法虽能重现总体消费分布与周期性时间模式，但常平滑掉或低估极端天气、基础设施故障与行为转变导致的异常事件；保留这些事件有挑战性，因为它们稀疏、时空局部化、且受跨地理邻近与区域属性的异质依赖塑造。
- 提出 SynEnergy，一个两阶段基于扩散的保异常能源消费数据生成框架：
- 第一阶段异构图异常语义学习（HG-ASL）：通过跨城市区域联合建模空间与属性依赖，从稀疏残差结构提取区域特定异常语义；
- 第二阶段异常语义引导扩散（AS-Diff）：把学得的异常语义注入去噪过程，在保留异常模式的同时生成真实消费序列。
- 该设计支持对单个区域的可控生成，并自然扩展到城市规模。
- 在四个真实能源消费数据集上对 11 个通用与能源特定生成基线评估：SynEnergy 平均把异常保留保真度提升 12.21%、下游质量提升 2.96%，同时保持与基线相当的总体生成保真度。

## 正文

论文编号：arXiv:2608.03087v1（更新类型：new）。以下为摘要全文翻译。

细粒度的能源消费数据对需求预测、需求响应规划与电网可靠性评估等应用至关重要。然而，此类数据的获取常常受隐私关注与数据共享约束的限制，推动了对合成能源数据生成的日益兴趣。虽然现有方法可以重现总体的消费分布与重复的时间模式，它们往往平滑掉或低估由极端天气、基础设施故障与行为转变引起的异常事件。保留这些事件具有挑战性，因为它们稀疏、在时间与空间上局部化，并受跨地理邻近性与区域属性的异质依赖塑造。为应对这些挑战，我们提出 SynEnergy，一个两阶段、基于扩散的保异常能源消费数据生成框架。第一阶段，异构图异常语义学习（Heterogeneous Graph-based Anomaly Semantic Learning，HG-ASL），通过跨城市区域联合建模空间与属性依赖，从稀疏残差结构提取区域特定的异常语义。第二阶段，异常语义引导扩散（Anomaly Semantic-guided Diffusion，AS-Diff），把学得的异常语义注入去噪过程，在保留异常模式的同时生成真实的消费序列。这种设计支持对单个区域的可控生成，并自然扩展到城市规模。我们在四个真实能源消费数据集上、对 11 个通用与能源特定生成基线评估 SynEnergy。实验结果表明，SynEnergy 平均把异常保留保真度提升 12.21%、把下游质量提升 2.96%，同时与基线相比保持竞争的总体生成保真度。

## 关键词

#合成数据 #能源数据 #扩散模型 #异常保留 #图学习
