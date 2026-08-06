---
title: "用于参数化工程骨骼肌组织收缩动力学的物理风味 Transformer 网络"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/A Physics-Flavored Transformer Network for Parametrizing Contraction Dynamics of Engineered Skeletal.md"
source_note: "[[信息源/arXiv cs.LG RSS/A Physics-Flavored Transformer Network for Parametrizing Contraction Dynamics of Engineered Skeletal]]"
source_sha256: c78c4cbebd05a10c2a2fa9ea05fe037730eff279ddda2a33059fdf64a108ec76
original_url: "https://arxiv.org/abs/2608.03927"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# 用于参数化工程骨骼肌组织收缩动力学的物理风味 Transformer 网络

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Mattias Luber、Timo Betz
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03927)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/A Physics-Flavored Transformer Network for Parametrizing Contraction Dynamics of Engineered Skeletal|查看原始文件]]

## 摘要

- 提出物理风味神经网络（PFNN），自动化 ESM 动力学表型分析：架构把拉伸指数物理模型整合进 CNN-Transformer，直接从力-时间曲线提取物理意义参数。
- 工程骨骼肌组织（ESM）已成为生物医学疾病建模与药理筛选的关键结构，但其功能表征常依赖峰值力等简单指标，丢弃关键动力学信息——部分因机制模型捕获这些动力学引入的高数学复杂度；恰是复杂度阻碍可扩展应用与领域广泛采用。
- 应对标记生物数据稀缺：混合训练范式——模型先在合成数据上发展"物理直觉"，再在无标签真实测量上无监督自对齐。
- 结果：跨多样收缩表型与细胞系（含 Duchenne 肌营养不良模型）实现高保真参数化——可扩展、自改进流水线弥合理想生物物理与带噪体外数据之间的差距，为高通量生物物理研究提供稳健工具。

## 正文

论文编号：arXiv:2608.03927v1（更新类型：new）。以下为摘要全文翻译。

工程骨骼肌组织（ESM）已成为生物医学疾病建模与药理筛选的关键结构，然而其功能表征往往依赖峰值力等简单指标，丢弃关键的动力学信息。这部分是因为机制模型为捕获这些动力学引入了高水平的数学复杂度。因此，正是这种复杂度阻碍了可扩展应用与领域内的广泛采用。在此，我们提出一个物理风味神经网络（Physics-Flavored Neural Network，PFNN），自动化 ESM 的动力学表型分析。我们的架构把拉伸指数物理模型整合进一个 CNN-Transformer，实现直接从力-时间曲线提取物理意义参数。为应对标记生物数据的稀缺，我们采用混合训练范式：模型先在合成数据上发展"物理直觉"，再对无标签的真实世界测量进行无监督自对齐。我们的结果表明，这种物理风味方法跨多样收缩表型与细胞系（包括 Duchenne 肌营养不良模型）实现高保真参数化。我们可扩展、自改进的流水线弥合了理想生物物理与带噪体外数据之间的差距，为高通量生物物理研究提供稳健工具。

## 关键词

#骨骼肌组织 #物理信息网络 #表型分析 #Transformer
