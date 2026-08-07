---
published: 20260805
title: "π-Attention：用于长上下文建模的在线高效稀疏 Transformer"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/$-pi$-Attention- Online Efficient Sparse Transformers for Long-Context Modeling.md"
source_note: "[[信息源/arXiv cs.AI RSS/$-pi$-Attention- Online Efficient Sparse Transformers for Long-Context Modeling]]"
source_sha256: cf027881552b455e2c6a9d64bf3b42cbc98e6c5b772ea257c310e865d5ec1ca6
original_url: "https://arxiv.org/abs/2511.10696"
processed: 2026-08-06
language: zh-CN

---

# π-Attention：用于长上下文建模的在线高效稀疏 Transformer

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Pike D. Liu, Chang Liu, Yanxuan Yu
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2511.10696)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/$-pi$-Attention- Online Efficient Sparse Transformers for Long-Context Modeling|查看原始文件]]

## 摘要

- 稀疏注意力对长上下文 Transformer 至关重要，它将每个 token 限制在有限的邻域内，从而降低全自注意力的二次方成本。
- 本文提出 π-Attention，一种在线高效的稀疏注意力算子：token 到达时，每一步维护一个由局部邻居加 π 索引长程获取组成的流式工作集，并在共享 softmax 下用自适应先验融合。
- 分析表明在 4K–32K 上下文长度上，该方法的每步成本保持 O(k)，在语言建模、Long Range Arena 和效率评测上持续优于局部窗口等稀疏基线，以线性成本逼近密集注意力的质量。

## 正文

稀疏注意力对长上下文 Transformer 至关重要，它将每个 token 限制在有限的邻域内，从而降低全自注意力的二次方成本。局部窗口能有效捕捉附近上下文，但会对窗口之外的依赖造成感受野瓶颈，限制中等深度下的长程建模。在本文中，我们提出 π-Attention，一种\emph{在线高效}稀疏注意力算子：随着 token 到达，每一步维护一个由局部邻居加上 π 索引长程获取组成的流式工作集，并在共享 softmax 下通过自适应先验融合。π-Attention 不预先物化全局稀疏掩码，而是在活动工作集上以层级感知的 IO 计算注意力。我们分析了这种在线规则下的因果可达性和最小深度，并证明每步成本保持 O(k)。在 4K–32K 上下文长度的语言建模、Long Range Arena 和效率评测实验中，该方法持续优于局部窗口和其他稀疏基线，以线性成本逼近密集注意力的质量。

## 关键词

#稀疏注意力 #长上下文 #Transformer #arXiv