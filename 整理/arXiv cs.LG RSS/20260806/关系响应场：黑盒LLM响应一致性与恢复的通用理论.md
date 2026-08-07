---
published: 2026-08-06
title: 关系响应场：黑盒LLM响应一致性与恢复的通用理论
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/Relational Response Fields- A General Theory of Black-Box LLM Response Consistency and Recovery.md
source_note: "[[信息源/arXiv cs.LG RSS/Relational Response Fields- A General Theory of Black-Box LLM Response Consistency and Recovery]]"
source_sha256: 666e4e6e49aa55d7e97d89f975d631c34d505e79b845e353e11db4b8a1dc3ee7
original_url: https://arxiv.org/abs/2608.04552
processed: 2026-08-07
language: zh-CN
---

# 关系响应场：黑盒LLM响应一致性与恢复的通用理论

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04552)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Relational Response Fields- A General Theory of Black-Box LLM Response Consistency and Recovery|查看原始文件]]

## 摘要

- 提出关系响应场（RRF）框架，将查询的带类型变换下的响应表示为场，以关系算子、锚点算子与 `γ_k(D,A)` 界定黑盒响应恢复的内在难度。
- `γ_k(D,A)` 为正当且仅当每个 k 节点破坏可识别，且给出与 `1/γ_k` 成正比的决定性稳定性界，匹配的两点极小极大下界表明无法改进。
- 受控定理测试与黑盒数学/代码实验验证四个理论推论，支持 `γ_k(D,A)` 作为响应恢复实例的可测量属性。

## 正文

黑盒语言模型的可靠性通常通过采样、提示、投票、验证或迭代修正单个答案来实现。我们问一个更前置的问题：一组黑盒响应究竟何时是可恢复的？我们将查询的带类型变换下的响应表示为关系响应场（relational response field, RRF）。边传递（edge transports）编码有效响应在改写、缩放、分解、重构或其他任务对称性下必须如何变化；锚点（anchors）编码独立可信的证据，如执行结果或验证器。

对于关系算子 D、锚点算子 A 以及至多 k 个被破坏的响应节点，我们确定 `γ_k(D,A)` 为黑盒响应恢复的内在难度。它恰好在每个 k 节点破坏可识别时为正；它给出与 `1/γ_k` 成正比的决定性稳定性界；而匹配的两点极小极大下界表明，没有估计器能改进这一依赖关系。因此，一致性不是真理性：仅依赖关系的方法对零方向（包括共享幻觉）是盲目的。我们推导出稀疏场修复算法，同时将信息论可识别性与凸优化所需的更强的零空间条件区分开来。受控定理测试与黑盒数学/代码实验评估了四个理论推论：一致性-真理性分离、锚点相变、冗余饱和，以及跨模型、跨任务的修复难度预测。结果支持将 `γ_k(D,A)` 视为响应恢复实例的可测量属性，而非附属于某一种修复启发式的得分。

## 关键词

#黑盒LLM #一致性 #响应恢复 #极小极大 #可识别性
