---
title: "ConformalShift：针对自适应 ECG 监控的目标事件重排"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/ConformalShift- Targeted Event Reordering Against Adaptive ECG Monitoring.md"
source_note: "[[信息源/arXiv cs.LG RSS/ConformalShift- Targeted Event Reordering Against Adaptive ECG Monitoring]]"
source_sha256: 716b88a2ee1e901819fffb0d9a393692911922765bc969f68e993a248429c678
original_url: "https://arxiv.org/abs/2608.03628"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# ConformalShift：针对自适应 ECG 监控的目标事件重排

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Arash Vashagh、Yasmin Vashagh
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03628)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/ConformalShift- Targeted Event Reordering Against Adaptive ECG Monitoring|查看原始文件]]

## 摘要

- 引入 ConformalShift，有界事件重排攻击：在不修改 ECG 波形、标签、分类器分数或事件多重集的情况下，抑制被挽救事件的室性类别——搜索真实先前事件的可行排列，在选定目标被评估前降低室性阈值。
- 自适应共形预测可以恢复点分类器遗漏的临床重要心跳类别，但延迟反馈使其决策对事件顺序敏感。
- 不相交 MIT–BIH 确认记录上：攻击对 Extra Trees 抑制 66.7% 合格目标、HistGradientBoosting 60.0%（随机调度率分别为 4.4% 与 12.0%）；迁移配置也在 INCART 上优于随机调度，而减少位移预算在两个数据集上都削弱攻击。
- 结果：即使波形、标签、分类器输出与事件内容保持不变，医疗自适应监控器也可通过真实信息的时机被攻破。

## 正文

论文编号：arXiv:2608.03628v1（更新类型：new）。以下为摘要全文翻译。

自适应共形预测可以恢复点分类器遗漏的临床重要心跳类别，但延迟反馈使其决策对事件顺序敏感。我们引入 ConformalShift，一个有界的事件重排攻击：在不修改 ECG 波形、标签、分类器分数或事件多重集的情况下，抑制被挽救事件的室性类别。ConformalShift 搜索真实先前事件的可行排列，在选定目标被评估之前降低室性阈值。在不相交的 MIT–BIH 确认记录上，该攻击对 Extra Trees 抑制了 66.7% 的合格目标、对 HistGradientBoosting 抑制了 60.0%，而随机调度率分别为 4.4% 与 12.0%。迁移的配置也在 INCART 上优于随机调度，而减少位移预算在两个数据集上都削弱了攻击。这些结果表明，即使波形、标签、分类器输出与事件内容保持不变，医疗环境中的自适应监控器也可以通过真实信息的时机被攻破。

## 关键词

#共形预测 #ECG监控 #事件重排 #对抗攻击
