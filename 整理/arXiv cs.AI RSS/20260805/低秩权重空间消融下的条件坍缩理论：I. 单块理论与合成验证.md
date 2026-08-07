---
published: 20260805
title: "低秩权重空间消融下的条件坍缩理论：I. 单块理论与合成验证"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/A Theory of Conditional Collapse under Low-Rank Weight-Space Ablations- I. The Single-Block Theory a.md"
source_note: "[[信息源/arXiv cs.AI RSS/A Theory of Conditional Collapse under Low-Rank Weight-Space Ablations- I. The Single-Block Theory a]]"
source_sha256: 4c1bfac166451019c50535fe886d266815bc6ddd07385243e1d096f13cad7180
original_url: "https://arxiv.org/abs/2608.03620"
processed: 2026-08-06
language: zh-CN

---

# 低秩权重空间消融下的条件坍缩理论：I. 单块理论与合成验证

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Abdallah Khemais
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03620)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/A Theory of Conditional Collapse under Low-Rank Weight-Space Ablations- I. The Single-Block Theory a|查看原始文件]]

## 摘要

- 激活修补和权重空间消融都声称某组件对行为负有因果责任，但作用于不同对象：一次前向传播对每次前向传播背后的参数。本文探讨它们何时一致。
- 在条件计算通过残差流加法进行（F(x)=F₀(x)+Σαᵢ(x)vᵢ）的理想模型中，证明三个精确结果：删除载体的子集当且仅当移除对该对对称且不留下外部对比时，将匹配输入对坍缩到相同的无条件输出。
- 在合成条件任务上训练的小型 Transformer 验证了所有三个预测：跨 39 种消融配置，测量的交互与理想模型预测准确率强秩相关（Spearman -0.83）。

## 正文

激活修补和权重空间消融都声称某组件对行为负有因果责任，然而它们作用于不同的对象：一次前向传播对每次前向传播背后的参数。我们问它们何时一致。我们研究一个理想化模型，其中条件计算通过残差流加法进行，F(x)=F₀(x)+Σᵢαᵢ(x)vᵢ，由线性泛函读出，并证明三个精确结果。第一，删除载体子集当且仅当移除对该对对称且不留下外部对比时，将匹配输入对坍缩到相同的无条件输出；误差是确定性的，即使两个条件仅近似成立，我们也给出其精确形式。第二，修补载体按供体-受体对比移动读出，而消融它按绝对水平移动读出；两者互不界定，我们构造了每单个载体修补都翻转决策而没有任何单个载体消融能做到的对。第三，对于与其自身层的归一化和 MLP 组合的注意力头，我们推导出精确的一阶交互公式，具有可证明的二阶余项，仅在 MLP 被消融时恒等消失，而在头部被消融时通常不消失。在合成条件任务上训练的小型 Transformer 说明了所有三个预测：跨 39 种消融配置，测量的交互与理想模型的预测准确率强秩相关（Spearman -0.83），第二个任务和架构复现了相同的模式，包括进一步的极性反转。单块交互结果超越一个残差块，并且合成验证在配套论文中对照真实预训练模型测试，该论文沿两条轴线进一步推进这一理论。

## 关键词

#可解释性 #消融 #激活修补 #因果分析 #arXiv