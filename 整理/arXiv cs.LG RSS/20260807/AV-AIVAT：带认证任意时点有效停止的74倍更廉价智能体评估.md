---
published: 2026-08-07
title: "AV-AIVAT：带认证任意时点有效停止的 74 倍更廉价智能体评估"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/AV-AIVAT- 74x Cheaper Agent Evaluation with Certified Anytime-Valid Stopping in Imperfect-Informatio.md"
source_note: "[[信息源/arXiv cs.LG RSS/AV-AIVAT- 74x Cheaper Agent Evaluation with Certified Anytime-Valid Stopping in Imperfect-Informatio]]"
source_sha256: 96be477d71000676bd5987583832d5d03190ac02119256aef7a4b7aad38b932f
original_url: "https://arxiv.org/abs/2608.06362"
processed: 2026-08-07
language: zh-CN
---

# AV-AIVAT：带认证任意时点有效停止的 74 倍更廉价智能体评估

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Boning Li, Yu Chen, Longbo Huang
> - **发布时间**：2026-08-07
> - **分类**：cs.GT
> - **原文**：[打开链接](https://arxiv.org/abs/2608.06362)

## 摘要

- AIVAT 通过条件均值零校正将不完美信息博弈的方差中位数降低 54 倍（15 种 LLM 智能体配置、71439 手 HUNL），但未说明何时停止。
- 将 AIVAT 与持续监测的置信序列（CS）结合为任意时点有效 AIVAT（AV-AIVAT）：在线价值模型仅从历史对局学习，任何对局都不为自己的校正计分。
- 名义 95% 水平、目标精度 ±1 大盲注下，原始结局中位数需 74 倍于 AIVAT 校正结局的手数才能在渐近 CS 下停止。
- 精确有限样本认证用经验-伯恩斯坦 CS（EB-CS），在 Leduc 扑克上结构性确立有界性；AV-AIVAT 将方差缩减转为高效可审计的早停，并分离渐近筛选与精确认证。

## 正文

判定两个智能体谁更强意味着持续对局直到技巧胜过运气，而每局都要花钱、花模型推理或专家时间。由于所需对局数未知，固定预算评估要么在结果已定时继续付费，要么在无法区分智能体时停止；而用普通置信区间做朴素可选停止会破坏声明的置信水平。本文使评估在证据充分时立即停止且保证不变。动作知情价值评估工具（AIVAT）通过条件均值零校正降低不完美信息博弈中的方差，在 15 种 LLM 智能体配置（覆盖 71439 手对局的无限制单挑无限注德州扑克 HUNL）中位数降低 54 倍，但未说明何时停止。研究将 AIVAT 与持续监测的置信序列（CS）结合为任意时点有效 AIVAT（AV-AIVAT），其在线价值模型仅从历史对局学习，任何对局都不为自己的校正计分。在名义 95% 水平与 ±1 大盲注的目标精度下，原始结局中位数需 74 倍于 AIVAT 校正结局的手数才能在渐近 CS（AsympCS）下停止。精确有限样本认证使用经验-伯恩斯坦 CS（EB-CS），需要独立论证的校正收益界。研究在 Leduc 扑克上结构性确立该界，并刻画由 CS 下注上限与该界设定的宽度下限——它决定方差增益中有多少转为更早停止；描述性 HUNL EB-CS 运行显示停止时间比率中位数为 1.37 倍。AV-AIVAT 将方差缩减转为高效、可审计的早停，同时分离渐近筛选与精确认证，使评估能在证据充分的那一刻停止，并将重查该时刻结论所需的一切交给第三方。

## 关键词

智能体评估、方差缩减、置信序列、任意时点有效推断、博弈
