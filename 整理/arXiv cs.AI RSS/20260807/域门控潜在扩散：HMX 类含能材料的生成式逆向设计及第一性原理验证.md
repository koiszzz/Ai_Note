---
published: 2026-08-07
title: "域门控潜在扩散：HMX 类含能材料的生成式逆向设计及第一性原理验证"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Domain-Gated Latent Diffusion- Generative Inverse Design of HMX-Class Energetic Materials with First.md"
source_note: "[[信息源/arXiv cs.AI RSS/Domain-Gated Latent Diffusion- Generative Inverse Design of HMX-Class Energetic Materials with First]]"
source_sha256: 3aa6a610b209f63191d5289cb6000c1e6e3a069de804b2c2aed9eb9f69ee9e94
original_url: "https://arxiv.org/abs/2605.26540"
processed: 2026-08-07
language: zh-CN
---

# 域门控潜在扩散：HMX 类含能材料的生成式逆向设计及第一性原理验证

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Yehudit Aperstein, Alexander Apartsin
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2605.26540)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Domain-Gated Latent Diffusion- Generative Inverse Design of HMX-Class Energetic Materials with First|查看原始文件]]

## 摘要

- 含能材料驱动采矿、拆除、推进与安全气囊，但今天的化合物是几十年前设计的；后继者必须在天文数字级的分子空间中同时具备高能量释放、对意外起爆的低敏感性以及实用的合成路线。
- 生成模型是自然的搜索工具，但其训练数据大多不可信：约 66,000 个有记录性质的分子中，仅约 3,000 个经第一性原理测量或计算；在所有数据上训练的模型模仿粗略估计，提出的分子在真实物理下崩溃。
- 引入域门控潜在扩散（DGLD）：将数据可靠性视为显式设计参数的扩散模型——标签被分为四个信任层，只有可信标签引导生成，而不可靠的大多数仍教会模型合理分子看起来像什么；学习控制独立调节性能、安全性与可行性，每个提案通过以量子化学 DFT 审计收尾的四阶段筛选。
- DGLD 提出 10 个 PubChem 未知且通过筛选的分子；最优者 3,4,5-三硝基-1,2-异恶唑在计算爆轰性能上匹配基准炸药 HMX 与 PETN，与训练集中的分子不同，且有四步合成路线；信任门控与化学无关，可应用于任何丰富弱数据围绕可靠核心的场景。

## 正文

含能材料驱动采矿、拆除、推进与安全气囊，但今天的化合物是几十年前设计的。后继者必须在一个天文数字级的分子空间中同时具备高能量释放、对意外起爆的低敏感性以及实用的合成路线。生成模型是自然的搜索工具，但其训练数据大多不可信：在约 66,000 个有记录性质的分子中，只有约 3,000 个是测量或从第一性原理计算的。在所有数据上训练的模型会模仿粗略估计，并提出在真实物理下崩溃的分子。我们引入域门控潜在扩散（Domain-Gated Latent Diffusion，DGLD），一个将数据可靠性视为显式设计参数的扩散模型：标签被排序到四个信任层，只有可信的标签引导生成，而不可靠的大多数仍教会模型一个合理分子看起来像什么。学习到的控制独立调节性能、安全性与可行性，且每个提案都通过以量子化学 DFT 审计收尾的四阶段筛选。DGLD 提出 10 个 PubChem 未知且通过此筛选的分子。最优者 3,4,5-三硝基-1,2-异恶唑（3,4,5-trinitro-1,2-isoxazole）在计算爆轰性能上匹配基准炸药 HMX 与 PETN，与训练集中的分子不同，并有一条四步合成路线。信任门控与化学无关，可以应用于任何丰富弱数据围绕可靠核心的场景。

## 关键词

#含能材料 #生成模型 #逆向设计 #数据可靠性
