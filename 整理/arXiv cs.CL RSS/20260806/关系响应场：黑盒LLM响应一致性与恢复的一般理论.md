---
published: 2026-08-06
title: 关系响应场：黑盒LLM响应一致性与恢复的一般理论
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/Relational Response Fields- A General Theory of Black-Box LLM Response Consistency and Recovery.md
source_note: "[[信息源/arXiv cs.CL RSS/Relational Response Fields- A General Theory of Black-Box LLM Response Consistency and Recovery]]"
source_sha256: 1300560e09f84a663cf397bbd8073ab0fae58ddc141f542bf7c366f14db8fb16
original_url: https://arxiv.org/abs/2608.04552
processed: 2026-08-07
language: zh-CN
---

# 关系响应场：黑盒LLM响应一致性与恢复的一般理论

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04552)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/Relational Response Fields- A General Theory of Black-Box LLM Response Consistency and Recovery|查看原始文件]]

## 摘要

- 黑盒语言模型的可靠性通常通过采样、提示、投票、验证或迭代修订单个答案来追求；本文提出一个前置问题：一组黑盒响应究竟是否可恢复，由什么决定？
- 将查询的类型化变换下的响应表示为"关系响应场"（RRF）：边迁移编码有效响应在释义、缩放、分解、重构等任务对称性下应如何变化；锚点编码独立可信的证据（如执行结果或验证器）。
- 对关系算子 D、锚点算子 A 及至多 k 个被破坏的响应节点，确定 γ_k(D,A) 为黑盒响应恢复的内在难度：它恰在所有 k 节点破坏均可识别时为正值，给出与 1/γ_k 成正比的确定性稳定性界，并配有匹配的两点极小极大下界。
- 一致性不等于真值：仅用关系的方法对零方向（包括共享幻觉）是盲目的；推导出稀疏场修复算法，同时区分信息论可识别性与凸优化所需的更强零空间条件。
- 受控定理测试与黑盒数学/代码实验验证了四个由理论推出的推论：一致性-真值分离、锚点相变、冗余饱和、以及跨模型跨任务地预测修复难度。

## 正文

本文编号：arXiv:2608.04552v1（公告类型：new），以下为摘要全文翻译。

黑盒语言模型的可靠性通常通过采样、提示、投票、验证或迭代修订单个答案来追求。我们提出一个前置问题：*一组黑盒响应究竟是否可恢复，由什么决定？* 我们将查询的类型化变换下的响应表示为一个*关系响应场*（relational response field, RRF）。边迁移（edge transports）编码有效响应在释义、缩放、分解、重构或其他任务对称性下应如何变化；锚点（anchors）编码独立可信的证据，例如执行结果或验证器。对于关系算子 $D$、锚点算子 $A$ 以及至多 $k$ 个被破坏的响应节点，我们将 $\gamma_k(D,A)$ 识别为黑盒响应恢复的内在难度。它恰好在每个 $k$ 节点破坏都可识别时取正值；它给出一个与 $1/\gamma_k$ 成正比的确定性稳定性界；一个匹配的两点极小极大下界表明，任何估计器都无法改进这一依赖关系。因此，一致性不是真值：仅用关系的方法对零方向（null directions）是盲目的，包括共享幻觉在内。我们推导出稀疏场修复算法，同时将信息论可识别性与凸优化所需的更强零空间条件区分开来。受控定理测试和黑盒数学/代码实验评估了四个由理论推出的推论：一致性-真值分离、锚点相变、冗余饱和，以及跨模型、跨任务地预测修复难度。结果支持将 $\gamma_k(D,A)$ 视为响应恢复实例的可测属性，而非附着于某个修复启发式方法的评分。

## 关键词

#黑盒LLM #一致性 #响应恢复 #关系响应场 #极小极大下界 #可识别性
