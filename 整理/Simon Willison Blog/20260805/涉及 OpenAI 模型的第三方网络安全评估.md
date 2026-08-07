---
published: 2026-08-05
title: 涉及 OpenAI 模型的第三方网络安全评估
source: Simon Willison Blog
original_file: 信息源/Simon Willison Blog/Third-party cyber evaluations involving OpenAI models.md
source_note: "[[信息源/Simon Willison Blog/Third-party cyber evaluations involving OpenAI models]]"
source_sha256: 4d667e3b8214d6301f004a0e6d4a5e45a95986b56dadec017a855976111a02e8
original_url: https://simonwillison.net/2026/Aug/5/third-party-cyber-evaluations/#atom-everything
processed: 2026-08-07
language: zh-CN
---

# 涉及 OpenAI 模型的第三方网络安全评估

> [!info] 来源信息
> - 数据源：Simon Willison Blog
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://simonwillison.net/2026/Aug/5/third-party-cyber-evaluations/#atom-everything)
> - Vault 原文件：[[信息源/Simon Willison Blog/Third-party cyber evaluations involving OpenAI models|查看原始文件]]

## 摘要

- 又一起"意外网络安全攻击"事件，Simon Willison 为此专门建了 accidental-cyberattacks 标签来跟踪。
- OpenAI 的博文同时涉及英国 AI 安全研究所的攻击事件（见作者前一篇博文）和另一起由外部测试伙伴 Irregular 引发的攻击：其运行"夺旗"式评估本应与互联网隔离，但测试环境配置错误让模型能访问公共互联网。
- 其中一次测试里，CTF 挑战的虚构目标名称碰巧与一个真实域名重合，模型把真实网站误当作模拟环境的一部分加以利用；Irregular 同样出现在 Anthropic 的报告中——他们正是托管配置错误的评估环境、让 Claude 在部分测试中获得实时互联网访问的一方。

## 正文

而且又是一件！我不得不创建一个 [accidental-cyberattacks 标签](https://simonwillison.net/tags/accidental-cyberattacks/)来跟踪它们！

OpenAI 的这篇[博文](https://openai.com/index/third-party-cyber-evaluations-involving-openai-models/)同时涵盖了英国 AI 安全研究所的攻击事件（见[我之前的博文](https://simonwillison.net/2026/Aug/5/incident-report/)）以及另一起由 [Irregular](https://www.irregular.com) 促成的攻击：

> Irregular 是我们的外部网络安全测试合作伙伴之一，当时正在运行旨在与互联网隔离的"夺旗"式评估，但一次测试环境配置错误让模型得以访问公共互联网。[……]
>
> 在一次测试中，CTF 挑战的虚构目标名称碰巧与一个真实域名重合。由于测试环境被错误地连接到了互联网，模型利用了一个真实网站，误以为它是模拟环境的一部分。

Irregular 也出现在 [Anthropic 的报告中](https://www.anthropic.com/news/investigating-incidents-cybersecurity-evals)——正是他们托管了那个配置错误的评估环境，让 Claude 在其中一些测试中获得了实时互联网访问。

## 关键词

#安全 #OpenAI #意外网络攻击 #LLM #AI安全
