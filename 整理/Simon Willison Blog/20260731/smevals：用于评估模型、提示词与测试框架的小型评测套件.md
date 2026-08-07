---
published: 2026-07-31
title: smevals：用于评估模型、提示词与测试框架的小型评测套件
source: Simon Willison Blog
original_file: 信息源/Simon Willison Blog/smevals - a small eval suite for evaluating models, prompts, and harnesses.md
source_note: "[[信息源/Simon Willison Blog/smevals - a small eval suite for evaluating models, prompts, and harnesses]]"
source_sha256: 916b5291b8ac9d269a2db7469db3f4df783b4f73a688c15d754a821163862cad
original_url: https://simonwillison.net/2026/Jul/31/smevals/#atom-everything
processed: 2026-08-07
language: zh-CN
---

# smevals：用于评估模型、提示词与测试框架的小型评测套件

> [!info] 来源信息
> - 数据源：Simon Willison Blog
> - 发布时间：2026-07-31
> - 原文链接：[打开原文](https://simonwillison.net/2026/Jul/31/smevals/#atom-everything)
> - Vault 原文件：[[信息源/Simon Willison Blog/smevals - a small eval suite for evaluating models, prompts, and harnesses|查看原始文件]]

## 摘要

- smevals 是 Simon Willison 与 Jesse Vincent 的 Prime Radiant 应用 AI 研究实验室合作开发的评测框架，用于回答关于不同模型能力的问题：在不同模型配置上运行小型评测套件并给结果打分。
- 快速上手只需两步：让编程智能体运行 `uvx smevals docs` 了解工具（会输出 README），然后让它构建评测套件；评测是一个包含若干 YAML 文件的目录，可用 `uvx smevals run path-to-eval/ -m gpt-5.5 -m claude-opus-4.6` 运行。
- 运行与打分分离：`uvx smevals grade` 按自定义检查打分，`uvx smevals serve` 在本地 Web 服务器浏览结果，`smevals build` 生成可任意托管的静态 HTML 报告。
- 项目耗时最多的部分是术语设计：eval（评测）由 tasks（任务）组成，按 configs（配置）运行，产生 runs（运行）；评分由 grader（评分器）执行 checks（检查），复杂检查可交给自定义 checkers（检查器）脚本，甚至调用其他模型。
- 这是作者对评测方案的第三次迭代，"感觉这次对了"，计划未来扩展并用于自己的项目。

## 正文

我一直在与 Jesse Vincent 的 [Prime Radiant](https://primeradiant.com) 应用 AI 研究实验室合作，构建这个评测框架，以帮助回答关于不同模型能力的问题。

成果就是 [smevals](https://github.com/prime-radiant-inc/smevals)，一个用于在不同模型配置上运行小型评测套件并为结果打分的新工具。

这篇[博客文章](https://primeradiant.com/blog/2026/smevals.html)详细描述了该工具。这里给出 10 秒版本：

1. 告诉你的编程智能体运行 `uvx smevals docs` 来了解这个工具（这会输出 README）
2. 然后让它为你构建一个评测套件

一旦创建了评测——其形式是一个包含若干 YAML 文件的目录——你就可以像这样针对模型运行它：

```bash
uvx smevals run path-to-eval/ -m gpt-5.5 -m claude-opus-4.6
```

运行与打分操作是分开的——你可以（对照你定义的一组检查）用以下命令给运行打分：

```bash
uvx smevals grade path-to-eval/
```

然后你可以启动一个 localhost Web 服务器来浏览结果：

```bash
uvx smevals serve path-to-eval/
```

或者运行 `smevals build` 命令，把该报告构建为静态 HTML，之后可以托管到任何地方。这是[一个示例](https://static.simonwillison.net/static/2026/smevals-haiku-build/#/haiku)，展示了我构建的一个用于评估模型写俳句能力的评测套件（界面包括排行榜、近期运行与评分列表、标签通过率、被测的俳句提示词以及评分器细节，通过阈值为 0.8）。

这个项目最耗时的部分是弄清楚它的术语！以下是我最终确定的方案，引用自公告：

> - 一个 **eval（评测）** 是一组挑战的集合，旨在回答关于某个模型的问题，例如：那个模型生成 SVG 有多好？
> - 每个评测是若干 **tasks（任务）** 的集合。一个任务是一个具体的挑战，例如"生成一张鹈鹕骑自行车的 SVG"。
> - 运行评测时，你会针对一个或多个 **configs（配置）** 运行。每个配置指定要评估的模型，但也可能包含其他要测试的参数，如不同的系统提示词、模型参数或智能体 harness（测试框架）。
> - 一次 **run（运行）** 记录特定配置执行特定任务时发生的情况。**runner（运行器）** 是执行运行的脚本。
> - 收集到一次或多次运行后，你需要评估结果，看模型（或配置）表现如何。这由 **grader（评分器）** 完成，它产生一个 **grade（评分）**。
> - 每个评分器执行一系列 **checks（检查）**。这些可以是简单操作，比如检查输出中是否包含特定字符串，或确认输出是有效的 XML。它们也可以是更复杂的自定义操作（实现为称为 **checkers（检查器）** 的脚本），包括使用其他模型来回答关于这次运行的问题。

我已经尝试了好几年，想找到一种我喜欢的评测方法。`smevals` 是我这个想法的第三次迭代，我觉得这次对了。我期待未来进一步扩展它，并把它用在我自己的一些项目上。

## 关键词

#smevals #评测 #LLM #项目
