---
published: 2018-03-07
title: "Reptile：可扩展的元学习算法"
source: "OpenAI News"
original_file: "信息源/OpenAI News/Reptile- A scalable meta-learning algorithm.md"
source_note: "[[信息源/OpenAI News/Reptile- A scalable meta-learning algorithm]]"
source_sha256: eb30d9c187f54ca2fb045658733be22f2e35df310692704776f778d80fd4a2a6
original_url: "https://openai.com/index/reptile"
processed: 2026-08-06
language: zh-CN

---

# Reptile：可扩展的元学习算法

> [!info] 来源信息
> - 数据源：OpenAI News
> - 作者：原始来源未提供
> - 发布时间：2018-03-07
> - 原文链接：[打开原文](https://openai.com/index/reptile)
> - Vault 原文件：[[信息源/OpenAI News/Reptile- A scalable meta-learning algorithm|查看原始文件]]

## 摘要

- 我们开发了一种简单的元学习算法 Reptile，通过反复采样任务、对其执行随机梯度下降。
- 并将初始参数更新为该任务上学到的最终参数；Reptile 是最短下降算法在元学习场景中的应用，数学上与只需对 SGD 或 Adam 等优化器黑盒访问的一阶 MAML 类似，计算效率和性能相当。

## 正文

我们开发了一种简单的元学习算法，名为 Reptile，它通过反复采样任务、在任务上执行随机梯度下降，并将初始参数更新为在该任务上学到的最终参数来工作。Reptile 是最短下降（Shortest Descent）算法在元学习场景中的应用，在数学上与一阶 MAML 相似（MAML 是著名的元学习算法的一个版本），只需对 SGD 或 Adam 等优化器进行黑盒访问，具有类似的计算效率和性能。

## 关键词

#OpenAI #Reptile #元学习 #算法