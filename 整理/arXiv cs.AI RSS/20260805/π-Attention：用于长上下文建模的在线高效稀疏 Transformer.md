---
published: 2026-08-05
title: "π-Attention：用于长上下文建模的在线高效稀疏 Transformer"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/$-pi$-Attention- Online Efficient Sparse Transformers for Long-Context Modeling.md"
source_note: "[[信息源/arXiv cs.AI RSS/$-pi$-Attention- Online Efficient Sparse Transformers for Long-Context Modeling]]"
source_sha256: cf027881552b455e2c6a9d64bf3b42cbc98e6c5b772ea257c310e865d5ec1ca6
original_url: "https://arxiv.org/abs/2511.10696"
processed: 2026-08-05
language: zh-CN
---

# π-Attention：用于长上下文建模的在线高效稀疏 Transformer

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Pike D. Liu、Chang Liu、Yanxuan Yu
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2511.10696)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/$-pi$-Attention- Online Efficient Sparse Transformers for Long-Context Modeling|查看原始文件]]

## 摘要

- 提出 π-Attention，一种在线高效稀疏注意力算子：每个时间步维护由局部邻居组成的流式工作集，外加一个按 π 索引的长距离取回机制，并在共享 softmax 下用自适应先验融合。
- 无需预先构建全局稀疏掩码，而是在实时工作集上以层级感知的 IO 方式计算注意力。
- 分析该在线规则下的因果可达性与最小深度，证明每步成本保持 O(k)。
- 在语言建模、Long Range Arena 与效率评测（4K–32K 上下文长度）中，相比局部窗口及其他稀疏基线取得一致提升，以线性成本逼近稠密注意力的质量。

## 正文

论文编号：arXiv:2511.10696v3（更新类型：replace-cross）。以下为摘要全文翻译。

稀疏注意力对于长上下文 Transformer 至关重要，它将每个 token 限制在一个有限的邻域内，从而降低全自注意力的平方级成本。局部窗口能有效捕获邻近上下文，但会在窗口之外的依赖关系上造成感受野瓶颈，限制中等深度下的长程建模能力。在本文中，我们提出 π-Attention，一种*在线高效*稀疏注意力算子：随着 token 不断到达，每一步都维护一个由局部邻居组成的流式工作集，外加一个以 π 索引的长距离取回项，并在共享 softmax 下通过自适应先验进行融合。π-Attention 不预先物化全局稀疏掩码，而是在实时工作集上以层级感知的 IO 方式计算注意力。我们分析了该在线规则下的因果可达性与最小深度，并证明每步成本保持 O(k)。在语言建模、Long Range Arena 以及效率评测（覆盖 4K 至 32K 上下文长度）上的实验表明，与局部窗口及其他稀疏基线相比，π-Attention 取得了一致的性能提升，并以线性成本逼近稠密注意力的质量。

## 关键词

#稀疏注意力 #长上下文 #Transformer #在线计算
