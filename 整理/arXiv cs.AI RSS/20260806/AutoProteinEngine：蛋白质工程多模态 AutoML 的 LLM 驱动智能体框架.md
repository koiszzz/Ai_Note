---
published: 20260806
title: "AutoProteinEngine：蛋白质工程多模态 AutoML 的 LLM 驱动智能体框架"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/AutoProteinEngine- A Large Language Model Driven Agent Framework for Multimodal AutoML in Protein En.md"
source_note: "[[信息源/arXiv cs.AI RSS/AutoProteinEngine- A Large Language Model Driven Agent Framework for Multimodal AutoML in Protein En]]"
source_sha256: 8add21d4661e06544a529783d27d497730797b254e23f500f4d4d6dfe6526dcd
original_url: "https://arxiv.org/abs/2411.04440"
processed: 2026-08-06
language: zh-CN

---

# AutoProteinEngine：蛋白质工程多模态 AutoML 的 LLM 驱动智能体框架

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Yungeng Liu, Zan Chen, Yu Guang Wang, Yiqing Shen
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2411.04440)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/AutoProteinEngine- A Large Language Model Driven Agent Framework for Multimodal AutoML in Protein En|查看原始文件]]

## 摘要

- 蛋白质工程对生物医学应用重要，但传统方法常低效且资源密集；深度学习（DL）模型虽有前景，其训练或实现仍对无专门计算专长的生物学家构成挑战。
- 本文提出 AutoProteinEngine（AutoPE），一个利用 LLM 进行蛋白质工程多模态自动化机器学习（AutoML）的智能体框架，创新地允许无 DL 背景的生物学家用自然语言与 DL 模型交互，降低蛋白质工程任务准入门槛。
- AutoPE 独特地集成 LLM 与 AutoML，处理蛋白质序列和图模态的模型选择、自动超参数优化和从蛋白质数据库的自动数据检索；通过两个真实世界蛋白质工程任务评估，相比传统零样本和手动微调方法实现显著性能改进。

## 正文

蛋白质工程对生物医学应用重要，但传统方法往往低效且资源密集。虽然深度学习（DL）模型已显示前景，它们的训练或实现仍对无专门计算专长的生物学家构成挑战。为弥合此差距，我们提出 AutoProteinEngine（AutoPE），一个利用大语言模型（LLM）进行蛋白质工程多模态自动化机器学习（AutoML）的智能体框架。AutoPE 创新地允许无 DL 背景的生物学家使用自然语言与 DL 模型交互，降低蛋白质工程任务的准入门槛。我们的 AutoPE 独特地集成 LLM 与 AutoML，处理蛋白质序列和图模态的模型选择、自动超参数优化以及从蛋白质数据库的自动数据检索。我们通过两个真实世界蛋白质工程任务评估 AutoPE，相比传统零样本和手动微调方法展示显著性能改进。通过弥合 DL 与生物学家领域专长之间的差距，AutoPE 使研究者无需广泛编程知识即可利用 DL。我们的代码可在此获取：https://github.com/tsynbio/AutoPE。

## 关键词

#蛋白质工程 #AutoML #LLM智能体 #生物信息学 #arXiv