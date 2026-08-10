---
published: 2026-08-07
title: "用教学适宜性指数评估与改进基于 LLM 的 AI 导师的教学契合度"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Evaluating and Improving Pedagogical Fit in LLM-Based AI Tutors with the Pedagogical Suitability Ind.md"
source_note: "[[信息源/arXiv cs.AI RSS/Evaluating and Improving Pedagogical Fit in LLM-Based AI Tutors with the Pedagogical Suitability Ind]]"
source_sha256: 13d54be8a9f5bec284a1e308ff92d6c7687d411aa8bcbc5bb7a9ac0a25c1c0cc
original_url: "https://arxiv.org/abs/2608.05411"
processed: 2026-08-07
language: zh-CN
---

# 用教学适宜性指数评估与改进基于 LLM 的 AI 导师的教学契合度

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Benjamin Barlog, Hudson Craig, Zedong Peng
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05411)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Evaluating and Improving Pedagogical Fit in LLM-Based AI Tutors with the Pedagogical Suitability Ind|查看原始文件]]

## 摘要

- 大语言模型（LLM）日益用作 AI 导师，但正确答案不总是教学上恰当的答案；课堂学习中，有效帮助不仅取决于正确性，还取决于响应是否匹配学习者当前基础、课程顺序与概念引入时机。
- 现有评估主要聚焦答案质量，使这种教学契合度未被充分衡量；提出教学适宜性指数（PSI）：六个理论知情子分数的复合指标，评估 LLM 生成的辅导响应与学习者就绪度及课程进展的对齐，并将 PSI 用作响应改进的结构化反馈信号。
- 用配对标准与缺陷提示在 240 个基于场景的评估中评估四个 LLM 导师（ChatGPT、Gemini、Gemma4、Qwen3），然后将 PSI 引导的再生成协议应用于 62 个弱表现案例。
- 四个被测模型间的基线差异总体温和（PSI 范围 0.557 至 0.638），开源权重与闭源模型在教学契合度上未显示清晰分离；在测试提示扰动下总体 PSI 基本稳定（Delta = -0.002），但出现子分数权衡；PSI 引导反馈大幅改进弱表现案例：62 例中 51 例改进（82.3%）；对 62 个 PSI 选择弱案例的聚焦人工评估提供初步证据，表明已识别弱点在教学上有意义，且许多 PSI 引导再生成对应人类判定改进。
- 结果提示学习者与课程感知的对齐对有效辅导的重要性可能超过模型类别本身，且此类对齐既可测量也可改进。

## 正文

大语言模型（LLMs）日益用作 AI 导师，但正确答案不总是教学上恰当的答案。在课堂学习中，有效的帮助不仅取决于正确性，还取决于响应是否匹配学习者的当前基础、课程顺序与概念引入时机。现有评估主要聚焦答案质量，使这种教学契合度未被充分衡量。我们提出教学适宜性指数（Pedagogical Suitability Index，PSI），一个六个理论知情子分数的复合指标，评估 LLM 生成的辅导响应与学习者就绪度及课程进展的对齐，并进一步将 PSI 用作响应改进的结构化反馈信号。我们使用配对标准与缺陷提示，在 240 个基于场景的评估中评估四个 LLM 导师（ChatGPT、Gemini、Gemma4 与 Qwen3），然后将 PSI 引导的再生成协议应用于 62 个弱表现案例。四个被测模型间的基线差异总体温和（PSI 范围：0.557 至 0.638），开源权重与闭源模型在教学契合度上未显示清晰分离。在测试的提示扰动下，总体 PSI 基本保持稳定（Delta = -0.002），尽管出现子分数权衡。更重要的是，PSI 引导反馈大幅改进了弱表现案例：62 例中 51 例改进（82.3%）。对 62 个 PSI 选择弱案例的聚焦人工评估提供了初步证据，表明已识别的弱点在教学上有意义，且许多 PSI 引导的再生成对应人类判定的改进。这些结果表明，学习者与课程感知的对齐对有效辅导可能比模型类别更重要，且此类对齐既可测量也可改进。

## 关键词

#AI导师 #教学契合度 #LLM评估 #教育技术
