---
title: "TimeRLM：递归语言模型实现长上下文时序中精确异常定位"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/TimeRLM- Recursive Language Models Enable Precise Anomaly Localization in Long-Context Time-Series.md"
source_note: "[[信息源/arXiv cs.LG RSS/TimeRLM- Recursive Language Models Enable Precise Anomaly Localization in Long-Context Time-Series.]]"
source_sha256: d52dc25fe70ba543211a3d258aa8648719bc7ea630fc059f432513e916d24fde
original_url: "https://arxiv.org/abs/2608.03391"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# TimeRLM：递归语言模型实现长上下文时序中精确异常定位

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Nicolas Zumarraga、Lorenzo Steno、Ning Wang、Max Rosenblattl、Thomas Kaar、Maxwell A. Xu、Kevin O'Sullivan、Markus Kreft、Elgar Fleisch、Paul Schmiedmayer、Patrick Langer、Robert Jakob
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03391)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/TimeRLM- Recursive Language Models Enable Precise Anomaly Localization in Long-Context Time-Series.|查看原始文件]]

## 摘要

- 长上下文时序上的精确异常定位是临床护理、工业运营、金融服务与物流等监控应用的关键任务，其中短暂证据可能隐藏在高频数据的长跨度中。
- 时序语言模型（TSLM）能摄入时序数据并以自然语言口头化异常发现；但近期基准报告长上下文下检索性能下降，与文本、视觉与音频的失败模式一致。
- 文本领域中递归语言模型（RLM）通过把上下文保持在大语言模型（LLM）外部、允许模型经代码查询它而恢复大部分丢失性能。
- 提出 TimeRLM，一个用于时序的 RLM 公式：用代码与视觉能力顺序操作信号；还引入 AnomalyXL，一个带程序注入异常（需要精确检索）的合成长上下文异常定位基准，实现五个任务类别与两个变体：AnomalyXL-MCQ 与 AnomalyXL-Localize。
- TimeRLM 在五个 AnomalyXL-Localize 任务中的四个上优于每个评估的 TSLM 与单遍基线，达到 0.682 定位 IoU 与 0.745 分类带证据，而所有基线至多为 0.329 与 0.072。
- 用强化学习后训练 TimeRLM：所得模型进一步改善性能，且产生最终答案所需的智能体交互轮次约为其未训练基础模型的三分之一；在未见真实世界 ECG、睡眠与软件可观测性记录上，后训练的 TimeRLM 保持或改善性能，尽管只在合成数据上训练，仍超越 TSLM。
- 发现表明与时序的递归交互是长视界检索的有效方法。

## 正文

论文编号：arXiv:2608.03391v1（更新类型：new）。以下为摘要全文翻译。

长上下文时序上的精确异常定位是临床护理、工业运营、金融服务与物流等监控应用中的关键任务，那里短暂的证据可能隐藏在高频数据的长跨度内。时序语言模型（TSLM）能够摄入时序数据并以自然语言口头化关于异常的发现；然而，近期基准报告长上下文下检索性能下降，反映文本、视觉与音频中的失败模式。在文本领域，递归语言模型（RLM）通过把上下文保持在大语言模型（LLM）外部、允许模型通过代码查询它来恢复大部分丢失的性能。我们提出 TimeRLM，一个用于时序的 RLM 公式，它使用代码与视觉能力顺序操作信号。我们进一步引入 AnomalyXL，一个带程序注入异常（需要精确检索）的合成长上下文异常定位基准。我们实现五个不同的任务类别与两个变体：AnomalyXL-MCQ 与 AnomalyXL-Localize。TimeRLM 在五个 AnomalyXL-Localize 任务中的四个上优于每个被评估的 TSLM 与单遍基线，达到 0.682 的定位 IoU 与 0.745 的分类带证据，而所有基线至多为 0.329 与 0.072。我们使用强化学习后训练 TimeRLM。所得模型进一步改善性能，并产生最终答案所需的智能体交互轮次约为其未训练基础模型的三分之一。在未见的真实世界 ECG、睡眠与软件可观测性记录上，后训练的 TimeRLM 保持或改善性能，尽管只在合成数据上训练，仍超越 TSLM。我们的发现表明，与时序的递归交互是长视界检索的一种有效方法。

## 关键词

#递归语言模型 #时序 #异常定位 #长上下文 #智能体
