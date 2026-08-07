---
published: 2026-08-06
title: ReCodeAgent：语言无关的大型代码库翻译与验证多智能体工作流
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/ReCodeAgent- A Multi-agent Workflow for Language-Agnostic Translation and Validation of Large-Scale .md
source_note: "[[信息源/arXiv cs.LG RSS/ReCodeAgent- A Multi-agent Workflow for Language-Agnostic Translation and Validation of Large-Scale ]]"
source_sha256: c990cb8ef7e4dfc906da78cb0440f000c8d5f2317adc8fd1a285cc54bd3ce6a1
original_url: https://arxiv.org/abs/2604.07341
processed: 2026-08-07
language: zh-CN
---

# ReCodeAgent：语言无关的大型代码库翻译与验证多智能体工作流

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2604.07341)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/ReCodeAgent- A Multi-agent Workflow for Language-Agnostic Translation and Validation of Large-Scale |查看原始文件]]

## 摘要

- 提出 ReCodeAgent，首个在多种编程语言上实现高翻译成功率的自主多智能体代码库级代码翻译与验证方法，用户只需提供源语言项目并指定目标语言。
- 在 118 个真实项目（平均 1,975 行代码、43 个翻译单元，覆盖 6 种 PL 与 4 个 PL 对）上，将测试通过率提高 60.8%，平均成本 15.3 美元。
- 多智能体架构对性能至关重要：转为单智能体后测试通过率平均下降 40.4%，轨迹变长 28%。

## 正文

大多数代码库级代码翻译与验证技术都只在单一的源-目标编程语言（PL）对上评估，因为适配新的 PL 对需要复杂的工程工作。编程智能体可以在代码库级翻译与验证中实现 PL 无关性：它们可以跨多种 PL 合成代码，并自主使用各 PL 分析特有的现有工具。然而，现有最先进方法尚未提供完全自主的智能体方案，用于大规模程序的代码库级代码翻译与验证。

本文提出 ReCodeAgent，一种用于语言无关的代码库级代码翻译与验证的自主多智能体方法。用户只需以源 PL 提供项目并指定目标 PL，ReCodeAgent 即可自动翻译并验证整个代码库。ReCodeAgent 是第一个在多种 PL 上实现高翻译成功率的技术。我们比较了 ReCodeAgent 与四种替代的神经符号与智能体方法，翻译了 118 个真实项目，每个项目平均 1,975 行代码、43 个翻译单元，涵盖 6 种 PL 和 4 个 PL 对。结果表明，ReCodeAgent 在翻译正确性上一致优于先前技术，在真值测试上将测试通过率提高 60.8%，平均成本为 15.3 美元。我们还对 ReCodeAgent 的轨迹进行了以过程为中心的分析，以确认其过程效率。最后，我们考察设计选择（多智能体 vs 单智能体架构）如何影响 ReCodeAgent 的性能：平均而言，测试通过率下降 40.4%，轨迹变长 28% 且持续低效。

## 关键词

#代码翻译 #多智能体 #代码库级 #编程语言无关 #程序验证
