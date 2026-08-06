---
published: 2026-08-05
title: "当效率变成脆弱：利用自适应 UAV 跟踪中的动态路由漏洞"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/When Efficiency Becomes Fragility- Exploiting Dynamic Routing Vulnerabilities in Adaptive UAV Tracki.md"
source_note: "[[信息源/arXiv cs.AI RSS/When Efficiency Becomes Fragility- Exploiting Dynamic Routing Vulnerabilities in Adaptive UAV Tracki]]"
source_sha256: 817c5c81afbb57f54edfc77319865bed8cf61dc09d96e73c7d253d9ef3427d5b
original_url: "https://arxiv.org/abs/2608.03902"
processed: 2026-08-05
language: zh-CN
---

# 当效率变成脆弱：利用自适应 UAV 跟踪中的动态路由漏洞

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Shaofeng Liang、Runwei Guan、Wenshuo Chen 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03902)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/When Efficiency Becomes Fragility- Exploiting Dynamic Routing Vulnerabilities in Adaptive UAV Tracki|查看原始文件]]

## 摘要

- 揭示自适应跟踪网络背后计算按需灵活性中的关键结构缺陷：计算路径决策的 Lipschitz 奇异性——在离散跳层决策边界处局部 Lipschitz 常数无界；该数学不连续使自适应跟踪网络固有地不稳定：微小输入扰动可在门控模块被放大，引起推理拓扑的剧烈变化。
- UAV 平台资源约束驱动空中跟踪范式转变：从追求性能转向平衡准确率与效率；利用输入依赖动态路由架构的自适应 Transformer 跟踪器成为该挑战的代表性解决方案。
- 在自适应跟踪架构语境中形式化该奇异性，并首次把它识别为可直接利用的新攻击面——揭示此前被忽视、高度脆弱的拓扑路径空间攻击面；提出对抗路径反转（API）框架：生成不可感知扰动精确操纵门控决策，迫使推理进入改变的计算路径；原始与反转路径间的严重不一致瓦解模型表示能力。
- 最先进自适应跟踪器的大量实验显示 API 取得更优扰动隐蔽性、更有效攻击与更快推理速度——为动态跟踪网络安全分析打开新维度，为构建未来稳健自适应跟踪架构提供理论警告。

## 正文

论文编号：arXiv:2608.03902v1（更新类型：new）。以下为摘要全文翻译。

UAV 平台上的资源约束驱动了空中跟踪的范式转变：从追求性能转向平衡准确率与效率。利用输入依赖动态路由架构的自适应 Transformer 跟踪器已成为这一挑战的代表性解决方案。然而，我们揭示这种计算按需灵活性背后隐藏着一个关键结构缺陷：计算路径决策的 Lipschitz 奇异性——在离散跳层决策边界处具有无界的局部 Lipschitz 常数。这种数学不连续使自适应跟踪网络固有地不稳定：微小输入扰动可以在门控模块被放大，引起推理拓扑的剧烈变化。我们在自适应跟踪架构的语境中形式化这一奇异性，并首次把它识别为可直接利用的新攻击面。这一洞察揭示了一个此前被忽视、高度脆弱的拓扑路径空间攻击面。基于此，我们提出对抗路径反转（Adversarial Path-Inversion，API）框架。API 生成不可感知的扰动，精确操纵门控决策，迫使推理进入改变的计算路径。原始与反转路径之间的严重不一致瓦解了模型的表示能力。在最先进自适应跟踪器上的大量实验表明，API 取得更优的扰动隐蔽性、更有效的攻击与更快的推理速度。本工作为动态跟踪网络的安全分析打开新维度，并为未来构建稳健的自适应跟踪架构提供理论警告。

## 关键词

#UAV跟踪 #动态路由 #对抗攻击 #Lipschitz奇异性
