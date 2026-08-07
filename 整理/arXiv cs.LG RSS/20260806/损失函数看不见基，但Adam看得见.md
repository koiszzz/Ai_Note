---
published: 2026-08-06
title: 损失函数看不见基，但Adam看得见
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/The Loss Does Not See the Basis, but Adam Does.md
source_note: "[[信息源/arXiv cs.LG RSS/The Loss Does Not See the Basis, but Adam Does]]"
source_sha256: beea8d3c45968061736e81a4300aa988d61eae527e01a63484c7248cf5c730f6
original_url: https://arxiv.org/abs/2608.05136
processed: 2026-08-07
language: zh-CN
---

# 损失函数看不见基，但Adam看得见

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05136)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/The Loss Does Not See the Basis, but Adam Does|查看原始文件]]

## 摘要

- 对分解模型 $W = UV^\top$，梯度下降隐式偏向低秩解，而 Adam 不会；差异源于损失的规范对称性 $ (U, V) \mapsto (UQ, VQ)$。
- 结构定理将无记忆等变规则刻画为 Gram 决定的左预条件子；逐坐标方法（Adam、RMSProp）不满足等变性，共享标量预条件化可单调恢复低秩偏置。
- 在欠定矩阵感知与超光谱数据集上验证：基的选择决定了优化器所选择的插值，而非调参细节。

## 正文

对分解模型 $W = UV^\top$ 的梯度下降隐式偏向低秩解，而 Adam 从相同的小初始化出发却不会。我们将这种差异追溯到损失的规范对称性，即其在 $(U, V) \mapsto (UQ, VQ)$ 下的不变性。梯度流的低秩机制只有在优化器是规范等变的条件下才对优化器可用，这是转移成立的必要但非充分条件。梯度下降、动量、"共享标量"Adam、Muon 和 Shampoo 满足该条件。Adam、RMSProp 以及其他逐坐标方法则不满足。一个结构定理将无记忆等变规则刻画为恰好是 Gram 决定的左预条件子，而一个转移定理将梯度流的逐路径性质带到公共标量流上。随后，我们在欠定矩阵感知上按与植入真值的恢复误差对九种更新规则进行排序。从逐坐标到共享标量预条件化的单参数族单调地恢复该偏差，将各向异性隔离为原因。一个"谱调度"调和了两份关于 Muon 的相互矛盾的报告：等速率更新精确恢复低秩目标，但随着谱尾增长失去其优势。在 Transformer 中，Adam 在第一步就分离了两个规范等价的初始化，而等变优化器保持在浮点精度，最终每头不变量 $W_Q^\top W_K$ 在相对 Frobenius 距离上相差 56%，这是任何逐头旋转都无法弥合的差距。在两个超光谱数据集上、匹配训练损失的情况下，梯度下降在最低采样密度和更低有效秩下将留出误差降低 43–44%。因此，基的选择不是一个调参细节，而是一个关于优化器选择哪个插值的决策。

## 关键词

#Adam #梯度下降 #规范等变 #低秩偏置 #矩阵感知 #优化器
