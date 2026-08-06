---
title: "低秩权重空间消融下的条件坍缩理论：I. 单块理论及其合成验证"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/A Theory of Conditional Collapse under Low-Rank Weight-Space Ablations- I. The Single-Block Theory a.md"
source_note: "[[信息源/arXiv cs.AI RSS/A Theory of Conditional Collapse under Low-Rank Weight-Space Ablations- I. The Single-Block Theory a]]"
source_sha256: 4c1bfac166451019c50535fe886d266815bc6ddd07385243e1d096f13cad7180
original_url: "https://arxiv.org/abs/2608.03620"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# 低秩权重空间消融下的条件坍缩理论：I. 单块理论及其合成验证

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Abdallah Khemais
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03620)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/A Theory of Conditional Collapse under Low-Rank Weight-Space Ablations- I. The Single-Block Theory a|查看原始文件]]

## 摘要

- 研究激活修补（activation patching）与权重空间消融（weight-space ablation）何时一致：前者作用于一次前向传播，后者作用于每次前向传播背后的参数。
- 在残差流 F(x)=F₀(x)+Σᵢαᵢ(x)vᵢ 的理想化模型上证明三个精确结果：删除载体子集当且仅当删除在输入对上对称且不留下外部对比时，才把匹配输入对坍缩到相同无条件输出；修补按供体-受体“对比”移动读出，消融则按“绝对水平”移动，二者互不界定；对注意力头推导精确一阶交互公式与可证的二阶余项。
- 在合成条件任务上训练的小型 Transformer 验证全部三个预测：39 种消融配置下，测量交互与理想化模型的预测准确率强秩相关（Spearman −0.83），第二个任务与架构再现相同模式。
- 单块交互结果可推广到多个残差块，配套论文将理论沿两个方向进一步推进。

## 正文

论文编号：arXiv:2608.03620v1（更新类型：cross）。以下为摘要全文翻译。

激活修补与权重空间消融都声称某个组件对行为负有因果责任，但它们作用于不同的对象：前者作用于一次前向传播，后者作用于每次前向传播背后的参数。我们研究它们何时一致。我们研究一个理想化模型：条件计算通过残差流 F(x)=F₀(x)+Σᵢαᵢ(x)vᵢ 加性地执行，并由线性泛函读出；我们证明了三个精确结果。第一，删除载体子集当且仅当删除在输入对上对称且不留下外部对比时，才把匹配的输入对坍缩到相同的无条件输出；该误差是确定性的，即使两个条件仅近似成立，我们也给出其精确形式。第二，修补载体按供体-受体的“对比”移动读出，而消融则按“绝对水平”移动读出；两者互不界定，我们构造了这样的输入对：每次单载体修补都翻转决策，而任何单载体消融都无法做到。第三，对于由自身层归一化和 MLP 组成的注意力头，我们推导出精确的一阶交互公式，并带有可证明的二阶余项；该余项在仅消融 MLP 时恒为零，但在消融注意力头时一般不为零。在合成条件任务上训练的小型 Transformer 验证了全部三个预测：在 39 种消融配置中，测量到的交互与理想化模型的预测准确率强秩相关（Spearman −0.83），并且第二个任务与架构复现了相同的模式，包括进一步的极性反转。单块交互结果可推广到单个残差块之外；合成验证在配套论文中进一步对照真实预训练模型进行测试，该论文沿两个方向推进这一理论。

## 关键词

#可解释性 #机制可解释性 #消融 #注意力头
