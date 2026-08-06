---
published: 2026-08-05
title: "评估盲视：静默测量失败如何从训练到部署腐蚀 AI 系统"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Evaluation Blindness- How Silent Measurement Failures Corrupt AI Systems from Training to Deployment.md"
source_note: "[[信息源/arXiv cs.LG RSS/Evaluation Blindness- How Silent Measurement Failures Corrupt AI Systems from Training to Deployment]]"
source_sha256: 406f988da5675ada90ca3e1eb87206755636ad0c7ec704dc0e24a47d42381a75
original_url: "https://arxiv.org/abs/2608.02786"
processed: 2026-08-05
language: zh-CN
---

# 评估盲视：静默测量失败如何从训练到部署腐蚀 AI 系统

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Priyanka Bajaj（独立研究者）
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02786)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Evaluation Blindness- How Silent Measurement Failures Corrupt AI Systems from Training to Deployment|查看原始文件]]

## 摘要

- 引入评估盲视概念：测量函数 M 对失败类 F 表现评估盲视，当系统实际失败时其读数与健康状态无法区分，且无辅助信号标记该差距。
- AI 系统可静默失败：失败经训练循环、评估流水线与生产监控栈传播，直到下游危害使其可见；问题在两个文献分离处理的生命周期阶段出现——训练时（奖励模型被欺骗、重要性采样校正静默算错、基准污染夸大微调评估，而损失曲线健康、梯度更新正常）；部署时（监控漏掉六类生产失败，其中"运营"类按结构定义 100% 静默）。
- 提供统一两阶段的形式可检测性谓词；四个训练时案例研究追踪具体故障（含 TRL PR #6594 真实实现 bug：损失正常下降时梯度被破坏）；对照法院文件与监管申报的 50 个真实事件验证六类分类学：53% 可验证公共失败是静默的；失败预算框架把可接受失败率与用例风险等级绑定。
- 直接含义：测量基础设施是完整 AI 生命周期的正确性关切，而非仅评估时；数据、代码与分类学模式：https://github.com/priyanka25aug/llm-failure-taxonomy

## 正文

论文编号：arXiv:2608.02786v1（更新类型：new）。以下为摘要全文翻译。

AI 系统可以静默失败。失败通过训练循环、评估流水线与生产监控栈传播，直到下游危害使其可见。本文引入评估盲视（evaluation blindness）：当测量函数 M 对失败类 F 表现评估盲视时，它产生与健康状态无法区分的读数，而系统实际上正在失败，且没有辅助信号标记这一差距。该问题出现在文献分开处理的两个生命周期阶段。在训练时，奖励模型被欺骗、重要性采样校正被静默算错、基准污染夸大微调评估，而损失曲线看起来健康、梯度更新正常进行。在部署时，监控未能捕获六类生产失败，包括一个按结构定义 100% 静默的"运营"类别。我们提供一个形式化的可检测性谓词，统一两个阶段。四个训练时案例研究追踪具体故障，包括 TRL PR #6594 中的一个真实实现 bug：损失正常下降时梯度被破坏。对照法院文件与监管申报验证的 50 个真实事件的六类分类学发现，53% 的可验证公共失败是静默的。一个失败预算框架把可接受的失败率与用例的风险等级联系起来。直接的含义是：测量基础设施是完整 AI 生命周期的正确性关切，而不仅仅是在评估时。数据、代码与分类学模式可在 https://github.com/priyanka25aug/llm-failure-taxonomy 获取。

## 关键词

#评估盲视 #静默失败 #测量 #AI生命周期
