---
published: 2026-08-06
title: FinReportBench：衡量与改进机构级财务报告生成
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/FinReportBench- Measuring and Improving Institution-Grade Financial Report Generation.md
source_note: "[[信息源/arXiv cs.CL RSS/FinReportBench- Measuring and Improving Institution-Grade Financial Report Generation]]"
source_sha256: 12a27fe722d0c1a742b522608ca1b8bcbde63276d7a7aa0bbb34971ac693e318
original_url: https://arxiv.org/abs/2608.04374
processed: 2026-08-07
language: zh-CN
---

# FinReportBench：衡量与改进机构级财务报告生成

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04374)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/FinReportBench- Measuring and Improving Institution-Grade Financial Report Generation|查看原始文件]]

## 摘要

- 引入专家锚定的 FinReportBench 基准，通过专家偏序、多模态证据和决策边界审计推导 35 项评分细则，覆盖可交付性、报告身份与机构完整性。
- 从 10,000 条均衡中英文金融研究记录精选 244 个双语任务；三个独立评审家族以接近天花板比例重现专家偏序，有界可观察的标准支持可靠评估。
- 九个模型家族中基本可交付性几乎饱和，报告身份与机构完整性仍是主要瓶颈；基准引导的技能蒸馏在五个模型家族上将平均 G1 提高 33.85 分、G2 提高 13.83 分且保持 G0 不变。

## 正文

本文编号：arXiv:2608.04374v1（公告类型：new），以下为摘要全文翻译。

大语言模型能够生成流畅的财务分析，但流畅性本身并不足以证明一份报告适合机构交付。我们引入 FinReportBench，一个专家锚定的基准，用于衡量和改进机构级财务报告生成。专家评审揭示了报告身份、机构组件、来源纪律和视觉交付方面反复出现的问题。我们通过专家偏序、多模态证据和决策边界审计推导出一份 35 项评分细则，涵盖可交付性、报告身份和机构完整性。从 10,000 条均衡的中英文金融研究源记录出发，我们精选出 244 个双语任务，覆盖三个研究对象和两个输入层级。每个任务将公开查询、重建的研究轨迹和隐藏的源数据包分开。三个独立的评审者家族以接近天花板的比例重现专家偏序，表明有界、可观察的标准支持可靠的评估。在九个模型家族中，基本可交付性几乎饱和，而报告身份和机构完整性仍是主要瓶颈。最大的跨模型差距涉及生成轨迹控制、信息密度和数据纪律，而非基本的报告框架。随后我们使用基准引导的技能蒸馏，将反复出现的失败转化为可复用的生成与自审约束。在五个模型家族中，进化后的技能在配对的免技能运行基础上将平均 G1 提高 33.85 分、平均 G2 提高 13.83 分，同时每一对都保持 G0 不变。代码和基准工件可在 https://github.com/MisterBrookT/finreportbench 获取。

## 关键词

#FinReportBench #财务报告生成 #LLM评估 #技能蒸馏 #机构级
