---
published: 2026-08-05
title: "π 注意力：面向长上下文建模的在线高效稀疏 Transformer"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/$-pi$-Attention- Online Efficient Sparse Transformers for Long-Context Modeling.md"
source_note: "[[信息源/arXiv cs.AI RSS/$-pi$-Attention- Online Efficient Sparse Transformers for Long-Context Modeling]]"
source_sha256: cf027881552b455e2c6a9d64bf3b42cbc98e6c5b772ea257c310e865d5ec1ca6
original_url: "https://arxiv.org/abs/2511.10696"
processed: 2026-08-05
language: zh-CN
---

# π 注意力：面向长上下文建模的在线高效稀疏 Transformer

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 原文链接：[打开原文](https://arxiv.org/abs/2511.10696)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/$-pi$-Attention- Online Efficient Sparse Transformers for Long-Context Modeling|查看原始文件]]

## 摘要

- 稀疏注意力通过将每个词元限制在有限邻域内，降低完整自注意力的二次计算成本，是处理长上下文的关键技术。
- 论文提出 π 注意力这一在线高效稀疏注意力算子：词元到达时，每一步维护由局部邻居和一个由 π 索引的远程取回位置组成的流式工作集，并在共享 softmax 下通过自适应先验融合二者。
- 该方法不预先构造全局稀疏掩码，而是在实时工作集上结合层级感知的输入/输出访问计算注意力；作者分析了在线规则下的因果可达性和最小深度，并证明每步成本仍为 O(k)。
- 在语言建模、Long Range Arena 以及 4K 至 32K 上下文长度的效率测试中，π 注意力持续优于局部窗口等稀疏基线，以线性成本接近稠密注意力质量。

## 正文

稀疏注意力对于长上下文 Transformer 至关重要：它将每个词元限制在有限邻域内，从而降低完整自注意力的二次复杂度。局部窗口能够有效捕捉邻近上下文，但会造成感受野瓶颈，使模型在中等深度下难以建模窗口之外的依赖关系。

本文提出 π 注意力，一种在线高效的稀疏注意力算子。随着词元到达，每一步都会维护一个由局部邻居和一个以 π 为索引的远程取回位置组成的流式工作集，并在共享 softmax 下通过自适应先验将二者融合。与提前实例化全局稀疏掩码不同，π 注意力在实时工作集上计算注意力，并采用层级感知的输入/输出访问策略。

作者分析了这种在线规则下的因果可达性和最小深度，证明每一步的计算成本仍保持为 O(k)。在语言建模、Long Range Arena 和效率分析实验中，测试覆盖 4K 至 32K 的上下文长度。结果显示，该方法相较局部窗口及其他稀疏基线取得稳定提升，并以线性成本达到接近稠密注意力的质量。

## 关键词

#稀疏注意力 #Transformer #长上下文 #语言建模
