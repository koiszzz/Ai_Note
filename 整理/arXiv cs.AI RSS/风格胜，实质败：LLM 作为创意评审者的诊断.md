---
title: "风格胜，实质败：LLM 作为创意评审者的诊断"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Style Wins, Substance Loses- A Diagnosis of LLM-as-Judge in Idea Generation.md"
source_note: "[[信息源/arXiv cs.AI RSS/Style Wins, Substance Loses- A Diagnosis of LLM-as-Judge in Idea Generation]]"
source_sha256: dec0bb3e8b8bf71ecc20a6138ae2952e8b59f905ae1c659515a506cf5d26e5b7
original_url: "https://arxiv.org/abs/2608.01666"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# 风格胜，实质败：LLM 作为创意评审者的诊断

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Fengxian Ji、Yuke Li、Jingpu Yang 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.01666)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Style Wins, Substance Loses- A Diagnosis of LLM-as-Judge in Idea Generation|查看原始文件]]

## 摘要

- 提出 SciStyleBench，统一三组件基准，诊断与缓解基于 LLM 的创意评估中的风格偏差：SciStyleStage（三阶段评估环境，对固定科学内容施加受控风格扰动，覆盖 600 个科学创意与 15 种风格变体，每设置 9,000 个评估实例）；SciStyleMetrics（一组定量度量，包括风格偏差指数 SBI、实质识别率 SRR 与对抗胜率 AWR）；SciStyleExtractor（即插即用评估模块，通过预测风格类型与偏差把呈现风格与科学内容分离，评估风格意识是否降低风格偏差）。
- 实验显示直接 LLM 评审者对写作风格敏感且难以区分科学实质；SciStyleExtractor 把 SBI 从 0.566 降至 0.501，同时把 SRR 与 AWR 从 0.504 与 0.554 提升到 0.759 与 0.899。
- 结果提示稳健创意评估需要风格变化不变性，同时不牺牲对科学实质的敏感性。

## 正文

论文编号：arXiv:2608.01666v2（更新类型：replace-cross）。以下为摘要全文翻译。

然而，这些评审者是否真正评估创意的科学实质，还是受表层风格呈现影响，仍是开放问题。为回答这一问题，我们提出 SciStyleBench，一个用于诊断与缓解基于 LLM 的创意评估中风格偏差的统一三组件基准：（i）SciStyleStage，一个三阶段评估环境，在三种设置（无上下文、固定域上下文与开放域检索上下文）中对固定科学内容施加受控风格扰动，覆盖 600 个科学创意与 15 种风格变体，每设置 9,000 个评估实例；（ii）SciStyleMetrics，一组定量度量，包括风格偏差指数（SBI）、实质识别率（SRR）与对抗胜率（AWR），刻画风格变化如何影响评分稳定性、实质判别与排名鲁棒性；（iii）SciStyleExtractor，一个即插即用评估模块，通过先预测风格类型与偏差、再进行风格条件评估，把呈现风格与科学内容分离，使我们能够评估风格意识是否降低风格偏差。SciStyleBench 上的实验表明，直接 LLM 评审者仍对写作风格敏感，难以区分科学实质。相比之下，SciStyleExtractor 把 SBI 从 0.566 降至 0.501，同时把 SRR 与 AWR 从 0.504 与 0.554 提升到 0.759 与 0.899。这些结果表明，稳健的创意评估需要风格变化的不变性，同时不牺牲对科学实质的敏感性。总体而言，SciStyleBench 为识别、量化与缓解科学创意评估中的风格偏差提供系统框架。

## 关键词

#LLM评审 #风格偏差 #创意评估 #科学实质
