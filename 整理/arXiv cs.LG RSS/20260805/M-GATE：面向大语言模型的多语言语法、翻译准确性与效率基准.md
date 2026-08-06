---
published: 2026-08-05
title: "M-GATE：面向大语言模型的多语言语法、翻译准确性与效率基准"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/M-GATE- Multilingual Grammar, Accuracy in Translation, and Efficiency Benchmark for Large Language M.md"
source_note: "[[信息源/arXiv cs.LG RSS/M-GATE- Multilingual Grammar, Accuracy in Translation, and Efficiency Benchmark for Large Language M.]]"
source_sha256: 7be02689ddaa7c9e1b6bce58e4a3b38cc51f1100f693a3fddfcd60d7a2b8caf3
original_url: "https://arxiv.org/abs/2608.03803"
processed: 2026-08-05
language: zh-CN
---

# M-GATE：面向大语言模型的多语言语法、翻译准确性与效率基准

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Tomáš Burkert、Angelika Peljak-Łapińska、David Zelený
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03803)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/M-GATE- Multilingual Grammar, Accuracy in Translation, and Efficiency Benchmark for Large Language M.|查看原始文件]]

## 摘要

- 多语言语言模型部署在上百种语言上，但大多数基准只测试模型能否在某种语言中执行任务，而非是否掌握该语言本身，混淆了流利度与熟练度。
- 引入 M-GATE（多语言语法、翻译准确性与效率），一个横跨 30 种类型多样语言（从高资源到低资源）的语言熟练度基准，包含三项任务：
- 语法错误检测：面向语言学家人工构造、对抗性选择的句子，聚焦困难的语言特定现象；
- 往返翻译：把共享英语源文跨 29 种目标语言翻译，由经专业标注者验证的三提供商 LLM 评判组评分；
- 补充的分词器效率度量。
- 在 80 多种配置中评估超过 50 个模型：流利度与熟练度明显分离——翻译出色的模型在对抗性语法项上接近随机水平，最佳模型马修斯相关系数（MCC）仅 0.36，且错误系统性偏向漏报（接受不合语法文本而非误报）。
- 翻译质量紧密跟随语言在预训练数据中的份额（与 log Common Crawl 份额 r=0.86），产生陡峭的低资源惩罚，该惩罚随模型迭代发布持续收窄；启用推理可靠地改善翻译，但对错误检测的影响较小、对某些模型甚至为负，因此最佳配置因任务而异。
- 为抵御污染，测试项保持私有，由持续更新的公共排行榜支撑，并发布示例（https://m-gate.ai）。

## 正文

论文编号：arXiv:2608.03803v1（更新类型：cross）。以下为摘要全文翻译。

多语言语言模型部署在百余种语言上，然而大多数基准测试的是模型能否在某种语言中执行任务，而非是否掌握该语言本身，把流利度与熟练度混为一谈。我们引入 M-GATE（Multilingual Grammar, Accuracy in Translation, and Efficiency，多语言语法、翻译准确性与效率），一个横跨 30 种类型多样语言（从高资源到低资源）的语言熟练度基准。M-GATE 包含三项任务：面向语言学家人工构造、对抗性选择句子的语法错误检测，这些句子聚焦困难、语言特定的现象；把共享英语源文跨 29 种目标语言进行往返翻译，由经专业标注者验证的三提供商 LLM 评判组评分；以及一个补充的分词器效率度量。我们在 80 多种配置中评估了超过 50 个模型。流利度与熟练度明显分离：翻译出色的模型在对抗性语法项上接近随机水平，最佳模型的马修斯相关系数（MCC）仅为 0.36，且它们的错误系统性偏向漏报——接受不合语法的文本而非误报。翻译质量紧密跟随语言在预训练数据中的份额（与 log Common Crawl 份额 r = 0.86），产生陡峭的低资源惩罚，但这种惩罚随模型迭代发布持续收窄。启用推理可靠地改善翻译，而它对错误检测的影响较小、对某些模型甚至为负，因此最佳配置因任务而异。为抵御污染，测试项保持私有，由一个持续更新的公共排行榜支撑，并发布示例（https://m-gate.ai）。

## 关键词

#多语言基准 #语法错误检测 #翻译评估 #低资源语言 #LLM评估
