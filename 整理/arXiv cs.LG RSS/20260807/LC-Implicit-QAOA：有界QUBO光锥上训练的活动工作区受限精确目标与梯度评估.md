---
published: 2026-08-07
title: "LC-Implicit-QAOA：有界 QUBO 光锥上训练的活动工作区受限精确目标与梯度评估"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/LC-Implicit-QAOA- Active-Workspace-Capped Exact Objective-and-Gradient Evaluation for Training over .md"
source_note: "[[信息源/arXiv cs.LG RSS/LC-Implicit-QAOA- Active-Workspace-Capped Exact Objective-and-Gradient Evaluation for Training over ]]"
source_sha256: c6866460a11f73cdb0b37ab21db679395b5320c080e24bfe0a7f30cc6b316fbe
original_url: "https://arxiv.org/abs/2608.05610"
processed: 2026-08-07
language: zh-CN
---

# LC-Implicit-QAOA：有界 QUBO 光锥上训练的活动工作区受限精确目标与梯度评估

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Chih-Chung Hsu
> - **发布时间**：2026-08-07
> - **分类**：cs.ET
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05610)

## 摘要

- QAOA 训练反复查询目标与所有共享梯度，即使 QUBO 项因果锥有界，精确评估也是可行性瓶颈。
- 基于既有因果锥限制与伴随微分，LC-Implicit-QAOA 在局部振幅与命名工作区分配前分析锥结构与诱导边数，并在命名活动评估器工作区预算下联合选择等大小微批与检查点调度。
- "Implicit"指省略全局状态与全局成本表，而非隐式微分；不可行请求在那些分配前被拒绝；独立实现的 complex128/float64 稠密伴随在 1800 次图-角度比较上与 LC 一致，最坏相对梯度误差 1.56×10⁻¹³。
- LC 完成 p=2 有界锥网格全部 104 个目标请求；在预指定 n≤24 验证上限下，匹配的状态+成本参考对 28 个请求执行、76 个有意不运行；80 个预算请求中测量分配评估器内存保持预算内（至多 0.797）；3 正则 n=512、p=2 时伴随在 101 次目标等价调用、189 秒到达相同有限预算端点（中心差分 909 次调用、1565 秒）。

## 正文

QAOA 训练反复查询目标与所有共享梯度，即使 QUBO 项具有有界因果锥，精确评估也是可行性瓶颈。基于既有的因果锥限制与伴随微分（adjoint differentiation），LC-Implicit-QAOA 在局部振幅与命名工作区分配之前分析锥结构与诱导边计数，然后在命名活动评估器工作区预算下联合选择等大小微批与检查点调度。"隐式"指省略全局状态与全局成本表，而非隐式微分；不可行请求在那些分配之前被拒绝。一个独立实现的 complex128/float64 稠密伴随在 1800 次图-角度比较上与 LC 一致，最坏相对梯度误差为 1.56×10⁻¹³。LC 在 p=2 有界锥网格上完成全部 104 个目标请求；在预指定 n≤24 验证上限下，匹配的状态+成本参考对 28 个请求执行、76 个有意不运行。在 80 个预算请求中，测量的分配评估器内存保持在预算内，至多达到其 0.797。在 3 正则 n=512、p=2 上，伴随用 101 次目标等价调用、189 秒到达相同有限预算端点，而中心差分为 909 次调用、1565 秒。LC 面向带横向场混频器的固定深度一、二局域对角 QUBO 成本；它不提供全局状态、采样或硬件无关的最快后端规则。

## 关键词

QAOA、量子优化、伴随微分、梯度评估、QUBO
