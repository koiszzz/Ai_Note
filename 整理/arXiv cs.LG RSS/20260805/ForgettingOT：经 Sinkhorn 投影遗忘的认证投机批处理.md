---
published: 2026-08-05
title: "ForgettingOT：经 Sinkhorn 投影遗忘的认证投机批处理"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/ForgettingOT- Certified Speculative Batching from Sinkhorn's Projective Forgetting.md"
source_note: "[[信息源/arXiv cs.LG RSS/ForgettingOT- Certified Speculative Batching from Sinkhorn's Projective Forgetting]]"
source_sha256: c9c849f0da387415ef11dccf6f0cfe415b58e63f4a7f2497b7695ac2d01a6cbc
original_url: "https://arxiv.org/abs/2607.24741"
processed: 2026-08-05
language: zh-CN
---

# ForgettingOT：经 Sinkhorn 投影遗忘的认证投机批处理

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Xinyang Wen
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.24741)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/ForgettingOT- Certified Speculative Batching from Sinkhorn's Projective Forgetting|查看原始文件]]

## 摘要

- 正二边际熵最优输运由非线性、正、序保持、齐次 Sinkhorn 映射求解；对偶缩放规范求商后，不动点 Jacobian J*_t=QP=P*P 的活跃特征模态（一般为 λ₂(QP)）控制严格校正尾——投影残差比收敛到该模态，容忍 θ_τ 所需额外认证循环按 log(ρ/θ_τ)/[−log λ₂]+O(1) 缩放。
- ForgettingOT 把该非线性 Perron–Frobenius 事实转化为相关 Sinkhorn 问题流的认证执行器：边际中可计算投影变化 Ω_t 与核界定结转残差，验证收缩 q_t 给出候选修复深度；窗口定理把这些深度与审计网格转化为打包工作、集体轮、超调与回退界；经验尾估计分配工作但从不授权发布——当前实例证书或测量边际残差授权，普通 Sinkhorn 作回退。
- 15 个 FP64 A100/OTT-JAX 单元上观测商慢模态比与 λ₂(QP) 一致到 9.84×10⁻⁶；受控四 A100 流上完整执行器比顺序软 c-变换热启动快 1.42×–3.55×，30/30 配对胜、无 10⁻³ 边际容忍违反；八 A100 支持-4096 流墙钟加速 2.584×–2.945×、向量集体轮减少 4.285×–4.615×。
- 外层执行器与保目标 Sinkhorn 加速器组合；改变映射或近似目标需收缩或误差桥才能继承修复深度界。

## 正文

论文编号：arXiv:2607.24741v2（更新类型：replace-cross）。以下为摘要全文翻译。

正二边际熵最优输运由一个非线性、正、序保持、齐次的 Sinkhorn 映射求解。在对偶缩放规范求商之后，我们表明不动点 Jacobian J*_t=QP=P*P 的活跃特征模态（一般为 λ₂(QP)）控制严格的校正尾。投影残差比收敛到这个模态，而容忍 θ_τ 所需的额外认证循环按 log(ρ/θ_τ)/[−log λ₂]+O(1) 缩放。ForgettingOT 把这个非线性 Perron–Frobenius 事实转化为相关 Sinkhorn 问题流的认证执行器。边际中一个可计算的投影变化 Ω_t 与核界定了结转残差，而一个验证的收缩 q_t 给出候选修复深度。一个窗口定理把这些深度与审计网格转化为打包工作、集体轮、超调与回退的界。经验尾估计分配工作，但从不授权发布；当前实例证书或测量的边际残差才授权发布，普通 Sinkhorn 作为回退。在 15 个 FP64 A100/OTT-JAX 单元上，观测到的商慢模态比与 λ₂(QP) 一致到 9.84×10⁻⁶。在受控的四 A100 流上，完整执行器比顺序软 c-变换热启动快 1.42×–3.55×，30/30 配对获胜，且无 10⁻³ 边际容忍的违反。八 A100 支持-4096 的流给出 2.584×–2.945× 的墙钟加速与 4.285×–4.615× 更少的向量集体轮。外层执行器与保目标的 Sinkhorn 加速器组合；一个改变的映射或近似目标在继承修复深度界之前需要收缩或误差桥。

## 关键词

#最优输运 #Sinkhorn #投机批处理 #认证
