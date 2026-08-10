---
published: 2026-08-07
title: "CT Open：面向临床试验结果预测开放挑战的开放访问、无污染、实时平台"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/CT Open- An Open-Access, Uncontaminated, Live Platform for the Open Challenge of Clinical Trial Outc.md"
source_note: "[[信息源/arXiv cs.AI RSS/CT Open- An Open-Access, Uncontaminated, Live Platform for the Open Challenge of Clinical Trial Outc]]"
source_sha256: ae45c789e6c140d5b71dbd32624f8ec11b4d7fb735d3dbcdff008e36ad876506
original_url: "https://arxiv.org/abs/2604.16742"
processed: 2026-08-07
language: zh-CN
---

# CT Open：面向临床试验结果预测开放挑战的开放访问、无污染、实时平台

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Jianyou Wang, Youze Zheng, Longtian Bao, Hanyuan Zhang, Qirui Zheng, Yuhan Chen, Yang Zhang, Matthew Feng, Maxim Khan, Aditya K. Sehgal, Christopher D. Rosin, Ramamohan Paturi, Umber Dube, Leon Bergen
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2604.16742)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/CT Open- An Open-Access, Uncontaminated, Live Platform for the Open Challenge of Clinical Trial Outcome|查看原始文件]]

## 摘要

- 科学家长期寻求在真实世界事件发生前准确预测其结果；论文通过临床试验结果预测（即使对领域专家也是高风险开放挑战）研究 AI 系统能否更可靠地做到。
- 引入 CT Open：开放访问实时平台，每年运行四个挑战，任何人都可提交预测；平台评估那些提交时结果尚未公开、之后才公开的试验。
- 判断试验结果在互联网上是否公开出人意料地困难：官方注册表可能滞后数年，而首次提及可能出现在不起眼的文章中；为此提出新颖的全自动去污染流水线，用迭代 LLM 驱动的网络搜索识别试验结果的最早提及，并经人类专家标注验证质量与准确性。
- 平台流水线确保每个被评估试验在预测做出时均无公开报告结果，参与者可使用任何方法与任何数据源；论文发布训练集与两个带时间戳的测试基准（2025 冬季与 2025 夏季），相信 CT Open 可成为推进事前预测真实世界结果 AI 研究的中心枢纽，同时支持生物医学研究并改进临床试验设计。

## 正文

科学家长期寻求准确预测真实世界事件发生前的结果。AI 系统能更可靠地做到吗？我们通过临床试验结果预测来研究这一问题，这是一个即使对领域专家也是高风险的开放挑战。我们引入 CT Open，一个开放访问、实时的平台，每年将运行四个挑战。任何人都可以为每个挑战提交预测。CT Open 在那些提交时结果尚未公开、但之后才公开的试验上评估提交。确定试验结果在互联网上某个日期之前是否公开出人意料地困难。官方注册表上公布的结果可能滞后数年，而首次提及可能出现在不起眼的文章中。为解决这一问题，我们提出一个新颖的、完全自动化的去污染流水线，使用迭代的 LLM 驱动的网络搜索识别试验结果的最早提及。我们通过人类专家标注验证流水线的质量与准确性。由于 CT Open 的流水线确保每个被评估的试验在预测做出时没有公开报告的结果，它允许参与者使用任何方法论与任何数据源。在本文中，我们发布一个训练集与两个带时间戳的测试基准：2025 年冬季与 2025 年夏季。我们相信 CT Open 可以成为推进 AI 事前预测真实世界结果研究的中心枢纽，同时为生物医学研究提供信息并改进临床试验设计。CT Open 平台托管于 https://ct-open.net/。

## 关键词

#临床试验 #结果预测 #去污染 #开放平台
