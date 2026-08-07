---
published: 20260806
title: "FinReportBench：衡量和改进机构级财务报告生成"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/FinReportBench- Measuring and Improving Institution-Grade Financial Report Generation.md"
source_note: "[[信息源/arXiv cs.AI RSS/FinReportBench- Measuring and Improving Institution-Grade Financial Report Generation]]"
source_sha256: 700065bcea8fa24de2bd8bd174e5a163e8877dc313dba1ce25d972977a0fed25
original_url: "https://arxiv.org/abs/2608.04374"
processed: 2026-08-06
language: zh-CN

---

# FinReportBench：衡量和改进机构级财务报告生成

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Yinghao Tang, Tan Zhenwei, Yiyao Wang, Wanli Gu, Xiaolu Zhang, Jun Zhou, Wei Chen
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04374)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/FinReportBench- Measuring and Improving Institution-Grade Financial Report Generation|查看原始文件]]

## 摘要

- 大语言模型可生成流畅的财务分析，但流畅性本身不确立报告是否适合机构交付；本文引入 FinReportBench，一个专家接地基准，用于衡量和改进机构级财务报告生成。
- 专家审查揭示报告身份、机构组件、来源纪律和视觉交付方面的反复差距；通过专家偏序、多模态证据和决策边界审计推导 35 项评分标准，覆盖可交付性、报告身份和机构完整性。
- 从 10,000 条平衡中英财务研究源记录出发，策展 244 个双语任务，跨三个研究对象和两个输入层级；九个模型家族中，基本可交付性几乎饱和，报告身份和机构完整性仍是主要瓶颈；基准引导技能蒸馏将反复失败转化为可复用生成和自审约束，五个模型家族平均 G1 提高 33.85 点、G2 提高 13.83 点。

## 正文

大语言模型可生成流畅的财务分析，但流畅性本身不确立报告是否适合机构交付。我们引入 FinReportBench，一个专家接地基准，用于衡量和改进机构级财务报告生成。专家审查揭示报告身份、机构组件、来源纪律和视觉交付方面的反复差距。我们通过专家偏序、多模态证据和决策边界审计推导 35 项评分标准，覆盖可交付性、报告身份和机构完整性。从 10,000 条平衡中英财务研究源记录出发，我们策展 244 个双语任务，跨三个研究对象和两个输入层级。每个任务分离公共查询、重建研究轨迹和隐藏源包。三个独立评判者家族以接近上限的速率复现专家偏序，表明有界、可观察标准支持可靠评估。九个模型家族中，基本可交付性几乎饱和，而报告身份和机构完整性仍是主要瓶颈。最大跨模型差距涉及生成轨迹控制、信息密度和数据纪律，而非基本报告框架。然后我们使用基准引导技能蒸馏，将反复失败转化为可复用生成和自审约束。五个模型家族中，进化技能相对配对无技能运行平均改进 G1 33.85 点和 G2 13.83 点，同时保持每对的 G0。代码和基准工件可在此获取：https://github.com/MisterBrookT/finreportbench。

## 关键词

#财务报告 #生成 #基准 #技能蒸馏 #arXiv